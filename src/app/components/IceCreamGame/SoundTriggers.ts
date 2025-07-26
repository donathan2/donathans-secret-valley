"use client"

import { useGame } from "./StoreContext";
import { useEffect } from "react";
import { playCone, playChocCone, playCup, playLights, playPickUp, playFridge, playFridgeClose, playPopsicle } from "@/app/lib/sounds";

export default function useSoundTriggers() {
  const { base, switchOn, pickUp, enteredKitchen, showFridge } = useGame();

  useEffect(() => {
    if (base === "normal cone") {
      playCone();
    } else if (base === "chocolate cone") {
      playChocCone();
    } else if (base === "cup") {
      playCup();
    } else if (base === "orange popsicle" || base === "cherry popsicle" || base === "grape popsicle") {
      playPopsicle();
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

  useEffect(() => {
    if (enteredKitchen) {
      if (showFridge) {
      playFridge();
      } else {
        playFridgeClose();
      }
    }
  }, [showFridge]);
}