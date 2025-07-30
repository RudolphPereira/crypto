"use client";
import { useEffect } from "react";
import { InfoText } from "./InfoText";
import { InfoProgress } from "./InfoProgress";
import coinIcon from "../../assets/flash-circle.svg";
import exchangeIcon from "../../assets/recovery-convert.svg";
// import increaseIcon from "../../assets/increase.svg";
import bitcoinIcon from "../../assets/Currency-icon-02.svg";
import ethIcon from "../../assets/Currency-icon-01.svg";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchMarketData } from "@/lib/features/marketData/marketDataSlice";
import { formatCompactNumber } from "@/lib/utils";

export const TopInfoBar = () => {
  const data = useAppSelector((state) => state.marketData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMarketData());
  }, []);

  const btcPercentage = Math.ceil(data.marketData.percentages.btc);
  const ethPercentage = Math.ceil(data.marketData.percentages.eth);

  const totalVolume = formatCompactNumber(data.marketData.totalVolume.usd);
  const totalMarketCap = formatCompactNumber(
    data.marketData.totalMarketCap.usd
  );

  const totalPercentage =
    Math.round(data.marketData.totalMarketCap.usd) /
    Math.round(data.marketData.totalVolume.usd);

  return (
    <div className="bg-deep-plum px-2 py-3 border-b border-b-white/10 text-white flex justify-center w-full min-h-14">
      <div className="flex items-center sm:gap-7 gap-5 flex-wrap justify-center">
        <InfoText
          image={coinIcon}
          iconSize="w-[1.15rem] h-[1.15rem]"
          title="Coins"
          value={data.marketData.coins.toLocaleString()}
        />

        <InfoText
          image={exchangeIcon}
          iconSize="w-[1.15rem] h-[1.15rem]"
          title="Markets"
          value={data.marketData.markets.toLocaleString()}
        />

        <InfoText iconSize="w-[0.7rem] h-[0.7rem]" value={totalMarketCap} />

        <InfoProgress
          progressValue={totalPercentage}
          value={`$ ${totalVolume}`}
          progressColor="[&>div]:bg-white"
        />
        <InfoProgress
          image={bitcoinIcon}
          value={`${btcPercentage} %`}
          progressValue={btcPercentage}
          progressColor="[&>div]:bg-orange"
        />
        <InfoProgress
          image={ethIcon}
          value={`${ethPercentage} %`}
          progressValue={ethPercentage}
          progressColor="[&>div]:bg-pastel-blue"
        />
      </div>
    </div>
  );
};
