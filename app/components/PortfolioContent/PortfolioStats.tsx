import Image from "next/image";
import increaseIcon from "../../assets/increase.svg";
import decreaseIcon from "../../assets/decrease.svg";
import { Progress } from "@/components/ui/progress";

type Props = {
  title?: string;
  subTitle?: string;
  icon?: boolean;
  percentage?: string;
  highStatus?: boolean;
  progressValue?: number | undefined;
};

export const PortfolioStats = ({
  title,
  subTitle,
  icon,
  percentage,
  progressValue,
}: Props) => {
  return (
    <div className="border border-periwinkle-blue/20 rounded-sm p-2 flex flex-col gap-1 justify-center text-background">
      {title && <p className="text-md font-[500]">{title}</p>}
      {percentage != null && (
        <div className="flex items-center gap-2">
          {icon && (
            <div className="w-3.5 h-3.5">
              <Image
                src={Number(percentage) >= 0 ? increaseIcon : decreaseIcon}
                alt="icon"
                className="w-full h-full"
              />
            </div>
          )}
          <p
            className={` ${
              Number(percentage) > 0
                ? "text-mint-green"
                : Number(percentage) < 0
                ? "text-deep-pink"
                : "text-background"
            }  ${
              progressValue ? "text-periwinkle-blue" : ""
            } text-md font-[500]`}
          >
            {Math.abs(Number(percentage)).toFixed(2)}%
          </p>
          {progressValue !== undefined && progressValue > 0 && (
            <Progress
              value={progressValue}
              className="[&>div]:rounded-r-xs [&>div]:bg-periwinkle-blue bg-periwinkle-blue/40
           h-[.3rem] rounded-xs"
            />
          )}
        </div>
      )}

      <span className="text-xs opacity-70">{subTitle}</span>
    </div>
  );
};
