"use client";
import { Area, AreaChart } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { desktop: 186 },
  { desktop: 305 },
  { desktop: 237 },
  { desktop: 73 },
  { desktop: 209 },
  { desktop: 214 },
  { desktop: 237 },
];

const chartConfig = {
  high: {
    label: "high",
    color: "var(--chart-4)",
  },

  low: {
    label: "low",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

type Props = {
  highStatus: boolean;
};

export function TableChart({ highStatus }: Props) {
  return (
    <div className="flex-1">
      <ChartContainer config={chartConfig} className="h-10 w-full">
        <AreaChart accessibilityLayer data={chartData}>
          <defs>
            <linearGradient id="fillGraph" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={
                  highStatus ? "var(--color-high)" : "var(--color-low)"
                }
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={
                  highStatus ? "var(--color-high)" : "var(--color-low)"
                }
                stopOpacity={0.2}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="desktop"
            type="natural"
            fill="url(#fillGraph)"
            fillOpacity={0.5}
            stroke={highStatus ? "var(--color-high)" : "var(--color-low)"}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
