"use client";

import { cn } from "@/lib/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";
import { useEffect, useRef, useState, useCallback } from "react";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  const tabsListRef = useRef<HTMLDivElement | null>(null);

  const updateIndicator = useCallback(() => {
    if (!tabsListRef.current) return;

    const activeTab = tabsListRef.current.querySelector<HTMLElement>(
      "[data-state='active']"
    );
    if (!activeTab) return;

    const activeRect = activeTab.getBoundingClientRect();
    const tabsRect = tabsListRef.current.getBoundingClientRect();

    setIndicatorStyle({
      left: activeRect.left - tabsRect.left,
      top: activeRect.top - tabsRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, []);

  useEffect(() => {
    // Set indicator initially
    updateIndicator();

    // Recalculate on window resize
    window.addEventListener("resize", updateIndicator);

    // Recalculate on DOM changes (active tab change)
    const observer = new MutationObserver(updateIndicator);
    if (tabsListRef.current) {
      observer.observe(tabsListRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }

    return () => {
      window.removeEventListener("resize", updateIndicator);
      observer.disconnect();
    };
  }, [updateIndicator]);

  return (
    <div className="relative overflow-visible" ref={tabsListRef}>
      <TabsPrimitive.List
        ref={ref}
        data-slot="tabs-list"
        className={cn(
          "light:text-background relative inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
          className
        )}
        {...props}
      />
      {indicatorStyle && (
        <div
          style={indicatorStyle}
          className={cn(
            "absolute cursor-pointer border light:bg-periwinkle-blue/60 dark:text-background light:border-periwinkle-blue light:text-background rounded-sm h-10 border-transparent border-b-0 dark:bg-periwinkle-blue/30 dark:border-periwinkle-blue dark:border-b-0 dark:drop-shadow-md dark:drop-shadow-periwinkle-blue/60 transition-all duration-300 ease-in-out"
          )}
        />
      )}
    </div>
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    data-slot="tabs-trigger"
    className={cn(
      "data-[state=active]:text-white focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 z-10",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    data-slot="tabs-content"
    className={cn("flex-1 outline-none mt-2", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
