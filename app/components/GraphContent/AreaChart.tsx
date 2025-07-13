"use client";
import { Area, AreaChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80, tab: 123 },
  { month: "February", desktop: 305, mobile: 200, tab: 400 },
  { month: "March", desktop: 237, mobile: 120, tab: 200 },
  { month: "April", desktop: 73, mobile: 190, tab: 250 },
  { month: "May", desktop: 209, mobile: 130, tab: 100 },
  { month: "June", desktop: 214, mobile: 140, tab: 150 },
  { month: "March", desktop: 237, mobile: 120, tab: 200 },
  { month: "January", desktop: 186, mobile: 80, tab: 123 },
  { month: "February", desktop: 305, mobile: 200, tab: 400 },
  { month: "March", desktop: 237, mobile: 120, tab: 200 },
  { month: "April", desktop: 73, mobile: 190, tab: 250 },
  { month: "May", desktop: 209, mobile: 130, tab: 100 },
  { month: "June", desktop: 214, mobile: 140, tab: 150 },
  { month: "March", desktop: 237, mobile: 120, tab: 200 },
  { month: "January", desktop: 186, mobile: 80, tab: 123 },
  { month: "February", desktop: 305, mobile: 200, tab: 400 },
  { month: "March", desktop: 237, mobile: 120, tab: 200 },
  { month: "April", desktop: 73, mobile: 190, tab: 250 },
  { month: "May", desktop: 209, mobile: 130, tab: 100 },
  { month: "June", desktop: 214, mobile: 140, tab: 150 },
];

const chartConfig = {
  coinOne: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  coinTwo: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
  coinThree: {
    label: "Tab",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function ChartAreaGradient() {
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
            content={<ChartTooltipContent className="rounded-sm" />}
          />
          <defs>
            <linearGradient id="fillCoinOne" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-coinOne)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-coinOne)"
                stopOpacity={0.2}
              />
            </linearGradient>
            <linearGradient id="fillCoinTwo" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-coinTwo)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-coinTwo)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillCoinThree" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-coinThree)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-coinThree)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="mobile"
            type="natural"
            fill="url(#fillCoinTwo)"
            fillOpacity={0.5}
            stroke="var(--color-coinTwo)"
            stackId="a"
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="url(#fillCoinOne)"
            fillOpacity={0.5}
            stroke="var(--color-coinOne)"
            stackId="a"
          />
          <Area
            dataKey="tab"
            type="natural"
            fill="url(#fillCoinThree)"
            fillOpacity={0.5}
            stroke="var(--color-coinThree)"
            stackId="a"
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
