import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";

const LoginBox = () => {
  return (
    <div className="h-10 w-10">
      <div className="h-10">
        <Button className="border h-[100%] w-[100%] border-white/15 text-sm cursor-pointer bg-black-russian rounded-sm group hover:bg-periwinkle-blue/60  hover:border-periwinkle-blue hover:border-b-0 hover:drop-shadow-periwinkle-blue/60">
          <div className="transition-all ease-in duration-250">
            <UserRound className="text-background !w-4.5 !h-4.5" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default LoginBox;
