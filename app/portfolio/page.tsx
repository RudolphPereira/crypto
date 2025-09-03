import { TitleBox } from "../components/TitleBox/TitleBox";
import { ActionBtn } from "../components/AppButtons/AppBtns";
import { PortfolioCard } from "../components/PortfolioContent/PortfolioCard";
import { CoinDetails } from "../components/CoinDetails/CoinDetails";
import { PortfolioStats } from "../components/PortfolioContent/PortfolioStats";
import bitcoinImage from "../assets/Currency-icon-02.svg";
import ethImage from "../assets/Currency-icon-01.svg";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { SelectCoinsPopUp } from "../components/PortfolioContent/SelectCoinsPopUp";

export default function Portfolio() {
  return (
    <div className="pb-10">
      <div className="flex flex-col gap-8 pt-8">
        <div className=" flex flex-col gap-6">
          <TitleBox
            title="Portfolio"
            actionBtn={
              <Dialog>
                <DialogTrigger asChild>
                  <ActionBtn
                    btnTitle="Add Asset"
                    additionalClass="sm:min-w-[200px]"
                  />
                </DialogTrigger>
                <SelectCoinsPopUp />
              </Dialog>
            }
          />
          <PortfolioCard
            coinDetails={
              <CoinDetails
                coinName="Bitcoin (BTC)"
                coinImage={bitcoinImage}
                titleName="Total Value"
                value="$29,850 USD"
                date="Purchased 03.23.2023"
                percentage={3}
                highStatus
              />
            }
            portfolioStats={
              <>
                <PortfolioStats title="$29,850" subTitle="Current price" />
                <PortfolioStats subTitle="24h%" icon percentage="11.04" />
                <PortfolioStats
                  subTitle="Market cap vs volume"
                  percentage="56"
                  progressValue={56}
                  highStatus
                />
                <PortfolioStats
                  subTitle="Circ supply vs max supply"
                  icon
                  percentage="8.41"
                  highStatus
                />
              </>
            }
          />
          <PortfolioCard
            coinDetails={
              <CoinDetails
                coinName="Ethereum (ETH)"
                coinImage={ethImage}
                titleName="Total Value"
                value="$29,850 USD"
                date="Purchased 03.23.2023"
                percentage={2}
              />
            }
            portfolioStats={
              <>
                <PortfolioStats title="$29,850" subTitle="Current price" />
                <PortfolioStats subTitle="24h%" icon percentage="11.04" />
                <PortfolioStats
                  subTitle="Market cap vs volume"
                  percentage="14"
                  progressValue={14}
                />
                <PortfolioStats
                  subTitle="Circ supply vs max supply"
                  icon
                  percentage="8.41"
                  highStatus
                />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}
