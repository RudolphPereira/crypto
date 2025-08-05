import Image from "next/image";
import increaseIcon from "../../assets/increase.svg";
import decreaseIcon from "../../assets/decrease.svg";
import { formatNumberWithDecimals } from "@/lib/utils";

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
  const finalPrice = formatNumberWithDecimals(convertedPriceToNum);
  const convertedPercentageToNum = Number(percentage);
  const convertedPercentageToAbs = Math.abs(convertedPercentageToNum);
  const finalPercentage = formatNumberWithDecimals(convertedPercentageToAbs);

  if (convertedPercentageToNum < 0) {
    highStatus = false;
  } else {
    highStatus = true;
  }

  return (
    <div className="flex gap-3 text-background">
      {price && (
        <div className="flex gap-1 text-xs font-[400] opacity-70">
          <p>{finalPrice}</p>
          <p className="uppercase">{currency}</p>
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
