"use client"

import { useGame } from "./StoreContext"
import { playCream, playCherry, playSprinkles, playChips, playSauce, playScoop1, playScoop2, playScoop3 } from "@/app/lib/sounds"
import { Toppings } from "./StoreContext"
import { } from "@/app/lib/sounds"

export default function useDisplayManager() {

    const {base, setBase, scoopOne, setScoopOne, scoopTwo, setScoopTwo, scoopThree, setScoopThree, toppings, setToppings, pickUp} = useGame()

    const bases = ["normal cone", "chocolate cone", "cup"]
    const flavors = ["vanilla", "chocolate", "strawberry", "mint choco", "birthday cake", "cotton candy", "matcha", "cookies & cream", "mango"]
    const toppingSet = ["some rainbow sprinkles", "some chocolate chips", "some chocolate sauce", "a cherry", "some whipped cream"]


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
            if (element === "some rainbow sprinkles" && !toppings.sprinkles) {
                playSprinkles()
                setToppings((prev: Toppings) => ({
                    ...prev,
                    hasToppings: true,
                    sprinkles: true,

                }))
            } else if (element === "some chocolate chips" && !toppings.chips) {
                playChips()
                setToppings((prev: Toppings) => ({
                    ...prev,
                    hasToppings: true,
                    chips: true,

                }))
            } else if (element === "some chocolate sauce" && !toppings.sauce) {
                playSauce()
                setToppings((prev: Toppings) => ({
                    ...prev,
                    hasToppings: true,
                    sauce: true,

                }))
            } else if (element === "a cherry" && !toppings.cherry) {
                playCherry()
                setToppings((prev: Toppings) => ({
                    ...prev,
                    hasToppings: true,
                    cherry: true,

                }))
            } else if (element === "some whipped cream" && !toppings.cream) {
                playCream()
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


