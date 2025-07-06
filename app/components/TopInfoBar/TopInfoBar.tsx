import { InfoText } from "./InfoText";
import { InfoProgress } from "./InfoProgress";
import coinIcon from "../../assets/flash-circle.svg";
import exchangeIcon from "../../assets/recovery-convert.svg";
import increaseIcon from "../../assets/increase.svg";
import bitcoinIcon from "../../assets/Currency-icon-02.svg";
import ethIcon from "../../assets/Currency-icon-01.svg";

// type Props = {};

export const TopInfoBar = () => {
  return (
    <div className="infoBar bg-deep-plum px-2 py-3 border-b border-b-white/10 text-white flex justify-center w-full min-h-14">
      <div className="infoBarBox flex items-center sm:gap-7 gap-5 flex-wrap justify-center">
        <InfoText
          image={coinIcon}
          iconSize="w-[1.15rem] h-[1.15rem]"
          text="Coins"
          number={7884}
        />
        <InfoText
          image={exchangeIcon}
          iconSize="w-[1.15rem] h-[1.15rem]"
          text="Exchange"
          number={622}
        />
        <InfoText
          image={increaseIcon}
          iconSize="w-[0.7rem] h-[0.7rem]"
          text="T"
          number={1.69}
          additionalClass="flex-row-reverse"
        />

        <InfoProgress number="$124.45B" progressColor="[&>div]:bg-white" />
        <InfoProgress
          image={bitcoinIcon}
          number="44%"
          progressColor="[&>div]:bg-orange"
        />
        <InfoProgress
          image={ethIcon}
          number="21%"
          progressColor="[&>div]:bg-pastel-blue"
        />
      </div>
    </div>
  );
};
