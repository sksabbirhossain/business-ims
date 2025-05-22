export default function Loading() {
  return (
    <div className="animate-pulse space-y-6 p-6">
      {/* Top Stat Cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-24 rounded-lg bg-gray-50" />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Chart Skeleton */}
        <div className="h-86 rounded-lg bg-gray-50 md:col-span-2" />

        {/* Category Table Skeleton */}
        <div className="space-y-4">
          <div className="h-8 w-1/2 rounded bg-gray-50" />
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex h-12 items-center justify-between rounded bg-gray-50 px-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
