"use client";
import { ActionBtn } from "../AppButtons/AppBtns";
import { TitleBox } from "../TitleBox/TitleBox";
import { CoinSlider } from "./CoinSlider";
import { ChartNoAxesColumn, X } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { updateCompareStatus } from "@/lib/features/graphData/graphDataSlice";

export const SliderContent = () => {
  const dispatch = useAppDispatch();
  const compareStatus = useAppSelector(
    (state) => state.graphData.compareStatus
  );
  const graphData = useAppSelector((state) => state.graphData.graphCoinList);
  const graphDataError = useAppSelector((state) => state.graphData.error);

  const handleCompareStatus = () => {
    dispatch(updateCompareStatus(!compareStatus));
  };

  return (
    <div className="slider">
      <div className="flex flex-col gap-5">
        <TitleBox
          subtitle={
            compareStatus
              ? `${
                  3 - graphData.length === 0
                    ? "Selection at full capacity"
                    : `Select ${3 - graphData.length} more ${
                        3 - graphData.length === 1 ? "currency" : "currencies"
                      }  to compare statistics`
                }`
              : "Select the currency to view statistics"
          }
          actionBtn={
            <ActionBtn
              disabled={graphDataError !== "" ? true : false}
              btnIcon={compareStatus ? <X /> : <ChartNoAxesColumn />}
              btnTitle={compareStatus ? "Comparing" : "Compare"}
              handleOnCLick={handleCompareStatus}
              additionalClass={compareStatus ? "active" : ""}
            />
          }
        />
        <CoinSlider />
      </div>
    </div>
  );
};
