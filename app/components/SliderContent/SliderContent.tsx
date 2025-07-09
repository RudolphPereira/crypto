import { Button } from "@/components/ui/button";
import { ChartNoAxesColumn } from "lucide-react";
import { CoinSlider } from "./CoinSlider";

// type Props = {};

export const SliderContent = () => {
  return (
    <div className="slider">
      <div className="sliderBox flex flex-col gap-5">
        <div className="topBox flex flex-col gap-3 sm:flex-row justify-between sm:items-end">
          <p className="text-sm text-white/70">
            Select the currency to view statistics
          </p>
          <Button className="bg-dark-gunmetal rounded-sm font-[400] cursor-pointer border border-transparent border-b-0 hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in text-white h-10">
            <ChartNoAxesColumn />
            Compare
          </Button>
        </div>
        <div className="bottomBox">
          <CoinSlider />
        </div>
      </div>
    </div>
  );
};
