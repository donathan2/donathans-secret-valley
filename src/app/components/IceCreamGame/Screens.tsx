import { useState } from "react";
import StoreFront from "./rooms/StoreFront";
import Kitchen from "./rooms/Kitchen";
import { useRef, useEffect } from "react";

const GameScreen = () => {
  const [room, setRoom] = useState<"storefront" | "kitchen">("storefront");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const storeFrontOST = new Audio("/storefront-theme.mp3");
    storeFrontOST.loop = true;
    storeFrontOST.volume = 0.5;

    storeFrontOST.play().catch((e) => console.warn("Autoplay failed:", e));

    audioRef.current = storeFrontOST;

    return () => {
      storeFrontOST.pause();
      storeFrontOST.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = room === "storefront" ? 0.4 : 0.2;
    }
  }, [room]);

  const renderRoom = () => {
    switch (room) {
      case "storefront":
        return <StoreFront onNavigate={setRoom}></StoreFront>;
      case "kitchen":
        return <Kitchen onNavigate={setRoom}></Kitchen>;
    }
  };
  return <div className="w-full h-full">{renderRoom()}</div>;
};

export default GameScreen;
