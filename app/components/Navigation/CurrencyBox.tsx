"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const currencies = [
  {
    id: 1,
    name: "USD",
  },
  {
    id: 2,
    name: "GDP",
  },
  {
    id: 3,
    name: "EUR",
  },
];

export const CurrencyBox = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  return (
    <div className="h-[100%]">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex justify-between items-center gap-2 px-2 h-10 outline-none min-w-[7rem] rounded-sm border border-white/15 bg-black-russian text-sm w-[100%] cursor-pointer">
          <Avatar className="rounded-sm h-6 w-6">
            <AvatarFallback className="rounded-sm bg-background text-foreground text-sm">
              {selectedCurrency.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="text-start flex flex-col gap-1 leading-none">
            <span className="text-sm leading-none font-semibold">
              {selectedCurrency.name}
            </span>
          </div>
          <ChevronDown className="h-4 w-4 text-white" />
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="absolute px-1 -top-2 rounded-none rounded-b-sm z-10 outline-none border border-white/15 text-white bg-gradient-to-r from-black-russian to-dark-blue"
          align="start"
        >
          {currencies.map((currency) => (
            <DropdownMenuItem
              key={currency.id}
              onClick={() => setSelectedCurrency(currency)}
              className="w-full cursor-pointer"
            >
              <div className="flex items-center gap-3 w-full">
                <Avatar className="rounded-sm h-6 w-6">
                  <AvatarFallback className="rounded-sm bg-foreground text-background text-xs">
                    {currency.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span>{currency.name}</span>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
