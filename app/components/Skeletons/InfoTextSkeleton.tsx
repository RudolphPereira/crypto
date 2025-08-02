import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  image?: boolean;
  title?: boolean;
};

export const InfoTextSkeleton = ({ image, title }: Props) => {
  return (
    <div className="text-xs flex items-center gap-1.5">
      {image && (
        <div className="w-[1.15rem] h-[1.15rem]">
          <Skeleton className="w-full h-full rounded-full" />
        </div>
      )}

      <div className="flex items-center gap-1.5">
        {title && <Skeleton className="h-[.6rem] w-[2.5rem] rounded-xs" />}
        <Skeleton className="h-[.6rem] w-[2.5rem] rounded-xs" />
      </div>
    </div>
  );
};
