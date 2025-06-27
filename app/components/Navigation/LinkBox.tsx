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
    <div className="links flex justify-center sm:justify-between items-center flex-wrap gap-5">
      <div className="logoBox">
        <Link
          href="/"
          className="homeLink flex items-center gap-2 font-inter font-[700] text-xl"
        >
          <div className="imgBox w-[2.3rem] h-[2.3rem]">
            <Image
              src={logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          Crypto Vault
        </Link>
      </div>
      <ul className="navigationList flex gap-5 text-sm">
        <li className="navigationItem">
          <Link
            href="/"
            className={`navigationLink flex items-center gap-2 opacity-50 transition-opacity ease-in duration-75 ${
              pathname === "/" ? "active" : ""
            }`}
          >
            <div className="imgBox w-[1.2rem] h-[1.2rem]">
              <Image
                src={pathname === "/" ? homeIconFull : homeIcon}
                alt="home"
                className="w-full h-full object-contain transition-all ease-in duration-75"
              />
            </div>
            Home
          </Link>
        </li>
        <li className="navigationItem">
          <Link
            href="/portfolio"
            className={`navigationLink flex items-center gap-2 opacity-50 transition-opacity ease-in duration-75 ${
              pathname === "/portfolio" ? "active" : ""
            }`}
          >
            <div className="imgBox w-[1.2rem] h-[1.2rem]">
              <Image
                src={
                  pathname === "/portfolio" ? portfolioIconFull : portfolioIcon
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
