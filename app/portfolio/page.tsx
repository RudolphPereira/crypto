import { PortfolioContent } from "../components/PortfolioContent/PortfolioContent";
import { PortfolioTitleActionBox } from "../components/PortfolioContent/PortfolioTitleActionBox";

export default function Portfolio() {
  return (
    <div className="pb-10">
      <div className="flex flex-col gap-8 pt-8">
        <div className=" flex flex-col gap-6">
          <PortfolioTitleActionBox />
          <PortfolioContent />
        </div>
      </div>
    </div>
  );
}
