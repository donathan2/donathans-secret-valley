import OrderMaker from "../OrderMaker";
import Image from "next/image";
import { motion } from "framer-motion";
import { useGame } from "../StoreContext";
import DisplayUpdater from "../DIsplayUpdater";

type Props = {
  onNavigate: (room: "storefront" | "kitchen") => void;
};

const StoreFront: React.FC<Props> = ({ onNavigate }) => {
  const { pickUp } = useGame();
  return (
    <>
      <div className="absolute w-full h-full z-[52] pointer-events-none">
        {pickUp && <DisplayUpdater></DisplayUpdater>}
      </div>
      <div className="w-full h-full bg-[url('/storefront.png')] bg-contain bg-no-repeat"></div>
      <div className="absolute z-40 w-full h-[42%] bg-[url('/counter.png')] bg-cover bottom-0"></div>
      <OrderMaker></OrderMaker>
      <motion.div
        className="absolute w-[20%] h-[20%] left-0 top-0 translate-y-[-20%]"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 12 }}
        onClick={() => onNavigate("kitchen")}
        whileHover={{ scale: 1.1 }}
      >
        <Image src="/kitchen-sign.png" alt="kitchen sign" fill></Image>
      </motion.div>
    </>
  );
};

export default StoreFront;
