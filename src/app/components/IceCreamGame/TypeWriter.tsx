import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
  onDone?: () => void;
};

export default function Typewriter({ text, speed, onDone }: TypewriterProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) {
      if (onDone) onDone();
      return;
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed, onDone]);

  return (
    <p className="text-center p-[20px] text-2xl">{text.slice(0, index)}</p>
  );
}
