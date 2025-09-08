"use client";
import { formatNumberWithDecimalsAndCurrency } from "@/lib/utils";
import { CoinDetails } from "../CoinDetails/CoinDetails";
import { PortfolioCard } from "./PortfolioCard";
import { PortfolioStats } from "./PortfolioStats";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ActionBtn } from "../AppButtons/AppBtns";
import {
  updateLocalData,
  removeCoin,
} from "@/lib/features/portfolioData/portfolioDataSlice";
import { PortfolioCardSkeleton } from "../Skeletons/PortfolioCardSkeleton";
import { Toast } from "../Toast/Toast";
import { useEffect, useState } from "react";

export const PortfolioContent = () => {
  const dispatch = useAppDispatch();
  const mainCoinData = useAppSelector((state) => state.coinData.coinList);
  const portfolioData = useAppSelector((state) => state.portfolioData.coinList);
  const currencyValue = useAppSelector(
    (state) => state.currencyData.currencyValue
  );
  const portfolioSkeletonLoader = useAppSelector(
    (state) => state.portfolioData.skeletonLoader
  );
  const error = useAppSelector((state) => state.portfolioData.error);

  const handleRemoveCoin = (coinId: string | undefined) => {
    if (!coinId) return;
    dispatch(removeCoin(coinId));
  };

  type DisplayCoins = {
    id?: string | undefined;
    name?: string | undefined;
    currentPrice?: number | undefined;
    date?: string | undefined;
    noOfCoins?: string | number;
    image?: string;
    symbol?: string;
    latestCurrentPrice?: string;
    twentyFourHour?: string;
    marketCap?: string;
    totalVolume?: string;
    cirSupply?: string;
    totalSupply?: string;
  };

  const displayData: DisplayCoins[] = [];

  const data = portfolioData?.map((coin) => {
    const coinDetails = mainCoinData?.find((item) => item.id === coin.id);
    return {
      id: coin?.id,
      name: coin?.name,
      currentPrice: coin?.currentPrice,
      date: coin?.date,
      noOfCoins: coin?.noOfCoins,
      image: coinDetails?.image,
      symbol: coinDetails?.symbol,
      latestCurrentPrice: coinDetails?.current_price,
      twentyFourHour: coinDetails?.price_change_percentage_24h,
      marketCap: coinDetails?.market_cap,
      totalVolume: coinDetails?.total_volume,
      cirSupply: coinDetails?.circulating_supply,
      totalSupply: coinDetails?.total_supply,
    };
  });

  const displayArr = [...displayData, ...data];

  // Local storage
  const [savedDisplayArr, setSavedDisplayArr] = useState<DisplayCoins[]>([]);

  useEffect(() => {
    if (!mainCoinData.length) return;
    const storedData = localStorage.getItem("portfolioArr");
    if (storedData) {
      const parsedData: DisplayCoins[] = JSON.parse(storedData);
      dispatch(updateLocalData(parsedData));
      const newData = parsedData.map((coin) => {
        const coinDetails = mainCoinData?.find((item) => item.id === coin.id);
        return {
          id: coin?.id,
          name: coin?.name,
          currentPrice: coin?.currentPrice,
          date: coin?.date,
          noOfCoins: coin?.noOfCoins,
          image: coinDetails?.image,
          symbol: coinDetails?.symbol,
          latestCurrentPrice: coinDetails?.current_price,
          twentyFourHour: coinDetails?.price_change_percentage_24h,
          marketCap: coinDetails?.market_cap,
          totalVolume: coinDetails?.total_volume,
          cirSupply: coinDetails?.circulating_supply,
          totalSupply: coinDetails?.total_supply,
        };
      });

      const displayArr = [...displayData, ...newData];
      setSavedDisplayArr(displayArr);
    }
  }, [mainCoinData]);

  useEffect(() => {
    if (displayArr.length > 0) {
      localStorage.setItem("portfolioArr", JSON.stringify(portfolioData));
      setSavedDisplayArr(displayArr);
    } else {
      localStorage.removeItem("portfolioArr");
      setSavedDisplayArr([]);
    }
  }, [portfolioData]);

  return (
    <>
      {savedDisplayArr.length === 0 ? (
        <div className="bg-dark-blue light:bg-periwinkle-blue/20 p-3 md:p-6 rounded-lg h-[15rem] flex justify-center items-center shadow-xs">
          <p className="text-background text-center text-base">
            The portfolio is currently empty.
          </p>
        </div>
      ) : (
        <div className="flex flex-col-reverse gap-6">
          {savedDisplayArr.map((coin) => {
            const totalPurchaseValue =
              Number(coin.currentPrice) * Number(coin.noOfCoins) || 0;

            const totalPercentageValue =
              Number(
                (
                  ((Number(coin?.latestCurrentPrice) -
                    Number(coin?.currentPrice)) /
                    Number(coin?.currentPrice)) *
                  100
                ).toFixed(0)
              ) || 0;

            const marketByVolume =
              (
                (Number(coin.totalVolume) / Number(coin.marketCap)) *
                100
              ).toFixed(0) || "";

            const cirBySupply =
              (
                (Number(coin.cirSupply) / Number(coin.totalSupply)) *
                100
              ).toFixed(0) || "";

            const purchaseValue = formatNumberWithDecimalsAndCurrency(
              Number(totalPurchaseValue),
              0,
              0,
              currencyValue
            );

            const latestCurrPrice = formatNumberWithDecimalsAndCurrency(
              Number(coin.latestCurrentPrice),
              0,
              0,
              currencyValue
            );

            return (
              <>
                {portfolioSkeletonLoader ? (
                  <PortfolioCardSkeleton key={coin.id} />
                ) : (
                  <PortfolioCard
                    key={coin.id}
                    coinDetails={
                      <CoinDetails
                        coinName={`${
                          coin.name
                        } (${coin.symbol?.toUpperCase()})`}
                        coinImage={coin.image}
                        titleName="Total Value"
                        value={purchaseValue}
                        date={`Purchased on ${coin.date}`}
                        numberOfCoins={`${
                          coin.noOfCoins
                        } ${coin.symbol?.toUpperCase()}`}
                        percentage={totalPercentageValue}
                        additionalImageBoxClass="w-[2.2rem] h-[2.2rem]"
                        pageLink={coin.id}
                      />
                    }
                    removeBtn={
                      <ActionBtn
                        handleOnCLick={() => handleRemoveCoin(coin.id)}
                        key={coin.id}
                        btnTitle="Remove Coin"
                        additionalClass="w-fit hover:bg-deep-pink/40 hover:border-deep-pink/50"
                      />
                    }
                    portfolioStats={
                      <>
                        <PortfolioStats
                          title={latestCurrPrice}
                          subTitle="Current price"
                        />
                        <PortfolioStats
                          subTitle="24h%"
                          icon
                          percentage={coin.twentyFourHour}
                        />
                        <PortfolioStats
                          subTitle="Market cap vs volume"
                          percentage={marketByVolume}
                          progressValue={Number(marketByVolume)}
                        />
                        <PortfolioStats
                          subTitle="Circ supply vs max supply"
                          icon
                          percentage={cirBySupply}
                        />
                      </>
                    }
                  />
                )}
              </>
            );
          })}
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
    </>
  );
};
