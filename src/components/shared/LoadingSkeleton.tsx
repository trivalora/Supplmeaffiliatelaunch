/**
 * Loading Skeleton Components
 * Provides visual feedback during data fetching
 */

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-secondary/20 dark:bg-secondary/10 rounded ${className}`}
      aria-label="Loading..."
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-card border border-secondary rounded-[14px] p-6">
      <Skeleton className="h-6 w-3/4 mb-4" />
      <Skeleton className="h-4 w-1/2 mb-6" />
      <div className="space-y-2 mb-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
}

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function ProductListSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-card border border-secondary rounded-[14px] p-6 flex items-center gap-4"
        >
          <Skeleton className="h-20 w-20 flex-shrink-0" />
          <div className="flex-grow">
            <Skeleton className="h-5 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-3" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <Skeleton className="h-10 w-24 flex-shrink-0" />
        </div>
      ))}
    </div>
  );
}

export function SupplementHeaderSkeleton() {
  return (
    <div className="bg-tertiary py-12">
      <div className="container mx-auto px-4">
        <Skeleton className="h-10 w-64 mb-4" />
        <Skeleton className="h-6 w-96 mb-6" />
        <div className="flex gap-4">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
        </div>
      </div>
    </div>
  );
}
