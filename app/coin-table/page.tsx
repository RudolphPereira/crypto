"use client";
import { CoinData, columns } from "./columns";
import { DataTable } from "./data-table";
import { useAppSelector } from "@/lib/hooks";
import { formatCompactNumber } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Toast } from "../components/Toast/Toast";

export default function CoinTable() {
  const data = useAppSelector((state) => state.coinData.coinList);
  const error = useAppSelector((state) => state.coinData.error);
  const skeletonLoader = useAppSelector(
    (state) => state.coinData.skeletonLoader
  );
  const currencyValue = useAppSelector(
    (state) => state.currencyData.currencyValue
  );

  const newDataArr: CoinData[] = data.map((coin, index: number) => {
    const price = Number(coin.current_price).toFixed(0) || "";
    const finalPrice = Number(price);
    const currency = currencyValue.toUpperCase() || "";
    const oneHourPercentage = coin.price_change_percentage_1h_in_currency || "";
    const twentyFourHourPercentage = coin.price_change_percentage_24h || "";
    const sevenDayPercentage =
      coin.price_change_percentage_7d_in_currency || "";
    const twentyFourHourVolume =
      formatCompactNumber(Number(coin.total_volume), currency) || "";
    const marketCap =
      formatCompactNumber(Number(coin.market_cap), currency) || "";
    const circulation =
      formatCompactNumber(Number(coin.circulating_supply), currency) || "";
    const totalSupply =
      formatCompactNumber(Number(coin.total_supply), currency) || "";
    const volumePercentage =
      Math.round((100 * Number(coin.total_volume)) / Number(coin.market_cap)) ||
      0;
    const circulationVolume =
      Math.round(
        (100 * Number(coin.circulating_supply)) / Number(coin.total_supply)
      ) || 0;

    return {
      id: coin.id,
      number: index + 1,
      image: coin.image,
      name: coin.name,
      currency: currency,
      price: finalPrice,
      oneHourPercentage: oneHourPercentage,
      twentyFourHourPercentage: twentyFourHourPercentage,
      sevenDayPercentage: sevenDayPercentage,
      twentyFourHourVolumeByMarketCap: {
        twentyFourHourVolume: twentyFourHourVolume,
        marketCap: marketCap,
        percentage: volumePercentage,
      },
      circulatingByTotalSupply: {
        circulation: circulation,
        totalSupply: totalSupply,
        percentage: circulationVolume,
      },
      lastSevenDay: coin.sparkline_in_7d.price,
    };
  });

  const coinsToLoad: number = 5;
  const [displayRows, setDisplayRows] = useState<CoinData[]>(newDataArr);
  const [startIndex, setStartIndex] = useState<number>(0);

  useEffect(() => {
    if (newDataArr) {
      setDisplayRows(newDataArr.slice(0, coinsToLoad));
      setStartIndex(coinsToLoad);
    }
  }, [data]);

  const getMoreData = () => {
    setTimeout(() => {
      const nextEndIndex = Math.min(
        startIndex + coinsToLoad,
        newDataArr.length
      );
      setDisplayRows((prevItems) => [
        ...prevItems,
        ...newDataArr.slice(startIndex, nextEndIndex),
      ]);
      setStartIndex(nextEndIndex);
    }, 1250);
  };

  return (
    <div>
      <DataTable
        columns={columns}
        data={displayRows}
        coinList={newDataArr}
        getMoreData={getMoreData}
        skeletonLoader={skeletonLoader}
      />
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
  );
}
