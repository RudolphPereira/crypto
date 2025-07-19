import React from "react";
import { Button } from "@/components/ui/button";
import { TitleBox } from "../TitleBox/TitleBox";
import { CoinDetails } from "../GraphContent/CoinDetails";
import { ConvertorCard } from "./ConvertorCard";
import Image from "next/image";
import switchIcon from "../../assets/switchIcon.svg";
import { ChartTimeline } from "../GraphContent/ChartTimeline";
import { SingleAreaChart } from "./SingleAreaChart";

export const ConvertorContent = () => {
  const data = {
    coinOne: "Bitcoin (BTC)",
    coinTwo: "Ethereum (ETH)",
  };

  return (
    <div className="flex flex-col gap-6">
      <TitleBox title="Online currency convertor" subtitle="09/29/2023 14:15" />
      <div className="flex md:flex-row flex-col gap-6 w-full mt-10 md:mt-0 relative">
        <div className="flex-1 p-3 md:p-6 bg-dark-blue rounded-lg flex flex-col gap-8">
          <CoinDetails titleName="You sell" />
          <ConvertorCard coinAbbName="BTC" baseCoinPrice="$26,250.15" />
        </div>
        <div className="flex-1 p-3 md:p-6 bg-deep-plum rounded-lg flex flex-col gap-8">
          <CoinDetails titleName="You buy" />
          <ConvertorCard coinAbbName="ETH" baseCoinPrice="$8,914.12" />
        </div>
        <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          <Button className="shadow group w-[3rem] h-[3rem] border border-transparent border-b-0 hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in cursor-pointer rounded-full bg-background p-0">
            <Image
              src={switchIcon}
              alt="switchIcon"
              className="object-contain group-hover:invert group-hover:brightness-10 group-hover:rotate-180 transition-all ease-in duration-300"
            />
          </Button>
        </div>
      </div>

      <div className="flex-1 p-3 md:p-6 bg-dark-blue rounded-lg flex flex-col gap-8">
        <CoinDetails titleName={`${data.coinOne} to ${data.coinTwo}`} />
        <SingleAreaChart />
      </div>

      <div className="">
        <ChartTimeline />
      </div>
    </div>
  );
};
