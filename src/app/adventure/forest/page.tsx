"use client";

export const dynamic = "force-dynamic";

import MouseFollower from "@/app/components/MouseFollower";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MonsterLogic from "@/app/components/MonsterLogic";
import Image from "next/image";

export default function ForestPage() {
  const [fade, setFade] = useState(false);
  const [textFadeIn, setTextFadeIn] = useState(false);
  const [textFadeOut, setTextFadeOut] = useState(false);

  useEffect(() => {
    const textFadeInTimer = setTimeout(() => {
      setTextFadeIn(true);
    }, 700);

    const textFadeOutTimer = setTimeout(() => {
      setTextFadeOut(true);
    }, 6800);

    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 7300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(textFadeInTimer);
      clearTimeout(textFadeOutTimer);
    };
  }, []);

  return (
    <>
      <MouseFollower></MouseFollower>
      <div className="inset-0 fixed z-[-1] bg-black"></div>
      <div className="fixed w-full translate-x-[-2px] h-screen overflow-x-hidden">
        <Image
          src="/forest.png"
          alt="forest background"
          fill
          className="object-cover object-center absolute inset-0 z-0 pointer-events-none shadow-[0_0_100px_100px_rgba(0,0,0,0.4)]"
        />

        <motion.div
          className="pointer-events-none fixed inset-0 bg-black z-30"
          initial={{ opacity: 1 }}
          animate={fade ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 2 }}
        ></motion.div>
        <div className=" relative inset-0">
          <motion.div
            className="z-50 absolute w-[600px] h-[120px] left-1/2 -translate-x-1/2 translate-y-[300px]"
            initial={{ opacity: 0 }}
            animate={
              textFadeOut
                ? { opacity: 0 }
                : textFadeIn
                ? { opacity: 1 }
                : { opacity: 0 }
            }
            transition={{ duration: 0.7 }}
          >
            <p className="text-center text-2xl text-white">
              A suffocating silence blankets the woods, only interrupted by the
              stomping of brittle leaves and your heavy breaths. Fatigued, you
              sense an oncoming presence. Someone is near.
            </p>
          </motion.div>
        </div>

        <MonsterLogic></MonsterLogic>
      </div>
    </>
  );
}
