"use client";

import { useGame } from "./StoreContext";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DisplayUpdater() {
  const { base } = useGame();
  const { scoopOne, scoopTwo, scoopThree } = useGame();

  return (
    <motion.div
      className="absolute w-[30%] h-[60%] left-[33%] bottom-[20%]"
      initial={{ opacity: 0, scale: 1.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring" }}
    >
      <motion.div
        className={`absolute ${
          base === "normal cone"
            ? "w-[31%] h-[62%] left-[33%] bottom-[0%]"
            : base === "chocolate cone"
            ? "w-[32%] h-[60%] left-[33%] bottom-[0%]"
            : base === "cup"
            ? "w-[34%] h-[28%] left-[32%] bottom-[2%]"
            : "hidden"
        }`}
      >
        <Image
          src={
            base === "normal cone"
              ? "/stand-center.png"
              : base === "chocolate cone"
              ? "/stand-center-chocolate.png"
              : base === "cup"
              ? "/cup-real.png"
              : "/placeholder.png"
          }
          alt="base"
          fill
        ></Image>
      </motion.div>
      <motion.div
        className={`absolute w-[36%] h-[26%] left-[31%] ${
          base === "cup" ? "bottom-[20%]" : "bottom-[50%]"
        }`}
      >
        <Image
          src={
            scoopOne === "vanilla"
              ? "/vanilla-scoop.png"
              : scoopOne === "chocolate"
              ? "/chocolate-scoop.png"
              : scoopOne === "strawberry"
              ? "/strawberry-scoop.png"
              : scoopOne === "mint choco"
              ? "/mint-scoop.png"
              : scoopOne === "matcha"
              ? "/matcha-scoop.png"
              : scoopOne === "mango"
              ? "/mango-scoop.png"
              : scoopOne === "birthday cake"
              ? "/birthday-scoop.png"
              : scoopOne === "cookies and cream"
              ? "/cookies-scoop.png"
              : scoopOne === "cotton candy"
              ? "/cotton-scoop.png"
              : "/placeholder.png"
          }
          alt="scoop one"
          fill
        ></Image>
        <motion.div className="absolute w-[100%] h-[100%] -top-[65%]">
          <Image
            src={
              scoopTwo === "vanilla"
                ? "/vanilla-scoop.png"
                : scoopTwo === "chocolate"
                ? "/chocolate-scoop.png"
                : scoopTwo === "strawberry"
                ? "/strawberry-scoop.png"
                : scoopTwo === "mint choco"
                ? "/mint-scoop.png"
                : scoopTwo === "matcha"
                ? "/matcha-scoop.png"
                : scoopTwo === "mango"
                ? "/mango-scoop.png"
                : scoopTwo === "birthday cake"
                ? "/birthday-scoop.png"
                : scoopTwo === "cookies and cream"
                ? "/cookies-scoop.png"
                : scoopTwo === "cotton candy"
                ? "/cotton-scoop.png"
                : "/placeholder.png"
            }
            alt="scoop two"
            fill
          ></Image>
          <motion.div className="absolute w-[100%] h-[100%] -top-[65%]">
            <Image
              src={
                scoopThree === "vanilla"
                  ? "/vanilla-scoop.png"
                  : scoopThree === "chocolate"
                  ? "/chocolate-scoop.png"
                  : scoopThree === "strawberry"
                  ? "/strawberry-scoop.png"
                  : scoopThree === "mint choco"
                  ? "/mint-scoop.png"
                  : scoopThree === "matcha"
                  ? "/matcha-scoop.png"
                  : scoopThree === "mango"
                  ? "/mango-scoop.png"
                  : scoopThree === "birthday cake"
                  ? "/birthday-scoop.png"
                  : scoopThree === "cookies and cream"
                  ? "/cookies-scoop.png"
                  : scoopThree === "cotton candy"
                  ? "/cotton-scoop.png"
                  : "/placeholder.png"
              }
              alt="scoop two"
              fill
            ></Image>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
