"use client";

import { Bar, BarChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80, tab: 123 },
  { month: "February", desktop: 1000, mobile: 200, tab: 400 },
  { month: "March", desktop: 237, mobile: 120, tab: 200 },
  { month: "April", desktop: 73, mobile: 190, tab: 250 },
  { month: "May", desktop: 209, mobile: 130, tab: 100 },
  { month: "June", desktop: 214, mobile: 140, tab: 150 },
  { month: "June", desktop: 214, mobile: 140, tab: 150 },
  { month: "January", desktop: 186, mobile: 80, tab: 123 },
  { month: "February", desktop: 1000, mobile: 200, tab: 400 },
  { month: "March", desktop: 237, mobile: 120, tab: 200 },
  { month: "April", desktop: 73, mobile: 190, tab: 250 },
  { month: "May", desktop: 209, mobile: 130, tab: 100 },
  { month: "June", desktop: 214, mobile: 140, tab: 150 },
  { month: "June", desktop: 214, mobile: 140, tab: 150 },
  { month: "March", desktop: 237, mobile: 120, tab: 200 },
  { month: "April", desktop: 73, mobile: 190, tab: 250 },
  { month: "May", desktop: 209, mobile: 130, tab: 100 },
  { month: "June", desktop: 214, mobile: 140, tab: 150 },
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

export function ChartBarStacked() {
  return (
    <div className="flex-1">
      <ChartContainer
        config={chartConfig}
        className="aspect-auto md:h-[250px] h-[200px] w-full"
      >
        <BarChart
          className="flex [&>svg]:flex-1"
          accessibilityLayer
          data={chartData}
          barGap={50}
          barSize={20}
          margin={{
            left: 12,
            right: 12,
            top: 12,
          }}
        >
          <ChartTooltip
            content={
              <ChartTooltipContent className="rounded-sm" hideIndicator />
            }
            cursor={false}
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
            <linearGradient id="fillCoinTwo" x1="0" y1="0" x2="0" y2="1">
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
            </linearGradient>
          </defs>
          <Bar
            dataKey="desktop"
            type="natural"
            stackId="a"
            fill="url(#fillCoinOne)"
            fillOpacity={1}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="mobile"
            type="natural"
            stackId="a"
            fill="url(#fillCoinTwo)"
            fillOpacity={1}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="tab"
            type="natural"
            stackId="a"
            fill="url(#fillCoinThree)"
            fillOpacity={1}
            radius={[4, 4, 0, 0]}
          />

          <XAxis
            height={20}
            className="flex-1"
            dataKey="month"
            tickLine={false}
            tickMargin={2}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
