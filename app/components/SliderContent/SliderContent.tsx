import { ActionBtn } from "../AppButtons/AppBtns";
import { TitleBox } from "../TitleBox/TitleBox";
import { CoinSlider } from "./CoinSlider";
import { ChartNoAxesColumn } from "lucide-react";

export const SliderContent = () => {
  return (
    <div className="slider">
      <div className="flex flex-col gap-5">
        <TitleBox
          subtitle="Select the currency to view statistics"
          actionBtn={
            <ActionBtn btnIcon={<ChartNoAxesColumn />} btnTitle="Compare" />
          }
        />
        <CoinSlider />
      </div>
    </div>
  );
};
