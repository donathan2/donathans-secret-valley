"use client";
import { useGame } from "./StoreContext";

export default function PickUpLogic() {
  const { setPickUp, base } = useGame();

  return (
    <div
      className="absolute w-[15%] h-[80%] left-[40%] bottom-[15%] z-[53]"
      onClick={() => {
        if (base !== "none") {
          setPickUp((prev) => !prev);
        }
      }}
    ></div>
  );
}
