"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import homeIcon from "../../assets/homeIcon.svg";
import portfolioIcon from "../../assets/portfolioIcon.svg";
import homeIconFull from "../../assets/homeIconFull.svg";
import portfolioIconFull from "../../assets/portfolioIconFull.svg";
import { usePathname } from "next/navigation";

export const LinkBox = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-center sm:justify-between items-center flex-wrap gap-5">
      <div className="">
        <Link
          href="/"
          className="flex items-center gap-2 font-inter font-[700] text-xl"
        >
          <div className="w-[2.3rem] h-[2.3rem]">
            <Image
              src={logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          Crypto Vault
        </Link>
      </div>
      <ul className="flex gap-5 text-sm">
        <li className="">
          <Link
            href="/"
            className={`flex items-center gap-2 opacity-50 transition-all ease-in duration-75 hover:text-periwinkle-blue hover:opacity-100 ${
              pathname === "/" ? "active" : ""
            }`}
          >
            <div className="w-[1.2rem] h-[1.2rem]">
              <Image
                src={pathname === "/" ? homeIconFull : homeIcon}
                alt="home"
                className="w-full h-full object-contain transition-all ease-in duration-75"
              />
            </div>
            Home
          </Link>
        </li>
        <li className="">
          <Link
            href="/portfolio"
            className={`flex items-center gap-2 opacity-50 transition-all ease-in duration-75 hover:text-periwinkle-blue hover:opacity-100 ${
              pathname === "/portfolio" ||
              pathname === "/portfolio/coin-page/[coinId]"
                ? "active"
                : ""
            }`}
          >
            <div className="w-[1.2rem] h-[1.2rem]">
              <Image
                src={
                  pathname === "/portfolio" ||
                  pathname === "/portfolio/coin-page/[coinId]"
                    ? portfolioIconFull
                    : portfolioIcon
                }
                alt="portfolio"
                className="w-full h-full object-contain transition-all ease-in duration-75"
              />
            </div>
            Portfolio
          </Link>
        </li>
      </ul>
    </div>
  );
};
