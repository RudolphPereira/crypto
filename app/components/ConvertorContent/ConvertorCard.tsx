import { CoinDropDown } from "./CoinDropDown";
import { CoinInput } from "./CoinInput";

type Props = {
  coinAbbName?: string;
  baseCoinPrice?: string;
};

export const ConvertorCard = ({ coinAbbName, baseCoinPrice }: Props) => {
  return (
    <div className="flex flex-col gap-3 text-background">
      <div className="flex flex-col justify-between md:flex-row gap-3">
        <CoinDropDown />
        <CoinInput />
      </div>
      <div className="border-t-1 border-background">
        <p className="text-sm flex gap-1 font-[400] pt-3 px-1">
          <span className="opacity-70 inline-block">1</span>
          <span className="opacity-70 inline-block">{coinAbbName} = </span>
          <span className="inline-block">{baseCoinPrice}</span>
        </p>
      </div>
    </div>
  );
};
