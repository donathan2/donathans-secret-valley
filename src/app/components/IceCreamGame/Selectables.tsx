"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Selectables() {
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
        >
          <Image src="/sprinkler.png" alt="rainbow sprinkles" fill></Image>
        </motion.div>
        <motion.div
          className="absolute w-[18%] h-[75%] right-[41%] bottom-[30%]"
          whileHover={{ scale: 1.1, y: -20 }}
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
        >
          <Image src="/cherry-bowl.png" alt="cherry bowl" fill></Image>
        </motion.div>
        <motion.div
          className="absolute w-[21%] h-[100%] right-[15%] bottom-[30%]"
          whileHover={{ scale: 1.1, y: -20 }}
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
      >
        <Image src="/cookies-cream.png" alt="cookies and cream" fill></Image>
      </motion.div>

      {/* CONE STANDS */}
      <motion.div
        className="absolute w-[11%] h-[30%] left-[2%] bottom-[44%]"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        whileHover={{ scale: 1.1, y: -30 }}
        transition={{
          x: { type: "spring", damping: 20, delay: 0.1 },
          scale: { type: "spring", stiffness: 200 },
          y: { type: "spring", stiffness: 200 },
        }}
      >
        <Image src="/stand-normal.png" alt="normal cone stand" fill />
      </motion.div>
      <motion.div
        className="absolute w-[11%] h-[30%] left-[13%] bottom-[44%]"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        whileHover={{ scale: 1.1, y: -30 }}
        transition={{
          x: { type: "spring", damping: 20 },
          scale: { type: "spring", stiffness: 200 },
          y: { type: "spring", stiffness: 200 },
        }}
      >
        <Image
          src="/stand-chocolate.png"
          alt="chocolate cone stand"
          fill
        ></Image>
      </motion.div>
    </>
  );
}
