import { StyleProp, ViewStyle } from "react-native"
import { borderRadius } from "../variable/border-radius"
import { color } from "../variable/color"
import { size } from "../variable/size"
import { flex } from "./global"

/**
 * Style relatif à une carte.
 * 
 * @param bgColor La couleur de fond d'une carte
 * @returns Le style relatif à une carte
 */
 export const squarePermutation = (bgColor?: string) => {
    return {
        upperText: {
            
        },
        card: [
            {
                width: size.squarePermutation,
                height: size.squarePermutation,
                backgroundColor: bgColor, 
                borderRadius: borderRadius.squarePermutation,
            },
            flex("row", "center", "center")
        ],
        viewText: {

        },
        lowerText : {
            
        }  
    }
}