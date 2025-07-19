import React, { createContext, useState, ReactNode, useContext } from "react";

export type Order = {
  id: number;
  desired: IceCream;
  customer: string;
  status: "new" | "reading" | "in-progress" | "assessment" | "completed";
};

export type IceCream = {
  type: "normal cone" | "chocolate cone" | "cup" | "popsicle" | "none";
  scoopCount: number;
  flavor: string[];
  topping: string;
  popsicleFlavor: string;
};

export type Toppings = {
  hasToppings: boolean;
  sprinkles: boolean;
  chips: boolean;
  sauce: boolean;
  cherry: boolean;
  cream: boolean;
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

  //ICE CREAM DISPLAYS
  base: string;
  setBase: (bas: string) => void;
  scoopOne: string;
  setScoopOne: (scoop: string) => void;
  scoopTwo: string;
  setScoopTwo: (scoop: string) => void;
  scoopThree: string;
  setScoopThree: (scoop: string) => void;
  toppings: Toppings;
  setToppings: React.Dispatch<React.SetStateAction<Toppings>>;
  switchOn: boolean;
  setSwitchOn: React.Dispatch<React.SetStateAction<boolean>>;
  pickUp: boolean;
  setPickUp: React.Dispatch<React.SetStateAction<boolean>>;
  clearIceCream: () => void;
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

  //ICE CREAM DISPLAYS
  const [base, setBase] = useState("none");
  const [scoopOne, setScoopOne] = useState("none");
  const [scoopTwo, setScoopTwo] = useState("none");
  const [scoopThree, setScoopThree] = useState("none");
  const [toppings, setToppings] = useState<Toppings>({
    hasToppings: false,
    sprinkles: false,
    chips: false,
    sauce: false,
    cherry: false,
    cream: false,
  });
  const [switchOn, setSwitchOn] = useState(true);
  const [pickUp, setPickUp] = useState(false);

  function clearIceCream() {
    setScoopOne("none");
    setScoopTwo("none");
    setScoopThree("none");
    setBase("none");
    setToppings({
      hasToppings: false,
      sprinkles: false,
      chips: false,
      sauce: false,
      cherry: false,
      cream: false,
    });
  }

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
        base,
        setBase,
        scoopOne,
        setScoopOne,
        scoopTwo,
        setScoopTwo,
        scoopThree,
        setScoopThree,
        toppings,
        setToppings,
        switchOn,
        setSwitchOn,
        pickUp,
        setPickUp,
        clearIceCream,
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
