import { GestureResponderEvent } from "react-native"

/**
 * Interface composée de :
 * * `item?` *(any)* : Le titre associé à une carte.
 * * `cardColor?` *(string)* : La couleur de fond d'une carte.
 * * `arcColor?` *(string)* : La couleur de l'arc de cercle associé à une carte.
 * * `onPress?` *(((event: GestureResponderEvent) => void) | null | undefined)* : L'action réaliser lors du clique sur une carte.
 */
export interface CardProps {

    /** Le titre associé à une carte. */
    item?: any,
    /** La couleur de fond d'une carte. */
    cardColor?: string,
    /** La couleur de l'arc de cercle associé à une carte. */
    arcColor?: string,
    /** L'action réaliser lors du clique sur une carte */
    onPress?: ((event: GestureResponderEvent) => void) | null | undefined

}

/**
 * Interface composée de :
 * * `title` *(string)* : Titre à associer.
 * * `color?` *(string)* : Couleur appliqué au titre.
 * * `horizontalSpace?` *(number)* : Hauteur appliquée entre le titre et ce qui suit.
 * * `fontSize?` *(number)* : Taille de police du titre.
 */
export interface TitleProps {
    /** Titre à associer. */
    title: string,
    /** Couleur appliqué au titre. */
    color?: string,
    /** Hauteur appliquée entre le titre et ce qui suit. */
    horizontalSpace?: number,
    /** Taille de police du titre. */
    fontSize?: number
}

/**
 * Interface composée de :
 * * `text?` *(string)* : Texte à associer.
 * * `color?` *(string)* : Couleur appliqué au texte.
 * * `fontSize?` *(number)* : Taille de police du texte.
 * * `textAlign?` *("center" | "auto" | "left" | "right" | "justify")* : L'alignement appliqué au texte.
 */
 export interface TextProps {
    /** Texte à associer. */
    text?: string,
    /** Couleur appliqué au texte. */
    color?: string,
    /** Taille de police du texte. */
    fontSize?: number,
    /** L'alignement appliqué au texte */
    textAlign?: "center" | "auto" | "left" | "right" | "justify"
}

/**
 * Interface composée de :
 * * `width` *(number)* : Espace horizontal appliqué entre deux éléments.
 * * `height` *(number)* : Espace vertical appliqué entre deux éléments.
 */
export interface SpacerProps {
    /** Espace horizontal appliqué entre deux éléments. */    
    width?: number,
    /** Espace vertical appliqué entre deux éléments. */
    height?: number
}

/**
 * Interface composée de :
 * * `text` *(string)* : Le texte qu'il faudra tranformer pour générer un block de code.
 */
export interface CodeProps {
    /** Le texte qu'il faudra tranformer pour générer un block de code. */
    text: string
}