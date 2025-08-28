"use client";
import { Button } from "@/components/ui/button";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { MouseEvent } from "react";
// import { Toast } from "../Toast/Toast";
import {
  fetchGraphCoinList,
  updateNumOfDays,
} from "@/lib/features/graphData/graphDataSlice";

type DataArr = string[];

const data: DataArr = ["1", "7", "14", "30", "365"];

export const ChartTimeline = () => {
  const numOfDaysData = useAppSelector(
    (state) => state.graphData.numOfDaysData
  );
  const graphDataError = useAppSelector((state) => state.graphData.error);
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

  const handleTimeLine = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    dispatch(updateNumOfDays(e.currentTarget.value));
    updateGraphData();
  };

  return (
    <div className="chartTimeline">
      <div className="shadow-xs bg-dark-gunmetal light:bg-white p-1 flex justify-center md:justify-start gap-2 w-full md:w-fit rounded-sm">
        {data.map((btn: string) => {
          return (
            <Button
              key={btn}
              value={btn}
              defaultValue="1"
              onClick={handleTimeLine}
              disabled={btn === numOfDaysData || graphDataError !== ""}
              className={`
                ${btn === numOfDaysData ? "active" : ""} ${
                graphDataError !== ""
                  ? "[&.active]:disabled:opacity-40"
                  : "[&.active]:disabled:opacity-100"
              }  text-background cursor-pointer font-[500] border border-transparent border-b-0 hover:border-b-0 shadow-xs disabled:drop-shadow-md light:hover:drop-shadow-md  [&.active]:border-periwinkle-blue [&.active]:bg-periwinkle-blue/60 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 light:hover:bg-periwinkle-blue/60 transition-all duration-150 rounded-sm w-[3.5rem] h-[1.8rem] text-xs light:bg-white bg-dark-gunmetal`}
            >
              {btn === "30" ? "1M" : btn === "365" ? "1Y" : btn + "D"}
            </Button>
          );
        })}
      </div>
      {/* {graphDataError !== "" ? (
        <div className="hidden">
          <Toast
            title="Error"
            message={`${graphDataError}. ${
              graphDataError === "Network Error"
                ? "Too many requests made! kindly wait and try again after a minute."
                : ""
            }`}
            btnLabel="Close"
          />
        </div>
      ) : null} */}
    </div>
  );
};
