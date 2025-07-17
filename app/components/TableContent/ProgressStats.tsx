import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

type Props = {
  status?: string;
  amount?: string;
  total?: string;
  progressValue: number;
};

export const ProgressStats = ({
  status,
  amount,
  total,
  progressValue,
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <Badge className="bg-transparent shadow-none p-0">
          <div
            className={`h-1.5 w-1.5 rounded-full ${
              status === "high" ? "bg-mint-green" : "bg-deep-pink"
            }  mr-0.5`}
          />
          <span
            className={`${
              status === "high" ? "text-mint-green/60" : "text-deep-pink/60"
            } text-[12px] font-[400]`}
          >
            {amount}
          </span>
        </Badge>
        <Badge className="bg-transparent shadow-none p-0">
          <div
            className={`h-1.5 w-1.5 rounded-full ${
              status === "high" ? "bg-mint-green/60" : "bg-deep-pink/60"
            }  mr-0.5`}
          />
          <span className="text-background text-[12px] font-[400]">
            {total}
          </span>
        </Badge>
      </div>
      <div className="">
        <Progress
          value={progressValue}
          className={`[&>div]:rounded-r-xs ${
            status === "high"
              ? "[&>div]:bg-mint-green bg-mint-green/40"
              : "[&>div]:bg-deep-pink bg-deep-pink/40"
          }  h-[.3rem] rounded-xs`}
        />
      </div>
    </div>
  );
};
