import type { ComponentType } from "react";
import { Link } from "react-router-dom";

type IconProps = {
  className: string;
}

type CardProps = {
  Icon?: ComponentType<IconProps>;
  title: string;
  description?: string;
  to: string;
};

export default function Card({ title, description, to, Icon }: CardProps) {
  return (
    <Link to={to}>
      <div className=" text-foreground border-foreground p-4 hover:bg-muted flex gap-4 items-center">
        {Icon && <Icon className="w-8 h-8 text-muted-foreground" />}
        <div>
        <span>{title}</span>
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      </div>
    </Link>
  );
}
