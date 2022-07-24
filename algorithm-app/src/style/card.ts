import { borderRadius } from "../variable/border-radius"
import { size } from "../variable/size"
import { padding } from "../variable/padding"

/**
 * Style relatif à une carte.
 * 
 * @param bgColor La couleur de fond d'une carte
 * @param flex La place prise par la vue contenant l'arc de cercle
 * @returns Le style relatif à une carte
 */
export const card = (bgColor?: string, flex: number = 0.3) => {
    return {
        container: {
            flexDirection: "row" as "row",
            backgroundColor: bgColor,
            height: size.card.height,
            borderRadius: borderRadius.card
        },
        circleView: {
            flex: flex, 
            paddingLeft: padding.card.horizontal
        },
        textView : {
            flex: (1 - flex), 
            justifyContent: "flex-end" as "flex-end", 
            alignItems: "flex-end" as "flex-end", 
            paddingRight: padding.card.horizontal, 
            paddingBottom: padding.card.vertical
        }  
    }
}