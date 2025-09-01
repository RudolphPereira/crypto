"use client";
import { Area, AreaChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type Props = {
  data: {
    [key: string]: number | null | string;
  }[];
  coinOnePriceDomain?: number[] | undefined;
};

const chartConfig = {
  coinOne: {
    label: "value",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ConvertorAreaChart({ data, coinOnePriceDomain }: Props) {
  return (
    <div className="flex-1">
      <ChartContainer
        config={chartConfig}
        className="md:h-[250px] h-[200px] w-[100%]"
      >
        <AreaChart
          accessibilityLayer
          data={data}
          margin={{
            left: 6,
            right: 6,
            top: 10,
          }}
        >
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                hideIndicator
                className="rounded-sm border-0 shadow-md flex flex-col gap-1 items-start"
              />
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
          </defs>

          <Area
            isAnimationActive={true}
            animationBegin={0}
            animationDuration={1000}
            dataKey="value"
            type="natural"
            fill="url(#fillCoinOne)"
            fillOpacity={0.6}
            stroke="var(--color-coinOne)"
            strokeWidth={2}
            yAxisId="left"
            connectNulls={true}
          />

          <XAxis
            height={30}
            dataKey="timeLine"
            tickLine={false}
            axisLine={false}
            tickMargin={11}
            interval="preserveStartEnd"
          />

          <YAxis
            domain={coinOnePriceDomain}
            dataKey="value"
            yAxisId="left"
            hide
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
