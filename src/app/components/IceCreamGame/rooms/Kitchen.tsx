import Image from "next/image";
import { motion } from "framer-motion";
import Selectables from "../Selectables";
import DisplayUpdater from "../DisplayUpdater";
import SwitchLogic from "../SwitchLogic";
import PickUpLogic from "../PickUpLogic";

type Props = {
  onNavigate: (room: "storefront" | "kitchen") => void;
};

const Kitchen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <>
      <div className="absolute w-full h-full bg-[url('/kitchen.png')] bg-cover scale-x-[-1]"></div>
      <motion.div
        className="absolute w-[20%] h-[20%] left-0 top-0 translate-y-[-20%]"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 12 }}
        onClick={() => onNavigate("storefront")}
        whileHover={{ scale: 1.1 }}
      >
        <Image src="/storefront-sign.png" alt="storefront sign" fill></Image>
      </motion.div>
      <Selectables></Selectables>
      <DisplayUpdater></DisplayUpdater>
      <SwitchLogic></SwitchLogic>
      <PickUpLogic></PickUpLogic>
    </>
  );
};

export default Kitchen;
