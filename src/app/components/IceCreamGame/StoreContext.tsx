import React, { createContext, useState, ReactNode, useContext } from "react";

export type Order = {
  id: number;
  desired: IceCream;
  customer: string;
  status: "new" | "reading" | "in-progress" | "completed";
};

export type IceCream = {
  type: "normal cone" | "chocolate cone" | "cup" | "popsicle" | "none";
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
  currentCustomer: string;
  setCurrentCustomer: (cust: string) => void;
  dialogue: string;
  setDialogue: (dia: string) => void;
  delay: boolean;
  setDelay: (dia: boolean) => void;
  spoken: boolean;
  setSpoken: (spok: boolean) => void;
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
  const [currentCustomer, setCurrentCustomer] = useState<string>(
    "/customer1-idle.gif"
  );
  const [dialogue, setDialogue] = useState("");
  const [delay, setDelay] = useState(false);
  const [spoken, setSpoken] = useState(false);

  return (
    <GameContext.Provider
      value={{
        currentOrder,
        setCurrentOrder,
        currentIceCream,
        setCurrentIceCream,
        currentCustomer,
        setCurrentCustomer,
        dialogue,
        setDialogue,
        delay,
        setDelay,
        spoken,
        setSpoken,
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
