"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dispatch, SetStateAction } from "react";

type Props = {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
};

export function PurchasedDatePicker({ date, setDate }: Props) {
  const [open, setOpen] = React.useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date();
  start.setDate(start.getDate() - 365);
  start.setHours(0, 0, 0, 0);

  return (
    <div className="flex flex-col gap-3 h-10 rounded-sm border-0  bg-dark-gunmetal shadow-none text-background outline-0 focus-visible:ring-0">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            id="date"
            className={`${
              date ? "text-background" : "text-muted-foreground"
            } shadow-xs text-base md:text-sm h-10 cursor-pointer justify-between rounded-sm bg-dark-gunmetal hover:bg-dark-gunmetal p-3 flex items-center`}
          >
            {date ? date.toLocaleDateString() : "Purchased date"}
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 dark:border dark:border-white/20 bg-gradient-to-r from-black-russian to-dark-blue border-0 text-background"
          align="start"
          side="bottom"
        >
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            disabled={[{ before: start }, { after: today }]}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
