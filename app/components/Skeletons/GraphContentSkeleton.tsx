import { Skeleton } from "@/components/ui/skeleton";

export const GraphContentSkeleton = () => {
  return (
    <>
      <div className="flex-1 p-3 md:p-6 light:bg-periwinkle-blue/40 bg-dark-blue rounded-lg flex flex-col">
        <div className=" flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Skeleton className="rounded-xs h-5 w-[20%]" />
            <Skeleton className="rounded-xs h-6 w-[30%]" />
            <Skeleton className="rounded-xs h-4 w-[40%]" />
          </div>
          <Skeleton className="rounded-sm h-60 w-[100%]" />
        </div>
      </div>
      <div className="flex-1 p-3 md:p-6 light:bg-periwinkle-blue/40 bg-deep-plum rounded-lg flex flex-col">
        <div className=" flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Skeleton className="rounded-xs h-5 w-[20%]" />
            <Skeleton className="rounded-xs h-6 w-[30%]" />
            <Skeleton className="rounded-xs h-4 w-[40%]" />
          </div>
          <Skeleton className="rounded-sm h-60 w-[100%]" />
        </div>
      </div>
    </>
  );
};
