"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export const PushToTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const toggleBtn = () => {
      if (window.pageYOffset > 0) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", toggleBtn);

    return () => {
      window.removeEventListener("scroll", toggleBtn);
    };
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showBtn && (
        <div className="fixed bottom-10 right-13 ">
          <Button
            onClick={handleScrollUp}
            size="icon"
            className="shadow-md light:hover:drop-shadow-md bg-background text-foreground hover:text-background rounded-full cursor-pointer border border-transparent border-b-0 hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in"
          >
            <ChevronUp className="size-5" />
          </Button>
        </div>
      )}
    </>
  );
};
