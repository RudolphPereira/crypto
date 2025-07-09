"use client";
import { AutoComplete, type Option } from "@/components/ui/autocomplete";
import { useState } from "react";

const FRAMEWORKS = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "wordpress",
    label: "WordPress",
  },
  {
    value: "express.js",
    label: "Express.js",
  },
  {
    value: "nest.js",
    label: "Nest.js",
  },
];

export const SearchBox = () => {
  // eslint-disable-next-line
  const [isLoading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [isDisabled, setDisabled] = useState(false);
  const [value, setValue] = useState<Option>();
  return (
    <div className="sm:min-w-[20rem]">
      <AutoComplete
        options={FRAMEWORKS}
        emptyMessage="No results."
        placeholder="Search..."
        isLoading={isLoading}
        onValueChange={setValue}
        value={value}
        disabled={isDisabled}
      />
    </div>
  );
};
