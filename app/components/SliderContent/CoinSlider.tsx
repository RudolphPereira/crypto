"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CoinStats } from "../CoinStats/CoinStats";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { Toast } from "../Toast/Toast";
import toTheMoon from "../../assets/tothemoon.svg";
import { CoinSliderSkeleton } from "../Skeletons/CoinSliderSkeleton";
import { MouseEvent } from "react";
import { updateSliderCoinName } from "@/lib/features/graphData/graphDataSlice";
import { fetchGraphCoinList } from "@/lib/features/graphData/graphDataSlice";
import { updateGraphCoinCompareList } from "@/lib/features/graphData/graphDataSlice";

export const CoinSlider = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.coinData.error);
  const graphDataError = useAppSelector((state) => state.graphData.error);
  const data = useAppSelector((state) => state.coinData.coinList);
  const graphData = useAppSelector((state) => state.graphData.graphCoinList);
  const compareStatus = useAppSelector(
    (state) => state.graphData.compareStatus
  );

  const activeCoins = graphData
    .filter((item) => item.isActive)
    .map((item) => item.coinName);

  const skeletonLoader = useAppSelector(
    (state) => state.coinData.skeletonLoader
  );
  const currencyValue = useAppSelector(
    (state) => state.currencyData.currencyValue
  );

  const updateGraphCoin = (value: string) => {
    return dispatch(updateSliderCoinName(value));
  };

  const updateGraphData = () => {
    if (graphData.length > 2 && compareStatus) {
      setTimeout(() => {
        dispatch(fetchGraphCoinList());
      }, 700);
    } else {
      dispatch(fetchGraphCoinList());
    }
  };

  const updateCompareCoin = (value: string) => {
    return dispatch(
      updateGraphCoinCompareList({
        coinName: value,
      })
    );
  };

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    updateGraphCoin(e.currentTarget.value);
    updateCompareCoin(e.currentTarget.value);
    updateGraphData();
  };

  return (
    <div className="coinSlider">
      <div className="w-full">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent className="">
            {skeletonLoader ? (
              <>
                <CoinSliderSkeleton />
                <CoinSliderSkeleton />
                <CoinSliderSkeleton />
                <CoinSliderSkeleton />
                <CoinSliderSkeleton />
              </>
            ) : (
              <>
                {data.map((coin) => {
                  const isActive = activeCoins.includes(coin.id);
                  return (
                    <CarouselItem
                      key={coin.id || "1"}
                      className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5 pl-0"
                    >
                      <div className="pl-2 ml-2">
                        <Button
                          disabled={
                            (isActive && graphData.length === 1) ||
                            graphDataError !== ""
                          }
                          value={coin.id}
                          className={`w-full h-full p-0 light:bg-white disabled:opacity-100 ${
                            graphDataError !== ""
                              ? "disabled:opacity-40"
                              : "disabled:opacity-100"
                          } group`}
                          onClick={handleOnClick}
                        >
                          <Card
                            className={`${
                              isActive ? "active" : ""
                            } group/scaleImage min-h-19 light:[&.active]:bg-periwinkle-blue/30 [&.active]:bg-periwinkle-blue/40 [&.active]:border-periwinkle-blue light:shadow-none light:bg-white rounded-sm py-4 w-full bg-black-russian border border-transparent border-b-0 text-background cursor-pointer hover:bg-periwinkle-blue/30 light:hover:bg-periwinkle-blue/30 transition-all duration-150 ease `}
                          >
                            <CardContent className="flex items-center gap-4 px-4">
                              <div className="w-[2.2rem] h-[2.2rem] rounded-full group-hover:rotate-360 group-hover:scale-120 group-[&.active]/scaleImage:scale-120 group-[&.active]/scaleImage:rotate-360  transition-all ease-in-out duration-600 bg-white p-0.5">
                                <Image
                                  width={100}
                                  height={100}
                                  src={coin.image || toTheMoon}
                                  alt={coin.id || "coin"}
                                  className="w-full h-full object-contain shadow-md rounded-full"
                                />
                              </div>
                              <div className="flex flex-col items-start gap-1">
                                <div className="text-base font-[500]">
                                  <p className="text-left truncate w-40">
                                    {coin.name}
                                    <span className="uppercase ml-2 inline-block">
                                      ({coin.symbol})
                                    </span>
                                  </p>
                                </div>
                                <div className="flex gap-3">
                                  <CoinStats
                                    price={coin.current_price}
                                    currency={currencyValue}
                                    percentage={
                                      coin.price_change_percentage_24h
                                    }
                                    highStatus
                                  />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Button>
                      </div>
                    </CarouselItem>
                  );
                })}
              </>
            )}
          </CarouselContent>
          <CarouselPrevious className="group light:hover:drop-shadow-md top-28 -left-0 sm:top-1/2 sm:-left-8 size-9 sm:size-12 cursor-pointer sm:disabled:hidden text-white border-b-0 dark:bg-periwinkle-blue/30 light:bg-periwinkle-blue/60 light:hover:bg-periwinkle-blue/90 dark:hover:bg-periwinkle-blue/60 dark:border-periwinkle-blue" />
          <CarouselNext className="group light:hover:drop-shadow-md top-28 -right-0 sm:top-1/2  sm:-right-8 size-9 sm:size-12 cursor-pointer sm:disabled:hidden text-white border-b-0 light:bg-periwinkle-blue/60 light:hover:bg-periwinkle-blue/90 dark:bg-periwinkle-blue/30 dark:hover:bg-periwinkle-blue/60 dark:border-periwinkle-blue" />
        </Carousel>
      </div>
      {error || graphDataError !== "" ? (
        <div className="hidden">
          <Toast
            title="Error"
            message={`${error || graphDataError}. ${
              error ? "Kindly refresh the page" : ""
            } ${
              graphDataError === "Network Error"
                ? "Too many requests made! Kindly refresh the page and try once again after a minute."
                : ""
            }`}
            btnLabel="Close"
          />
        </div>
      ) : null}
    </div>
  );
};
