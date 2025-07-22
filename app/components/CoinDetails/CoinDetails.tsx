import Image from "next/image";
import increaseIcon from "../../assets/increase.svg";
import decreaseIcon from "../../assets/decrease.svg";
import React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActionBtn } from "../AppButtons/AppBtns";

interface Props {
  coinName?: string;
  coinImage?: string;
  coinUrl?: string;
  titleName?: string;
  value?: string;
  date?: string;
  balance?: string;
  ledger?: boolean;
  percentage?: string;
  highStatus?: boolean;
  hasAddAsset?: boolean;
  hasMadeProfit?: boolean;
}

export const CoinDetails = ({
  coinName,
  coinImage,
  coinUrl,
  titleName,
  value,
  date,
  balance,
  ledger,
  percentage,
  highStatus,
  hasAddAsset,
  hasMadeProfit,
}: Props) => {
  return (
    <div className="flex flex-col gap-6 text-background">
      {coinName && (
        <div className=" flex flex-col gap-2">
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
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-[700]">{coinName}</h2>
              {coinUrl && (
                <div className="flex items-center gap-2">
                  <a
                    href={`https://${coinUrl}`}
                    target="_blank"
                    rel={"noreferrer"}
                    className="text-sm"
                  >
                    {coinUrl}
                  </a>
                  <Button className="bg-transparent hover:bg-transparent text-background cursor-pointer p-0 has-[>svg]:px-0 h-auto mt-1">
                    <Copy />
                  </Button>
                </div>
              )}
            </div>
          </div>
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
          {ledger && (
            <div className="flex gap-2 items-center">
              <p className="text-base">{hasMadeProfit ? "Profit" : "Loss"}:</p>
              <p
                className={`text-lg ${
                  hasMadeProfit ? "text-mint-green" : "text-deep-pink"
                }`}
              >
                $1,504
              </p>
            </div>
          )}

          {balance && <p className="text-xs opacity-70">{balance}</p>}
          {date && <p className="text-xs opacity-70">{date}</p>}
        </div>
        {hasAddAsset && (
          <ActionBtn btnTitle="Add Asset" additionalClass="sm:w-[200px]" />
        )}
      </div>
    </div>
  );
};
