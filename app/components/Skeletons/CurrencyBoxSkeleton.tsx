import { Skeleton } from "@/components/ui/skeleton";

export function CurrencyBoxSkeleton() {
  return (
    <div className="flex items-center gap-2 px-2 h-10 outline-none rounded-sm border border-white/15 light:bg-periwinkle-blue/40 bg-black-russian text-sm w-[7rem] cursor-pointer">
      <Skeleton className="rounded-sm h-6 w-6" />
      <Skeleton className="flex-2 h-[.9rem] w-[100%] rounded-xs" />
    </div>
  );
}
