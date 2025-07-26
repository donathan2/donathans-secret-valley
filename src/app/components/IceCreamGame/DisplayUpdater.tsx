"use client";

import { useGame } from "./StoreContext";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DisplayUpdater() {
  const { base, scoopOne, scoopTwo, scoopThree, toppings, pickUp } = useGame();

  return (
    <div
      className={`absolute z-[52] ${
        base === "cherry popsicle" ||
        base === "orange popsicle" ||
        base === "grape popsicle"
          ? "w-[32%] h-[65%] right-[10%] -bottom-[5%]"
          : !pickUp
          ? " w-[30%] h-[60%] left-[33%] bottom-[20%]"
          : " w-[35%] h-[70%] right-[10%] -bottom-[10%]"
      }`}
    >
      <motion.div
        className={`absolute ${
          base === "normal cone" && !pickUp
            ? "w-[31%] h-[62%] left-[33%] bottom-[0%]"
            : base === "normal cone" && pickUp
            ? "w-[33%] h-[45%] left-[32%] bottom-[13%]"
            : base === "chocolate cone" && !pickUp
            ? "w-[32%] h-[60%] left-[33%] bottom-[0%]"
            : base === "chocolate cone" && pickUp
            ? "w-[33%] h-[45%] left-[32%] bottom-[13%]"
            : base === "cup"
            ? "w-[34%] h-[28%] left-[32%] bottom-[2%]"
            : base === "orange popsicle" ||
              base === "cherry popsicle" ||
              base === "grape popsicle"
            ? "w-[30%] h-[65%] left-[32%] bottom-[2%]"
            : "hidden"
        }`}
      >
        <Image
          src={
            base === "normal cone" && !pickUp
              ? "/stand-center.png"
              : base === "normal cone" && pickUp
              ? "/cone-normal.png"
              : base === "chocolate cone" && !pickUp
              ? "/stand-center-chocolate.png"
              : base === "chocolate cone" && pickUp
              ? "/cone-chocolate.png"
              : base === "cup"
              ? "/cup-real.png"
              : base === "orange popsicle"
              ? "/orange-popsicle.png"
              : base === "cherry popsicle"
              ? "/cherry-popsicle.png"
              : base === "grape popsicle"
              ? "/grape-popsicle.png"
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
              : scoopOne === "cookies & cream"
              ? "/cookies-scoop.png"
              : scoopOne === "cotton candy"
              ? "/cotton-scoop.png"
              : "/placeholder.png"
          }
          alt="scoop one"
          fill
        ></Image>
        <motion.div
          className={`absolute ${
            scoopTwo !== "none" ? "w-[100%] h-[100%]" : "w-[0%] h-[0%]"
          } -top-[65%]`}
        >
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
                : scoopTwo === "cookies & cream"
                ? "/cookies-scoop.png"
                : scoopTwo === "cotton candy"
                ? "/cotton-scoop.png"
                : "/placeholder.png"
            }
            alt="scoop two"
            fill
          ></Image>
          <motion.div
            className={`absolute ${
              scoopThree !== "none" ? "w-[100%] h-[100%]" : "w-[0%] h-[0%]"
            } -top-[65%]`}
          >
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
                  : scoopThree === "cookies & cream"
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
      {/* // // // // CHERRY DISPLAY // // // // */}
      {toppings.cherry && (
        <motion.div
          className={`absolute w-[10%] h-[10%] z-[45] ${
            scoopOne !== "none" && scoopTwo === "none" && !toppings.cream
              ? `${
                  base !== "cup" ? "bottom-[71%]" : "bottom-[41%]"
                } right-[46%]`
              : scoopOne !== "none" && scoopTwo === "none" && toppings.cream
              ? `${
                  base !== "cup" ? "bottom-[75%]" : "bottom-[45%]"
                } right-[46%]`
              : scoopTwo !== "none" && scoopThree === "none" && !toppings.cream
              ? `${
                  base !== "cup" ? "bottom-[88%]" : "bottom-[58%]"
                } right-[46%]`
              : scoopTwo !== "none" && scoopThree === "none" && toppings.cream
              ? `${
                  base !== "cup" ? "bottom-[92%]" : "bottom-[62%]"
                } right-[46%]`
              : scoopThree !== "none" && !toppings.cream
              ? `${base !== "cup" ? "-top-[14%]" : "top-[16%]"} right-[46%]`
              : scoopThree !== "none" && toppings.cream
              ? `${base !== "cup" ? "-top-[18%]" : "top-[12%]"} right-[46%]`
              : ""
          }`}
        >
          <Image src="/cherry-drop.png" alt="cherry" fill></Image>
        </motion.div>
      )}

      {/* // // // // WHIPPED CREAM DISPLAY // // // // */}
      {toppings.cream && (
        <motion.div
          className={`absolute w-[25%] h-[19%] z-[44] ${
            scoopOne !== "none" && scoopTwo === "none"
              ? `${
                  base !== "cup" ? "bottom-[66%]" : "bottom-[36%]"
                } right-[38.5%]`
              : scoopTwo !== "none" && scoopThree === "none"
              ? `${base !== "cup" ? "-top-[2%]" : "bottom-[52%]"} right-[38.5%]`
              : scoopThree !== "none"
              ? `${
                  base !== "cup" ? "-top-[19%]" : "bottom-[69%]"
                } right-[38.5%]`
              : ""
          }`}
        >
          <Image src="/cream-drop.png" alt="whipped cream" fill></Image>
        </motion.div>
      )}
      {/* // // // // RAINBOW SPRINKLES DISPLAY // // // // */}
      {toppings.sprinkles && (
        <motion.div
          className={`absolute w-[36%] h-[26%] z-[42] ${
            scoopOne !== "none" && scoopTwo === "none"
              ? `${
                  base !== "cup" ? "bottom-[50%]" : "bottom-[20%]"
                } right-[33%]`
              : scoopTwo !== "none" && scoopThree === "none"
              ? `${
                  base !== "cup" ? "bottom-[67%]" : "bottom-[37%]"
                } right-[33%]`
              : scoopThree !== "none"
              ? `${
                  base !== "cup" ? "bottom-[84%]" : "bottom-[54%]"
                } right-[33%]`
              : ""
          }`}
        >
          <Image src="/sprinkles-drop.png" alt="rainbow sprinkles" fill></Image>
        </motion.div>
      )}
      {/* // // // // CHOCOLATE CHIPS DISPLAY // // // // */}
      {toppings.chips && (
        <motion.div
          className={`absolute w-[36%] h-[26%] z-[43] ${
            scoopOne !== "none" && scoopTwo === "none"
              ? `${
                  base !== "cup" ? "bottom-[50%]" : "bottom-[20%]"
                } right-[33%]`
              : scoopTwo !== "none" && scoopThree === "none"
              ? `${
                  base !== "cup" ? "bottom-[67%]" : "bottom-[37%]"
                } right-[33%]`
              : scoopThree !== "none"
              ? `${
                  base !== "cup" ? "bottom-[84%]" : "bottom-[54%]"
                } right-[33%]`
              : ""
          }`}
        >
          <Image src="/chips-drop.png" alt="chocolate chips" fill></Image>
        </motion.div>
      )}
      {/* // // // // CHOCOLATE SAUCE DISPLAY // // // // */}
      {toppings.sauce && (
        <motion.div
          className={`absolute w-[36%] h-[26%] z-[41] ${
            scoopOne !== "none" && scoopTwo === "none"
              ? `${
                  base !== "cup" ? "bottom-[50%]" : "bottom-[20%]"
                } right-[33%]`
              : scoopTwo !== "none" && scoopThree === "none"
              ? `${
                  base !== "cup" ? "bottom-[67%]" : "bottom-[37%]"
                } right-[33%]`
              : scoopThree !== "none"
              ? `${
                  base !== "cup" ? "bottom-[84%]" : "bottom-[54%]"
                } right-[33%]`
              : ""
          }`}
        >
          <Image src="/sauce-drop.png" alt="chocolate sauce" fill></Image>
        </motion.div>
      )}
    </div>
  );
}
