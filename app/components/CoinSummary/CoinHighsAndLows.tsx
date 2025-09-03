import React from "react";
import increaseIcon from "../../assets/increase.svg";
import decreaseIcon from "../../assets/decrease.svg";
import Image from "next/image";

type Props = {
  highStatus?: boolean;
  title: string;
  date: string;
  amount: string | number;
};

export const CoinHighsAndLows = ({
  highStatus,
  title,
  date,
  amount,
}: Props) => {
  return (
    <div className="flex justify-between text-background">
      <div className="flex gap-2">
        <div className="iconBox w-[1rem] h-[1rem]">
          <Image
            src={highStatus ? increaseIcon : decreaseIcon}
            alt="icon"
            className="w-full h-full"
          />
        </div>

        <div>
          <p className="text-sm">{title}:</p>
          <span className="text-xs opacity-70">{date}</span>
        </div>
      </div>

      <p className="text-base">{amount}</p>
    </div>
  );
};
