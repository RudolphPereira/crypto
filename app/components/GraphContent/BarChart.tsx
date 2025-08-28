"use client";
import { Bar, BarChart, XAxis } from "recharts";

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
  coinTwoVolumeDomain: number[] | undefined;
  coinThreeVolumeDomain: number[] | undefined;
  chartConfig: {
    [key: string]: {
      label: string;
      color: string;
    };
  };
};

export function ChartBarStacked({
  data,
  coinNames,
  coinTwoVolumeDomain,
  coinThreeVolumeDomain,
  chartConfig,
}: Props) {
  const coinDomainTwo = coinDomainMoreThanZero(coinTwoVolumeDomain);
  const coinDomainThree = coinDomainMoreThanZero(coinThreeVolumeDomain);

  const coinOne = coinNames[0];
  const coinTwo = coinNames[1] || "";
  const coinThree = coinNames[2] || "";

  return (
    <div className="flex-1">
      <ChartContainer
        config={chartConfig}
        className="aspect-auto md:h-[250px] h-[200px] w-full"
      >
        <BarChart
          className="flex [&>svg]:flex-1"
          accessibilityLayer
          data={data}
          barSize={25}
          margin={{
            left: 6,
            right: 6,
            top: 10,
          }}
        >
          <ChartTooltip
            content={
              <ChartTooltipContent
                hideIndicator
                className="rounded-sm border-0 shadow-md flex flex-col gap-1 items-start"
              />
            }
            cursor={false}
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

          <Bar
            isAnimationActive={true}
            dataKey={coinOne}
            stackId="a"
            fill="url(#fillCoinOne)"
            fillOpacity={1}
            radius={[4, 4, 0, 0]}
          />

          {coinDomainTwo && (
            <Bar
              isAnimationActive={true}
              dataKey={coinTwo}
              stackId="a"
              fill="url(#fillCoinTwo)"
              fillOpacity={1}
              radius={[4, 4, 0, 0]}
            />
          )}

          {coinDomainThree && (
            <Bar
              isAnimationActive={true}
              dataKey={coinThree}
              stackId="a"
              fill="url(#fillCoinThree)"
              fillOpacity={1}
              radius={[4, 4, 0, 0]}
            />
          )}

          <XAxis
            height={17}
            dataKey="timeLine"
            tickLine={false}
            axisLine={false}
            tickSize={4}
            interval="preserveStartEnd"
            minTickGap={5}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
