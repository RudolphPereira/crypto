"use client";
import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import coinIcon from "../../assets/flash-circle.svg";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
import { useState, SetStateAction, Dispatch } from "react";

type Props = {
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
  dropDownDisabled?: boolean;
};

export function CoinDropDown({
  coinArr,
  value,
  setValue,
  dropDownDisabled,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="text-background justify-start items-center gap-2 cursor-pointer bg-transparent shadow-none text-3xl has-[>svg]:px-0 font-[500] hover:bg-transparent"
        >
          <div className="w-[1.8rem] h-[1.8rem] rounded-full shadow-xl">
            <Image
              src={
                value
                  ? coinArr?.find((coin) => coin.value === value)?.icon
                  : coinIcon
              }
              alt="coin icon"
              className={`w-full h-full rounded-full  ${
                value === "" ? "light:invert" : "bg-white p-0.5"
              }`}
              width={100}
              height={100}
            />
          </div>
          <div className="truncate flex-1 text-left min-w-auto max-w-[250px]">
            {value
              ? coinArr?.find((coin) => coin.value === value)?.label
              : "Select Coin"}
          </div>

          <ChevronDown className="opacity-50 mt-2" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[200px] p-0 border border-white/15 rounded-sm bg-black-russian"
      >
        <Command className="bg-black-russian max-h-[290px]">
          <CommandInput placeholder="Search Coin" className="text-background" />
          <CommandList className="p-0.5 h-full border-white/15 border-t-1 bg-gradient-to-r from-black-russian to-dark-blue">
            <CommandEmpty className="text-background text-center p-2 text-xs">
              No results.
            </CommandEmpty>
            <CommandGroup>
              {coinArr?.map((coin) => (
                <CommandItem
                  disabled={dropDownDisabled}
                  className="text-background flex cursor-pointer"
                  key={coin.value}
                  value={coin.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <div className="w-[1.4rem] h-[1.4rem] rounded-full bg-white shadow-lg flex items-center justify-center">
                    <Image
                      width={100}
                      height={100}
                      src={coin.icon}
                      alt="coin icon"
                      className="w-full h-full rounded-full p-[0.08rem]"
                    />
                  </div>
                  <div className="truncate flex-1">{coin.label}</div>
                  <Check
                    className={cn(
                      "ml-auto",
                      value === coin.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
