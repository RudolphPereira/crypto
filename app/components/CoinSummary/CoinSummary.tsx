import React from "react";
import { CoinDetails } from "../CoinDetails/CoinDetails";
import bitcoinImage from "../../assets/Currency-icon-02.svg";
import { CoinHighsAndLows } from "./CoinHighsAndLows";
import { InfoSummary } from "./InfoSummary";
import { AdditionalLink } from "./AdditionalLink";
import { CoinSummaryStats } from "./CoinSummaryStats";

export const CoinSummary = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex md:flex-row flex-col gap-6 w-full">
        <div className="flex-1 p-3 md:p-6 bg-deep-plum light:bg-periwinkle-blue/20 rounded-lg flex flex-col gap-4">
          <CoinDetails
            coinName="Bitcoin (BTC)"
            coinImage={bitcoinImage}
            coinUrl="www.bitcoin.org"
            value="$29,850 USD"
            percentage="6.76%"
            highStatus
            hasAddAsset
            ledger
            hasMadeProfit
          />

          <div className="border-t-1 border-background/10 flex flex-col gap-4 pt-4">
            <CoinHighsAndLows
              title="All time high"
              date="Wed, 14 Sep 2023 11:54:46 GMT"
              amount="$64,805"
              highStatus
            />
            <CoinHighsAndLows
              title="All time low"
              date="Wed, 10 Sep 2023 22:01:53 GMT"
              amount="$32,805"
            />
          </div>
        </div>
        <div className="flex-1/4 flex justify-between flex-col gap-4">
          <InfoSummary
            info="Bitcoin is the first successful internet money based on peer-to-peer
        technology; whereby no central bank or authority is involved in the
        transaction and production of the Bitcoin currency. It was created by an
        anonymous individual/group under the name, Satoshi Nakamoto. The source
        code is available publicly as an open source project, anybody can look
        at it and be part of the developmental process. Bitcoin is changing the
        way we see money as we speak. The idea was to produce a means of
        exchange, independent of any central authority, that could be
        transferred electronically in a secure, verifiable and immutable way. It
        is a decentralized peer-to-peer internet currency making mobile payment
        easy, very low transaction fees, protects your identity, and it works
        anywhere all the time with no central authority and banks. Bitcoin is
        designed to have only 21 million BC ever created, thus making it a
        deflationary currency. Bitcoin uses the SHA-256 hashing algorithm with
        an average transaction confirmation time of 10 minutes. Miners today are
        mining Bitcoin using  chip dedicated to only mining Bitcoin, and the
        hash rate has shot up to  hashes. Being the first successful online
        cryptography currency, Bitcoin has inspired other alternative currencies
        such as , and so on. The cryptocurrency
        then took off with the innovation of the turing-complete smart contract
        by Ethereum which led to the development of other amazing projects such
        as EOS, Tron, and even crypto-collectibles such as Cryptokitties."
          />
          <div className="flex gap-3 flex-wrap">
            <AdditionalLink linkUrl="www.blockchain.com/bitcoin" />
            <AdditionalLink linkUrl="www.btc.com" />
            <AdditionalLink linkUrl="www.btc.tokenview.com" />
          </div>
        </div>
      </div>

      <div className="border-t-1 border-background/10 pt-6 grid sm:grid-cols-2 gap-6">
        <div className="p-3 md:p-6 bg-deep-plum light:bg-periwinkle-blue/20 rounded-lg flex flex-col gap-4">
          <CoinSummaryStats title="Total Volume" value="1,192,352 BTC" />
          <CoinSummaryStats title="Volume 24h" value="$47,714,337,481" />
          <CoinSummaryStats title="Volume/Market" value="0.06363" />
        </div>
        <div className="p-3 md:p-6 bg-deep-plum light:bg-periwinkle-blue/20 rounded-lg flex flex-col gap-4">
          <CoinSummaryStats title="Max Supply" value="21,000,000 BTC" />
          <CoinSummaryStats
            title="Circulating Supply"
            value="18,734,943 BTC"
            progressBar
            status="high"
            amount="56%"
            total="100%"
            progressBarValue={80}
          />
        </div>
        <div className="p-3 md:p-6 bg-deep-plum light:bg-periwinkle-blue/20 rounded-lg flex flex-col gap-4">
          <CoinSummaryStats title="Market Cap" value="$749,864,345,056" />
          <CoinSummaryStats
            title="Fully Diluted Valuation"
            value="$840,523,040,085"
          />
        </div>
      </div>
    </div>
  );
};
