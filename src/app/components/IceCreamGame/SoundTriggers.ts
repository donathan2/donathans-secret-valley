"use client"

import { useGame } from "./StoreContext";
import { useEffect } from "react";
import { playCone, playChocCone, playCup, playLights, playPickUp } from "@/app/lib/sounds";

export default function useSoundTriggers() {
  const { base, switchOn, pickUp, enteredKitchen } = useGame();

  useEffect(() => {
    if (base === "normal cone") {
      playCone();
    } else if (base === "chocolate cone") {
      playChocCone();
    } else if (base === "cup") {
      playCup();
    }
  }, [base]);

  useEffect(() => {
    if (enteredKitchen) {
      playLights();
    }
  }, [switchOn]);

  useEffect(() => {
    if (enteredKitchen) {
      playPickUp();
    }
  }, [pickUp]);
}