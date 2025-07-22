import { Plus } from "lucide-react";
import { ProgressStats } from "../TableContent/ProgressStats";

type Props = {
  title: string;
  value: string;
  progressBar?: boolean;
  status?: string;
  amount?: string;
  total?: string;
  progressBarValue?: number | undefined;
};

export const CoinSummaryStats = ({
  title,
  value,
  progressBar,
  status,
  amount,
  total,
  progressBarValue,
}: Props) => {
  return (
    <div className="flex flex-col gap-4 text-background">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <div className="flex items-center justify-center shadow w-[1.3rem] h-[1.3rem] border border-b-0 border-periwinkle-blue drop-shadow-periwinkle-blue rounded-full bg-periwinkle-blue/40">
            <Plus className="size-3 font-[500]" />
          </div>
          <p className="text-sm">{title}</p>
        </div>
        <p className="text-base">{value}</p>
      </div>
      {progressBar && (
        <ProgressStats
          status={status}
          amount={amount}
          total={total}
          progressValue={progressBarValue}
        />
      )}
    </div>
  );
};
