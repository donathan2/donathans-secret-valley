"use client";

import GameScreen from "@/app/components/IceCreamGame/Screens";
import MouseFollower from "@/app/components/MouseFollower";
import { GameProvider } from "@/app/components/IceCreamGame/StoreContext";

export default function IceCreamPage() {
  return (
    <GameProvider>
      <main className="relative overflow-hidden w-full h-full bg-white">
        <MouseFollower></MouseFollower>
        <GameScreen></GameScreen>
      </main>
    </GameProvider>
  );
}
