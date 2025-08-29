import { Badge } from "@/components/ui/badge";
import { CircleX } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  updateGraphCoinCompareList,
  updateSliderCoinName,
} from "@/lib/features/graphData/graphDataSlice";
import { MouseEvent } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  coinNames: string[];
};

export const CoinBadge = ({ coinNames }: Props) => {
  const dispatch = useAppDispatch();
  const graphData = useAppSelector((state) => state.graphData.graphCoinList);
  const coinList = useAppSelector((state) => state.coinData.coinList);
  const graphDataError = useAppSelector((state) => state.graphData.error);

  const getCoinName = coinList
    .filter((coin) => graphData.some((item) => item.coinName === coin.id))
    .map((coin) => {
      if (coinNames[0] === coin.id) {
        return [
          coin.name,
          coin.id,
          "bg-chart-1",
          "text-chart-1",
          "border-chart-1",
          "bg-chart-1/20",
          "hover:bg-chart-1",
        ];
      } else if (coinNames[1] === coin.id) {
        return [
          coin.name,
          coin.id,
          "bg-chart-2",
          "text-chart-2",
          "border-chart-2",
          "bg-chart-2/20",
          "hover:bg-chart-2",
        ];
      } else if (coinNames[2] === coin.id) {
        return [
          coin.name,
          coin.id,
          "bg-chart-3",
          "text-chart-3",
          "border-chart-3",
          "bg-chart-3/20",
          "hover:bg-chart-3",
        ];
      } else {
        return [coin.name, coin.id];
      }
    });

  const compareStatus = useAppSelector(
    (state) => state.graphData.compareStatus
  );

  const removeBadge = (value: string) => {
    return dispatch(
      updateGraphCoinCompareList({
        coinName: value,
      })
    );
  };

  const updateSliderCoin = (value: string) => {
    return dispatch(updateSliderCoinName(value));
  };

  const handleRemoveCoinBadge = (e: MouseEvent<HTMLButtonElement>) => {
    updateSliderCoin(e.currentTarget.id);
    removeBadge(e.currentTarget.id);
  };

  return (
    <div className="flex items-center gap-3 flex-wrap w-full justify-center md:justify-start">
      {compareStatus ? (
        getCoinName.map((item) => (
          <Button
            disabled={graphDataError !== ""}
            onClick={getCoinName.length < 2 ? undefined : handleRemoveCoinBadge}
            id={item[1]}
            key={item[1]}
            className="bg-transparent p-0 m-0 h-auto w-auto border-0 hover:bg-transparent !active:scale-none !transform-none"
          >
            <Badge
              key={item[1]}
              className={`${item[5]} ${item[3]} ${
                item[4]
              } font-[400] shadow-none rounded-sm cursor-pointer transition-all ease-in duration-200 
              ${
                getCoinName.length < 2
                  ? "cursor-default active:scale-none"
                  : `${item[6]} hover:text-white group active:scale-98`
              }`}
            >
              <div
                className={`h-1.5 w-1.5 rounded-sm ${item[2]} mr-0.5 group-hover:bg-white`}
              />
              <span className="first-letter:uppercase">{item[0]}</span>
              {getCoinName.length < 2 ? "" : <CircleX className="size-1.2" />}
            </Badge>
          </Button>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};
