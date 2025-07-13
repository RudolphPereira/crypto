import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SliderContent } from "../SliderContent/SliderContent";
import { GraphContent } from "../GraphContent/GraphContent";

type Triggers = string[];

export const TabContent = () => {
  const tabs: Triggers = ["Coins", "Convertor"];

  return (
    <div className="tabContentBox">
      <Tabs className="gap-5" defaultValue={tabs[0]}>
        <div className="w-full grid sm:grid-cols-1 lg:grid-cols-3 ">
          <div className="bg-dark-gunmetal w-full p-1 rounded-sm">
            <TabsList className="w-full text-sm rounded-sm bg-dark-gunmetal p-0 h-10">
              {tabs.map((tab) => (
                <TabsTrigger
                  value={tab}
                  key={tab}
                  defaultValue={tab}
                  className="cursor-pointer text-white rounded-sm h-10 border-transparent border-b-0 data-[state=active]:bg-periwinkle-blue/30 data-[state=active]:border-periwinkle-blue data-[state=active]:border-b-0 data-[state=active]:drop-shadow-md data-[state=active]:drop-shadow-periwinkle-blue/60"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>
        <TabsContent value={tabs[0]} className="flex flex-col gap-8">
          <SliderContent />
          <GraphContent />
        </TabsContent>
        <TabsContent value={tabs[1]}>
          <h1>Jello</h1>
        </TabsContent>
      </Tabs>
    </div>
  );
};
