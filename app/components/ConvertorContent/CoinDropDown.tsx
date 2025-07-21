"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import bitcoinIcon from "../../assets/Currency-icon-02.svg";
import ethCoinIcon from "../../assets/Currency-icon-01.svg";
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

const coins = [
  {
    value: "bitcoin",
    label: "Bitcoin",
    icon: bitcoinIcon,
  },
  {
    value: "eth",
    label: "Eth",
    icon: ethCoinIcon,
  },
];

export function CoinDropDown() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="min-w-[230px] justify-start items-center gap-2 cursor-pointer bg-transparent shadow-none text-3xl has-[>svg]:px-0 font-[500] hover:bg-transparent"
        >
          <div className="w-[1.8rem] h-[1.8rem]">
            <Image
              src={
                value
                  ? coins.find((coin) => coin.value === value)?.icon
                  : coinIcon
              }
              alt="coin icon"
              className="w-full h-full"
            />
          </div>
          <div className="truncate flex-1 text-left">
            {value
              ? coins.find((coin) => coin.value === value)?.label
              : "Select Coin"}
          </div>

          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 border border-white/15 rounded-sm bg-black-russian">
        <Command className="bg-black-russian">
          <CommandInput placeholder="Search Coin" className="text-background" />
          <CommandList className="p-0.5 border-white/15 border-t-1 bg-gradient-to-r from-black-russian to-dark-blue">
            <CommandEmpty className="text-background text-center p-2 text-xs">
              No results.
            </CommandEmpty>
            <CommandGroup>
              {coins.map((coin) => (
                <CommandItem
                  className="text-background flex"
                  key={coin.value}
                  value={coin.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <div className="w-[1.4rem] h-[1.4rem]">
                    <Image
                      src={coin.icon}
                      alt="coin icon"
                      className="w-full h-full"
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
