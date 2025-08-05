"use client";
import { AutoComplete, type Option } from "@/components/ui/autocomplete";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchCoinList } from "@/lib/features/coinData/coinDataSlice";
import { updateCoinName } from "@/lib/features/coinData/coinDataSlice";
import { Toast } from "../Toast/Toast";

export const SearchBox = () => {
  const [value, setValue] = useState<Option>();
  const data = useAppSelector((state) => state.coinData.coinList);
  const error = useAppSelector((state) => state.coinData.error);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCoinList());
  }, []);

  const setCoinName = (value: string | undefined) => {
    return dispatch(updateCoinName(value));
  };

  useEffect(() => {
    setCoinName(value?.value);
  }, [value]);

  const coinArr = data.map((coin) => ({
    value: coin.id,
    label: coin.name,
  }));

  type CoinList = {
    value: string;
    label: string;
  };

  const coinNameArr = coinArr as CoinList[];

  return (
    <div className="sm:min-w-[20rem]">
      <AutoComplete
        options={coinNameArr}
        emptyMessage="No results."
        placeholder="Search Coin"
        onValueChange={setValue}
        value={value}
        key={value?.label}
      />
      {error !== "" ? (
        <div className="hidden">
          <Toast
            title="Error"
            message={`${error}. Kindly refresh page.`}
            btnLabel="Close"
          />
        </div>
      ) : null}
    </div>
  );
};
