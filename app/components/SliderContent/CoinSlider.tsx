import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import bitcoinIcon from "../../assets/Currency-icon-02.svg";
import { CoinStats } from "../CoinStats/CoinStats";

export const CoinSlider = () => {
  return (
    <div className="coinSlider">
      <div className="w-full">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent className="">
            <CarouselItem
              key="1"
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5  pl-0"
            >
              <div className="pl-2 ml-2">
                <Button className="w-full h-full p-0 light:bg-white">
                  <Card className="light:shadow-none light:bg-white rounded-sm py-4 w-full bg-black-russian border border-transparent border-b-0 text-background cursor-pointer hover:bg-periwinkle-blue/60 light:hover:bg-periwinkle-blue/70 transition-all duration-200 ease-in">
                    <CardContent className="flex items-center gap-4 px-4">
                      <div className="w-[2rem] h-[2rem]">
                        <Image
                          src={bitcoinIcon}
                          alt="coin icon"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1">
                        <div className="text-base font-[500]">
                          <p>Bitcoin (BTC)</p>
                        </div>
                        <div className="flex gap-3">
                          <CoinStats
                            price="27,445.55"
                            currency="USD"
                            percentage="2.35"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Button>
              </div>
            </CarouselItem>
            <CarouselItem
              key="2"
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5  pl-0"
            >
              <div className="pl-2 ml-2">
                <Button className="w-full h-full p-0 light:bg-white">
                  <Card className="active light:[&.active]:bg-periwinkle-blue/30 [&.active]:bg-periwinkle-blue/70 [&.active]:border-periwinkle-blue rounded-sm py-4 w-full bg-black-russian border border-transparent border-b-0 text-background cursor-pointer hover:bg-periwinkle-blue/60 transition-all duration-200 ease-in">
                    <CardContent className="flex items-center gap-4 px-4">
                      <div className="w-[2rem] h-[2rem]">
                        <Image
                          src={bitcoinIcon}
                          alt="coin icon"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 ">
                        <div className="text-base font-[500]">
                          <p className="text-background">Bitcoin (BTC)</p>
                        </div>
                        <div className="flex gap-3">
                          <CoinStats
                            price="27,445.55"
                            currency="USD"
                            highStatus
                            percentage="2.35"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Button>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="group top-28 -left-0 sm:top-1/2 sm:-left-8 size-9 sm:size-12 cursor-pointer sm:disabled:hidden text-white border-b-0 bg-periwinkle-blue/30 light:bg-periwinkle-blue/60 light:hover:bg-periwinkle-blue/90 hover:bg-periwinkle-blue/60 border-periwinkle-blue" />
          <CarouselNext className="group top-28 -right-0 sm:top-1/2  sm:-right-8 size-9 sm:size-12 cursor-pointer sm:disabled:hidden text-white border-b-0 light:bg-periwinkle-blue/60 light:hover:bg-periwinkle-blue/90 bg-periwinkle-blue/30 hover:bg-periwinkle-blue/60 border-periwinkle-blue" />
        </Carousel>
      </div>
    </div>
  );
};
