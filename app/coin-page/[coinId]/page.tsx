import { CoinSummary } from "@/app/components/CoinSummary/CoinSummary";
import { TitleBox } from "@/app/components/TitleBox/TitleBox";

export default async function CoinPage({
  params,
}: {
  params: Promise<{ coinId: string }>;
}) {
  const { coinId } = await params;

  return (
    <div className="pb-10">
      <div className="flex flex-col gap-8 pt-8">
        <TitleBox
          title="Portfolio"
          breadCrumbTitle={`${coinId} summary`}
          hasBreadCrumb
        />
        <CoinSummary coinId={coinId} />
      </div>
    </div>
  );
}
