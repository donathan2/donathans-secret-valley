"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import MouseFollower from "../components/MouseFollower";

export default function BioPage() {
  const router = useRouter();

  return (
    <>
      <MouseFollower></MouseFollower>
      <Navbar />;
      <main className="flex items-center justify-start pl-5">
        <div className="bg-white/70 w-[400px] h-[575px] border-4 rounded-lg border-green-950"></div>
      </main>
    </>
  );
}
