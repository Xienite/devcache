import type { ReactNode } from "react";

type CodeProps = {
  children?: ReactNode;
};

export default function Code({ children }: CodeProps) {
  return <pre className="bg-muted p-4 mb-4"><code className="text-sm">{children}</code></pre>;
}
