"use client";
import Link from "next/link";
import { Tiny5 } from "next/font/google";
import { Jersey_25 } from "next/font/google";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

const titleFont = Tiny5({
  subsets: ["latin"],
  weight: "400",
});

const tabFont = Jersey_25({
  subsets: ["latin"],
  weight: "400",
});

const vine = "url('/vine.png')";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <motion.nav className="fixed top-0 h-[80px] w-full z-20 bg-gradient-to-r from-green-700 to-lime-300 shadow-md px-10 py-4 border-b-8 border-lime-200 flex justify-between items-center cursor-none">
        <div
          className={`${titleFont.className} text-stone-50 text-5xl font-bold`}
          style={{ textShadow: "5px -5px 1px rgba(0, 0, 0, 0.8)" }}
        >
          Donathan's Secret Valley
        </div>
        <div className="flex flex-row space-x-12 mt-[7px] items-center">
          <motion.div
            className={`${tabFont.className} text-amber-50 text-4xl font-bold hover:text-yellow-400`}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 1 }}
            onClick={() => router.push("/")}
            style={{ textShadow: "3px -3px 1px rgba(0, 0, 0, 1)" }}
          >
            Home
          </motion.div>
          <div className="relative group inline-block">
            <motion.div
              className={`${tabFont.className} text-amber-50 text-4xl font-bold hover:text-lime-400`}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 1 }}
              onClick={() => router.push("/bio")}
              style={{ textShadow: "3px -3px 1px rgba(0, 0, 0, 1)" }}
            >
              About
            </motion.div>
          </div>
          <div className="relative group inline-block">
            <motion.button
              className={`${tabFont.className} text-amber-50 text-4xl font-bold hover:text-cyan-400 flex items-center gap-1`}
              style={{ textShadow: "3px -3px 1px rgba(0, 0, 0, 1)" }}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 1 }}
            >
              Adventure! <span className="text-2xl"></span>
            </motion.button>

            <div
              className="absolute left-0 mt-0 w-40 bg-lime-200 rounded-md shadow-lg
               opacity-0 group-hover:opacity-100
               transform translate-y-0 group-hover:translate-y-0
               transition-all duration-250
               pointer-events-none group-hover:pointer-events-auto
               z-40 group-hover:cursor-none cursor-none"
            >
              <Link
                href="/cave"
                className={`${tabFont.className} text-2xl font-bold block px-4 py-2 text-gray-800 hover:text-emerald-400 hover:bg-lime-100`}
              >
                Cave
              </Link>
              <Link
                href="/pond"
                className={`${tabFont.className} text-2xl font-bold block px-4 py-2 text-gray-800 hover:text-emerald-400 hover:bg-lime-100`}
              >
                Pond
              </Link>
            </div>
          </div>
          <motion.div
            className={`${tabFont.className} text-amber-50 text-4xl font-bold hover:text-purple-400`}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 1 }}
            onClick={() => router.push("/projects")}
            style={{ textShadow: "3px -3px 1px rgba(0, 0, 0, 1)" }}
          >
            Projects
          </motion.div>
        </div>
        <div className="z-30 fixed top-[-90px] left-[960px] w-[500px] h-[500px] pointer-events-none">
          <motion.img
            src="/branch-2.png"
            alt="branch"
            className="w-full h-auto transform scale-x-[-1] pointer-events-none"
          />
        </div>
      </motion.nav>
    </>
  );
}
