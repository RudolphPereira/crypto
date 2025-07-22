import Image from "next/image";
import increaseIcon from "../../assets/increase.svg";
import decreaseIcon from "../../assets/decrease.svg";

type Props = {
  price?: string;
  currency?: string;
  percentage: string;
  highStatus?: boolean;
};

export const CoinStats = ({
  price,
  currency,
  percentage,
  highStatus,
}: Props) => {
  return (
    <div className="flex gap-3 text-background">
      {price && (
        <div className="flex gap-1 text-xs font-[400] opacity-70">
          <p>{price}</p>
          <p>{currency}</p>
        </div>
      )}

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
          {percentage}%
        </p>
      </div>
    </div>
  );
};
