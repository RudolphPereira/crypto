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

export function formatCompactNumber(number: number) {
  if (number < 1000) {
    return number;
  } else if (number >= 1000 && number < 1000000) {
    return (number / 1000).toFixed(2) + " K";
  } else if (number >= 1000000 && number < 1000000000) {
    return (number / 1000000).toFixed(2) + " M";
  } else if (number >= 1000000000 && number < 1000000000000) {
    return (number / 1000000000).toFixed(2) + " B";
  } else if (number >= 1000000000000) {
    return (number / 1000000000000).toFixed(2) + " T";
  }
}

export function formatNumberWithDecimals(
  value: number,
  minimumFractionDigits: number,
  maximumFractionDigits: number
) {
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
  currencyValue: string | undefined
) {
  // eslint-disable-next-line
  let formattedNumber = value.toLocaleString("en-US", {
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: maximumFractionDigits,
    style: "currency",
    currency: currencyValue?.toUpperCase(),
  });
  // eslint-disable-next-line
  return formattedNumber;
}
