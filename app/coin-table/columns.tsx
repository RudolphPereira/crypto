"use client";

import { ColumnDef } from "@tanstack/react-table";
import { HeaderBtn } from "../components/TableContent/HeaderBtn";
import Image from "next/image";
import { CoinStats } from "../components/CoinStats/CoinStats";
import { ProgressStats } from "../components/TableContent/ProgressStats";
import { TableChart } from "../components/TableContent/TableChart";
import totheMoon from "../assets/tothemoon.svg";
import { ToolTip } from "../components/ToolTip/ToolTip";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CoinData = {
  id: string;
  number: number;
  image: string;
  name: string;
  currency: string;
  price: string;
  oneHourPercentage: string;
  twentyFourHourPercentage: string;
  sevenDayPercentage: string;
  twentyFourHourVolumeByMarketCap: {
    twentyFourHourVolume: string;
    marketCap: string;
    percentage: number;
  };
  circulatingByTotalSupply: {
    circulation: string;
    totalSupply: string;
    percentage: number;
  };
  lastSevenDay: number[];
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
        <div className="">
          <ToolTip
            align="left"
            sideOffset={8}
            toolTipTrigger={
              <Link href={`/coin-page/${row.original.id}`} className="group">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-[2rem] h-[2rem] bg-white rounded-full shadow-md group-hover:rotate-360 group-hover:scale-120 transition-all ease-in-out duration-600">
                    <Image
                      width={100}
                      height={100}
                      src={row.original.image || totheMoon}
                      alt="coin-icon"
                      className="w-full h-full rounded-full p-0.5 "
                    />
                  </div>
                  <p className="text-background w-18 truncate group-hover:underline">
                    {row.original.name}
                  </p>
                </div>
              </Link>
            }
            toolTipContent={row.original.name}
          />
        </div>
      );
    },
  },

  {
    accessorKey: "currency",
    header: ({ column }) => {
      return (
        <HeaderBtn
          btnName="Currency"
          column={column}
          icon="icon"
          disabled={true}
        />
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
      return <CoinStats percentage={row.original.oneHourPercentage} />;
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
      return <CoinStats percentage={row.original.twentyFourHourPercentage} />;
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
      return <CoinStats percentage={row.original.sevenDayPercentage} />;
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
          amount={
            row.original.twentyFourHourVolumeByMarketCap.twentyFourHourVolume
          }
          total={row.original.twentyFourHourVolumeByMarketCap.marketCap}
          progressValue={
            row.original.twentyFourHourVolumeByMarketCap.percentage
          }
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
          amount={row.original.circulatingByTotalSupply.circulation}
          total={row.original.circulatingByTotalSupply.totalSupply}
          progressValue={row.original.circulatingByTotalSupply.percentage}
        />
      );
    },
  },
  {
    accessorKey: "lastSevenDay",
    header: () => {
      return <HeaderBtn btnName="Last 7d" disabled={true} />;
    },
    cell: ({ row }) => {
      return <TableChart lastSevenDay={row.original.lastSevenDay} />;
    },
  },
];
