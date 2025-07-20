"use client";

import Navbar from "../components/Navbar";
import MouseFollower from "../components/MouseFollower";
import { headingFont } from "../lib/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdventurePage() {
  const router = useRouter();

  const [showForest, setShowForest] = useState(true);
  const [showIceCream, setShowIceCream] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      <MouseFollower></MouseFollower>
      <div className="fixed z-[-1] inset-0 w-full h-full bg-[url('/landscape-4.jpg')] bg-cover bg-fixed bg-center"></div>
      <main className="w-full h-full">
        <div className="relative w-[full] h-[35%]">
          <motion.div
            className={`${headingFont.className} z-[10] absolute w-[22%] h-[30%] border border-3 border-white bottom-[15%] left-[20%] bg-gradient-to-br from-green-300 via-lime-300 to-fuchsia-400 shadow-sm shadow-white rounded-xl`}
            style={{ textShadow: "4px 4px 1px rgba(0,0,0,1)" }}
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <p className="absolute w-full h-full text-center text-white text-6xl p-[2%]">
              Let&apos;s explore!
            </p>
          </motion.div>
          <motion.div
            className="z-[9] absolute w-[40%] h-[18%] bg-gradient-to-br from-fuchsia-300 to-purple-500 bottom-[15%] left-[40%] rounded-xl border border-3 border-white shadow shadow-white"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <p
              className="text-center text-2xl mt-[4px]"
              style={{ textShadow: "-2px 2px 1px rgb(236, 177, 251)" }}
            >
              Discover the mythical secrets of the valley.
            </p>
          </motion.div>
          <div className="absolute w-[55%] h-[50%] rounded-xl shadow shadow-white border border-white bg-gradient-to-br from-lime-200 to-green-500 left-1/2 -translate-x-1/2 bottom-[-20%] ">
            <p className="text-center text-xl m-[2%] mt-[6%]">
              This is where I host small games I&apos;ve made for fun that
              don&apos;t really constitute a full project. Please feel free to
              play some of them.
            </p>
          </div>
        </div>
        <motion.div
          className={` z-[51] absolute w-[5%] h-[10%] rounded-full border-white border-[3px] bg-white bg-gradient-to-br from-green-400 to-lime-600 left-[19%] top-[32%] text-center text-green-800 pt-[4px] text-5xl`}
          style={{ textShadow: "2px 2px 1px rgb(255, 255, 255)" }}
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            if (showForest) {
              setShowIceCream(true);
              setShowForest(false);
            } else if (showIceCream) {
              setShowForest(true);
              setShowIceCream(false);
            }
          }}
        >
          <p className="pt-[5px]">⬅</p>
        </motion.div>
        <motion.div
          className={`z-[51] absolute w-[5%] h-[10%] rounded-full border-white border-[3px] bg-white bg-gradient-to-br from-green-400 to-lime-600 right-[19%] top-[32%] text-center text-green-800 pt-[4px] text-5xl`}
          style={{ textShadow: "2px 2px 1px rgb(255, 255, 255)" }}
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            if (showForest) {
              setShowIceCream(true);
              setShowForest(false);
            } else if (showIceCream) {
              setShowForest(true);
              setShowIceCream(false);
            }
          }}
        >
          <p className="pt-[5px]">⮕</p>
        </motion.div>

        {showForest && (
          <motion.div
            className="z-0 absolute w-full h-[40%] bottom-[0%]"
            initial={{ opacity: 0 }}
            animate={
              showForest ? { opacity: 1, scale: [1.5, 1] } : { opacity: 0 }
            }
            transition={{ type: "spring" }}
          >
            <div>
              <div className="z-20 absolute w-[17%] h-[85%] left-[10%] bottom-[30%] rounded-full overflow-hidden border border-3 border-white">
                <Image src="/forest.png" alt="forest" fill />
              </div>
              <div className="z-10 absolute w-[60%] h-[60%] right-[16%] bg-gradient-to-br from-green-500 to-green-800 rounded-xl border border-white">
                <p
                  className="text-3xl pl-[5%] mt-[4px] underline"
                  style={{ textShadow: "-2px 2px 1px rgb(255, 255, 255)" }}
                >
                  The Enchanted Forest
                </p>
                <p className="absolute w-[80%] h-[10%] right-[-20%] top-[8%]">
                  SFX/BGM: HydroGene, @Shades, and SubSpaceAudio
                  (opengameart.org).
                </p>
                <p className="text-xl pl-[7%] pr-[7%] mt-[2%]">
                  Utilize a collection of magical spells and mythical items to
                  defeat a horrific forest monster in a short, JRPG style
                  turn-based boss fight.
                </p>
              </div>
            </div>

            <motion.div
              className={`${headingFont.className} ${
                showForest ? "z-[55]" : "z-[12]"
              } absolute text-center w-[20%] h-[20%] border border-2 text-white text-5xl bottom-[30%] right-[20%] bg-gradient-to-br from-lime-300 to-lime-900 shadow-sm shadow-white rounded-xl`}
              style={{ textShadow: "4px 4px 1px rgba(0,0,0,1)" }}
              whileHover={{
                scale: 1.15,
                boxShadow: "0px 0px 35px 20px rgba(255, 0, 0, 0.97)",
              }}
              whileTap={{
                scale: 1,
                boxShadow: "0px 0px 85px 50px rgba(255, 0, 0, 0.97)",
              }}
              onClick={() => router.push("/adventure/forest")}
            >
              <p className="mt-[5px]">Enter!</p>
            </motion.div>
          </motion.div>
        )}
        {/* ICE CREAM GAME */}
        {showIceCream && (
          <motion.div
            className={` ${
              !showIceCream ? "pointer-events-none" : ""
            }z-0 absolute w-full h-[40%] bottom-[0%]`}
            initial={{ opacity: 0 }}
            animate={
              showIceCream ? { opacity: 1, scale: [1.5, 1] } : { opacity: 0 }
            }
            transition={{ type: "spring" }}
          >
            <div>
              <div className="z-20 absolute w-[17%] h-[85%] left-[10%] bottom-[30%] rounded-full overflow-hidden border border-3 border-white">
                <Image src="/icecream-preview.png" alt="storefront" fill />
              </div>
              <div className="z-10 absolute w-[60%] h-[60%] right-[16%] bg-gradient-to-br from-lime-300 to-green-800 rounded-xl border border-white">
                <p
                  className="text-3xl pl-[5%] mt-[4px] underline"
                  style={{ textShadow: "-2px 2px 1px rgb(255, 255, 255)" }}
                >
                  The Ice Cream Parlor
                </p>
                <p className="absolute text-sm text-center w-[50%] h-[15%] left-[42%] top-[8%]">
                  SFX/BGM: phoenix1291, VIRiX Dreamcore, Vehicle and
                  SubSpaceAudio (opengameart.org).
                </p>
                <p className="text-xl pl-[7%] pr-[7%] mt-[2%]">
                  Take over ice cream scooping for a day and tend to the wacky
                  dessert orders of the vibrant customers of the valley in a
                  relaxed, easy-paced environment. (WIP)
                </p>
              </div>
            </div>
            <motion.div
              className={`${headingFont.className} ${
                !showIceCream ? "pointer-events-none" : ""
              } z-[12] absolute text-center w-[20%] h-[20%] border border-2 text-white text-5xl bottom-[30%] right-[20%] bg-gradient-to-br from-green-400 to-green-600 shadow-sm shadow-white rounded-xl`}
              style={{ textShadow: "4px 4px 1px rgba(0,0,0,1)" }}
              whileHover={{
                scale: 1.15,
                boxShadow: "0px 0px 35px 20px rgba(72, 201, 240, 0.97)",
              }}
              whileTap={{
                scale: 1,
                boxShadow: "0px 0px 85px 50px rgba(205, 69, 232, 0.97)",
              }}
              onClick={() => router.push("/adventure/ice-cream")}
            >
              <p className="mt-[5px]">Enter!</p>
            </motion.div>
          </motion.div>
        )}
      </main>
    </>
  );
}
