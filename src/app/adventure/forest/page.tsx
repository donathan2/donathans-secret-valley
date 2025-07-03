"use client";

import MouseFollower from "@/app/components/MouseFollower";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MonsterLogic from "@/app/components/MonsterLogic";

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
    }, 8500);

    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 9500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(textFadeInTimer);
      clearTimeout(textFadeOutTimer);
    };
  }, []);

  return (
    <>
      <MouseFollower></MouseFollower>
      <div className="relative w-screen h-screen overflow-hidden">
        <a
          className="absolute z-20 w-[110px] h-[40px] left-[20px] top-[20px] bg-gradient-to-br from-slate-300 to-slate-500 border-dashed border-3 shadow shadow-[0_0_10px_2px_rgba(255,255,255,1)] rounded-xl"
          href="/adventure"
        >
          <p className="text-center text-2xl ">Retreat!</p>
        </a>
        <div className="pointer-events-none z-0 fixed inset-0 bg-[url('/forest.png')] bg-cover bg-center"></div>

        <motion.div
          className="pointer-events-none fixed inset-0 bg-black z-30"
          initial={{ opacity: 1 }}
          animate={fade ? { opacity: 0.3 } : { opacity: 1 }}
          transition={{ duration: 2 }}
        ></motion.div>
        <div className=" relative inset-0">
          <motion.div
            className="z-50  absolute w-[600px] h-[120px] bg-white/30 border border-white border-2 rounded-xl left-1/2 -translate-x-1/2 translate-y-[550px]"
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
            <p className="text-center text-xl mt-[15px] m-[5px]">
              A thick silence runs through the woods, only interrupted by the
              stomping of brittle leaves and your heavy breaths. Fatigued, you
              feel an oncoming presence. Something is near.
            </p>
          </motion.div>
        </div>

        <MonsterLogic></MonsterLogic>
      </div>
    </>
  );
}
