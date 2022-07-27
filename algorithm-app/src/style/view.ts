import { StyleProp, ViewStyle } from "react-native";
import { borderRadius } from "../variable/border-radius";
import { color } from "../variable/color";
import { padding } from "../variable/padding";

/**
 * Style relatif à la globalité d'une page, i.e. page contenant tout les éléments.
 * 
 * @returns Vue globale d'une page
 */
export const pageView = (): StyleProp<ViewStyle> => {
    return {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingVertical: padding.view.vertical,
        paddingHorizontal: padding.view.horizontal,
        width: '100%'
    }
}

/**
 * Style relatif au contenant d'un bloc de code.
 * 
 * @returns Style relatif au contenant d'un bloc de code
 */
export const codeBlockView = (): StyleProp<ViewStyle> => {
    return {
        paddingHorizontal: padding.codeBlock.horizontal,
        paddingVertical: padding.codeBlock.vertical,
        borderRadius: borderRadius.codeBlock,
        width: '100%',
        backgroundColor: color.codeBgColor
    }
}