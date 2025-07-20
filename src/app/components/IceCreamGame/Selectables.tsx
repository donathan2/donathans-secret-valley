"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useDisplayManager from "./DisplayManager";
import { useGame } from "./StoreContext";
import { useEffect } from "react";

export default function Selectables() {
  const { displayManager } = useDisplayManager();
  const { base, setEnteredKitchen, setShowNote, showNote } = useGame();

  useEffect(() => {
    setEnteredKitchen(true);
  }, []);
  return (
    <>
      {/*SHELVES*/}
      <motion.div
        className="absolute w-[25%] h-[15%] right-[4%] top-[7%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring" }}
      >
        <Image src="/top-shelf.png" alt="top shelf" fill></Image>
        <motion.div
          className="absolute w-[18%] h-[75%] left-[15%] bottom-[30%]"
          whileHover={{ scale: 1.1, y: -20 }}
          onClick={() => displayManager("some rainbow sprinkles")}
        >
          <Image src="/sprinkler.png" alt="rainbow sprinkles" fill></Image>
        </motion.div>
        <motion.div
          className="absolute w-[18%] h-[75%] right-[41%] bottom-[30%]"
          whileHover={{ scale: 1.1, y: -20 }}
          onClick={() => displayManager("some chocolate chips")}
        >
          <Image
            src="/chocolate-sprinkler.png"
            alt="chocolate sprinkles"
            fill
          ></Image>
        </motion.div>
        <motion.div
          className="absolute w-[22%] h-[100%] right-[12%] bottom-[28%]"
          whileHover={{ scale: 1.1, y: -20 }}
          onClick={() => displayManager("some chocolate sauce")}
        >
          <Image src="/chocolate-sauce.png" alt="chocolate sauce" fill></Image>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute w-[25%] h-[15%] right-[4%] top-[27%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", delay: 0.1 }}
      >
        <Image src="/bottom-shelf.png" alt="bot shelf" fill></Image>
        <motion.div
          className="absolute w-[45%] h-[90%] left-[16%] bottom-[31%]"
          whileHover={{ scale: 1.1, y: -20 }}
          onClick={() => displayManager("a cherry")}
        >
          <Image src="/cherry-bowl.png" alt="cherry bowl" fill></Image>
        </motion.div>
        <motion.div
          className="absolute w-[21%] h-[100%] right-[15%] bottom-[30%]"
          whileHover={{ scale: 1.1, y: -20 }}
          onClick={() => displayManager("some whipped cream")}
        >
          <Image
            src="/whipped-spray.png"
            alt="whipped cream spray"
            fill
          ></Image>
        </motion.div>
      </motion.div>

      {/*ICE CREAMS*/}
      <motion.div
        className="absolute w-[10%] h-[11%] right-[2%] bottom-[37%]"
        initial={{ opacity: 0, x: 450 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          opacity: { duration: 0.3 },
          x: { type: "spring", damping: 15, delay: 0.2 },
        }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400 },
        }}
        onClick={() => displayManager("vanilla")}
      >
        <Image src="/vanilla.png" alt="vanilla" fill></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[11%] right-[12%] bottom-[37%]"
        initial={{ opacity: 0, x: 450 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          opacity: { duration: 0.3 },
          x: { type: "spring", damping: 15, delay: 0.1 },
        }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400 },
        }}
        onClick={() => displayManager("chocolate")}
      >
        <Image src="/chocolate.png" alt="chocolate" fill></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[11%] right-[2%] bottom-[26%]"
        initial={{ opacity: 0, x: 450 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          opacity: { duration: 0.3 },
          x: { type: "spring", damping: 15, delay: 0.3 },
        }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400 },
        }}
        onClick={() => displayManager("strawberry")}
      >
        <Image src="/strawberry.png" alt="strawberry" fill></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[11%] right-[12%] bottom-[26%]"
        initial={{ opacity: 0, x: 450 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          opacity: { duration: 0.3 },
          x: { type: "spring", damping: 15, delay: 0.2 },
        }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400 },
        }}
        onClick={() => displayManager("mint choco")}
      >
        <Image src="/mint-choco.png" alt="mint choc" fill></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[11%] right-[22%] bottom-[37%]"
        initial={{ opacity: 0, x: 450 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          opacity: { duration: 0.3 },
          x: { type: "spring", damping: 15 },
        }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400 },
        }}
        onClick={() => displayManager("birthday cake")}
      >
        <Image src="/birthday-cake.png" alt="birthday" fill></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[11%] right-[22%] bottom-[26%]"
        initial={{ opacity: 0, x: 450 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          opacity: { duration: 0.3 },
          x: { type: "spring", damping: 15, delay: 0.1 },
        }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400 },
        }}
        onClick={() => displayManager("cotton candy")}
      >
        <Image src="/cotton-candy.png" alt="cotton candy" fill></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[11%] right-[2%] bottom-[15%]"
        initial={{ opacity: 0, x: 450 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          opacity: { duration: 0.3 },
          x: { type: "spring", damping: 15, delay: 0.4 },
        }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400 },
        }}
        onClick={() => displayManager("matcha")}
      >
        <Image src="/matcha.png" alt="matcha" fill></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[11%] right-[12%] bottom-[15%]"
        initial={{ opacity: 0, x: 450 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          opacity: { duration: 0.3 },
          x: { type: "spring", damping: 15, delay: 0.3 },
        }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400 },
        }}
        onClick={() => displayManager("mango")}
      >
        <Image src="/mango.png" alt="mango" fill></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[11%] right-[22%] bottom-[15%]"
        initial={{ opacity: 0, x: 450 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          opacity: { duration: 0.3 },
          x: { type: "spring", damping: 15, delay: 0.2 },
        }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400 },
        }}
        onClick={() => displayManager("cookies & cream")}
      >
        <Image src="/cookies-cream.png" alt="cookies and cream" fill></Image>
      </motion.div>

      {/* CONE/CUPS */}
      <motion.div
        className="absolute w-[11%] h-[30%] left-[9%] bottom-[43%]"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        whileHover={{ scale: 1.1, y: -30 }}
        transition={{
          x: { type: "spring", damping: 20, delay: 0.05 },
          scale: { type: "spring", stiffness: 200 },
          y: { type: "spring", stiffness: 200 },
        }}
        onClick={() => displayManager("normal cone")}
      >
        <Image
          src={`${
            base !== "normal cone" ? "/stand-normal.png" : "/placeholder.png"
          }`}
          alt="normal cone stand"
          fill
        />
      </motion.div>
      <motion.div
        className="absolute w-[11%] h-[30%] left-[20%] bottom-[44%]"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        whileHover={{ scale: 1.1, y: -30 }}
        transition={{
          x: { type: "spring", damping: 20 },
          scale: { type: "spring", stiffness: 200 },
          y: { type: "spring", stiffness: 200 },
        }}
        onClick={() => displayManager("chocolate cone")}
      >
        <Image
          src={`${
            base !== "chocolate cone"
              ? "/stand-chocolate.png"
              : "/placeholder.png"
          }`}
          alt="chocolate cone stand"
          fill
        ></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[13%] left-[1%] bottom-[44%]"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        whileHover={{ scale: 1.1, y: -30 }}
        transition={{
          x: { type: "spring", damping: 20, delay: 0.1 },
          scale: { type: "spring", stiffness: 200 },
          y: { type: "spring", stiffness: 200 },
        }}
        onClick={() => displayManager("cup")}
      >
        <Image
          src={`${base !== "cup" ? "/cup.png" : "/placeholder.png"}`}
          alt="cup"
          fill
        ></Image>
      </motion.div>

      {/* NOTE */}
      <motion.div
        className="absolute w-[7%] h-[16%] top-[20%] left-[2%]"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", damping: 20 }}
        whileHover={{ scale: 1.2, rotateZ: -5 }}
        onClick={() => setShowNote(true)}
      >
        <Image src="/note-wall.png" alt="note on wall" fill></Image>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={showNote ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.15 }}
        className={`absolute w-full h-full bg-black/50 z-[100] ${
          !showNote ? "pointer-events-none" : ""
        }`}
        onClick={() => setShowNote(false)}
      >
        <div className="absolute w-[40%] h-[80%] bottom-[10%] left-[30%]">
          <Image src="/note.png" alt="note close up" fill></Image>
        </div>
      </motion.div>
    </>
  );
}
