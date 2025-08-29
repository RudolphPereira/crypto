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
import { InfoTextSkeleton } from "../Skeletons/InfoTextSkeleton";
import { InfoProgressSkeleton } from "../Skeletons/InfoProgressSkeleton";
import { Toast } from "../Toast/Toast";

export const TopInfoBar = () => {
  const data = useAppSelector((state) => state.marketData);
  const loading = useAppSelector((state) => state.marketData.loading);
  const error = useAppSelector((state) => state.marketData.error);
  const currencyValue = useAppSelector(
    (state) => state.currencyData.currencyValue
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMarketData());
  }, []);

  const btcPercentage = Math.ceil(data.marketData.percentages.btc);
  const ethPercentage = Math.ceil(data.marketData.percentages.eth);

  const totalVolume = formatCompactNumber(
    data.marketData.totalVolume[currencyValue],
    currencyValue
  );
  const totalMarketCap = formatCompactNumber(
    data.marketData.totalMarketCap[currencyValue]
  );

  const totalPercentage =
    Math.round(data.marketData.totalMarketCap[currencyValue]) /
    Math.round(data.marketData.totalVolume[currencyValue]);

  const roundedTotalPercentage = Number(totalPercentage.toFixed(0));

  return (
    <div className="bg-deep-plum px-2 py-3 border-b border-b-white/10 text-white flex justify-center w-full min-h-14">
      <div className="flex items-center sm:gap-7 gap-5 flex-wrap">
        {loading ? (
          <>
            <InfoTextSkeleton image title />
            <InfoTextSkeleton image title />
            <InfoTextSkeleton />
            <InfoProgressSkeleton />
            <InfoProgressSkeleton />
            <InfoProgressSkeleton />
          </>
        ) : (
          <>
            <InfoText
              image={coinIcon}
              iconSize="w-[1.15rem] h-[1.15rem]"
              title="Coins"
              value={data.marketData.coins.toLocaleString()}
              toolTipContent="Number of cryptocurrencies currently active on the market"
            />
            <InfoText
              image={exchangeIcon}
              iconSize="w-[1.15rem] h-[1.15rem]"
              title="Exchanges"
              value={data.marketData.markets.toLocaleString()}
              toolTipContent="Number of cryptocurrency exchanges currently tracked"
            />
            <InfoText
              value={totalMarketCap}
              toolTipContent={`Combined market capitalization of all cryptocurrencies, in ${currencyValue.toUpperCase()}`}
            />

            <InfoProgress
              progressValue={roundedTotalPercentage}
              value={`${totalVolume}`}
              progressColor="[&>div]:bg-white"
              toolTipContent={`Total trading volume across all cryptocurrencies in the last 24 hours, in ${currencyValue.toUpperCase()}`}
            />
            <InfoProgress
              image={bitcoinIcon}
              value={`${btcPercentage} %`}
              progressValue={btcPercentage}
              progressColor="[&>div]:bg-orange"
              toolTipContent="Bitcoin's share of the total cryptocurrency market capitalization"
            />
            <InfoProgress
              image={ethIcon}
              value={`${ethPercentage} %`}
              progressValue={ethPercentage}
              progressColor="[&>div]:bg-pastel-blue"
              toolTipContent="Ethereum's share of the total cryptocurrency market capitalization"
            />
          </>
        )}
        {error !== "" ? (
          <div className="hidden">
            <Toast
              title="Error"
              message={`${error}. Kindly refresh page.`}
              btnLabel="Close"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
