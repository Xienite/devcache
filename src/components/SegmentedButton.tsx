import { useState } from "react";

type SegmentedButtonProps = {
  buttons: string[];
  active: string;
};

export default function SegmentedButton({
  active,
  buttons,
}: SegmentedButtonProps) {
  const [activeButton, setActiveButton] = useState(active);
  
  return (
    <div className="flex border border-muted-foreground w-min">
      {buttons.map((b) => <Button text={b} onClick={() => setActiveButton(b)} selected={b === activeButton}></Button>)}
    </div>
  );
}

function Button({ text, onClick, selected }: { text: string; onClick: () => void;  selected: boolean }) {
  return (
    <button onClick={onClick} className={`${selected ? "outline outline-foreground bg-foreground text-background" : "text-foreground border-0"} flex cursor-pointer items-center justify-center gap-2 px-4 py-1 whitespace-nowrap`}>
      {text}
    </button>

  );
}
