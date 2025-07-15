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
        <div className="absolute w-[18%] h-[75%] left-[15%] bottom-[30%]">
          <Image src="/sprinkler.png" alt="rainbow sprinkles" fill></Image>
        </div>
        <div className="absolute w-[18%] h-[75%] right-[41%] bottom-[30%]">
          <Image
            src="/chocolate-sprinkler.png"
            alt="chocolate sprinkles"
            fill
          ></Image>
        </div>
        <div className="absolute w-[22%] h-[100%] right-[12%] bottom-[28%]">
          <Image src="/chocolate-sauce.png" alt="chocolate sauce" fill></Image>
        </div>
      </motion.div>
      <motion.div
        className="absolute w-[25%] h-[15%] right-[4%] top-[27%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", delay: 0.1 }}
      >
        <Image src="/shelf.png" alt="shelf" fill></Image>
        <div className="absolute w-[35%] h-[90%] left-[15%] bottom-[30%]">
          <Image src="/cherry-bowl.png" alt="cherry bowl" fill></Image>
        </div>
      </motion.div>

      {/*ICE CREAMS*/}
      <motion.div
        className="absolute w-[10%] h-[11%] left-[2%] bottom-[37%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", damping: 14 }}
      >
        <Image src="/vanilla.png" alt="vanilla" fill></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[11%] left-[12%] bottom-[37%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", delay: 0.1, damping: 14 }}
      >
        <Image src="/chocolate.png" alt="chocolate" fill></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[11%] left-[2%] bottom-[26%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", delay: 0.2, damping: 14 }}
      >
        <Image src="/strawberry.png" alt="strawberry" fill></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[11%] left-[12%] bottom-[26%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", delay: 0.3, damping: 14 }}
      >
        <Image src="/mint-choco.png" alt="mint choc" fill></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[11%] left-[22%] bottom-[37%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", delay: 0.2, damping: 14 }}
      >
        <Image src="/birthday-cake.png" alt="birthday" fill></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[11%] left-[22%] bottom-[26%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", delay: 0.3, damping: 14 }}
      >
        <Image src="/cotton-candy.png" alt="cotton candy" fill></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[11%] left-[2%] bottom-[15%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", delay: 0.3, damping: 14 }}
      >
        <Image src="/matcha.png" alt="matcha" fill></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[11%] left-[12%] bottom-[15%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", delay: 0.4, damping: 14 }}
      >
        <Image src="/mango.png" alt="mango" fill></Image>
      </motion.div>
      <motion.div
        className="absolute w-[10%] h-[11%] left-[22%] bottom-[15%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", delay: 0.5, damping: 14 }}
      >
        <Image src="/cookies-cream.png" alt="cookies and cream" fill></Image>
      </motion.div>
    </>
  );
}
