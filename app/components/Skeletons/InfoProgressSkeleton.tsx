import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const InfoProgressSkeleton = () => {
  return (
    <div className="text-xs flex items-center gap-1.5">
      <Skeleton className="h-[.6rem] w-[6rem] rounded-xs" />
    </div>
  );
};
