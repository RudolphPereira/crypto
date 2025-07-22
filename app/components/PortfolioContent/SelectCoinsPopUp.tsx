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
import bitcoinImage from "../../assets/Currency-icon-02.svg";

import { PurchasedDatePicker } from "./PurchasedDatePicker";
import { SelectCoinsDropDown } from "./SelectCoinsDropDown";

export function SelectCoinsPopUp() {
  return (
    <DialogContent className="sm:max-w-[700px] bg-app-background rounded-sm border-0 p-3 md:p-6 font-space-grotesk">
      <form className="flex flex-col gap-5">
        <DialogHeader>
          <DialogTitle className="text-background font-[500] text-base text-left">
            Select coins
          </DialogTitle>
        </DialogHeader>
        <div className="flex sm:flex-row flex-col gap-6">
          <div className="sm:flex-1 rounded-lg sm:h-[13rem] h-[18rem] bg-dark-blue w-full flex justify-center items-center ">
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="size-15 bg-background/10 p-3 backdrop-blur-lg rounded-lg">
                <Image
                  src={bitcoinImage}
                  alt="icon"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-3xl font-[700] text-background w-[200px] overflow-hidden text-ellipsis text-center">
                Bitcoin (BTC)
              </h3>
            </div>
          </div>
          <div className="flex-1/5 flex flex-col gap-3">
            <div className="">
              <SelectCoinsDropDown />
            </div>
            <div className="">
              <Input
                type="text"
                placeholder="Purchased amount"
                className="h-10 text-background light:bg-white rounded-sm border-0 dark:bg-dark-gunmetal outline-0 focus-visible:ring-0"
              />
            </div>

            <div className="">
              <PurchasedDatePicker />
            </div>

            <DialogFooter className="flex sm:flex-row flex-col w-full">
              <DialogClose asChild>
                <ActionBtn
                  btnTitle="Cancel"
                  additionalClass="flex-1 hover:bg-deep-pink/40 hover:border-deep-pink/50"
                />
              </DialogClose>

              <ActionBtn btnTitle="Save changes " additionalClass="flex-1" />
            </DialogFooter>
          </div>
        </div>
      </form>
    </DialogContent>
  );
}
