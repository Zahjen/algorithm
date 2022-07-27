import { borderRadius } from "../variable/border-radius"
import { size } from "../variable/size"
import { flex } from "./global"

/**
 * Style relatif à une permutation de carré permettant l'explication des différents algorithmes.
 * 
 * @param bgColor La couleur de fond d'une case
 * @returns Le style relatif à une permutation de carré permettant l'explication des différents algorithmes.
 */
 export const squarePermutation = (bgColor?: string) => {
    return {
        /** Stryle relatif au texte situé en haut de la case */
        upperText: {
            
        },

        /** Style relatif à la case de la permutation */
        card: [
            {
                width: size.squarePermutation,
                height: size.squarePermutation,
                backgroundColor: bgColor, 
                borderRadius: borderRadius.squarePermutation,
            },
            flex("row", "center", "center")
        ],

        /** Style relatif au texte situé dans la case */
        viewText: {

        },

        /** Style relatif au texte situé en dessous d'une case */
        lowerText : {
            
        }  
    }
}