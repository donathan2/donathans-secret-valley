"use client";

import GameScreen from "@/app/components/IceCreamGame/IceCreamScreens";
import MouseFollower from "@/app/components/MouseFollower";

export default function IceCreamPage() {
  return (
    <main className="w-full h-full bg-white">
      <MouseFollower></MouseFollower>
      <GameScreen></GameScreen>
    </main>
  );
}
