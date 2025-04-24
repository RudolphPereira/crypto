export default async function CoinPage({
  params,
}: {
  params: { coinId: string };
}) {
  const { coinId } = await params;
  return <div>{coinId}</div>;
}
