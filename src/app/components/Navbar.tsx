"use client";
import Link from "next/link";
import { Are_You_Serious } from "next/font/google";
import { Risque } from "next/font/google";

const titleFont = Are_You_Serious({
  subsets: ["latin"],
  weight: "400",
});

const tabFont = Risque({
  subsets: ["latin"],
  weight: "400",
});

const vine = "url('/vine.png')";

export default function Navbar() {
  return (
    <>
      <nav className=" h-[80px] bg-gradient-to-r from-green-700 to-lime-300 shadow-md px-10 py-4 border-b-8 border-lime-200 flex justify-between items-center">
        <div
          className={`${titleFont.className} text-stone-50 text-5xl font-bold`}
          style={{ textShadow: "5px -5px 1px rgba(0, 0, 0, 0.8)" }}
        >
          Donathan's Secret Garden
        </div>
        <div className="flex flex-row space-x-12 mt-[18px] items-center">
          <Link
            href="/"
            className={`${tabFont.className} text-amber-50 text-4xl font-bold hover:text-emerald-400`}
            style={{ textShadow: "3px -3px 1px rgba(0, 0, 0, 1)" }}
          >
            Home
          </Link>
          <div className="relative group inline-block">
            <button
              className={`${tabFont.className} text-amber-50 text-4xl font-bold hover:text-emerald-400 flex items-center gap-1`}
              style={{ textShadow: "3px -3px 1px rgba(0, 0, 0, 1)" }}
            >
              About <span className="text-2xl"></span>
            </button>

            <div
              className="absolute left-0 mt-0 w-40 bg-lime-200 rounded-md shadow-lg
               opacity-0 group-hover:opacity-100
               transform translate-y-0 group-hover:translate-y-0
               transition-all duration-250
               pointer-events-none group-hover:pointer-events-auto
               z-50"
            >
              <Link
                href="/bio"
                className={`${tabFont.className} text-2xl font-bold block px-4 py-2 text-gray-800 hover:text-emerald-400 hover:bg-lime-100`}
              >
                Bio
              </Link>
              <Link
                href="/contact"
                className={`${tabFont.className} text-2xl font-bold block px-4 py-2 text-gray-800 hover:text-emerald-400 hover:bg-lime-100`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="relative group inline-block">
            <button
              className={`${tabFont.className} text-amber-50 text-4xl font-bold hover:text-emerald-400 flex items-center gap-1`}
              style={{ textShadow: "3px -3px 1px rgba(0, 0, 0, 1)" }}
            >
              Adventure! <span className="text-2xl"></span>
            </button>

            <div
              className="absolute left-0 mt-0 w-40 bg-lime-200 rounded-md shadow-lg
               opacity-0 group-hover:opacity-100
               transform translate-y-0 group-hover:translate-y-0
               transition-all duration-250
               pointer-events-none group-hover:pointer-events-auto
               z-50"
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
          <Link
            href="/projects"
            className={`${tabFont.className} text-amber-50 text-4xl font-bold " hover:text-emerald-400"`}
            style={{ textShadow: "3px -3px 1px rgba(0, 0, 0, 1)" }}
          >
            Projects
          </Link>
        </div>
      </nav>
      <div className="absolute top-[-60px] left-[1050px] w-[375px] h-[375px] pointer-events-none">
        <img
          src="/vine.png"
          alt="vine"
          className="w-full h-auto transform scale-x-[-1] pointer-events-none"
        />
      </div>
    </>
  );
}
