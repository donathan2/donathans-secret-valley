"use client";

import Image from "next/image";

import { playInvOpen, playItemHover } from "../lib/sounds";

type InventoryProps = {
  items: number[];
  handleUseItem: (index: number) => void;
  pastElement: string;
};

export default function Inventory({
  items,
  handleUseItem,
  pastElement,
}: InventoryProps) {
  return (
    <div className="z-30 absolute w-[100px] h-[100px] left-5 bottom-5 bg-white group">
      <Image
        src="/inventory.png"
        alt="inventory"
        width={200}
        height={200}
        onMouseEnter={() => {
          playInvOpen();
        }}
      ></Image>

      <div className="flex flex-rows absolute w-[500px] h-[100px] left-[100px] bottom-0 opacity-0 group-hover:opacity-100  pointer-events-none group-hover:pointer-events-auto">
        <div>
          <Image
            src={items[0] === 1 ? "/health-pot.png" : "/inventory-slot.png"}
            alt="inventory slot"
            width={200}
            height={200}
            className="w-[100px] h-[100px] peer"
            onClick={() => items[0] === 1 && handleUseItem(0)}
            onMouseEnter={() => {
              if (items[0] === 1) {
                playItemHover();
              }
            }}
          ></Image>
          {items[0] === 1 && (
            <div className="absolute h-[175px] w-[300px] translate-y-[-275px] bg-neutral-500/85 text-black text-sm rounded border border-white opacity-0 invisible peer-hover:opacity-100 peer-hover:visible">
              <p className="pl-5 pr-5 pt-5 pb-2 text-xl underline">
                Life Elixir
              </p>
              <p className="pl-5 pr-5 pb-5">
                Drink a mysterious potion with innate organ repairing
                capabilities.{" "}
                <span style={{ textShadow: "1px 1px 1px rgb(52, 151, 46)" }}>
                  60% chance to recover 1 heart, 30% chance to recover 2 hearts,
                  9% chance to recover 3 hearts, and 1% chance to recover 4
                  hearts.
                </span>
              </p>
            </div>
          )}
        </div>
        <div>
          <Image
            src={items[1] === 1 ? "/overlord.png" : "/inventory-slot.png"}
            alt="inventory slot"
            width={200}
            height={200}
            className="w-[100px] h-[100px] peer"
            onClick={() => items[1] === 1 && handleUseItem(1)}
            onMouseEnter={() => {
              if (items[1] === 1) {
                playItemHover();
              }
            }}
          ></Image>
          {items[1] === 1 && (
            <div className="absolute h-[175px] w-[300px] translate-y-[-275px] bg-neutral-500/85 text-black text-sm rounded border border-white opacity-0 invisible peer-hover:opacity-100 peer-hover:visible">
              <p className="pl-5 pr-5 pt-5 pb-2 text-xl underline">
                Overlord&apos;s Dominion
              </p>
              <p className="pl-5 pr-5 pb-5">
                Wield the sword of unrelinquished oppression.{" "}
                <span style={{ textShadow: "1px 1px 1px rgb(210, 17, 27)" }}>
                  Next spell has doubled crit rate,{" "}
                </span>
                <span style={{ textShadow: "1px 1px 1px rgb(207, 133, 15)" }}>
                  deals 10 bonus base damage,{" "}
                </span>
                <span style={{ textShadow: "1px 1px 1px rgb(52, 151, 46)" }}>
                  and recovers 1 heart.
                </span>
              </p>
            </div>
          )}
        </div>
        <div>
          <Image
            src={items[2] === 1 ? "/memento.png" : "/inventory-slot.png"}
            alt="inventory slot"
            width={200}
            height={200}
            className="w-[100px] h-[100px] peer"
            onClick={() => items[2] === 1 && handleUseItem(2)}
            onMouseEnter={() => {
              if (items[2] === 1) {
                playItemHover();
              }
            }}
          ></Image>
          {items[2] === 1 && (
            <div className="absolute h-[175px] w-[300px] translate-y-[-275px] bg-neutral-500/85 text-black text-sm rounded border border-white opacity-0 invisible peer-hover:opacity-100 peer-hover:visible">
              <p className="pl-5 pr-5 pt-5 pb-2 text-xl underline">
                Warrior&apos;s Memento
              </p>
              <p className="pl-5 pr-5 pb-5">
                Embrace the power of his crested amulet, the bear witness to a
                soldier&apos;s final reckoning.{" "}
                <span style={{ textShadow: "1px 1px 1px rgb(207, 133, 15)" }}>
                  Next spell deals bonus base damage equal to 15 + (number of
                  missing hearts cubed).{" "}
                </span>
              </p>
            </div>
          )}
        </div>
        <div>
          <Image
            src={items[3] === 1 ? "/staff.png" : "/inventory-slot.png"}
            alt="inventory slot"
            width={200}
            height={200}
            className="w-[100px] h-[100px] peer"
            onClick={() => items[3] === 1 && handleUseItem(3)}
            onMouseEnter={() => {
              if (items[3] === 1) {
                playItemHover();
              }
            }}
          ></Image>
          {items[3] === 1 && (
            <div className="absolute h-[440px] w-[450px] translate-y-[-540px] bg-neutral-500/85 text-black text-sm rounded border border-white opacity-0 invisible peer-hover:opacity-100 peer-hover:visible">
              <p className="pl-5 pr-5 pt-5 pb-2 text-xl underline">
                The Unraveling
              </p>
              <div className="pl-5 pr-5 pb-5">
                Elevate your elemental abilities with a mythical triflux staff.
                If your previous spell and next spell casted are different,
                trigger a worldbending event based on the combination of
                elements used. Spells can be casted in any order.
                <p className="pt-5">Previous Element: {pastElement}</p>
              </div>
              <p className="pl-5 pr-5 pt-2 underline">Fire and Lightning</p>
              <p
                className="pl-5 pr-5"
                style={{ textShadow: "1px 1px 1px rgb(210, 17, 27)" }}
              >
                Chaos: If the next spell is a critical hit, the crit dmg
                multiplier is increased from x2 to x7.
              </p>
              <p className="pl-5 pr-5 pt-2 underline">Fire and Freeze</p>
              <p
                className="pl-5 pr-5"
                style={{ textShadow: "1px 1px 1px rgb(207, 133, 15)" }}
              >
                Corrode: Next spell deals 10 bonus base damage{" "}
                <span style={{ textShadow: "1px 1px 1px rgb(52, 151, 46)" }}>
                  {" "}
                  and recovers 1 heart per 15 damage dealt.{" "}
                </span>
              </p>
              <p className="pl-5 pr-5 pt-2 underline">Lightning and Freeze</p>
              <p
                className="pl-5 pr-5"
                style={{ textShadow: "1px 1px 1px rgb(210, 17, 27)" }}
              >
                Corrupt: Next spell casted is guaranteed to be a critical hit,
                <span style={{ textShadow: "1px 1px 1px rgb(181, 40, 184)" }}>
                  {" "}
                  and replenishes a used item at random. Can not replenish
                  itself.
                </span>
              </p>
            </div>
          )}
        </div>
        <div>
          <Image
            src={items[4] === 1 ? "/shield.png" : "/inventory-slot.png"}
            alt="inventory slot"
            width={200}
            height={200}
            className="w-[100px] h-[100px] peer"
            onClick={() => items[4] === 1 && handleUseItem(4)}
            onMouseEnter={() => {
              if (items[4] === 1) {
                playItemHover();
              }
            }}
          ></Image>
          {items[4] === 1 && (
            <div className="absolute h-[175px] w-[300px] translate-y-[-275px] bg-neutral-500/85 text-black text-sm rounded border border-white opacity-0 invisible peer-hover:opacity-100 peer-hover:visible">
              <p className="pl-5 pr-5 pt-5 pb-2 text-xl underline">
                Guardian&apos;s Will
              </p>
              <p className="pl-5 pr-5 pb-5">
                Harness the archangel&apos;s triumphant blessing.{" "}
                <span style={{ textShadow: "1px 1px 1px rgb(146, 181, 177)" }}>
                  Grants a 65% chance to block the monster&apos;s attack for the
                  next 2 attacks.{" "}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
