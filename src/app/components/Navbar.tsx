"use client";
import Link from "next/link";
import { Are_You_Serious } from "next/font/google";

const titleFont = Are_You_Serious({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-green-700 to-lime-300 shadow-md px-6 py-4 border-b-8 border-green-100/50 flex justify-between items-center">
      <div
        className={`${titleFont.className} text-stone-50 text-5xl font-bold`}
        style={{ textShadow: "5px -5px 1px rgba(0, 0, 0, 0.8)" }}
      >
        Donathan's Secret Garden
      </div>
      <div className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link href="/secret" className="text-gray-700 hover:text-blue-600">
          Secret
        </Link>
      </div>
    </nav>
  );
}
