"use client";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TitleBox } from "../TitleBox/TitleBox";
import { CoinDetails } from "../CoinDetails/CoinDetails";
import { ConvertorCard } from "./ConvertorCard";
import Image from "next/image";
import switchIcon from "../../assets/switchIcon.svg";
import { ChartTimeline } from "../GraphContent/ChartTimeline";
import { ConvertorAreaChart } from "./ConvertorAreaChart";
import { formatDate, formatDateTime, getDomain, getIndex } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updateSliderCoinName } from "@/lib/features/graphData/graphDataSlice";
import {
  updateDropDownCoinName,
  updateDropDownCoinOneValue,
  updateDropDownCoinTwoValue,
  fetchConvertorGraphCoin,
} from "@/lib/features/convertorGraphData/convertorGraphDataSlice";
import { Toast } from "../Toast/Toast";

export const ConvertorContent = () => {
  // Current Date Time
  const [currentTime, setCurrentTime] = useState(new Date());
  const getDateTime = formatDateTime(currentTime);
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const renderDate = formatDate(new Date());

  // selectValues
  const [valueOne, setValueOne] = useState<string>("");
  const [valueTwo, setValueTwo] = useState<string>("");
  // Input Values
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValueTwo, setInputValueTwo] = useState<string>("");

  const coinData = useAppSelector((state) => state.coinData.coinList);
  const graphData = useAppSelector(
    (state) => state.convertorGraphData.convertorGraphCoinData
  );

  const sliderCoinName = useAppSelector(
    (state) => state.graphData.sliderCoinName
  );

  const numOfDaysData = useAppSelector(
    (state) => state.convertorGraphData.numOfDaysData
  );

  const dropDownCoinName = useAppSelector(
    (state) => state.convertorGraphData.dropDownCoinName
  );

  const dropDownCoinOneValue = useAppSelector(
    (state) => state.convertorGraphData.dropdownCoinOneValue
  );

  const dropDownCoinTwoValue = useAppSelector(
    (state) => state.convertorGraphData.dropdownCoinTwoValue
  );

  const coinError = useAppSelector((state) => state.coinData.error);
  const graphError = useAppSelector((state) => state.convertorGraphData.error);

  //  RTK
  const dispatch = useAppDispatch();

  const updateCoinSliderValue = (value: string) => {
    return dispatch(updateSliderCoinName(value));
  };

  const updateDropDownCoin = (value: string) => {
    return dispatch(updateDropDownCoinName(value));
  };

  const updateDropDownCoinOneNum = (value: string) => {
    return dispatch(updateDropDownCoinOneValue(value));
  };

  const updateDropDownCoinTwoNum = (value: string) => {
    return dispatch(updateDropDownCoinTwoValue(value));
  };

  useEffect(() => {
    if (valueOne === "") {
      setValueOne(coinSliderValue);
    }
    if (valueTwo === "") {
      setValueTwo(dropDownCoinName);
    }

    if (inputValue === "") {
      setInputValue(dropDownCoinOneValue);
    }

    if (inputValueTwo === "") {
      setInputValueTwo(dropDownCoinTwoValue);
    }
  }, []);

  // Convertor
  interface Coin {
    value: string;
    label: string;
    icon: string;
    symbol: string;
    price: string | number;
    [key: string]: string | number;
  }

  const coinArr: Coin[] = coinData.map((coin) => {
    return {
      value: coin.id || "",
      label: coin.name || "",
      icon: coin.image || "",
      symbol: coin.symbol || "",
      price: coin.current_price || "",
    };
  });

  const coinSliderValue = coinArr
    .filter((coin) => coin.value === sliderCoinName)
    .map((coin) => coin.value)
    .toString();

  const getCoinDetails = (value: string, key: string) => {
    const details = value
      ? coinArr?.find((coin) => coin.value === value)?.[key] || ""
      : "";
    return details;
  };

  const coinPriceOne = getCoinDetails(valueOne, "price");
  const coinSymbolOne = getCoinDetails(valueOne, "symbol");
  const coinPriceTwo = getCoinDetails(valueTwo, "price");
  const coinSymbolTwo = getCoinDetails(valueTwo, "symbol");

  const getExchangeDetails = (value: string) => {
    if (!value || isNaN(Number(value)) || Number(value) < 0) {
      setInputValueTwo("");
      updateDropDownCoinTwoNum("");
      return;
    }

    const totalValueOne = Number(coinPriceOne) * Number(value);
    const totalValueTwo = (totalValueOne / Number(coinPriceTwo) || 0).toFixed(
      2
    );
    // update RTK State
    updateDropDownCoinTwoNum(totalValueTwo);
    // update RTK State
    setInputValueTwo(totalValueTwo);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const receivedValue = e.target.value;
    setInputValue(receivedValue);

    if (receivedValue === "") {
      setInputValueTwo("");
      updateDropDownCoinTwoNum("");
    }

    // update RTK State
    updateDropDownCoinOneNum(receivedValue);
    // update RTK State
    getExchangeDetails(receivedValue);
  };

  useEffect(() => {
    getExchangeDetails(inputValue);
    // update RTK State
    updateDropDownCoin(valueTwo);
    // update RTK State

    if (valueTwo !== "") {
      dispatch(fetchConvertorGraphCoin());
    }
  }, [valueTwo, valueOne, coinData]);

  // Switch
  const handleSwitch = () => {
    const switchValueOne = valueOne;
    const switchValueTwo = valueTwo;
    setValueOne(switchValueTwo);
    setValueTwo(switchValueOne);
    // update RTK State
    updateDropDownCoin(valueTwo);
    updateCoinSliderValue(switchValueTwo);
    // update RTK State
  };

  // Graphs
  const getCoinGraphNames = (value: string) => {
    const coinName = coinArr
      .filter((coin) => coin.value === value)
      .map((coin) => `${coin.label} (${coin.symbol.toUpperCase()})`)
      .toString();
    return coinName;
  };

  const coinOneName = getCoinGraphNames(valueOne);
  const coinTwoName = getCoinGraphNames(valueTwo);

  const coinPrices = graphData?.data?.prices || [];

  const valueIndex = getIndex(numOfDaysData, coinPrices);

  const valueArr = coinPrices.filter((element, index) => {
    return (index + 2) % valueIndex === 0;
  });

  const combinedValues = valueArr.map((item) => {
    return {
      timeLine: item[0],
      value: item[1],
    };
  });

  const getDataForChart = (
    timeLine: number | string,
    value: number | null | undefined
  ) => {
    const receivedTimeLine = timeLine;
    const time = new Date(receivedTimeLine);
    let finalTimeLine: string = "";

    if (numOfDaysData === "1") {
      finalTimeLine = time.toLocaleTimeString([], {
        hour: "numeric",
        hour12: true,
      });
    } else if (
      numOfDaysData === "7" ||
      numOfDaysData === "14" ||
      numOfDaysData === "30"
    ) {
      finalTimeLine = time.toLocaleDateString([], {
        day: "2-digit",
      });
    } else if (numOfDaysData === "365") {
      finalTimeLine = time.toLocaleDateString([], {
        month: "short",
        year: "2-digit",
      });
    }

    const coinValue = value?.toFixed(2);
    const finalCoinOneValue =
      (
        (Number(coinPriceOne) * Number(inputValue)) / Number(coinValue) || 0
      ).toFixed(2) || 0;

    return {
      timeLine: finalTimeLine,
      value: Number(finalCoinOneValue),
    };
  };

  const priceData = combinedValues.map((item) =>
    getDataForChart(item.timeLine, item.value)
  );

  const coinOnePriceDomain = getDomain(priceData, "value");

  return (
    <div className="flex flex-col gap-6">
      <TitleBox title="Online currency convertor" subtitle={getDateTime} />

      <div
        className={`${
          coinError !== "" || graphError !== ""
            ? "pointer-events-none opacity-60"
            : ""
        } flex md:flex-row flex-col gap-6 w-full mt-10 md:mt-0 relative`}
      >
        <div className="flex-1 p-3 md:p-6 bg-dark-blue rounded-lg flex flex-col gap-8">
          <CoinDetails titleName="You sell" />
          <ConvertorCard
            coinAbbName={coinSymbolOne}
            baseCoinPrice={coinPriceOne}
            coinArr={coinArr}
            value={valueOne}
            setValue={setValueOne}
            handleInputChange={handleInputChange}
            inputValue={inputValue}
          />
        </div>
        <div className="flex-1 p-3 md:p-6 bg-deep-plum light:bg-white rounded-lg flex flex-col gap-8">
          <CoinDetails titleName="You buy" />
          <ConvertorCard
            coinAbbName={coinSymbolTwo}
            baseCoinPrice={coinPriceTwo}
            coinArr={coinArr}
            value={valueTwo}
            setValue={setValueTwo}
            inputReadOnly
            inputValue={inputValueTwo}
          />
        </div>
        <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          <Button
            onClick={handleSwitch}
            className="shadow group w-[3rem] h-[3rem] border border-transparent border-b-0 hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in cursor-pointer rounded-full bg-background p-0"
          >
            <Image
              src={switchIcon}
              alt="switchIcon"
              className="object-contain group-hover:invert light:invert light:brightness-10 group-hover:brightness-10 group-hover:rotate-180 transition-all ease-in duration-300"
            />
          </Button>
        </div>
      </div>

      {inputValue && valueTwo && (
        <>
          <div
            className={`${
              coinError !== "" || graphError !== ""
                ? "pointer-events-none opacity-60"
                : ""
            } flex-1 p-3 md:p-6 bg-dark-blue rounded-lg flex flex-col gap-8`}
          >
            <CoinDetails
              titleName={`${coinOneName} to ${coinTwoName}`}
              date={renderDate}
            />
            <ConvertorAreaChart
              data={priceData}
              coinOnePriceDomain={coinOnePriceDomain}
            />
          </div>

          <div className="">
            <ChartTimeline convertor />
          </div>
        </>
      )}
      {graphError !== "" || coinError !== "" ? (
        <div className="hidden">
          <Toast
            title="Error"
            message={`${coinError || graphError}. ${
              coinError ? "Kindly refresh the page" : ""
            } ${
              graphError === "Network Error"
                ? "Too many requests made! Kindly refresh the page and try once again after a minute."
                : ""
            }`}
            btnLabel="Refresh"
          />
        </div>
      ) : null}
    </div>
  );
};
