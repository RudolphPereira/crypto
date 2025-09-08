import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const PortfolioCardSkeleton = () => {
  return (
    <div className="bg-black-russian flex lg:flex-row flex-col w-full rounded-lg">
      <div className="bg-dark-blue  light:bg-periwinkle-blue/20 p-3 md:p-6 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg flex-1 flex flex-col gap-3">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Skeleton className="w-[2.2rem] h-[2.2rem] rounded-full light:bg-white" />
              <Skeleton className="w-[50%] h-6 rounded-xs light:bg-white" />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <Skeleton className="w-[30%] h-4 rounded-xs light:bg-white" />

              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <Skeleton className="w-[45%] h-6 rounded-xs light:bg-white" />
                </div>

                <div className="text-xs flex gap-3 flex-col">
                  <Skeleton className="w-[70%] h-3 rounded-xs light:bg-white" />
                  <Skeleton className="w-[60%] h-3 rounded-xs light:bg-white" />
                </div>

                <Skeleton className="w-[40%] h-9 rounded-xs light:bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1/2 p-3 md:p-6 sm:rounded-r-lg grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        <div className="border border-periwinkle-blue/20 rounded-sm p-2 flex flex-col gap-1 justify-center text-background">
          <Skeleton className="w-[100%] h-[100%] rounded-sm light:bg-periwinkle-blue/40" />
        </div>
        <div className="border border-periwinkle-blue/20 rounded-sm p-2 flex flex-col gap-1 justify-center text-background">
          <Skeleton className="w-[100%] h-[100%] rounded-sm light:bg-periwinkle-blue/40" />
        </div>
        <div className="border border-periwinkle-blue/20 rounded-sm p-2 flex flex-col gap-1 justify-center text-background">
          <Skeleton className="w-[100%] h-[100%] rounded-sm light:bg-periwinkle-blue/40" />
        </div>
        <div className="border border-periwinkle-blue/20 rounded-sm p-2 flex flex-col gap-1 justify-center text-background">
          <Skeleton className="w-[100%] h-[100%] rounded-sm light:bg-periwinkle-blue/40" />
        </div>
      </div>
    </div>
  );
};
