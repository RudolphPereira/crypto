"use client";
import { Area, AreaChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", coinOne: 186 },
  { month: "February", coinOne: 305 },
  { month: "March", coinOne: 237 },
  { month: "April", coinOne: 73 },
  { month: "May", coinOne: 209 },
  { month: "June", coinOne: 214 },
  { month: "March", coinOne: 237 },
  { month: "January", coinOne: 186 },
  { month: "February", coinOne: 305 },
  { month: "March", coinOne: 237 },
  { month: "April", coinOne: 73 },
  { month: "May", coinOne: 209 },
  { month: "June", coinOne: 214 },
  { month: "March", coinOne: 237 },
  { month: "January", coinOne: 186 },
  { month: "February", coinOne: 305 },
  { month: "March", coinOne: 237 },
  { month: "April", coinOne: 73 },
  { month: "May", coinOne: 209 },
  { month: "June", coinOne: 214 },
];

const chartConfig = {
  coinOne: {
    label: "Coin One",
    color: "var(--chart-1)",
  },
  //   coinTwo: {
  //     label: "Coin Two",
  //     color: "var(--chart-2)",
  //   },
  //   coinThree: {
  //     label: "Coin Three",
  //     color: "var(--chart-3)",
  //   },
} satisfies ChartConfig;

export function SingleAreaChart() {
  return (
    <div className="flex-1">
      <ChartContainer
        config={chartConfig}
        className="aspect-auto md:h-[250px] h-[200px] w-full"
      >
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
            top: 12,
          }}
        >
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent className="rounded-sm" hideIndicator />
            }
          />
          <defs>
            <linearGradient id="fillCoinOne" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-coinOne)"
                stopOpacity={1}
              />
              <stop
                offset="95%"
                stopColor="var(--color-coinOne)"
                stopOpacity={0}
              />
            </linearGradient>
            {/* <linearGradient id="fillCoinTwo" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-coinTwo)"
                stopOpacity={1}
              />
              <stop
                offset="95%"
                stopColor="var(--color-coinTwo)"
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id="fillCoinThree" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-coinThree)"
                stopOpacity={1}
              />
              <stop
                offset="95%"
                stopColor="var(--color-coinThree)"
                stopOpacity={0}
              />
            </linearGradient> */}
          </defs>

          <Area
            dataKey="coinOne"
            type="natural"
            fill="url(#fillCoinOne)"
            fillOpacity={0.6}
            stroke="var(--color-coinOne)"
            stackId="a"
            strokeWidth={2}
          />

          <XAxis
            height={27}
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
