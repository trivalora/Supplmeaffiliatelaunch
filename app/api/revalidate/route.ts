import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * POST /api/revalidate
 *
 * On-demand revalidation endpoint for purging Next.js cache
 * Trigger this webhook after database updates (INSERT, UPDATE, DELETE)
 *
 * Authentication: Requires REVALIDATION_SECRET in headers
 *
 * Request body:
 * {
 *   "paths": ["/glossary/term-slug", "/supplement-slug"],  // Optional: specific paths
 *   "tags": ["glossary", "supplements", "products"],       // Optional: cache tags
 *   "type": "glossary" | "supplement" | "product" | "all"  // Required: content type
 * }
 *
 * Examples:
 *
 * 1. Revalidate single glossary term:
 *    POST /api/revalidate
 *    { "type": "glossary", "paths": ["/glossary/bioavailability"] }
 *
 * 2. Revalidate all glossary terms:
 *    POST /api/revalidate
 *    { "type": "glossary" }
 *
 * 3. Revalidate all supplements:
 *    POST /api/revalidate
 *    { "type": "supplement" }
 *
 * 4. Revalidate everything:
 *    POST /api/revalidate
 *    { "type": "all" }
 */
export async function POST(request: NextRequest) {
  try {
    // Verify secret token
    const secret = request.headers.get("x-revalidation-secret");
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json(
        { error: "Invalid or missing revalidation secret" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { paths, tags, type } = body;

    if (!type) {
      return NextResponse.json(
        { error: "Missing 'type' field in request body" },
        { status: 400 }
      );
    }

    const revalidated: string[] = [];

    // Revalidate specific paths
    if (paths && Array.isArray(paths)) {
      for (const path of paths) {
        revalidatePath(path);
        revalidated.push(path);
      }
    }

    // Revalidate by content type
    switch (type) {
      case "glossary":
        revalidatePath("/api/glossary", "page");
        revalidatePath("/glossary", "page");
        revalidated.push("glossary-all");
        break;

      case "supplement":
        revalidatePath("/api/supplements", "page");
        revalidated.push("supplements-all");
        break;

      case "product":
        revalidatePath("/api/products", "page");
        revalidated.push("products-all");
        break;

      case "all":
        revalidatePath("/", "layout"); // Revalidate entire site
        revalidated.push("all-content");
        break;

      default:
        return NextResponse.json(
          { error: `Unknown type: ${type}` },
          { status: 400 }
        );
    }

    return NextResponse.json(
      {
        success: true,
        revalidated,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Revalidation failed", details: error.message },
      { status: 500 }
    );
  }
}

/**
 * GET /api/revalidate
 *
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Revalidation endpoint active",
    usage:
      "POST with x-revalidation-secret header and { type, paths?, tags? } body",
  });
}
