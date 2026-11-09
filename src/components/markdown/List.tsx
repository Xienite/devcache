import type { ReactNode } from "react";

type ListProps = {
  listType: "ol" | "ul";
  children?: ReactNode;
}

const listStyle = {
  ol: "list-decimal",
  ul: "list-disc"
}

export default function List({listType, children} : ListProps) {

  const List = listType;

  return (<List className={`${listStyle[listType]} list-inside mb-4`}>
    {children}
  </List>)
}
