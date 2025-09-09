"use client";
import { Button } from "@/components/ui/button";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { MouseEvent } from "react";
import {
  fetchGraphCoinList,
  updateNumOfDays,
} from "@/lib/features/graphData/graphDataSlice";
import {
  fetchConvertorGraphCoin,
  updateConvertorNumOfDays,
} from "@/lib/features/convertorGraphData/convertorGraphDataSlice";

type Props = {
  convertor?: boolean;
};

type DataArr = string[];

const data: DataArr = ["1", "7", "14", "30", "365"];

export const ChartTimeline = ({ convertor }: Props) => {
  const numOfDaysData = useAppSelector(
    (state) => state.graphData.numOfDaysData
  );
  const numOfDaysDataConvertor = useAppSelector(
    (state) => state.convertorGraphData.numOfDaysData
  );
  const graphDataError = useAppSelector((state) => state.graphData.error);
  const convertorGraphDataError = useAppSelector(
    (state) => state.convertorGraphData.error
  );

  const graphData = useAppSelector((state) => state.graphData.graphCoinList);
  const compareStatus = useAppSelector(
    (state) => state.graphData.compareStatus
  );
  const dispatch = useAppDispatch();

  const updateGraphData = () => {
    if (compareStatus) {
      graphData.forEach((coin) => {
        dispatch(fetchGraphCoinList(coin.coinName));
      });
    } else {
      dispatch(fetchGraphCoinList());
    }
  };

  const updateConvertorGraphData = () => {
    dispatch(fetchConvertorGraphCoin());
  };

  const handleTimeLine = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    dispatch(updateNumOfDays(e.currentTarget.value));
    updateGraphData();
  };

  const handleConvertorTimeLine = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    dispatch(updateConvertorNumOfDays(e.currentTarget.value));
    updateConvertorGraphData();
  };

  return (
    <div className="chartTimeline flex justify-center sm:justify-start">
      <div className="shadow-xs bg-dark-gunmetal light:bg-white p-1 flex justify-center md:justify-start gap-2 w-fit rounded-sm">
        {data.map((btn: string) => {
          return (
            <Button
              key={btn}
              value={btn}
              defaultValue="1"
              onClick={convertor ? handleConvertorTimeLine : handleTimeLine}
              disabled={
                convertor
                  ? btn === numOfDaysDataConvertor ||
                    convertorGraphDataError !== ""
                  : btn === numOfDaysData || graphDataError !== ""
              }
              className={`
                ${
                  convertor
                    ? btn === numOfDaysDataConvertor
                      ? "active"
                      : ""
                    : btn === numOfDaysData
                    ? "active"
                    : ""
                } ${
                graphDataError !== "" ||
                (convertor && convertorGraphDataError !== "")
                  ? "[&.active]:disabled:opacity-40"
                  : "[&.active]:disabled:opacity-100"
              }  text-background cursor-pointer font-[500] border border-transparent border-b-0 hover:border-b-0 shadow-xs disabled:drop-shadow-md light:hover:drop-shadow-md  [&.active]:border-periwinkle-blue [&.active]:bg-periwinkle-blue/60 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 light:hover:bg-periwinkle-blue/60 transition-all duration-150 rounded-sm w-[3.5rem] h-[1.8rem] text-xs light:bg-white bg-dark-gunmetal`}
            >
              {btn === "30" ? "1M" : btn === "365" ? "1Y" : btn + "D"}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
