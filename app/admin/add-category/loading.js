export default function Loading() {
  return (
    <div className="animate-pulse space-y-6 px-2 sm:px-0">
      {/*  Header Placeholder */}
      <div className="h-12 w-full rounded bg-gray-50" />
      <div className="flex h-full w-full items-center justify-center rounded-md bg-white/50 px-2 py-5 shadow-sm shadow-primary">
        <div className="w-full max-w-[400px] rounded p-5 shadow">
          <div className="h-12 w-full rounded bg-gray-50" />
          <div className="h-12 w-full rounded bg-gray-50" />
          <div className="h-12 w-full rounded bg-gray-50" />
          <div className="h-12 w-full rounded bg-gray-50" />
          <div className="h-12 w-full rounded bg-gray-50" />
          <div className="h-12 w-full rounded bg-gray-50" />
        </div>
      </div>
    </div>
  );
}
