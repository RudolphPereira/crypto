import { TitleBox } from "../TitleBox/TitleBox";
import { CoinSlider } from "./CoinSlider";

// type Props = {};

export const SliderContent = () => {
  return (
    <div className="slider">
      <div className="flex flex-col gap-5">
        <TitleBox
          subtitle="Select the currency to view statistics"
          btnTitle="Compare"
          actionBtn
        />
        <CoinSlider />
      </div>
    </div>
  );
};
