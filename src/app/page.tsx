"use client";

import Navbar from "./components/Navbar";
import { Irish_Grover } from "next/font/google";
import { Lakki_Reddy } from "next/font/google";
import { useRouter } from "next/navigation";

const welcomeFont = Irish_Grover({
  subsets: ["latin"],
  weight: "400",
});

const normalFont = Lakki_Reddy({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar></Navbar>
      <main className="flex items-center justify-center min-h-screen">
        <div className="w-[650px] h-[500px] bg-white/70 shadow-lg rounded-lg flex flex-col items-center justify-start border-4 rounded-lg border-green-950">
          <h1 className={`${welcomeFont.className} text-5xl mt-10 font-bold`}>
            Welcome!
          </h1>
          <p
            className={`${normalFont.className} text-3xl ml-5 mr-5 mt-5 font-bold`}
          >
            You've stumbled into my fantastical garden. Here you'll find all my
            secrets and deepest desires, so feel free to click around and
            explore the depths of my mind unraveled before you.
          </p>
        </div>
      </main>
    </>
  );
}
