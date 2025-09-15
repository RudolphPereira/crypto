"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SliderContent } from "../SliderContent/SliderContent";
import { GraphContent } from "../GraphContent/GraphContent";
import { TableContent } from "../TableContent/TableContent";
import { ConvertorContent } from "../ConvertorContent/ConvertorContent";
import { FadeIn } from "../FadeIn/FadeIn";
import { PushToTopBtn } from "../PushToTopBtn/PushToTopBtn";
import { useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";

type Triggers = string[];

export const TabContent = () => {
  const tabs: Triggers = ["Coins", "Convertor"];
  const [activeTab, setActiveTab] = useState<string>("Coins");
  const pageLoader = useAppSelector((state) => state.pageLoaderData.pageLoader);

  useEffect(() => {
    const prevActiveTab = sessionStorage.getItem("activeTab") ?? tabs[0];
    setActiveTab(prevActiveTab);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div className={"tabContentBox"}>
      <Tabs
        className="gap-5"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
      >
        <div className="w-full grid sm:grid-cols-1 lg:grid-cols-3 ">
          <div className="bg-dark-gunmetal w-full p-1 rounded-sm">
            <TabsList className="w-full text-sm rounded-sm bg-dark-gunmetal p-0 h-10">
              {tabs.map((tab) => (
                <TabsTrigger
                  value={tab}
                  key={tab}
                  className="rounded-sm shadow-none cursor-pointer"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        <TabsContent value={tabs[0]}>
          <FadeIn delay={pageLoader ? 0.6 : 0.1}>
            <div className="flex flex-col gap-8">
              <SliderContent />
              <GraphContent />
              <TableContent />
            </div>
          </FadeIn>
        </TabsContent>

        <TabsContent value={tabs[1]}>
          <FadeIn delay={pageLoader ? 0.6 : 0.1}>
            <ConvertorContent />
          </FadeIn>
        </TabsContent>
      </Tabs>

      {activeTab === "Coins" && <PushToTopBtn />}
    </div>
  );
};
