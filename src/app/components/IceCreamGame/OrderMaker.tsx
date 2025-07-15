import { useEffect, useState } from "react";
import { useGame, IceCream, Order } from "./StoreContext";
import orderDialogue from "./OrderDialogue";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "./TypeWriter";

let idCount = 0;

export default function OrderMaker() {
  const { currentOrder, setCurrentOrder } = useGame();
  const [newOrder, setNewOrder] = useState(true);
  const { currentCustomer, setCurrentCustomer } = useGame();
  const { delay, setDelay } = useGame();
  const { dialogue, setDialogue } = useGame();
  const { spoken, setSpoken } = useGame();

  useEffect(() => {
    if (!currentOrder) {
      const waitDelay = setTimeout(() => {
        iceCreamGenerator();
        setDelay(true);
      }, 3000);
      return () => clearTimeout(waitDelay);
    }
  }, []);

  useEffect(() => {
    if (!currentOrder || newOrder === true) return;
    else {
      iceCreamGenerator();

      const waitDelay = setTimeout(() => {
        setDelay(true);
        setCurrentOrder({ ...currentOrder, status: "reading" });
      }, 3000);

      return () => clearTimeout(waitDelay);
    }
  }, [newOrder]);

  const iceCreamGenerator = () => {
    const nextId = idCount;
    let nextCustomer = "";
    let nextScoopCount = 0;
    let flavorList: string[] = [];
    let nextPopsicleFlavor = "";

    const customers = ["/customer1-talk.gif"];
    const types = ["normal cone", "chocolate cone", "cup", "popsicle"];
    const flavors = [
      "vanilla",
      "chocolate",
      "strawberry",
      "mint choco",
      "birthday cake",
      "cotton candy",
      "matcha",
      "mango",
      "cookies & cream",
    ];
    const toppings = [
      "a cherry",
      "some rainbow sprinkles",
      "some chocolate syrup",
      "some whipped cream",
      "some marshmallows",
    ];
    const popsicleFlavors = [
      "strawberry",
      "watermelon",
      "orange",
      "grape",
      "galaxy berry",
    ];

    //select next id
    idCount += 1;

    //randomly pick customer
    nextCustomer = randomFromArray(customers);
    setCurrentCustomer(nextCustomer);

    //randomly pick cone
    const coneType = randomFromArray(types) as
      | "normal cone"
      | "chocolate cone"
      | "cup"
      | "popsicle"
      | "none";

    //then how many scoops and which flavors, (popsicles excluded)
    if (coneType === "popsicle") {
      nextScoopCount = 0;
      nextPopsicleFlavor = randomFromArray(popsicleFlavors);
    } else {
      const scoopPicker = Math.random();
      if (scoopPicker < 0.33) {
        nextScoopCount = 1;
        const scoop1 = randomFromArray(flavors);
        flavorList = [...flavorList, scoop1];
      } else if (scoopPicker < 0.67) {
        nextScoopCount = 2;
        const scoop1 = randomFromArray(flavors);
        const scoop2 = randomFromArray(flavors);
        const newScoops = [scoop1, scoop2];
        flavorList = [...flavorList, ...newScoops];
      } else {
        nextScoopCount = 3;
        const scoop1 = randomFromArray(flavors);
        const scoop2 = randomFromArray(flavors);
        const scoop3 = randomFromArray(flavors);
        const newScoops = [scoop1, scoop2, scoop3];
        flavorList = [...flavorList, ...newScoops];
      }
    }
    //select topping

    const nextTopping = randomFromArray(toppings);

    //craft ice cream

    const newIceCreamLocal = {
      type: coneType,
      scoopCount: nextScoopCount,
      flavor: flavorList,
      topping: nextTopping,
      popsicleFlavor: nextPopsicleFlavor,
    };

    const newDialogue = orderDialogue({
      type: newIceCreamLocal.type,
      scoopCount: newIceCreamLocal.scoopCount,
      flavors: newIceCreamLocal.flavor,
      topping: newIceCreamLocal.topping,
      popsicleFlavor: newIceCreamLocal.popsicleFlavor,
    });

    setDialogue(newDialogue);

    //make the next order
    const nextOrder: Order = {
      id: nextId,
      desired: newIceCreamLocal,
      customer: nextCustomer,
      status: "new",
    };

    //set the order
    setCurrentOrder(nextOrder);
    setNewOrder(false);
  };

  function randomFromArray<T>(arr: T[]): T {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  function handleDialogueDone() {
    if (currentOrder?.status !== "in-progress") {
      if (currentCustomer === "/customer1-talk.gif") {
        setCurrentCustomer("/customer1-idle.gif");
      }
      setCurrentOrder({
        ...currentOrder!,
        status: "in-progress",
      });

      setSpoken(true);
    }
  }

  return (
    <>
      <div className="absolute w-full h-full inset-0">
        <motion.div
          className="absolute z-30 w-[25%] h-[55%] bottom-[20%] left-[15%]"
          initial={!spoken ? { opacity: 0, y: 200 } : { opacity: 1, y: 0 }}
          animate={delay ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          transition={{ type: "spring", damping: 12 }}
        >
          <Image
            src={`${currentCustomer}`}
            alt="customer"
            fill
            className=""
          ></Image>
        </motion.div>
        s
        <motion.div
          className="inset-0 w-[48%] h-[32%] translate-x-[80%] translate-y-[50%] z-50 absolute bg-amber-50 border-[5px]"
          initial={!spoken ? { opacity: 0 } : { opacity: 1 }}
          animate={delay ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {!spoken && delay && dialogue && (
            <Typewriter
              text={dialogue}
              speed={42}
              onDone={handleDialogueDone}
            />
          )}
          {spoken && dialogue && (
            <p className="text-center p-[20px] text-2xl">{dialogue}</p>
          )}
        </motion.div>
      </div>
    </>
  );
}
