"use client";

import Navbar from "./components/Navbar";
import MouseFollower from "./components/MouseFollower";
import { useEffect, useState } from "react";
import { Denk_One } from "next/font/google";
import { Inter_Tight } from "next/font/google";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const nameFont = Denk_One({
  subsets: ["latin"],
  weight: "400",
});

const normalFont = Inter_Tight({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const router = useRouter();
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setScrolledPast(true);
      } else {
        setScrolledPast(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <MouseFollower></MouseFollower>
      <main className="relative min-h-screen flex flex-col justify-center items-center mt-[-80px]">
        <div className="z-10 h-72 flex-columns justify-center items-center mt-[-220px]">
          <motion.div
            className={`${nameFont.className} text-9xl font-bold text-center text-amber-50 pt-65`}
            style={{ textShadow: "2px 2px 1px rgba(0, 0, 0, 1)" }}
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Donathan Truong
          </motion.div>
          <motion.div
            className={`${normalFont.className} text-3xl font-bold text-center text-amber-50 pt-10`}
            style={{ textShadow: "2px 2px 1px rgba(0, 0, 0, 1)" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 100, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            Software Engineer | Full-Stack Developer | Founder
          </motion.div>
        </div>
        <motion.div
          className="absolute z-10 w-full h-500 mx-auto bg-neutral-950/30 mt-[250px]"
          initial={{ opacity: 0, y: 200 }}
          animate={
            scrolledPast ? { opacity: 100, y: 0 } : { opacity: 0, y: 200 }
          }
          transition={{ duration: 0.2 }}
        ></motion.div>
      </main>
      <motion.div
        className={`${normalFont.className} z-20 w-225 pt-10 text-center text-2xl pl-5 pr-5 shadow-lg shadow-green-950 h-125 mx-auto bg-gradient-to-br from-lime-200 via-green-600 to-green-800`}
        initial={{ opacity: 0, y: 200 }}
        animate={scrolledPast ? { opacity: 100, y: 0 } : { opacity: 0, y: 200 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        Hi! I'm Donathan, and this is a webpage I made out of nothing but an
        inexorable drive for fantastical creation. Feel free to click around and
        explore. I had a lot of fun creating this, so I hope you can feel a
        little bit of that as you traverse my garden, and maybe even learn
        something about me in the process!
        <p className={`${nameFont.className} pt-23`}>Quick Links!</p>
      </motion.div>

      <div className="h-[10px]"></div>
    </>
  );
}
