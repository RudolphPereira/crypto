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
import { useAppSelector } from "@/lib/hooks";
import { Toast } from "../Toast/Toast";
import toTheMoon from "../../assets/tothemoon.svg";
import { CoinSliderSkeleton } from "../Skeletons/CoinSliderSkeleton";

export const CoinSlider = () => {
  const data = useAppSelector((state) => state.coinData.coinList);
  const skeletonLoader = useAppSelector(
    (state) => state.coinData.skeletonLoader
  );
  const error = useAppSelector((state) => state.coinData.error);
  const currencyValue = useAppSelector(
    (state) => state.currencyData.currencyValue
  );

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
                {data.map((coin) => (
                  <CarouselItem
                    key={coin.id || "1"}
                    className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5 pl-0"
                  >
                    <div className="pl-2 ml-2">
                      <Button className="w-full h-full p-0 light:bg-white group">
                        <Card className="min-h-19 light:shadow-none light:bg-white rounded-sm py-4 w-full bg-black-russian border border-transparent border-b-0 text-background cursor-pointer hover:bg-periwinkle-blue/30 light:hover:bg-periwinkle-blue/30 transition-all duration-200 ease-in">
                          <CardContent className="flex items-center gap-4 px-4 ">
                            <div className="w-[2.2rem] h-[2.2rem] rounded-full group-hover:rotate-360 group-hover:scale-120 transition-all ease-in-out duration-600 bg-white p-0.5">
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
                                  percentage={coin.price_change_percentage_24h}
                                  highStatus
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Button>
                    </div>
                  </CarouselItem>
                ))}
              </>
            )}

            {/* <CarouselItem
              key="2"
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5  pl-0"
            >
              <div className="pl-2 ml-2">
                <Button className="w-full h-full p-0 light:bg-white">
                  <Card className="active light:[&.active]:bg-periwinkle-blue/30 [&.active]:bg-periwinkle-blue/40 [&.active]:border-periwinkle-blue rounded-sm py-4 w-full bg-black-russian border border-transparent border-b-0 text-background cursor-pointer hover:bg-periwinkle-blue/60 transition-all duration-200 ease-in">
                    <CardContent className="flex items-center gap-4 px-4">
                      <div className="w-[2rem] h-[2rem]">
                        <Image
                          src={bitcoinIcon}
                          alt="coin icon"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 ">
                        <div className="text-base font-[500]">
                          <p className="text-background">Bitcoin (BTC)</p>
                        </div>
                        <div className="flex gap-3">
                          <CoinStats
                            price="27,445.55"
                            currency="USD"
                            highStatus
                            percentage="2.35"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Button>
              </div>
            </CarouselItem> */}
          </CarouselContent>
          <CarouselPrevious className="group light:hover:drop-shadow-md top-28 -left-0 sm:top-1/2 sm:-left-8 size-9 sm:size-12 cursor-pointer sm:disabled:hidden text-white border-b-0 dark:bg-periwinkle-blue/30 light:bg-periwinkle-blue/60 light:hover:bg-periwinkle-blue/90 dark:hover:bg-periwinkle-blue/60 dark:border-periwinkle-blue" />
          <CarouselNext className="group light:hover:drop-shadow-md top-28 -right-0 sm:top-1/2  sm:-right-8 size-9 sm:size-12 cursor-pointer sm:disabled:hidden text-white border-b-0 light:bg-periwinkle-blue/60 light:hover:bg-periwinkle-blue/90 dark:bg-periwinkle-blue/30 dark:hover:bg-periwinkle-blue/60 dark:border-periwinkle-blue" />
        </Carousel>
      </div>
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
  );
};
