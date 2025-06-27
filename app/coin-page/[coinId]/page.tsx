export default async function CoinPage({
  params,
}: {
  params: Promise<{ coinId: string }>;
}) {
  const { coinId } = await params;
  return <div>{coinId}</div>;
}
