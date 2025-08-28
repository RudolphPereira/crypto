"use client";
import { Area, AreaChart, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { coinDomainMoreThanZero } from "@/lib/utils";

type Props = {
  data: {
    [key: string]: number | null | string;
  }[];
  coinNames: string[];
  coinOnePriceDomain?: number[] | undefined;
  coinTwoPriceDomain?: number[] | undefined;
  coinThreePriceDomain?: number[] | undefined;
  chartConfig: {
    [key: string]: {
      label: string;
      color: string;
    };
  };
};

export function ChartAreaGradient({
  data,
  coinNames,
  coinOnePriceDomain,
  coinTwoPriceDomain,
  coinThreePriceDomain,
  chartConfig,
}: Props) {
  const coinOne = coinNames[0] || "";
  const coinTwo = coinNames[1] || "";
  const coinThree = coinNames[2] || "";
  const coinDomainTwo = coinDomainMoreThanZero(coinTwoPriceDomain);
  const coinDomainThree = coinDomainMoreThanZero(coinThreePriceDomain);

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
                offset="20%"
                stopColor="var(--color-coinOne)"
                stopOpacity={1}
              />
              <stop
                offset="100%"
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
                offset="100%"
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
                offset="100%"
                stopColor="var(--color-coinThree)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <Area
            isAnimationActive={true}
            animationBegin={0}
            animationDuration={1000}
            dataKey={coinOne}
            type="natural"
            fill="url(#fillCoinOne)"
            fillOpacity={0.8}
            stroke="var(--color-coinOne)"
            strokeWidth={1.5}
            yAxisId="left"
            connectNulls={true}
          />

          {coinDomainTwo && (
            <Area
              isAnimationActive={true}
              animationBegin={0}
              animationDuration={1000}
              dataKey={coinTwo}
              type="natural"
              fill="url(#fillCoinTwo)"
              fillOpacity={0.8}
              stroke="var(--color-coinTwo)"
              strokeWidth={1.5}
              yAxisId="right"
              connectNulls={true}
            />
          )}

          {coinDomainThree && (
            <Area
              isAnimationActive={true}
              animationBegin={0}
              animationDuration={1000}
              dataKey={coinThree}
              type="natural"
              fill="url(#fillCoinThree)"
              fillOpacity={0.8}
              stroke="var(--color-coinThree)"
              strokeWidth={1.5}
              yAxisId="right2"
              connectNulls={true}
            />
          )}

          <XAxis
            height={30}
            dataKey="timeLine"
            tickLine={false}
            axisLine={false}
            tickMargin={11}
            interval="preserveStartEnd"
            minTickGap={5}
          />

          <YAxis
            domain={coinOnePriceDomain}
            dataKey={coinOne}
            yAxisId="left"
            hide
          />

          <YAxis
            domain={coinTwoPriceDomain}
            dataKey={coinTwo}
            yAxisId="right"
            hide
          />

          <YAxis
            domain={coinThreePriceDomain}
            dataKey={coinThree}
            yAxisId="right2"
            hide
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
