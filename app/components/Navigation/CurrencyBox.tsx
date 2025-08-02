"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Toast } from "../Toast/Toast";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchCurrencyList } from "@/lib/features/currencyListData/currencyListSlice";
import { updateCurrencyValue } from "@/lib/features/currencyListData/currencyListSlice";
import { CurrencyBoxSkeleton } from "../Skeletons/CurrencyBoxSkeleton";

export function CurrencyBox() {
  const [open, setOpen] = useState(false);
  const data = useAppSelector((state) => state.currencyListData.currencyList);
  const loading = useAppSelector((state) => state.currencyListData.loading);
  const error = useAppSelector((state) => state.currencyListData.error);
  const currencyValue = useAppSelector(
    (state) => state.currencyListData.currencyValue
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrencyList());
  }, []);

  const setCurrencyValue = (value: string) => {
    return dispatch(updateCurrencyValue(value));
  };

  return (
    <>
      {loading ? (
        <CurrencyBoxSkeleton />
      ) : (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div
              role="combobox"
              aria-expanded={open}
              className="flex justify-between items-center gap-2 px-2 h-10 outline-none rounded-sm border border-white/15 bg-black-russian text-sm w-[7rem] cursor-pointer"
            >
              <Avatar className="rounded-sm h-6 w-6">
                <AvatarFallback className="rounded-sm bg-background text-foreground  text-sm uppercase">
                  {currencyValue.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="text-start text-background flex flex-col gap-1 leading-none">
                <span className="text-sm leading-none font-semibold uppercase">
                  {currencyValue}
                </span>
              </div>
              <ChevronDown className="h-4 w-4 text-white" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0 border border-white/15 rounded-sm bg-black-russian">
            <Command className="bg-black-russian w-[7rem]">
              <CommandInput placeholder="Search" className="text-background" />
              <CommandList className="p-0.5 border-white/15 border-t-1 bg-gradient-to-r from-black-russian to-dark-blue max-h-[202px] ">
                <CommandEmpty className="text-background text-center p-2 text-xs">
                  No results.
                </CommandEmpty>
                <CommandGroup>
                  {data.map((currency) => (
                    <CommandItem
                      className="text-background flex uppercase p-1 cursor-pointer"
                      key={currency}
                      value={currency}
                      onSelect={(currentValue) => {
                        setCurrencyValue(
                          currentValue === currencyValue
                            ? currencyValue
                            : currentValue
                        );
                        setOpen(false);
                      }}
                    >
                      <Avatar className="rounded-sm h-6 w-6">
                        <AvatarFallback className="rounded-sm bg-foreground text-background  text-xs">
                          {currency[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">{currency}</div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}

      {error !== "" ? (
        <div className="hidden">
          <Toast
            title="Error"
            message={`${error}. Kindly refresh page.`}
            btnLabel="Close"
          />
        </div>
      ) : null}
    </>
  );
}
