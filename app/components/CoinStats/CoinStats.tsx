import Image from "next/image";
// import increaseIcon from "../../assets/increase.svg";
import decreaseIcon from "../../assets/decrease.svg";

type Props = {
  price?: string;
  currency?: string;
  icon: string;
  percentage: string;
};

export const CoinStats = ({ price, currency, icon, percentage }: Props) => {
  return (
    <div className="flex gap-3">
      {price && (
        <div className="flex gap-1 text-xs font-[400] opacity-70">
          <p>{price}</p>
          <p>{currency}</p>
        </div>
      )}

      <div className="flex gap-1.5 text-xs font-[400] items-center">
        <div className="w-[0.7rem] h-[0.7rem]">
          <Image src={icon} alt="percentage-icon" className="w-full h-full" />
        </div>
        <p
          className={`${
            icon === decreaseIcon ? "text-deep-pink" : "text-mint-green"
          } font-[400]`}
        >
          {percentage}%
        </p>
      </div>
    </div>
  );
};
