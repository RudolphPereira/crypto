import { SearchBox } from "./SearchBox";
import { CurrencyBox } from "./CurrencyBox";
import { ThemeBox } from "./ThemeBox";
import { LinkBox } from "./LinkBox";

export const Navigation = () => {
  return (
    <nav className="navigation sm:flex-row flex flex-col items-center justify-between lg:gap-20 gap-5 py-4 flex-wrap">
      <div className="navigationLeftBox flex-1">
        <div className="linkBox">
          <LinkBox />
        </div>
      </div>

      <div className="navigationRightBox flex-1 flex items-center gap-2 justify-end">
        <div className="searchBox xl:w-auto w-[100%]">
          <SearchBox />
        </div>
        <div className="currencyBox">
          <CurrencyBox />
        </div>
        <div className="themeBox">
          <ThemeBox />
        </div>
      </div>
    </nav>
  );
};
