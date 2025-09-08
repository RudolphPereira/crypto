import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Create your Axios instance
const axiosInstance = Axios.create();
// Apply the cache interceptor
const axios = setupCache(axiosInstance);
export default axios;

export function formatNumberWithDecimals(
  value: number,
  minimumFractionDigits: number,
  maximumFractionDigits: number
) {
  if (value == null) return "-";
  // eslint-disable-next-line
  let formattedNumber = value.toLocaleString("en-US", {
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: maximumFractionDigits,
  });
  // eslint-disable-next-line
  return formattedNumber;
}

export function formatNumberWithDecimalsAndCurrency(
  value: number,
  minimumFractionDigits: number,
  maximumFractionDigits: number,
  currencyValue?: string | undefined
) {
  if (value == null) return "-";
  if (currencyValue) {
    // eslint-disable-next-line
    const formattedNumber = value.toLocaleString("en-US", {
      minimumFractionDigits: minimumFractionDigits,
      maximumFractionDigits: maximumFractionDigits,
      style: "currency",
      currency: currencyValue?.toUpperCase(),
    });
    // eslint-disable-next-line
    return formattedNumber;
  } else {
    const formattedNumber = value.toLocaleString("en-US", {
      minimumFractionDigits: minimumFractionDigits,
      maximumFractionDigits: maximumFractionDigits,
    });
    // eslint-disable-next-line
    return formattedNumber;
  }
}

export function formatCompactNumber(
  number: number,
  currencyValue?: string | undefined
) {
  if (number == null) return "-";
  if (number < 1000) {
    return formatNumberWithDecimalsAndCurrency(number, 0, 2, currencyValue);
  } else if (number >= 1000 && number < 1000000) {
    return (
      formatNumberWithDecimalsAndCurrency(number / 1000, 0, 2, currencyValue) +
      " K"
    );
  } else if (number >= 1000000 && number < 1000000000) {
    return (
      formatNumberWithDecimalsAndCurrency(
        number / 1000000,
        0,
        2,
        currencyValue
      ) + " M"
    );
  } else if (number >= 1000000000 && number < 1000000000000) {
    return (
      formatNumberWithDecimalsAndCurrency(
        number / 1000000000,
        0,
        2,
        currencyValue
      ) + " B"
    );
  } else if (number >= 1000000000000) {
    return (
      formatNumberWithDecimalsAndCurrency(
        number / 1000000000000,
        0,
        2,
        currencyValue
      ) + " T"
    );
  }
}

export const formatDate = (date: Date) => {
  const currentDate: string = date.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return currentDate;
};

export const formatDateTime = (date: Date) => {
  const currentDateTime = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
    .format(date)
    .replace(/,/, "")
    .toUpperCase();

  return currentDateTime;
};

// eslint-disable-next-line
export const getIndex = (dayValue: string, arr: number[][]) => {
  let numIndex: number = 1;
  if (dayValue === "1") {
    numIndex = Math.round(arr.length / 12);
  } else if (dayValue === "7") {
    numIndex = Math.round(arr.length / 7);
  } else if (dayValue === "14") {
    numIndex = Math.round(arr.length / 14);
  } else if (dayValue === "30") {
    numIndex = Math.round(arr.length / 30);
  } else if (dayValue === "365") {
    numIndex = Math.round(arr.length / 365);
  }
  return numIndex;
};

export type Item = {
  timeLine: number | string;
  [key: string]: number | null | string;
};

export const renderGraphData = (
  numOfDaysData: string,
  arr: number[][],
  arr2: number[][],
  arr3: number[][],
  coinNames: string[]
) => {
  const valueIndex = getIndex(numOfDaysData, arr);
  const valueIndex2 = getIndex(numOfDaysData, arr2);
  const valueIndex3 = getIndex(numOfDaysData, arr3);

  const valueArr = arr.filter((element, index) => {
    return (index + 2) % valueIndex === 0;
  });

  const valueArrTwo = arr2.filter((element, index) => {
    return (index + 2) % valueIndex2 === 0;
  });

  const valueArrThree = arr3.filter((element, index) => {
    return (index + 2) % valueIndex3 === 0;
  });

  const combinedValues: Item[] = valueArr.map((item, index) => {
    return {
      timeLine: item[0],
      [coinNames[0] || "Coin One"]: item[1],
      [coinNames[1] || "Coin Two"]: valueArrTwo[index]?.[1] ?? null,
      [coinNames[2] || "Coin Three"]: valueArrThree[index]?.[1] ?? null,
    };
  });

  const getDataForChart = (
    timeLine: number | string,
    coinOne: number | null | undefined,
    coinTwo: number | null | undefined,
    coinThree: number | null | undefined
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
        // month: "short",
      });
    } else if (numOfDaysData === "365") {
      finalTimeLine = time.toLocaleDateString([], {
        month: "short",
        year: "2-digit",
      });
    }

    const coinOneValue = coinOne?.toFixed(2);
    const coinTwoValue = coinTwo?.toFixed(2);
    const coinThreeValue = coinThree?.toFixed(2);
    const finalCoinOneValue = Number(coinOneValue) || 0;
    const finalCoinTwoValue = Number(coinTwoValue) || 0;
    const finalCoinThreeValue = Number(coinThreeValue) || 0;

    return {
      timeLine: finalTimeLine,
      [coinNames[0] || "Coin One"]: finalCoinOneValue,
      [coinNames[1] || "Coin Two"]: finalCoinTwoValue,
      [coinNames[2] || "Coin Three"]: finalCoinThreeValue,
    };
  };

  const receivedValueArr = combinedValues.map((item) =>
    getDataForChart(
      item.timeLine,
      item[coinNames[0] || "Coin One"] as number,
      item[coinNames[1] || "Coin Two"] as number,
      item[coinNames[2] || "Coin Three"] as number
    )
  );

  return receivedValueArr;
};

export const formatDomain = (values: number[]) => {
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);
  const dataMinNum = Number(dataMin);
  const dataMaxNum = Number(dataMax);
  const padding = (dataMaxNum - dataMinNum) * 0.5;
  const domain = [dataMinNum - padding, dataMaxNum + padding];
  return domain;
};

export const getDomain = (arr: Item[], key: string) => {
  if (arr.length === 0) return [];
  const values = arr
    .map((item) => item[key])
    .filter(
      (value): value is number => typeof value === "number" && !isNaN(value)
    );

  if (values.length === 0) return [];

  const domain = formatDomain(values);
  return domain;
};

export const coinDomainMoreThanZero = (arr: number[] | undefined) => {
  if (!arr) return undefined;
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum > 0 ? arr : undefined;
};
