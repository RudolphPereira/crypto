import Image from "next/image";
import increaseIcon from "../../assets/increase.svg";
import decreaseIcon from "../../assets/decrease.svg";
import React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActionBtn } from "../AppButtons/AppBtns";
import { ExternalLink } from "lucide-react";
import { ToolTip } from "../ToolTip/ToolTip";
import Link from "next/link";

interface Props {
  coinName?: string;
  coinImage?: string;
  coinUrl?: string;
  titleName?: string;
  value?: string | number;
  date?: string;
  numberOfCoins?: string;
  ledgerNum?: number | undefined;
  ledgerText?: string | undefined;
  percentage?: number;
  highStatus?: boolean;
  hasAddAsset?: boolean;
  handleCopyLink?: () => void | Promise<void>;
  additionalImageBoxClass?: string;
  pageLink?: string;
}

export const CoinDetails = ({
  coinName,
  coinImage,
  coinUrl,
  titleName,
  value,
  date,
  numberOfCoins,
  ledgerNum,
  ledgerText,
  percentage,
  hasAddAsset,
  handleCopyLink,
  additionalImageBoxClass,
  pageLink,
}: Props) => {
  return (
    <div className="flex flex-col gap-4 text-background">
      {coinName && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            {coinImage && (
              <div
                className={`w-[1.8rem] h-[1.8rem] rounded-full shadow-lg bg-white ${additionalImageBoxClass}`}
              >
                <Image
                  width={100}
                  height={100}
                  src={coinImage}
                  alt="coin-icon"
                  className="w-full h-full rounded-full p-0.5"
                />
              </div>
            )}
            <div className="flex flex-col gap-1">
              {pageLink ? (
                <ToolTip
                  toolTipTrigger={
                    <Link
                      href={`/coin-page/${pageLink}`}
                      className="hover:underline underline-offset-4"
                    >
                      <h2 className="text-xl font-[700] truncate block max-w-[250px]">
                        {coinName}
                      </h2>
                    </Link>
                  }
                  toolTipContent={coinName}
                />
              ) : (
                <ToolTip
                  toolTipTrigger={
                    <h2 className="text-xl font-[700] truncate block max-w-[250px]">
                      {coinName}
                    </h2>
                  }
                  toolTipContent={coinName}
                />
              )}

              {coinUrl && (
                <div className="flex items-center gap-2">
                  <ToolTip
                    toolTipTrigger={
                      <a
                        href={`${coinUrl}`}
                        target="_blank"
                        rel={"noreferrer"}
                        className="text-sm flex gap-1 items-center max-w-[250px]"
                      >
                        <ExternalLink className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{coinUrl}</span>
                      </a>
                    }
                    toolTipContent="Visit external link"
                    align="bottom"
                  />
                  <ToolTip
                    toolTipTrigger={
                      <Button
                        onClick={handleCopyLink}
                        className="bg-transparent hover:bg-transparent text-background cursor-pointer p-0 has-[>svg]:px-0 h-auto mt-1"
                      >
                        <Copy />
                      </Button>
                    }
                    toolTipContent="Copy link to clipboard"
                    align="bottom"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-1 flex-1">
        <p className="text-base opacity-70">{titleName}</p>

        <div className="flex flex-col gap-1">
          <div className="flex gap-3">
            {value && <p className="text-2xl font-[700]">{value}</p>}
            {percentage !== undefined && (
              <div className="flex items-center gap-1">
                <div className="w-[1rem] h-[1rem]">
                  <Image
                    src={percentage >= 0 ? increaseIcon : decreaseIcon}
                    alt="percentage-icon"
                    className="w-full h-full"
                  />
                </div>
                <span
                  className={`${
                    percentage >= 0 ? "text-mint-green" : "text-deep-pink"
                  } font-[500] text-sm`}
                >
                  {Math.abs(percentage)}%
                </span>
              </div>
            )}
          </div>
          {ledgerNum !== undefined && ledgerNum !== 0 && (
            <div className="flex gap-2 items-center">
              <p className="text-base">
                {ledgerNum >= 0 ? "Profit acquired" : "Loss incurred"}:
              </p>
              <p
                className={`text-lg ${
                  ledgerNum >= 0 ? "text-mint-green" : "text-deep-pink"
                }`}
              >
                {ledgerText}
              </p>
            </div>
          )}

          {numberOfCoins && (
            <p className="text-xs flex gap-1">
              <span className="opacity-70 inline-block">
                Number of coins purchased:
              </span>
              <span className="inline-block">{numberOfCoins}</span>
            </p>
          )}
          {date && <p className="text-xs opacity-70">{date}</p>}
        </div>
        {hasAddAsset && (
          <ActionBtn btnTitle="Add Asset" additionalClass="sm:w-[200px]" />
        )}
      </div>
    </div>
  );
};
