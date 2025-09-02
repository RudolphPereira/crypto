import React from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { ToolTip } from "../ToolTip/ToolTip";

type Props = {
  image?: string;
  value?: string | number;
  progressColor: string;
  progressValue?: number;
  toolTipContent: string;
};

export const InfoProgress = ({
  image,
  value,
  progressColor,
  progressValue,
  toolTipContent,
}: Props) => {
  return (
    <ToolTip
      toolTipTrigger={
        <div className="text-xs flex items-center gap-1.5">
          {image && (
            <div className="w-[1.3rem] h-[1.3rem] bg-white rounded-full">
              <Image
                src={image}
                alt="coin icon"
                className="w-full h-full"
                width={100}
                height={100}
              />
            </div>
          )}
          <div className="">
            <span>{value}</span>
          </div>
          <div className="">
            <Progress
              value={progressValue}
              className={`w-[3.5rem] h-[0.4rem] ${progressColor} bg-white/40 rounded-xs [&>div]:rounded-xs`}
            />
          </div>
        </div>
      }
      toolTipContent={toolTipContent}
    />
  );
};
