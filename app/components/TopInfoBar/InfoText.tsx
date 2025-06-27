import React from "react";
import Image from "next/image";

type Props = {
  image: any;
  text: string;
  number: number;
  additionalClass?: string;
  iconSize?: string;
};

export const InfoText = ({
  image,
  text,
  number,
  additionalClass,
  iconSize,
}: Props) => {
  return (
    <div className="infoText text-xs flex items-center gap-1.5">
      <div className={`iconBox ${iconSize}`}>
        <Image src={image} alt="flash circle" className="w-full h-full" />
      </div>

      <div className={`infoBox flex items-center gap-1.5 ${additionalClass}`}>
        <div className="textBox text-white/80 font-[300]">
          <span>{text}</span>
        </div>

        <div className="numBox">
          <span>{number}</span>
        </div>
      </div>
    </div>
  );
};
