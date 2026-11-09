import type { ComponentType } from "react";

type ButtonProps = {
  text: string;
  Icon: ComponentType<IconProps>;
}

type IconProps = {
  className: string;
}

export default function Button({text, Icon} : ButtonProps) {
  return (<button className="cursor-pointer border-0 text-foreground flex items-center justify-center gap-2">
    <Icon className="w-4 h-4"/>
    {text}
  </button>)
}