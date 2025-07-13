import { useEffect, useState } from "react";
import { useGame, IceCream, Order } from "./StoreContext";
import OrderDialogue from "./OrderDialogue";

let idCount = 0;
let orderedIceCream: IceCream;

export default function OrderMaker() {
  const { currentOrder, setCurrentOrder } = useGame();
  const [newIceCream, setNewIceCream] = useState<IceCream | null>(null);

  useEffect(() => {
    if (currentOrder !== null && currentOrder.status !== "completed") {
      return;
    } else {
      const waitDelay = setTimeout(() => {
        iceCreamGenerator();
      }, 3000);

      return () => {
        clearTimeout(waitDelay);
      };
    }
  }, [currentOrder]);

  const iceCreamGenerator = () => {
    const nextId = idCount;
    let nextCustomer = "";
    let nextScoopCount = 0;
    let flavorList: string[] = [];
    let nextPopsicleFlavor = "";

    const customers = [
      "customer1",
      "customer2",
      "customer3",
      "customer4",
      "customer5",
    ];
    const types = ["normal cone", "chocolate cone", "cup", "popsicle"];
    const flavors = ["vanilla", "chocolate", "strawberry", "mint chocolate"];
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

    //randomly pick cone
    const coneType = randomFromArray(types) as
      | "cone"
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
        let newScoops = [scoop1, scoop2];
        flavorList = [...flavorList, ...newScoops];
      } else {
        nextScoopCount = 3;
        const scoop1 = randomFromArray(flavors);
        const scoop2 = randomFromArray(flavors);
        const scoop3 = randomFromArray(flavors);
        let newScoops = [scoop1, scoop2, scoop3];
        flavorList = [...flavorList, ...newScoops];
      }
    }
    //select topping

    const nextTopping = randomFromArray(toppings);

    //craft ice cream
    orderedIceCream = {
      type: coneType,
      scoopCount: nextScoopCount,
      flavor: flavorList,
      topping: nextTopping,
      popsicleFlavor: nextPopsicleFlavor,
    };
    setNewIceCream(orderedIceCream);

    //make the next order
    const nextOrder: Order = {
      id: nextId,
      desired: orderedIceCream,
      customer: nextCustomer,
      status: "reading",
    };

    //set the order
    setCurrentOrder(nextOrder);
  };

  function randomFromArray<T>(arr: T[]): T {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  //ui to be done later
  return (
    <div className="inset-0 w-[800px] h-[500px] left-1/2 -translate-x-1/2 z-50 absolute text-5xl bg-white">
      {newIceCream && (
        <OrderDialogue
          type={orderedIceCream.type}
          scoopCount={orderedIceCream.scoopCount}
          flavors={orderedIceCream.flavor}
          topping={orderedIceCream.topping}
          popsicleFlavor={orderedIceCream.popsicleFlavor}
        ></OrderDialogue>
      )}
    </div>
  );
}
