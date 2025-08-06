import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export const CoinSliderSkeleton = () => {
  return (
    <CarouselItem
      key="2"
      className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5 pl-0"
    >
      <div className="pl-2 ml-2 h-full">
        <Button className="w-full h-full p-0 light:bg-white">
          <Card className="min-h-19 light:shadow-none light:bg-periwinkle-blue/40 rounded-sm py-4 w-full bg-black-russian border border-transparent border-b-0 text-background cursor-pointer hover:bg-periwinkle-blue/30 light:hover:bg-periwinkle-blue/30 transition-all duration-200 ease-in">
            <CardContent className="flex items-center gap-4 px-4">
              <div className="w-[2.2rem] h-[2.2rem] rounded-full group-hover:rotate-360 group-hover:scale-120 transition-all ease-in-out duration-600 bg-white p-0.5">
                <Skeleton className="rounded-full h-full w-full shadow-md" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="">
                  <Skeleton className="flex-2 h-[1rem] w-[9rem] rounded-xs" />
                </div>
                <div className="flex gap-3">
                  <Skeleton className="flex-2 h-[1rem] w-[6rem] rounded-xs" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Button>
      </div>
    </CarouselItem>
  );
};
