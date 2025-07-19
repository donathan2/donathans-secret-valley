"use client";

import { useGame } from "./StoreContext";
import { motion } from "framer-motion";
import useAssessment from "./Assessment";

export default function ServingLogic() {
  const { pickUp, currentOrder, setCurrentOrder, clearIceCream, setPickUp } =
    useGame();
  const { startAssessment } = useAssessment();

  function handleServe() {
    setCurrentOrder({ ...currentOrder!, status: "assessment" });
    startAssessment();
    setTimeout(() => {
      clearIceCream();
    }, 2000);

    setPickUp(false);
  }

  return (
    <div>
      {pickUp && (
        <motion.div
          className="absolute w-[10%] h-[8%] left-[42%] bottom-[42%] bg-lime-400 border-black border border-[4px] z-[53]"
          whileHover={{ scale: 1.1 }}
          onClick={() => handleServe()}
        >
          <p className="text-center text-3xl p-[5px]">Serve!</p>
        </motion.div>
      )}
    </div>
  );
}
