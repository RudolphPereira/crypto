import React from "react";
import Image from "next/image";
import { ToolTip } from "../ToolTip/ToolTip";

type Props = {
  image?: string;
  title?: string;
  value?: number | string;
  additionalClass?: string;
  iconSize?: string;
  toolTipContent: string;
};

export const InfoText = ({
  image,
  title,
  value,
  additionalClass,
  iconSize,
  toolTipContent,
}: Props) => {
  return (
    <ToolTip
      toolTipTrigger={
        <div className="text-xs flex items-center gap-1.5">
          {image && (
            <div className={`${iconSize}`}>
              <Image src={image} alt="flash circle" className="w-full h-full" />
            </div>
          )}

          <div className={`flex items-center gap-1.5 ${additionalClass}`}>
            {title && (
              <div className="text-white/80 font-[300]">
                <span>{title}</span>
              </div>
            )}
            <div className="">
              <span>{value}</span>
            </div>
          </div>
        </div>
      }
      toolTipContent={toolTipContent}
    />
  );
};
