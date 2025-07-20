import Image from "next/image";
import increaseIcon from "../../assets/increase.svg";
import decreaseIcon from "../../assets/decrease.svg";
import React from "react";

interface Props {
  coinName?: string;
  coinImage?: string;
  titleName?: string;
  value?: string;
  date?: string;
  percentage?: string;
  highStatus?: boolean;
}

export const CoinDetails = ({
  coinName,
  coinImage,
  titleName,
  value,
  date,
  percentage,
  highStatus,
}: Props) => {
  return (
    <div className="flex flex-col gap-6">
      {coinName && (
        <div className="flex items-center gap-3">
          {coinImage && (
            <div className="w-[1.8rem] h-[1.8rem]">
              <Image
                src={coinImage}
                alt="coin-icon"
                className="w-full h-full"
              />
            </div>
          )}
          <h2 className="text-xl font-[700]">{coinName}</h2>
        </div>
      )}
      <div className="flex flex-col gap-3 flex-1">
        <p className="text-base opacity-70">{titleName}</p>

        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            {value && <p className="text-2xl font-[700]">{value}</p>}
            {percentage && (
              <div className="flex items-center gap-2">
                <div className="w-[1rem] h-[1rem]">
                  <Image
                    src={highStatus ? increaseIcon : decreaseIcon}
                    alt="percentage-icon"
                    className="w-full h-full"
                  />
                </div>
                <span
                  className={`${
                    highStatus ? "text-mint-green" : "text-deep-pink"
                  } font-[500] text-sm`}
                >
                  {percentage}
                </span>
              </div>
            )}
          </div>
          {date && <p className="text-xs opacity-70">{date}</p>}
        </div>
      </div>
    </div>
  );
};
