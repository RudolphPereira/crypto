import { formatNumberWithDecimalsAndCurrency } from "@/lib/utils";
import { CoinDropDown } from "./CoinDropDown";
import { CoinInput } from "./CoinInput";
import { SetStateAction, Dispatch, ChangeEventHandler } from "react";
import { useAppSelector } from "@/lib/hooks";

type Props = {
  coinAbbName?: string | number | undefined;
  baseCoinPrice?: string | number | undefined;
  coinArr?:
    | {
        value: string;
        label: string;
        icon: string;
        symbol: string;
        price: string | number;
        [key: string]: string | number;
      }[]
    | undefined;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  inputReadOnly?: boolean;
  handleInputChange?: ChangeEventHandler<HTMLInputElement>;
  inputValue?: string;
};

export const ConvertorCard = ({
  coinAbbName,
  baseCoinPrice,
  coinArr,
  value,
  setValue,
  inputReadOnly,
  handleInputChange,
  inputValue,
}: Props) => {
  const currencyValue: string = useAppSelector(
    (state) => state.currencyData.currencyValue
  );

  const coinPrice = formatNumberWithDecimalsAndCurrency(
    Number(baseCoinPrice),
    0,
    2,
    currencyValue || "usd"
  );

  return (
    <div className="flex flex-col gap-3 text-background">
      <div className="flex flex-col justify-between md:flex-row gap-3">
        <CoinDropDown coinArr={coinArr} value={value} setValue={setValue} />
        <CoinInput
          inputReadOnly={inputReadOnly}
          handleInputChange={handleInputChange}
          inputValue={inputValue}
        />
      </div>

      <div className="border-t-1 border-background">
        <p className="text-sm flex gap-1 font-[400] pt-3 px-1">
          {coinAbbName ? (
            <>
              <span className="opacity-70 inline-block">1</span>
              <span className="opacity-70 inline-block">
                {coinAbbName?.toString().toUpperCase()}
                {coinAbbName ? " =" : ""}
              </span>
            </>
          ) : (
            ""
          )}
          <span className="inline-block">{coinPrice}</span>
        </p>
      </div>
    </div>
  );
};
