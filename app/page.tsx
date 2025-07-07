import { TabContent } from "./components/TabContent/TabContent";

export default function Home() {
  return (
    <div className="home">
      <div className="topBox pt-8">
        <TabContent />
      </div>

      <div className="bottomBox"></div>
    </div>
  );
}
