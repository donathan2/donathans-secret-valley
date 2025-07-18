"use client"

import { useGame } from "./StoreContext"
import { playScoop1, playScoop2, playScoop3 } from "@/app/lib/sounds"
import { Toppings } from "./StoreContext"


export default function useDisplayManager() {

    const {base, setBase, scoopOne, setScoopOne, scoopTwo, setScoopTwo, scoopThree, setScoopThree, toppings, setToppings, pickUp} = useGame()

    const bases = ["normal cone", "chocolate cone", "cup"]
    const flavors = ["vanilla", "chocolate", "strawberry", "mint choco", "birthday cake", "cotton candy", "matcha", "cookies and cream", "mango"]
    const toppingSet = ["rainbow sprinkles", "chocolate chips", "chocolate sauce", "cherry", "whipped cream"]


 function displayManager(element: string) {
    if (pickUp) return;
    else if (bases.includes(element)) {
        if (base !== element && scoopOne === "none") {
            setBase(element)
        }
    }else if (flavors.includes(element)) {
        if (base !== "none" && scoopOne === "none" && toppings.hasToppings === false) {
            setScoopOne(element)
            playScoop1()

        } else if (scoopOne !== "none" && scoopTwo === "none" && toppings.hasToppings === false) {
            setScoopTwo(element)
            playScoop2()
        } else if (scoopTwo !== "none" && scoopThree === "none" && toppings.hasToppings === false) {
            setScoopThree(element)
            playScoop3()}

    } else if (toppingSet.includes(element)) {
        if (base !== "none" && scoopOne !== "none") {
            if (element === "rainbow sprinkles") {
                setToppings((prev: Toppings) => ({
                    ...prev,
                    hasToppings: true,
                    sprinkles: true,

                }))
            } else if (element === "chocolate chips") {
                setToppings((prev: Toppings) => ({
                    ...prev,
                    hasToppings: true,
                    chips: true,

                }))
            } else if (element === "chocolate sauce") {
                setToppings((prev: Toppings) => ({
                    ...prev,
                    hasToppings: true,
                    sauce: true,

                }))
            } else if (element === "cherry") {
                setToppings((prev: Toppings) => ({
                    ...prev,
                    hasToppings: true,
                    cherry: true,

                }))
            } else if (element === "whipped cream") {
                setToppings((prev: Toppings) => ({
                    ...prev,
                    hasToppings: true,
                    cream: true,

                }))
            }
        }
    }





}

    



return {displayManager}
}


