import React from "react";
import { CoinDetails } from "./CoinDetails";
import { ChartAreaGradient } from "./AreaChart";
import { ChartBarStacked } from "./BarChart";
import { CoinBadge } from "./CoinBadge";
import { ChartTimeline } from "./ChartTimeline";

export const GraphContent = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex md:flex-row flex-col gap-6 w-full mt-10 md:mt-0">
        <div className="flex-1 p-3 md:p-6 bg-periwinkle-blue/15 rounded-lg flex flex-col">
          <CoinDetails
            titleName="Bitcoin (BTC)"
            value="$13.431 mln"
            date="September 29, 2023"
          />
          <ChartAreaGradient />
        </div>
        <div className="flex-1 p-3 md:p-6 bg-violet-blue/12 rounded-lg flex flex-col">
          <CoinDetails
            titleName="Volume 24h"
            value="$807.243 bln"
            date="September 29, 2023"
          />
          <ChartBarStacked />
        </div>
      </div>

      <div className="">
        <CoinBadge />
      </div>

      <div className="">
        <ChartTimeline />
      </div>
    </div>
  );
};
