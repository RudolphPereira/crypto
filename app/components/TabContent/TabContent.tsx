import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SliderContent } from "../SliderContent/SliderContent";
import { GraphContent } from "../GraphContent/GraphContent";
import { TableContent } from "../TableContent/TableContent";
import { ConvertorContent } from "../ConvertorContent/ConvertorContent";

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
                  className="cursor-pointer light:data-[state=active]:bg-periwinkle-blue/60 dark:data-[state=active]:text-background  light:data-[state=active]:border-periwinkle-blue light:text-background dark:text-background rounded-sm h-10 border-transparent border-b-0 dark:data-[state=active]:bg-periwinkle-blue/30 dark:data-[state=active]:border-periwinkle-blue dark:data-[state=active]:border-b-0 dark:data-[state=active]:drop-shadow-md dark:data-[state=active]:drop-shadow-periwinkle-blue/60"
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
          <TableContent />
        </TabsContent>
        <TabsContent value={tabs[1]}>
          <ConvertorContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};
