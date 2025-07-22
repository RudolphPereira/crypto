import { Input } from "@/components/ui/input";

export const CoinInput = () => {
  return (
    <div className="">
      <Input
        type="text"
        placeholder="0"
        className=" light:bg-white dark:bg-transparent w-full border-0 outline-none focus-visible:ring-0 p-0 text-right shadow-none md:text-2xl font-[700]"
      />
    </div>
  );
};
