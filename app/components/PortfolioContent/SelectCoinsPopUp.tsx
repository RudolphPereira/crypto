"use client";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ActionBtn } from "../AppButtons/AppBtns";
import Image from "next/image";
import coinIcon from "../../assets/flash-circle.svg";
import { PurchasedDatePicker } from "./PurchasedDatePicker";
import { SelectCoinsDropDown } from "./SelectCoinsDropDown";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { CircleX } from "lucide-react";
import {
  fetchPortfolioCoinList,
  updateCoinName,
  updateDate,
  updateNoOfCoins,
} from "@/lib/features/portfolioData/portfolioDataSlice";
import { MouseEvent, useRef } from "react";

export function SelectCoinsPopUp() {
  const dispatch = useAppDispatch();

  const [coinDropDownValue, setDropDownValue] = useState<string>("");
  const [noOfCoins, setNoOfCoins] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>(undefined);

  const mainCoinData = useAppSelector((state) => state.coinData.coinList);

  const coinArr = mainCoinData.map((coin) => {
    return {
      value: coin.id,
      label: coin.name,
      icon: coin.image,
    };
  });

  useEffect(() => {
    dispatch(updateCoinName(coinDropDownValue));
  }, [coinDropDownValue]);

  const handleNoOfCoins: ChangeEventHandler<HTMLInputElement> = (e) => {
    const num = e.target.value;
    const convertedNum = Number(num);
    if (convertedNum > 0 && convertedNum !== undefined) {
      setNoOfCoins(convertedNum.toString());
      dispatch(updateNoOfCoins(Number(convertedNum)));
    } else if (convertedNum === 0) {
      setNoOfCoins("");
      dispatch(updateNoOfCoins(""));
    }
  };

  const convertedDate = date?.toLocaleDateString("en-GB");
  const formattedDateDashed = convertedDate?.replace(/\//g, "-");

  useEffect(() => {
    if (date) {
      dispatch(updateDate(formattedDateDashed));
    }
  }, [date]);

  const closeRef = useRef<HTMLButtonElement>(null);

  const handleSubmitForm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(fetchPortfolioCoinList());
    closeRef.current?.click();
    setDropDownValue("");
    setNoOfCoins("");
    setDate(undefined);
  };

  const cancelDialog = () => {
    closeRef.current?.click();
    setDropDownValue("");
    setNoOfCoins("");
    setDate(undefined);
  };

  return (
    <>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-[100vw] max-w-[100vw] bg-deep-plum/50 backdrop-blur-[0.15rem] border-0 rounded-none h-[100vh] flex justify-center items-center"
      >
        <div className="sm:w-[700px] w-[500px] bg-app-background rounded-sm border-0 p-3 md:p-6 font-space-grotesk">
          <form className="flex flex-col gap-5">
            <DialogHeader className="flex flex-row justify-between">
              <DialogTitle className="text-background font-[500] text-base text-left">
                Add new or edit existing asset
              </DialogTitle>
              <DialogClose ref={closeRef} className="cursor-pointer">
                <CircleX className="text-background" size={20} />
              </DialogClose>
            </DialogHeader>
            <div className="flex sm:flex-row flex-col gap-6">
              <div className="sm:flex-1 rounded-lg sm:h-auto h-[12rem] bg-dark-blue w-full flex justify-center items-center shadow-xs">
                <div className="flex flex-col justify-center items-center gap-3">
                  <div className="size-15 bg-background/10 p-3 backdrop-blur-lg rounded-lg shadow-xs">
                    <Image
                      src={
                        coinDropDownValue
                          ? coinArr?.find(
                              (coin) => coin.value === coinDropDownValue
                            )?.icon
                          : coinIcon
                      }
                      alt="icon"
                      width={100}
                      height={100}
                      className={`w-full h-full shadow-xl rounded-full ${
                        coinDropDownValue === ""
                          ? "light:invert"
                          : "bg-white p-0.5"
                      }`}
                    />
                  </div>
                  {coinDropDownValue && (
                    <h3 className="text-3xl font-[700] text-background w-[200px] overflow-hidden truncate text-center">
                      {coinDropDownValue
                        ? coinArr?.find(
                            (coin) => coin.value === coinDropDownValue
                          )?.label
                        : ""}
                    </h3>
                  )}
                </div>
              </div>
              <div className="flex-1/5 flex flex-col gap-3 ">
                <div className="w-[100%]">
                  <SelectCoinsDropDown
                    value={coinDropDownValue}
                    setValue={setDropDownValue}
                    coinArr={coinArr}
                  />
                </div>
                <div className="">
                  <Input
                    onChange={handleNoOfCoins}
                    value={noOfCoins}
                    type="text"
                    placeholder="Number of coins purchased"
                    className="h-10 text-background light:bg-white rounded-sm border-0 dark:bg-dark-gunmetal outline-0 focus-visible:ring-0"
                  />
                </div>

                <div className="">
                  <PurchasedDatePicker date={date} setDate={setDate} />
                </div>

                <DialogFooter className="flex sm:flex-row  flex-col-reverse w-full">
                  <ActionBtn
                    handleOnCLick={cancelDialog}
                    type="button"
                    btnTitle="Cancel"
                    additionalClass="flex-1 hover:bg-deep-pink/40 hover:border-deep-pink/50"
                  />

                  <ActionBtn
                    type="submit"
                    disabled={!coinDropDownValue || !date || !noOfCoins}
                    btnTitle="Save changes"
                    additionalClass="flex-1"
                    handleOnCLick={handleSubmitForm}
                  />
                </DialogFooter>
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </>
  );
}
