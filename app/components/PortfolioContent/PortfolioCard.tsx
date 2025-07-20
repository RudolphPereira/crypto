import React from "react";

type Props = {
  coinDetails: React.ReactNode;
  portfolioStats: React.ReactNode;
};

export const PortfolioCard = ({ coinDetails, portfolioStats }: Props) => {
  return (
    <div className="bg-black-russian flex lg:flex-row flex-col w-full rounded-lg">
      <div className="bg-dark-blue p-3 md:p-6 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg flex-1">
        {coinDetails}
      </div>
      <div className="flex-1/2 p-3 md:p-6 sm:rounded-r-lg grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        {portfolioStats}
      </div>
    </div>
  );
};
