"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useGame } from "./StoreContext";

export default function SwitchLogic() {
  const {
    switchOn,
    setSwitchOn,
    setScoopOne,
    setScoopTwo,
    setScoopThree,
    setBase,
    setToppings,
    setPickUp,
  } = useGame();

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
    <>
      <motion.div
        className="absolute w-[3%] h-[10%] right-[32%] top-[25%] z-[51]"
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        onClick={() => {
          setSwitchOn((prev: boolean) => !prev);
          clearIceCream();
          setPickUp(false);
        }}
      >
        <Image
          src={switchOn ? "/switch-on.png" : "/switch-off.png"}
          alt="light switch"
          fill
        ></Image>
      </motion.div>
      {!switchOn && (
        <div className="absolute w-full h-full bg-black z-[50]"></div>
      )}
    </>
  );
}
