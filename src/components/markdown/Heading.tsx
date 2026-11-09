import type { ReactNode } from "react";

type HeadingProps = {
  level: "h1" | "h2" | "h3";
  children?: ReactNode;
};

const headingStyle = {
  h1: "text-3xl/loose font-bold",
  h2: "text-2xl/loose font-semibold",
  h3: "text-xl/loose font-semibold",
}



export default function Heading({ level, children }: HeadingProps) {

  const HeadingLevel = level;
  
  return <HeadingLevel className={headingStyle[level]}>{children}</HeadingLevel>;
  
}
