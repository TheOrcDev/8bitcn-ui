import { Skeleton } from "@/components/ui/8bit/skeleton";

function ColumnOneSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-24 w-full" />
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-52 w-full" />
      <Skeleton className="h-28 w-full" />
      <Skeleton className="h-28 w-full" />
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-72 w-full" />
    </div>
  );
}

function FeatureColumnSkeleton() {
  return (
    <div className="flex flex-col gap-4 lg:col-span-2">
      <Skeleton className="h-72 w-full" />
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-52 w-full" />
      <Skeleton className="h-72 w-full" />
      <Skeleton className="h-80 w-full" />
    </div>
  );
}

function InteractiveColumnSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="hidden h-12 w-full md:block" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-56 w-full" />
      <Skeleton className="h-44 w-full" />
      <Skeleton className="h-28 w-full" />
      <Skeleton className="h-28 w-full" />
    </div>
  );
}

function HomeComponentShowcaseSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="mt-10 grid min-h-[800px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      data-testid="home-showcase-skeleton"
    >
      <ColumnOneSkeleton />
      <FeatureColumnSkeleton />
      <InteractiveColumnSkeleton />
    </div>
  );
}

export {
  ColumnOneSkeleton,
  FeatureColumnSkeleton,
  HomeComponentShowcaseSkeleton,
  InteractiveColumnSkeleton,
};
