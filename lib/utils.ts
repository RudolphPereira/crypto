import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
