"use client"

import { useGame } from "./StoreContext"



export default function useDisplayManager() {

    const {base, setBase} = useGame()
    const {scoopOne, setScoopOne} = useGame()
    const {scoopTwo, setScoopTwo, scoopThree, setScoopThree} = useGame()

    const bases = ["normal cone", "chocolate cone", "cup"]
    const flavors = ["vanilla", "chocolate", "strawberry", "mint choco", "birthday cake", "cotton candy", "matcha", "cookies and cream", "mango"]
    const toppings = ["rainbow sprinkles", "chocolate chips", "chocolate sauce", "cherry", "whipped cream"]


 function displayManager(element: string) {
    if (bases.includes(element)) {
        if (base !== element && scoopOne === "none") {
            setBase(element)
        }
    }else if (flavors.includes(element)) {
        if (base !== "none" && scoopOne === "none") {
            setScoopOne(element)
        } else if (scoopOne !== "none" && scoopTwo === "none") {
            setScoopTwo(element)
        } else if (scoopTwo !== "none" && scoopThree === "none") {
            setScoopThree(element)}

    }




}
return {displayManager}
}


