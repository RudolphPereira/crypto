import { CoinSummary } from "@/app/components/CoinSummary/CoinSummary";
import { TitleBox } from "@/app/components/TitleBox/TitleBox";

export default async function CoinPage({
  params,
}: {
  params: Promise<{ coinId: string }>;
}) {
  const { coinId } = await params;

  const capitalizeWords = (str: string) => {
    return str
      .split(/[\s-]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const title = capitalizeWords(coinId.replace(/-/g, " "));

  return (
    <div className="pb-10">
      <div className="flex flex-col gap-8 pt-8">
        <TitleBox
          title="Portfolio"
          breadCrumbTitle={`${title} Summary`}
          hasBreadCrumb
        />
        <CoinSummary coinId={coinId} />
      </div>
    </div>
  );
}
