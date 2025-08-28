"use client";
import { CoinDetails } from "../CoinDetails/CoinDetails";
import { ChartAreaGradient } from "./AreaChart";
import { ChartBarStacked } from "./BarChart";
import { CoinBadge } from "./CoinBadge";
import { ChartTimeline } from "./ChartTimeline";
import {
  formatCompactNumber,
  formatDate,
  getDomain,
  renderGraphData,
} from "../../../lib/utils";
import { useAppSelector } from "@/lib/hooks";
import { ChartConfig } from "@/components/ui/chart";
import { GraphContentSkeleton } from "../Skeletons/GraphContentSkeleton";

export const GraphContent = () => {
  const coinData = useAppSelector((state) => state.coinData.coinList);
  const data = useAppSelector((state) => state.graphData.graphCoinList) || [];
  const numOfDaysData = useAppSelector(
    (state) => state.graphData.numOfDaysData
  );

  const graphDataError = useAppSelector((state) => state.graphData.error);
  const graphSkeleton = useAppSelector(
    (state) => state.graphData.skeletonLoader
  );

  // Coin Details Start here
  const currencyValue = useAppSelector(
    (state) => state.currencyData.currencyValue
  );
  const getCoinDetails = coinData.filter((coin) => {
    const graphCoinName = data.find((item) =>
      item.data ? item.coinName === coin.id : ""
    );
    return graphCoinName;
  });

  const coinName = getCoinDetails
    .map((coin) => [coin.name, `(${coin.symbol.toUpperCase()})`].join(" "))
    .join(" - ");

  const coinPrice = getCoinDetails
    .map((coin) =>
      formatCompactNumber(Number(coin.current_price), currencyValue)
    )
    .join(" - ");

  const coinVolume = getCoinDetails
    .map((coin) =>
      formatCompactNumber(Number(coin.total_volume), currencyValue)
    )
    .join(" - ");

  const renderDate = formatDate(new Date());
  // COinDetails End here

  // Graphs start here
  const coinGraphInfo = data.map((item) => {
    const coinObj = {
      coinName: item.coinName,
      prices: item.data?.prices || [],
      volume: item.data?.total_volumes || [],
    };
    return coinObj;
  });

  const prices = coinGraphInfo.map((item) => item.prices);
  const volumes = coinGraphInfo.map((item) => item.volume);
  const coinNames = coinGraphInfo.map((item) => item.coinName);

  const coinOnePrices = prices[0] || [];
  const coinTwoPrices = prices[1] || [];
  const coinThreePrices = prices[2] || [];

  const coinOneVolume = volumes[0] || [];
  const coinTwoVolume = volumes[1] || [];
  const coinThreeVolume = volumes[2] || [];

  const priceData = renderGraphData(
    numOfDaysData,
    coinOnePrices,
    coinTwoPrices,
    coinThreePrices,
    coinNames
  );

  const volumeData = renderGraphData(
    numOfDaysData,
    coinOneVolume,
    coinTwoVolume,
    coinThreeVolume,
    coinNames
  );

  const coinOnePriceDomain = getDomain(priceData, coinNames[0]);
  const coinTwoPriceDomain = getDomain(priceData, coinNames[1]);
  const coinThreePriceDomain = getDomain(priceData, coinNames[2]);

  // const coinOneVolumeDomain = getDomain(volumeData, coinNames[0]);
  const coinTwoVolumeDomain = getDomain(volumeData, coinNames[1]);
  const coinThreeVolumeDomain = getDomain(volumeData, coinNames[2]);

  const chartConfig = {
    coinOne: {
      label: coinNames[0],
      color: "var(--chart-1)",
    },
    coinTwo: {
      label: coinNames[1],
      color: "var(--chart-2) ",
    },
    coinThree: {
      label: coinNames[2],
      color: "var(--chart-3)",
    },
  } satisfies ChartConfig;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex lg:flex-row flex-col gap-6 w-full mt-10 md:mt-0">
        {graphSkeleton ? (
          <>
            <GraphContentSkeleton />
          </>
        ) : (
          <>
            <div
              className={`flex-1 p-3 md:p-6 bg-dark-blue rounded-lg flex flex-col ${
                graphDataError ? "opacity-40 pointer-events-none" : ""
              }`}
            >
              <CoinDetails
                titleName={coinName || "Coin"}
                value={coinPrice || "0"}
                date={renderDate}
              />
              <ChartAreaGradient
                data={priceData}
                coinOnePriceDomain={coinOnePriceDomain}
                coinTwoPriceDomain={coinTwoPriceDomain}
                coinThreePriceDomain={coinThreePriceDomain}
                coinNames={coinNames}
                chartConfig={chartConfig}
              />
            </div>
            <div
              className={`flex-1 p-3 md:p-6 bg-deep-plum light:bg-white rounded-lg flex flex-col ${
                graphDataError ? "opacity-40 pointer-events-none" : ""
              }`}
            >
              <CoinDetails
                titleName="Volume 24h"
                value={coinVolume || "0"}
                date={renderDate}
              />
              <ChartBarStacked
                data={volumeData}
                coinTwoVolumeDomain={coinTwoVolumeDomain}
                coinThreeVolumeDomain={coinThreeVolumeDomain}
                coinNames={coinNames}
                chartConfig={chartConfig}
              />
            </div>
          </>
        )}
      </div>

      <CoinBadge coinNames={coinNames} />
      <ChartTimeline />
    </div>
  );
};
