import React from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

type Props = {
  image?: string;
  number: string;
  progressColor: string;
};

export const InfoProgress = ({ image, number, progressColor }: Props) => {
  return (
    <div className="">
      <div className="text-xs flex items-center gap-1.5">
        {image && (
          <div className="w-[1.3rem] h-[1.3rem] overflow-visible">
            <Image src={image} alt="coin icon" className="w-full h-full" />
          </div>
        )}
        <div className="">
          <span>{number}</span>
        </div>
        <div className="">
          <Progress
            value={44}
            className={`w-[3.5rem] h-[0.4rem] ${progressColor} bg-white/40 rounded-xs [&>div]:rounded-xs`}
          />
        </div>
      </div>
    </div>
  );
};
