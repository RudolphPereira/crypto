"use client";
import { useEffect } from "react";
import { InfoText } from "./InfoText";
import { InfoProgress } from "./InfoProgress";
import coinIcon from "../../assets/flash-circle.svg";
import exchangeIcon from "../../assets/recovery-convert.svg";
// import increaseIcon from "../../assets/increase.svg";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchMarketData } from "@/lib/features/marketData/marketDataSlice";
import { formatCompactNumber } from "@/lib/utils";
import { InfoTextSkeleton } from "../Skeletons/InfoTextSkeleton";
import { InfoProgressSkeleton } from "../Skeletons/InfoProgressSkeleton";
import { Toast } from "../Toast/Toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const TopInfoBar = () => {
  const data = useAppSelector((state) => state.marketData);
  const coinData = useAppSelector((state) => state.coinData.coinList);
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

  const coinImages = coinData
    .filter((coin) => coin.id === "bitcoin" || coin.id === "ethereum")
    .map((coin) => coin.image);

  return (
    <div className="bg-deep-plum px-2 py-3 border-b border-b-white/10 text-white flex justify-center w-full min-h-14">
      <div className="flex items-center w-full sm:w-auto sm:justify-center">
        <Carousel
          className="w-full overflow-hidden"
          opts={{ align: "start", loop: true, duration: 2000 }}
          plugins={[
            Autoplay({
              delay: 0,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
        >
          <CarouselContent className="">
            {loading ? (
              <>
                <CarouselItem>
                  <InfoTextSkeleton image title />
                </CarouselItem>
                <CarouselItem>
                  <InfoTextSkeleton image title />
                </CarouselItem>
                <CarouselItem>
                  <InfoTextSkeleton />
                </CarouselItem>
                <CarouselItem>
                  <InfoProgressSkeleton />
                </CarouselItem>
                <CarouselItem>
                  <InfoProgressSkeleton />
                </CarouselItem>
                <CarouselItem>
                  <InfoProgressSkeleton />
                </CarouselItem>
              </>
            ) : (
              <>
                <CarouselItem className="w-fit basis-auto flex sm:justify-center">
                  <InfoText
                    image={coinIcon}
                    iconSize="w-[1.15rem] h-[1.15rem]"
                    title="Coins"
                    value={data.marketData.coins.toLocaleString()}
                    toolTipContent="Number of cryptocurrencies currently active on the market"
                  />
                </CarouselItem>
                <CarouselItem className="w-fit  basis-auto flex sm:justify-center">
                  <InfoText
                    image={exchangeIcon}
                    iconSize="w-[1.15rem] h-[1.15rem]"
                    title="Exchanges"
                    value={data.marketData.markets.toLocaleString()}
                    toolTipContent="Number of cryptocurrency exchanges currently tracked"
                  />
                </CarouselItem>
                <CarouselItem className="w-fit   basis-auto flex sm:justify-center">
                  <InfoText
                    value={totalMarketCap}
                    toolTipContent={`Combined market capitalization of all cryptocurrencies, in ${currencyValue.toUpperCase()}`}
                  />
                </CarouselItem>
                <CarouselItem className="w-fit   basis-auto flex sm:justify-center">
                  <InfoProgress
                    progressValue={roundedTotalPercentage}
                    value={`${totalVolume}`}
                    progressColor="[&>div]:bg-white"
                    toolTipContent={`Total trading volume across all cryptocurrencies in the last 24 hours, in ${currencyValue.toUpperCase()}`}
                  />
                </CarouselItem>
                <CarouselItem className="w-fit   basis-auto flex sm:justify-center">
                  <InfoProgress
                    image={coinImages[0] || coinIcon}
                    value={`${btcPercentage} %`}
                    progressValue={btcPercentage}
                    progressColor="[&>div]:bg-orange"
                    toolTipContent="Bitcoin's share of the total cryptocurrency market capitalization"
                  />
                </CarouselItem>
                <CarouselItem className="w-fit   basis-auto flex sm:justify-center">
                  <InfoProgress
                    image={coinImages[1] || coinIcon}
                    value={`${ethPercentage} %`}
                    progressValue={ethPercentage}
                    progressColor="[&>div]:bg-pastel-blue"
                    toolTipContent="Ethereum's share of the total cryptocurrency market capitalization"
                  />
                </CarouselItem>
              </>
            )}
          </CarouselContent>
        </Carousel>
        {error !== "" ? (
          <div className="hidden">
            <Toast
              title="Error"
              message={`${error}. Kindly refresh page.`}
              btnLabel="Refresh"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
