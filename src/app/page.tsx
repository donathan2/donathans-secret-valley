"use client";

import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function toSecret() {
    router.push("/secret");
  }
  return (
    <>
      <Navbar></Navbar>
      <main className="flex items-center justify-center min-h-screen">
        <div className="w-96 h-96 bg-white/50 shadow-lg rounded-lg flex items-center justify-center">
          <p className="text-center text-xl font-semibold px-4">
            Your centered text goes here!
          </p>
        </div>
      </main>
    </>
  );
}
