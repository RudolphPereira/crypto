import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export const PushToTopBtn = () => {
  return (
    <div className="fixed bottom-10 right-13 ">
      <Button
        size="icon"
        className="shadow-lg bg-background text-foreground hover:text-background rounded-full cursor-pointer border border-transparent border-b-0 hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in"
      >
        <ChevronUp className="size-5" />
      </Button>
    </div>
  );
};
