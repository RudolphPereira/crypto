import Image from "next/image";
import increaseIcon from "../../assets/increase.svg";
import decreaseIcon from "../../assets/decrease.svg";
import {
  formatNumberWithDecimals,
  formatNumberWithDecimalsAndCurrency,
} from "@/lib/utils";

type Props = {
  price?: string | number;
  currency?: string;
  percentage?: string | number;
  highStatus?: boolean;
};

export const CoinStats = ({
  price,
  currency,
  percentage,
  highStatus,
}: Props) => {
  const convertedPriceToNum = Number(price);

  const finalPrice = formatNumberWithDecimalsAndCurrency(
    convertedPriceToNum,
    0,
    2,
    currency || "usd"
  );
  const convertedPercentageToNum = Number(percentage);
  const convertedPercentageToAbs = Math.abs(convertedPercentageToNum);
  const convertedPercentageToDecimals = formatNumberWithDecimals(
    convertedPercentageToAbs,
    0,
    2
  );
  const finalPercentage = Number(convertedPercentageToDecimals);

  if (convertedPercentageToNum < 0) {
    highStatus = false;
  } else {
    highStatus = true;
  }

  return (
    <div className="flex gap-3 text-background items-center">
      {price && (
        <div className="flex gap-1 text-xs font-[400] opacity-70">
          <p>{finalPrice}</p>
          {/* <p className="uppercase">{currency}</p> */}
        </div>
      )}

      {convertedPercentageToNum !== 0 ? (
        <div className="flex gap-1.5 text-xs font-[400] items-center">
          <div className="w-[0.7rem] h-[0.7rem]">
            <Image
              src={highStatus ? increaseIcon : decreaseIcon}
              alt="percentage-icon"
              className="w-full h-full"
            />
          </div>
          <p
            className={`${
              highStatus ? "text-mint-green" : "text-deep-pink"
            } font-[400]`}
          >
            {finalPercentage}%
          </p>
        </div>
      ) : null}
    </div>
  );
};
