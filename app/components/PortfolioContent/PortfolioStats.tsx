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
  progressValue?: number;
};

export const PortfolioStats = ({
  title,
  subTitle,
  icon,
  highStatus,
  percentage,
  progressValue,
}: Props) => {
  return (
    <div className="border border-periwinkle-blue/20 rounded-sm p-2 flex flex-col gap-1 justify-center text-background">
      {title && <p className="text-md font-[500]">{title}</p>}
      {percentage && (
        <div className="flex items-center gap-2">
          {icon && (
            <div className="w-3.5 h-3.5">
              <Image
                src={highStatus ? increaseIcon : decreaseIcon}
                alt="icon"
                className="w-full h-full"
              />
            </div>
          )}
          <p
            className={`${
              highStatus ? "text-mint-green" : "text-deep-pink"
            } text-md font-[500]`}
          >
            {percentage}%
          </p>
          {progressValue && (
            <Progress
              value={progressValue}
              className={`[&>div]:rounded-r-xs ${
                highStatus
                  ? "[&>div]:bg-mint-green bg-mint-green/40"
                  : "[&>div]:bg-deep-pink bg-deep-pink/40"
              }  h-[.3rem] rounded-xs`}
            />
          )}
        </div>
      )}

      <span className="text-xs opacity-70">{subTitle}</span>
    </div>
  );
};
