"use client";
import { Area, AreaChart, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  high: {
    label: "high",
    color: "var(--chart-4)",
  },

  low: {
    label: "low",
    color: "var(--chart-5)",
  },

  default: {
    label: "default",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

type Props = {
  highStatus?: boolean;
  lastSevenDay: number[];
};

export function TableChart({ lastSevenDay }: Props) {
  const newData = lastSevenDay.map((item) => {
    const finalItem = item.toFixed(2);
    return { value: Number(finalItem) };
  });

  const values = newData.map((item) => item.value);
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);
  const padding = (dataMax - dataMin) * 0.01;
  const domain = [dataMin - padding, dataMax + padding];

  return (
    <div className="flex-1">
      <ChartContainer config={chartConfig} className="h-11 w-30">
        <AreaChart accessibilityLayer data={newData}>
          <defs>
            <linearGradient id="fillGraph" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={"var(--color-default)"}
                // stopColor={
                //   highStatus ? "var(--color-high)" : "var(--color-low)"
                // }
                stopOpacity={1}
              />
              <stop
                offset="95%"
                stopColor={"var(--color-default)"}
                // stopColor={
                //   highStatus ? "var(--color-high)" : "var(--color-low)"
                // }
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                className="z-50 border-0 rounded-sm"
                hideLabel
                hideIndicator
              />
            }
          />
          <YAxis domain={domain} hide />
          <Area
            strokeWidth={1.2}
            dataKey="value"
            type="natural"
            fill="url(#fillGraph)"
            fillOpacity={0.5}
            stroke={"var(--color-default)"}
            // stroke={highStatus ? "var(--color-high)" : "var(--color-low)"}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
