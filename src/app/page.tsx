"use client";

import Navbar from "./components/Navbar";
import MouseFollower from "./components/MouseFollower";
import { useEffect, useState } from "react";
import { Jersey_25 } from "next/font/google";
import { Tiny5 } from "next/font/google";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const nameFont = Jersey_25({
  subsets: ["latin"],
  weight: "400",
});

const normalFont = Tiny5({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const router = useRouter();
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 360) {
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
        <div className="relative z-10 h-72 flex-columns justify-center items-center mt-[-220px]">
          <motion.div
            className={`${nameFont.className} relative text-9xl font-bold text-center text-white pt-65`}
            style={{ textShadow: "5px 5px 2px rgb(9, 60, 23)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Donathan Truong
            <div className="absolute z-[-1] w-[1000px] h-[150px] -translate-x-1/2 left-1/2 translate-y-[-135px] bg-white/52 border-3 border-amber-50 rounded-lg shadow-xl shadow-black/60"></div>
            <div className="absolute z-[-1] w-[900px] h-[15px] -translate-x-1/2 left-1/2 translate-y-[60px] bg-yellow-950 shadow-xl shadow-black/60"></div>
            <div className="absolute z-[-1] w-[900px] h-[20px] -translate-x-1/2 left-1/2 translate-y-[45px] bg-yellow-800"></div>
            <div
              className={`${normalFont.className} text-3xl font-bold text-center text-amber-50 pt-10`}
              style={{ textShadow: "2px 2px 1px rgb(0, 0, 0)" }}
            >
              Software Engineer | Full-Stack Developer | Founder
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute z-10 w-full h-350 mx-auto bg-neutral-950/30 mt-[250px]"
          initial={{ opacity: 0, y: 200 }}
          animate={
            scrolledPast ? { opacity: 100, y: 0 } : { opacity: 0, y: 200 }
          }
          transition={{ duration: 0.2 }}
        ></motion.div>
      </main>
      <motion.div
        className={`${normalFont.className} z-20 w-225 pt-10 text-center text-2xl pl-5 pr-5 shadow-lg shadow-green-950 h-55 mx-auto bg-gradient-to-br from-lime-200 via-green-600 to-green-800`}
        initial={{ opacity: 0, scale: 0 }}
        animate={
          scrolledPast ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
        }
        transition={{ type: "spring", stiffness: 100, damping: 14 }}
      >
        Hi! I'm Donathan, and this is a webpage I made out of nothing but an
        inexorable drive for fantastical creation. Feel free to click around and
        explore. I had a lot of fun creating this, and I want to share a little
        bit of that joy with you. All props, besides the landscapes, are
        designed with love by me!
      </motion.div>
    </>
  );
}
