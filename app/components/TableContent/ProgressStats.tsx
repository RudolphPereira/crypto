import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

type Props = {
  amount?: string;
  total?: string;
  progressValue?: number;
  status?: boolean;
};

export const ProgressStats = ({ amount, total, progressValue }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <Badge className="bg-transparent shadow-none p-0">
          <div className="h-1.5 w-1.5 rounded-full bg-periwinkle-blue mr-0.5" />
          <span className="text-periwinkle-blue text-[12px] font-[400]">
            {amount}
          </span>
        </Badge>
        <Badge className="bg-transparent shadow-none p-0">
          <div className="h-1.5 w-1.5 rounded-full bg-periwinkle-blue/60  mr-0.5" />
          <span className="text-background text-[12px] font-[400]">
            {total}
          </span>
        </Badge>
      </div>
      <div className="">
        <Progress
          value={progressValue}
          className="[&>div]:rounded-r-xs [&>div]:bg-periwinkle-blue bg-periwinkle-blue/40
           h-[.3rem] rounded-xs"
        />
      </div>
    </div>
  );
};
