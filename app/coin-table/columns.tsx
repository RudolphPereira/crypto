"use client";

import { ColumnDef } from "@tanstack/react-table";
import { HeaderBtn } from "../components/TableContent/HeaderBtn";
import Image from "next/image";
import increaseIcon from "../assets/increase.svg";
import decreaseIcon from "../assets/decrease.svg";
import { CoinStats } from "../components/CoinStats/CoinStats";
import { ProgressStats } from "../components/TableContent/ProgressStats";
import { TableChart } from "../components/TableContent/TableChart";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CoinData = {
  id: string;
  number: number;
  image: string;
  name: string;
  price: string;
  oneHourPercentage: string;
  twentyFourHourPercentage: string;
  sevenDayPercentage: string;
  twentyFourHourVolumeByMarketCap: {
    twentyFourHourVolume: string;
    marketCap: string;
  };
  circulatingByTotalSupply: {
    circulation: string;
    totalSupply: string;
  };
  lastSevenDay: string;
};

export const columns: ColumnDef<CoinData>[] = [
  {
    accessorKey: "number",
    header: ({ column }) => {
      return (
        <HeaderBtn btnName="#" column={column} icon="icon" disabled={false} />
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <HeaderBtn
          btnName="Name"
          column={column}
          icon="icon"
          disabled={false}
        />
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3">
          <div className="w-[1.6rem] h-[1.6rem]">
            <Image
              src={row.original.image}
              alt="coin-icon"
              className="w-full h-full"
            />
          </div>
          <p>{row.original.name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <HeaderBtn
          btnName="Price"
          column={column}
          icon="icon"
          disabled={false}
        />
      );
    },
  },
  {
    accessorKey: "oneHourPercentage",
    header: ({ column }) => {
      return (
        <HeaderBtn btnName="1h%" column={column} icon="icon" disabled={false} />
      );
    },
    cell: ({ row }) => {
      return (
        <CoinStats
          icon={decreaseIcon}
          percentage={row.original.oneHourPercentage}
        />
      );
    },
  },
  {
    accessorKey: "twentyFourHourPercentage",
    header: ({ column }) => {
      return (
        <HeaderBtn
          btnName="24h%"
          column={column}
          icon="icon"
          disabled={false}
        />
      );
    },
    cell: ({ row }) => {
      return (
        <CoinStats
          icon={increaseIcon}
          percentage={row.original.twentyFourHourPercentage}
        />
      );
    },
  },
  {
    accessorKey: "sevenDayPercentage",
    header: ({ column }) => {
      return (
        <HeaderBtn btnName="7d%" column={column} icon="icon" disabled={false} />
      );
    },
    cell: ({ row }) => {
      return (
        <CoinStats
          icon={decreaseIcon}
          percentage={row.original.sevenDayPercentage}
        />
      );
    },
  },
  {
    accessorKey: "twentyFourHourVolumeByMarketCap",
    header: () => {
      return <HeaderBtn btnName="24h volume / Market Cap" disabled={true} />;
    },
    cell: ({ row }) => {
      return (
        <ProgressStats
          status="high"
          amount={
            row.original.twentyFourHourVolumeByMarketCap.twentyFourHourVolume
          }
          total={row.original.twentyFourHourVolumeByMarketCap.marketCap}
          progressValue={60}
        />
      );
    },
  },
  {
    accessorKey: "circulatingByTotalSupply",
    header: () => {
      return <HeaderBtn btnName="Circulating / Total supply" disabled={true} />;
    },
    cell: ({ row }) => {
      return (
        <ProgressStats
          status="low"
          amount={row.original.circulatingByTotalSupply.circulation}
          total={row.original.circulatingByTotalSupply.totalSupply}
          progressValue={20}
        />
      );
    },
  },
  {
    accessorKey: "lastSevenDay",
    header: () => {
      return <HeaderBtn btnName="Last 7d" disabled={true} />;
    },
    cell: () => {
      return <TableChart highStatus />;
    },
  },
];
