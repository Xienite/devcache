import type { ComponentPropsWithoutRef } from "react";

// Tailwind's preflight strips all default table styling, so add borders/padding back.
// The wrapper div scrolls horizontally instead of letting wide tables overflow the page.
export default function Table(props: ComponentPropsWithoutRef<"table">) {
  return (
    <div className="mb-4 overflow-x-auto">
      <table
        className="[&_td]:border-border [&_th]:border-border w-full border-collapse text-sm [&_td]:border [&_td]:px-3 [&_td]:py-2 [&_th]:border [&_th]:px-3 [&_th]:py-2 [&_th]:text-left"
        {...props}
      />
    </div>
  );
}
