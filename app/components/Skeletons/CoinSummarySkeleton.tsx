import { Skeleton } from "@/components/ui/skeleton";

export const CoinSummarySkeleton = () => {
  return (
    <div className="flex gap-6 flex-col">
      <div className="flex md:flex-row flex-col gap-6 w-full">
        <div className="flex-1 h-fit sm:sticky sm:top-50 p-3 md:p-6 bg-deep-plum light:bg-periwinkle-blue/20 rounded-lg flex flex-col gap-6">
          <div className="flex w-full h-full items-center justify-center gap-2">
            <Skeleton className="w-[2.5rem] h-[2.5rem] rounded-full flex-shrink-0" />
            <div className="w-full h-full flex flex-col justify-center gap-3 flex-auto">
              <Skeleton className="rounded-xs h-6 w-[45%]" />
              <Skeleton className="rounded-xs h-4 w-[60%]" />
            </div>
          </div>

          <Skeleton className="rounded-xs h-8 w-[40%]" />

          <div className="border-t-1 border-background/10 flex flex-col gap-4 pt-4">
            <div className="flex justify-between ">
              <div className="w-full h-full flex flex-col gap-2">
                <Skeleton className="rounded-xs h-4 w-[35%]" />
                <Skeleton className="rounded-xs h-3 w-[55%]" />
              </div>
              <Skeleton className="rounded-xs h-6 w-[40%]" />
            </div>
            <div className="flex justify-between ">
              <div className="w-full h-full flex flex-col gap-2">
                <Skeleton className="rounded-xs h-4 w-[30%]" />
                <Skeleton className="rounded-xs h-3 w-[50%]" />
              </div>
              <Skeleton className="rounded-xs h-6 w-[25%]" />
            </div>
          </div>
        </div>

        <div className="flex-1/4 flex flex-col gap-4">
          <div className="rounded-sm w-[100%] light:bg-periwinkle-blue/20 dark:bg-deep-plum flex flex-col justify-center gap-2.5 p-4">
            <Skeleton className="rounded-xs h-3 w-[80%] light:bg-white" />
            <Skeleton className="rounded-xs h-3 w-[60%] light:bg-white" />
            <Skeleton className="rounded-xs h-3 w-[40%] light:bg-white" />
          </div>

          <div className="flex gap-3 flex-wrap">
            <div className="rounded-sm h-10 w-[40%] light:bg-periwinkle-blue/20 dark:bg-deep-plum flex items-center">
              <Skeleton className="rounded-xs h-3 w-[80%] mx-4 light:bg-white" />
            </div>
            <div className="rounded-sm h-10 w-[15%] light:bg-periwinkle-blue/20 dark:bg-deep-plum flex items-center">
              <Skeleton className="rounded-xs h-3 w-[80%] mx-4 light:bg-white" />
            </div>
            <div className="rounded-sm h-10 w-[40%] light:bg-periwinkle-blue/20 dark:bg-deep-plum flex items-center">
              <Skeleton className="rounded-xs h-3 w-[80%] mx-4 light:bg-white" />
            </div>
            <div className="rounded-sm h-10 w-[30%] light:bg-periwinkle-blue/20 dark:bg-deep-plum flex items-center">
              <Skeleton className="rounded-xs h-3 w-[80%] mx-4 light:bg-white" />
            </div>
            <div className="rounded-sm h-10 w-[35%] light:bg-periwinkle-blue/20 dark:bg-deep-plum flex items-center">
              <Skeleton className="rounded-xs h-3 w-[80%] mx-4 light:bg-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-1 border-background/10 pt-6 grid sm:grid-cols-2 gap-6">
        <div className="p-3 md:p-6 bg-deep-plum light:bg-periwinkle-blue/20 rounded-lg flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 flex-1">
              <Skeleton className="rounded-full h-5 w-5" />
              <Skeleton className="rounded-xs h-4 w-[25%]" />
            </div>
            <Skeleton className="rounded-xs h-4 w-[25%]" />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 flex-1">
              <Skeleton className="rounded-full h-5 w-5" />
              <Skeleton className="rounded-xs h-4 w-[30%]" />
            </div>
            <Skeleton className="rounded-xs h-4 w-[20%]" />
          </div>
        </div>

        <div className="p-3 md:p-6 bg-deep-plum light:bg-periwinkle-blue/20 rounded-lg flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 flex-1">
              <Skeleton className="rounded-full h-5 w-5" />
              <Skeleton className="rounded-xs h-4 w-[25%]" />
            </div>
            <Skeleton className="rounded-xs h-4 w-[25%]" />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 flex-1">
              <Skeleton className="rounded-full h-5 w-5" />
              <Skeleton className="rounded-xs h-4 w-[30%]" />
            </div>
            <Skeleton className="rounded-xs h-4 w-[20%]" />
          </div>
        </div>

        <div className="p-3 md:p-6 bg-deep-plum light:bg-periwinkle-blue/20 rounded-lg flex flex-col gap-7">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 flex-1">
              <Skeleton className="rounded-full h-5 w-5" />
              <Skeleton className="rounded-xs h-4 w-[25%]" />
            </div>
            <Skeleton className="rounded-xs h-4 w-[25%]" />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 flex-1">
              <Skeleton className="rounded-full h-5 w-5" />
              <Skeleton className="rounded-xs h-4 w-[30%]" />
            </div>
            <Skeleton className="rounded-xs h-4 w-[20%]" />
          </div>

          <Skeleton className="rounded-xs h-2 w-[100%]" />
        </div>
      </div>
    </div>
  );
};
