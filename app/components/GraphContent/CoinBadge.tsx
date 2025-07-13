import { Badge } from "@/components/ui/badge";
import { CircleX } from "lucide-react";

export const CoinBadge = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap w-fit">
      <Badge className="bg-chart-1/15 font-[400] text-chart-1 border-chart-1 shadow-none rounded-sm cursor-pointer transition-all ease-in duration-200 hover:bg-chart-1 hover:text-white group active:scale-98">
        <div className="h-1.5 w-1.5 rounded-sm bg-chart-1 mr-0.5 group-hover:bg-white" />{" "}
        Bitcoin
        <CircleX className="size-1.2" />
      </Badge>

      <Badge className="bg-chart-2/15 font-[400] text-chart-2 border-chart-2 shadow-none rounded-sm cursor-pointer transition-all ease-in duration-200 hover:bg-chart-2 hover:text-white group active:scale-98">
        <div className="h-1.5 w-1.5 rounded-sm bg-chart-2 mr-0.5 group-hover:bg-white" />{" "}
        Ethereum
        <CircleX className="size-1.2" />
      </Badge>

      <Badge className="bg-chart-3/15 font-[400] text-chart-3 border-chart-3 shadow-none rounded-sm cursor-pointer transition-all ease-in duration-200 hover:bg-chart-3 hover:text-white group active:scale-98">
        <div className="h-1.5 w-1.5 rounded-sm bg-chart-3 mr-0.5 group-hover:bg-white" />{" "}
        XRP
        <CircleX className="size-1.2" />
      </Badge>
    </div>
  );
};
