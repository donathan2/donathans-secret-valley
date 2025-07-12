import { useState } from "react";
import StoreFront from "./rooms/StoreFront";

const GameScreen = () => {
  const [room, setRoom] = useState<"storefront" | "kitchen">("storefront");

  const renderRoom = () => {
    switch (room) {
      case "storefront":
        return <StoreFront onNavigate={setRoom}></StoreFront>;
    }
  };
  return <div className="w-full h-full">{renderRoom()}</div>;
};

export default GameScreen;
