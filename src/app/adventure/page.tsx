"use client";

import Navbar from "../components/Navbar";
import MouseFollower from "../components/MouseFollower";
import { headingFont } from "../lib/fonts";
import { motion } from "framer-motion";

export default function AdventurePage() {
  return (
    <>
      <Navbar></Navbar>
      <MouseFollower></MouseFollower>
      <div className="fixed z-[-1] inset-0 bg-[url('/landscape-4.jpg')] bg-cover bg-fixed bg-center"></div>
      <main className="w-full h-full">
        <div className="relative w-[full] h-[250px]">
          <motion.div
            className={`${headingFont.className} z-20 absolute text-center w-[310px] h-[70px] border border-3 text-white text-6xl translate-y-[140px] left-1/2 translate-x-[-440px] bg-gradient-to-br from-green-300 via-lime-300 to-fuchsia-400 shadow-sm shadow-white rounded-xl`}
            style={{ textShadow: "4px 4px 1px rgba(0,0,0,1)" }}
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <p>Let&apos;s explore!</p>
          </motion.div>
          <motion.div
            className="z-10 absolute w-[600px] h-[45px] bg-gradient-to-br from-fuchsia-300 to-purple-500 translate-y-[165px] left-1/2 translate-x-[-170px] rounded-xl border border-3 border-white shadow shadow-white"
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
          <motion.div
            className="absolute w-[800px] h-[120px] rounded-xl shadow shadow-white border border-white bg-gradient-to-br from-lime-200 to-green-500 left-1/2 -translate-x-1/2 translate-y-[180px] "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <p className="text-center text-xl m-[30px] mt-[45px]">
              This is a "junk ground" for random code that isn&apos;t big enough
              to constitute an actual project, or just any kind of whatever
              for-fun stuff. WIP
            </p>
          </motion.div>
        </div>
      </main>
    </>
  );
}
