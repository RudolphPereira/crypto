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
        <div className="">
          <div className="text-xs flex items-center gap-1.5">
            {image && (
              <div className="w-[1.3rem] h-[1.3rem] overflow-visible">
                <Image src={image} alt="coin icon" className="w-full h-full" />
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
        </div>
      }
      toolTipContent={toolTipContent}
    />
  );
};
