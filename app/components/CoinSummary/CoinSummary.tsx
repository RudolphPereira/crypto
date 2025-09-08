"use client";
import React, { useEffect, useState } from "react";
import { CoinDetails } from "../CoinDetails/CoinDetails";
import { CoinHighsAndLows } from "./CoinHighsAndLows";
import { InfoSummary } from "./InfoSummary";
import { AdditionalLink } from "./AdditionalLink";
import { CoinSummaryStats } from "./CoinSummaryStats";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  fetchCoin,
  updateCoinName,
} from "@/lib/features/coinPageData/coinPageDataSlice";
import { formatNumberWithDecimalsAndCurrency } from "@/lib/utils";
import { Toast, ToastSec } from "../Toast/Toast";
import { CoinSummarySkeleton } from "../Skeletons/CoinSummarySkeleton";

type Props = {
  coinId?: string;
};

export const CoinSummary = ({ coinId }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (coinId) {
      dispatch(updateCoinName(coinId));
      dispatch(fetchCoin(coinId));
    }
  }, [coinId]);

  const data = useAppSelector((state) => state.coinPageData.coin);
  const portfolioData = useAppSelector((state) => state.portfolioData.coinList);

  // console.log(data);

  const skeletonLoader = useAppSelector(
    (state) => state.coinPageData.skeletonLoader
  );
  const loading = useAppSelector((state) => state.coinPageData.loading);
  const error = useAppSelector((state) => state.coinPageData.error);
  const currencyValue = useAppSelector(
    (state) => state.currencyData.currencyValue
  );

  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    if (loading && skeletonLoader) {
      setShowSkeleton(true);
    } else {
      const timer = setTimeout(() => setShowSkeleton(false), 250);
      return () => clearTimeout(timer);
    }
  }, [loading && skeletonLoader]);

  const coinNameDisplay = data?.name
    ? `${data.name} (${data.symbol?.toUpperCase()})`
    : "";

  const coinImage = data?.image || "";

  const coinUrl = data?.homePageLink?.[0] || "";

  const priceValue =
    formatNumberWithDecimalsAndCurrency(
      data.currentPrice,
      0,
      0,
      currencyValue
    ) || 0;

  const finalPriceChangePercentage =
    Number((data.priceChangePercentage24Hour || 0).toFixed(2)) || 0;

  const formattedAllTimeHighDate = new Date(data.allTimeHighDate).toUTCString();

  const allTimeHighPrice =
    formatNumberWithDecimalsAndCurrency(
      data.allTimeHigh,
      0,
      2,
      currencyValue
    ) || 0;

  const formattedAllTimeLowDate = new Date(data.allTimeLowDate).toUTCString();

  const allTimeLowPrice =
    formatNumberWithDecimalsAndCurrency(data.allTimeLow, 0, 2, currencyValue) ||
    0;

  const description = data?.description || "";

  const additionalLinks = data.additionalLinks.slice(0, 5) || [];

  const totalVolume =
    formatNumberWithDecimalsAndCurrency(
      data.totalVolume,
      0,
      2,
      currencyValue
    ) || 0;

  const volumeByMarket =
    data.totalVolume && data.marketCap
      ? (data.totalVolume / data.marketCap).toFixed(5)
      : "-";

  const marketCap =
    formatNumberWithDecimalsAndCurrency(data.marketCap, 0, 2, currencyValue) ||
    0;

  const fullyDilutedValuation =
    formatNumberWithDecimalsAndCurrency(
      data.fullyDilutedValuation,
      0,
      2,
      currencyValue
    ) || 0;

  const totalSupply =
    formatNumberWithDecimalsAndCurrency(
      data.totalSupply,
      0,
      2,
      currencyValue
    ) || 0;

  const circulatingSupply =
    formatNumberWithDecimalsAndCurrency(
      data.circulatingSupply,
      0,
      2,
      currencyValue
    ) || 0;

  const circulationVolume =
    Math.round(
      (100 * Number(data.circulatingSupply ?? 0)) /
        Number(data.totalSupply ?? 1)
    ) || 0;

  // Copy Functionality
  const [copyLink, setCopyLink] = useState<"success" | "error" | null>(null);

  const handleCopyLink = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopyLink("success");
    } catch {
      setCopyLink("error");
    } finally {
      setTimeout(() => setCopyLink(null), 2000);
    }
  };

  // Ledger
  const coin = portfolioData.find((coin) => coin.id === data.id);

  let ledgerNum = "";
  let ledgerText = "";

  if (coin) {
    const latestPrice = Number(data.currentPrice || 0);
    const noOfCoins = Number(coin.noOfCoins || 0);
    const purchasedPrice = Number(coin.currentPrice || 0);
    const ledgerData = latestPrice * noOfCoins - purchasedPrice * noOfCoins;

    ledgerNum = ledgerData.toFixed(0);

    const ledgerNumAbs = Math.abs(Number(ledgerNum));

    ledgerText = formatNumberWithDecimalsAndCurrency(
      Number(ledgerNumAbs),
      0,
      0,
      currencyValue
    );
  }

  return (
    <div
      className={`${
        error !== "" ? "opacity-40 pointer-events-none" : ""
      } flex flex-col gap-6 w-full`}
    >
      {showSkeleton ? (
        <CoinSummarySkeleton />
      ) : (
        <>
          <div className="flex md:flex-row flex-col gap-6 w-full">
            <div className="flex-1 h-fit md:sticky md:top-50 p-3 md:p-6 bg-deep-plum light:bg-periwinkle-blue/20 rounded-lg flex flex-col gap-4">
              <CoinDetails
                coinName={coinNameDisplay}
                coinImage={coinImage}
                coinUrl={coinUrl}
                value={priceValue}
                percentage={finalPriceChangePercentage}
                handleCopyLink={() => handleCopyLink(coinUrl)}
                additionalImageBoxClass="w-[2.5rem] h-[2.5rem]"
                ledgerNum={Number(ledgerNum)}
                ledgerText={ledgerText}
              />

              <div className="border-t-1 border-background/10 flex flex-col gap-4 pt-4">
                <CoinHighsAndLows
                  title="All time high"
                  date={formattedAllTimeHighDate}
                  amount={allTimeHighPrice}
                  highStatus
                />
                <CoinHighsAndLows
                  title="All time low"
                  date={formattedAllTimeLowDate}
                  amount={allTimeLowPrice}
                />
              </div>
            </div>
            <div className="flex-1/4 flex flex-col gap-4">
              {description && <InfoSummary info={description} />}
              <div className="flex gap-3 flex-wrap">
                {additionalLinks.map((link) => (
                  <AdditionalLink
                    key={link}
                    linkUrl={link}
                    handleCopyLink={() => handleCopyLink(link)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="border-t-1 border-background/10 pt-6 grid sm:grid-cols-2 gap-6">
            <div className="p-3 md:p-6 bg-deep-plum light:bg-periwinkle-blue/20 rounded-lg flex flex-col gap-4">
              <CoinSummaryStats title="Total Volume" value={totalVolume} />
              {/* <CoinSummaryStats title="Volume 24h" value="$47,714,337,481" /> */}
              <CoinSummaryStats title="Volume/Market" value={volumeByMarket} />
            </div>

            <div className="p-3 md:p-6 bg-deep-plum light:bg-periwinkle-blue/20 rounded-lg flex flex-col gap-4">
              <CoinSummaryStats title="Market Cap" value={marketCap} />
              <CoinSummaryStats
                title="Fully Diluted Valuation"
                value={fullyDilutedValuation}
              />
            </div>
            <div className="p-3 md:p-6 bg-deep-plum light:bg-periwinkle-blue/20 rounded-lg flex flex-col gap-4">
              <CoinSummaryStats title="Max Supply" value={totalSupply} />
              <CoinSummaryStats
                title="Circulating Supply"
                value={circulatingSupply}
                progressBar
                amount={`${circulationVolume.toString()}%`}
                total="100%"
                progressBarValue={circulationVolume}
              />
            </div>
          </div>
        </>
      )}

      {copyLink && (
        <div className="hidden">
          <ToastSec
            title={copyLink === "success" ? "Success!" : "Error"}
            message={
              copyLink === "success"
                ? "Link copied to the clipboard."
                : "Failed to copy link. Kindly try again."
            }
            btnLabel="Dismiss"
          />
        </div>
      )}

      {error ? (
        <div className="hidden">
          <Toast
            title="Error"
            message={`${error}. Kindly refresh the page.`}
            btnLabel="Refresh"
          />
        </div>
      ) : null}
    </div>
  );
};
