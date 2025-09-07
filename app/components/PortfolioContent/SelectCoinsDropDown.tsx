"use client";
import * as React from "react";
import { Check } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

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
import { useState } from "react";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  coinArr?:
    | {
        value: string;
        label: string;
        icon: string;
      }[]
    | undefined;
};

export function SelectCoinsDropDown({ value, setValue, coinArr }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          role="combobox"
          aria-expanded={open}
          className={`${
            value ? "text-background" : "text-muted-foreground"
          } w-full font-[400] shadow-xs text-base md:text-sm h-10 flex items-center cursor-pointer rounded-sm bg-dark-gunmetal hover:bg-dark-gunmetal p-3`}
        >
          <div className="truncate text-left w-[280px]">
            {value
              ? coinArr?.find((coin) => coin.value === value)?.label
              : "Select coin"}
          </div>
        </div>
      </PopoverTrigger>

      <PopoverContent
        className="max-w-[250px] max-h-[288px] overflow-y-auto p-0 border border-white/15 rounded-sm bg-black-russian"
        align="start"
        side="bottom"
      >
        <Command className="bg-black-russian">
          <CommandInput placeholder="Search Coin" className="text-background" />
          <CommandList className="p-0.5   border-white/15 border-t-1 bg-gradient-to-r from-black-russian to-dark-blue">
            <CommandEmpty className="text-background text-center p-2 text-xs">
              No results.
            </CommandEmpty>

            <CommandGroup>
              {coinArr?.map((coin) => (
                <CommandItem
                  className="text-background flex cursor-pointer"
                  key={coin.value}
                  value={coin.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <div className="w-[1.4rem] h-[1.4rem] flex-shrink-0 bg-white rounded-full">
                    <Image
                      src={coin.icon}
                      alt="coin icon"
                      className="w-full h-full rounded-full"
                      width={100}
                      height={100}
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
