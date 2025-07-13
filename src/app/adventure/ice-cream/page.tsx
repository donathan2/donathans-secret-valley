"use client";

import GameScreen from "@/app/components/IceCreamGame/Screens";
import MouseFollower from "@/app/components/MouseFollower";
import { GameProvider } from "@/app/components/IceCreamGame/StoreContext";
import OrderMaker from "@/app/components/IceCreamGame/OrderMaker";

export default function IceCreamPage() {
  return (
    <GameProvider>
      <main className="w-full h-full bg-white">
        <MouseFollower></MouseFollower>
        <GameScreen></GameScreen>
        <OrderMaker></OrderMaker>
      </main>
    </GameProvider>
  );
}
