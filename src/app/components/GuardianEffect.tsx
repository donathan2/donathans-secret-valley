"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GuardianEffect() {
  return (
    <>
      <motion.div
        className="absolute inset-0 z-50 bg-cyan-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.4 }}
      ></motion.div>
      <motion.div className="absolute z-50 flex justify-center items-center left-1/2 -translate-1/2 translate-y-[100px] inset-0">
        <motion.div
          className="absolute w-[800px] h-[500px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.5, 1, 0.5, 0],
            y: [500, -600],
            scale: [0.6, 1.5, 0.6],
          }}
          transition={{ duration: 0.85 }}
        >
          <Image
            src="/shield-proc.png"
            alt="shield guardian"
            width={2000}
            height={2000}
          ></Image>
        </motion.div>
      </motion.div>
    </>
  );
}
