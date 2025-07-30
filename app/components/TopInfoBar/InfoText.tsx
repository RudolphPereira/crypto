import React from "react";
import Image from "next/image";

type Props = {
  image?: string;
  text?: string;
  number: number | string | undefined;
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
    <div className="text-xs flex items-center gap-1.5">
      {image && (
        <div className={`${iconSize}`}>
          <Image src={image} alt="flash circle" className="w-full h-full" />
        </div>
      )}

      <div className={`flex items-center gap-1.5 ${additionalClass}`}>
        {text && (
          <div className="text-white/80 font-[300]">
            <span>{text}</span>
          </div>
        )}
        <div className="">
          <span>{number}</span>
        </div>
      </div>
    </div>
  );
};
