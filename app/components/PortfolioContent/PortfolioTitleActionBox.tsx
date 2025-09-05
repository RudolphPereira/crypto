import { ActionBtn } from "../AppButtons/AppBtns";
import { TitleBox } from "../TitleBox/TitleBox";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { SelectCoinsPopUp } from "./SelectCoinsPopUp";

export const PortfolioTitleActionBox = () => {
  return (
    <>
      <TitleBox
        title="Portfolio"
        actionBtn={
          <Dialog modal={false}>
            <DialogTrigger asChild>
              <ActionBtn
                btnTitle="Build Portfolio"
                additionalClass="sm:min-w-[200px]"
              />
            </DialogTrigger>
            <SelectCoinsPopUp />
          </Dialog>
        }
      />
    </>
  );
};
