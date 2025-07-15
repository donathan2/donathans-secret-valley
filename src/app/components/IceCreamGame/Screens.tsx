import { useState } from "react";
import StoreFront from "./rooms/StoreFront";
import Kitchen from "./rooms/Kitchen";

const GameScreen = () => {
  const [room, setRoom] = useState<"storefront" | "kitchen">("storefront");

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
