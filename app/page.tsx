import { TabContent } from "./components/TabContent/TabContent";

export default function Home() {
  return (
    <div className="pb-10">
      <div className="flex flex-col gap-8 pt-8">
        <TabContent />
      </div>
    </div>
  );
}
