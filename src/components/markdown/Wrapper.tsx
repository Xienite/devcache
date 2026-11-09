import type { ReactNode } from "react";

type WrapperProps = {
  children?: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return <article className="w-full">{children}</article>;
}
