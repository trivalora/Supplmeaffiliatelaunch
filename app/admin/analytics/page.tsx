"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// ===========================================
// Types
// ===========================================
interface AnalyticsSummary {
  period: string;
  totals: {
    events: number;
    sessions: number;
    pageviews: number;
    affiliate_clicks: number;
    unique_visitors: number;
  };
  funnel: {
    supplement_views: number;
    product_views: number;
    affiliate_clicks: number;
    conversion_rate: string;
  };
  top_supplements: Array<{
    supplement: string;
    clicks: number;
    views: number;
    conversion_rate: string;
  }>;
  top_retailers: Array<{
    retailer_slug: string;
    clicks: number;
    revenue: number;
    avg_commission: number;
  }>;
  traffic_sources: Array<{
    utm_source: string;
    sessions: number;
    clicks: number;
    conversion_rate: string;
  }>;
  device_breakdown: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
}

interface AffiliateClick {
  click_id: string;
  product_name: string;
  brand: string;
  supplement_slug: string;
  retailer_slug: string;
  price: number;
  commission_status: string | null;
  commission_amount: number | null;
  created_at: string;
}

// ===========================================
// Component
// ===========================================
export default function AnalyticsDashboard() {
  const [period, setPeriod] = useState<"24h" | "7d" | "30d" | "90d">("7d");
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null);
  const [clicks, setClicks] = useState<AffiliateClick[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch analytics summary
  useEffect(() => {
    fetchAnalytics();
  }, [period]);

  async function fetchAnalytics() {
    setLoading(true);
    setError(null);

    try {
      const [summaryRes, clicksRes] = await Promise.all([
        fetch(`/api/analytics/summary?period=${period}`),
        fetch(`/api/analytics/affiliate-clicks?limit=50`),
      ]);

      if (!summaryRes.ok || !clicksRes.ok) {
        throw new Error("Failed to fetch analytics data");
      }

      const summaryData = await summaryRes.json();
      const clicksData = await clicksRes.json();

      setSummary(summaryData);
      setClicks(clicksData.clicks || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      console.error("Failed to fetch analytics:", err);
    } finally {
      setLoading(false);
    }
  }

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  // Format number
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Loading state
  if (loading) {
    return (
      <div className="p-8 space-y-6">
        <div className="flex justify-between items-center">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-10 w-48" />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-red-600">
              Error Loading Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{error}</p>
            <Button onClick={fetchAnalytics} className="mt-4">
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // No data state
  if (!summary) {
    return (
      <div className="p-8">
        <Card>
          <CardHeader>
            <CardTitle>No Data Available</CardTitle>
          </CardHeader>
          <CardContent>
            <p>No analytics data found for the selected period.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Track performance, conversions, and revenue
          </p>
        </div>
        <div className="flex gap-2">
          {(["24h", "7d", "30d", "90d"] as const).map((p) => (
            <Button
              key={p}
              variant={period === p ? "default" : "outline"}
              onClick={() => setPeriod(p)}
              size="sm"
            >
              {p === "24h" ? "Last 24h" : `Last ${p.replace("d", " days")}`}
            </Button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatNumber(summary.totals.sessions)}
            </div>
            <p className="text-xs text-muted-foreground">
              {formatNumber(summary.totals.unique_visitors)} unique visitors
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatNumber(summary.totals.pageviews)}
            </div>
            <p className="text-xs text-muted-foreground">
              {(summary.totals.pageviews / summary.totals.sessions).toFixed(1)}{" "}
              pages/session
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Affiliate Clicks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatNumber(summary.totals.affiliate_clicks)}
            </div>
            <p className="text-xs text-muted-foreground">
              {summary.funnel.conversion_rate} conversion rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(
                summary.top_retailers.reduce((sum, r) => sum + r.revenue, 0)
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {formatCurrency(
                summary.top_retailers.reduce((sum, r) => sum + r.revenue, 0) /
                  summary.totals.affiliate_clicks || 0
              )}{" "}
              per click
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="funnel" className="space-y-4">
        <TabsList>
          <TabsTrigger value="funnel">Funnel</TabsTrigger>
          <TabsTrigger value="supplements">Supplements</TabsTrigger>
          <TabsTrigger value="retailers">Retailers</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="clicks">Recent Clicks</TabsTrigger>
        </TabsList>

        {/* Funnel Tab */}
        <TabsContent value="funnel" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Funnel</CardTitle>
              <CardDescription>
                Track user journey from supplement page to affiliate click
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      Supplement Views
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {formatNumber(summary.funnel.supplement_views)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-primary h-4 rounded-full"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Product Views</span>
                    <span className="text-sm text-muted-foreground">
                      {formatNumber(summary.funnel.product_views)} (
                      {(
                        (summary.funnel.product_views /
                          summary.funnel.supplement_views) *
                        100
                      ).toFixed(1)}
                      %)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-primary h-4 rounded-full"
                      style={{
                        width: `${
                          (summary.funnel.product_views /
                            summary.funnel.supplement_views) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      Affiliate Clicks
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {formatNumber(summary.funnel.affiliate_clicks)} (
                      {summary.funnel.conversion_rate})
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-green-600 h-4 rounded-full"
                      style={{
                        width: `${
                          (summary.funnel.affiliate_clicks /
                            summary.funnel.supplement_views) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Device Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Device Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Desktop</span>
                  <span className="font-medium">
                    {formatNumber(summary.device_breakdown.desktop)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Mobile</span>
                  <span className="font-medium">
                    {formatNumber(summary.device_breakdown.mobile)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tablet</span>
                  <span className="font-medium">
                    {formatNumber(summary.device_breakdown.tablet)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Supplements Tab */}
        <TabsContent value="supplements">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Supplements</CardTitle>
              <CardDescription>
                Supplements with highest conversion rates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Supplement</TableHead>
                    <TableHead className="text-right">Views</TableHead>
                    <TableHead className="text-right">Clicks</TableHead>
                    <TableHead className="text-right">Conv. Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {summary.top_supplements.map((supp, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">
                        {supp.supplement}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatNumber(supp.views)}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatNumber(supp.clicks)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge variant="secondary">
                          {supp.conversion_rate}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Retailers Tab */}
        <TabsContent value="retailers">
          <Card>
            <CardHeader>
              <CardTitle>Top Retailers</CardTitle>
              <CardDescription>
                Retailers generating the most revenue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Retailer</TableHead>
                    <TableHead className="text-right">Clicks</TableHead>
                    <TableHead className="text-right">Revenue</TableHead>
                    <TableHead className="text-right">Avg Commission</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {summary.top_retailers.map((retailer, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium capitalize">
                        {retailer.retailer_slug}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatNumber(retailer.clicks)}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(retailer.revenue)}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(retailer.avg_commission)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Traffic Tab */}
        <TabsContent value="traffic">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>
                Where your traffic is coming from
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Source</TableHead>
                    <TableHead className="text-right">Sessions</TableHead>
                    <TableHead className="text-right">Clicks</TableHead>
                    <TableHead className="text-right">Conv. Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {summary.traffic_sources.map((source, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">
                        {source.utm_source || "Direct"}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatNumber(source.sessions)}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatNumber(source.clicks)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge variant="secondary">
                          {source.conversion_rate}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Recent Clicks Tab */}
        <TabsContent value="clicks">
          <Card>
            <CardHeader>
              <CardTitle>Recent Affiliate Clicks</CardTitle>
              <CardDescription>Last 50 affiliate link clicks</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Retailer</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Commission</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clicks.map((click) => (
                    <TableRow key={click.click_id}>
                      <TableCell className="text-sm text-muted-foreground">
                        {formatDate(click.created_at)}
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{click.brand}</div>
                          <div className="text-sm text-muted-foreground">
                            {click.supplement_slug}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="capitalize">
                        {click.retailer_slug}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(click.price)}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            click.commission_status === "approved"
                              ? "default"
                              : click.commission_status === "pending"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {click.commission_status || "pending"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {click.commission_amount
                          ? formatCurrency(click.commission_amount)
                          : "-"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
