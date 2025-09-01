"use client";
import { AutoComplete, type Option } from "@/components/ui/autocomplete";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchCoinList } from "@/lib/features/coinData/coinDataSlice";
import { updateCoinName } from "@/lib/features/coinData/coinDataSlice";
import { Toast } from "../Toast/Toast";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export const SearchBox = () => {
  const [value, setValue] = useState<Option>();
  const data = useAppSelector((state) => state.coinData.coinList);
  const error = useAppSelector((state) => state.coinData.error);
  const router = useRouter();
  const pathname = usePathname();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCoinList());
  }, []);

  useEffect(() => {
    setCoinName(value?.value);
    if (value !== undefined) {
      router.push(`/coin-page/${value.value}`);
    }
  }, [value]);

  useEffect(() => {
    if (value !== undefined && pathname !== `/coin-page/${value.value}`) {
      setValue(undefined);
    }
  }, [pathname]);

  const setCoinName = (value: string | undefined) => {
    return dispatch(updateCoinName(value));
  };

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
        placeholder="Search a coin"
        onValueChange={setValue}
        value={value}
        key={value?.label}
      />
      {error !== "" ? (
        <div className="hidden">
          <Toast
            title="Error"
            message={`${error}. Kindly refresh page.`}
            btnLabel="Refresh"
          />
        </div>
      ) : null}
    </div>
  );
};
