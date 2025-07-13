import OrderMaker from "../OrderMaker";

type Props = {
  onNavigate: (room: "storefront" | "kitchen") => void;
};

const StoreFront: React.FC<Props> = ({ onNavigate }) => {
  return (
    <>
      <div className="w-full h-full bg-[url('/storefront.png')]"></div>
      <div className="absolute z-40 w-full h-[294px] bg-[url('/counter.png')] bottom-0"></div>
    </>
  );
};

export default StoreFront;
