import { SearchBox } from "./SearchBox";
import { CurrencyBox } from "./CurrencyBox";
import { ThemeBox } from "./ThemeBox";
import { LinkBox } from "./LinkBox";

export const Navigation = () => {
  return (
    <nav className="sm:flex-row flex flex-col items-center justify-between lg:gap-20 gap-5 py-4 flex-wrap sticky top-0 z-50 dark:bg-app-background rounded-b-sm">
      <div className="flex-1">
        <div className="">
          <LinkBox />
        </div>
      </div>

      <div className="flex-1 flex items-center gap-2 justify-end">
        <div className="xl:w-auto w-[100%]">
          <SearchBox />
        </div>
        <div className="">
          <CurrencyBox />
        </div>
        <div className="">
          <ThemeBox />
        </div>
      </div>
    </nav>
  );
};
