"use client";

import { useGame } from "./StoreContext";
import { motion } from "framer-motion";
import useDisplayManager from "./DisplayManager";
import Image from "next/image";

export default function Fridge() {
  const { displayManager } = useDisplayManager();
  const { showFridge, setShowFridge } = useGame();

  return (
    <>
      <div
        className="absolute w-[26%] h-[28%] bottom-[0%] left-[0%]"
        onClick={() => setShowFridge(true)}
      ></div>

      <div className={` ${!showFridge ? "pointer-events-none" : ""}`}>
        <motion.div
          className={`absolute w-full h-full bg-black/50 z-[55] ${
            !showFridge ? "pointer-events-none" : ""
          }`}
          initial={{ opacity: 0 }}
          animate={showFridge ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => setShowFridge(false)}
        ></motion.div>
        <motion.div
          className="absolute w-[55%] h-[65%] -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 z-[56]"
          initial={{ opacity: 0 }}
          animate={showFridge ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => setShowFridge(false)}
        >
          <Image src="/freezer.png" alt="freezer" fill></Image>
        </motion.div>
        <motion.div
          className="absolute w-[8%] h-[26%] left-[35%] bottom-[35%] z-[56]"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            showFridge ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ type: "spring", stiffness: 80 }}
          whileHover={{ scale: 1.3 }}
          onClick={() => {
            displayManager("orange");
            setShowFridge(false);
          }}
        >
          <Image src="/orange-pop.png" alt="orange popsicle" fill></Image>
        </motion.div>
        <motion.div
          className="absolute w-[8%] h-[26%] left-1/2 -translate-x-1/2 bottom-[35%] z-[56]"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            showFridge ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ type: "spring", stiffness: 80 }}
          whileHover={{ scale: 1.3 }}
          onClick={() => {
            displayManager("cherry");
            setShowFridge(false);
          }}
        >
          <Image src="/cherry-pop.png" alt="cherry popsicle" fill></Image>
        </motion.div>
        <motion.div
          className="absolute w-[8%] h-[26%] left-[57%] bottom-[35%] z-[56]"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            showFridge ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ type: "spring", stiffness: 80 }}
          whileHover={{ scale: 1.3 }}
          onClick={() => {
            displayManager("grape");
            console.log("tried to input grape");
            setShowFridge(false);
          }}
        >
          <Image src="/grape-pop.png" alt="grape popsicle" fill></Image>
        </motion.div>
      </div>
    </>
  );
}
