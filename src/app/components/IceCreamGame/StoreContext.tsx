import React, { createContext, useState, ReactNode, useContext } from "react";

export type Order = {
  id: number;
  desired: IceCream;
  customer: string;
  status: "reading" | "in-progress" | "completed";
};

export type IceCream = {
  type: "cone" | "chocolate cone" | "cup" | "popsicle" | "none";
  scoopCount: number;
  flavor: string[];
  topping: string;
  popsicleFlavor: string;
};

type GameContextBase = {
  currentOrder: Order | null;
  setCurrentOrder: (ord: Order | null) => void;
  currentIceCream: IceCream;
  setCurrentIceCream: (ic: IceCream) => void;
};

const GameContext = createContext<GameContextBase | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  const [currentIceCream, setCurrentIceCream] = useState<IceCream>({
    type: "none",
    scoopCount: 0,
    flavor: [],
    topping: "",
    popsicleFlavor: "",
  });

  return (
    <GameContext.Provider
      value={{
        currentOrder,
        setCurrentOrder,
        currentIceCream,
        setCurrentIceCream,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within GameProvider");
  return context;
};
