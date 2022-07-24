import React from "react";
import { View, Pressable } from "react-native";
import { color } from "../variable/color";
import Svg, { Circle } from 'react-native-svg';
import { CardProps } from "../interface/props";
import { card } from "../style/card";
import MyText from "./text";

/**
 * Composant permettant de mettre en placer une petite carte afin d'afficher un topic.
 * 
 * ---
 * 
 * `CardProps` : Interface composée de :
 * * `item?` *(any)* : Le titre associé à une carte.
 * * `cardColor?` *(string)* : La couleur de fond d'une carte.
 * * `arcColor?` *(string)* : La couleur de l'arc de cercle associé à une carte.
 * 
 * ---
 * 
 * @param props `CardProps`
 * @returns Composant `Card`
 */
const Card: React.FC<CardProps> = (props: CardProps): JSX.Element => {
    return (
        <Pressable 
            onPress = { props.onPress }
            style = { card(props.cardColor).container }>
            <View style = { card(props.cardColor).circleView }>
                <Svg height="100%" width="100%" viewBox="0 0 100 100">
                    <Circle
                        cx = "-25"
                        cy = "20"
                        r = "130"
                        stroke = { props.arcColor }
                        strokeWidth = "4"
                        fill = { props.cardColor }
                    />
                </Svg>
            </View>

            <View style = { card(props.cardColor).textView }>
                <MyText
                    text = { props.item?.label.toUpperCase() }
                    textAlign = "right"
                />
            </View>
        </Pressable>
    );
}

Card.defaultProps = {
    cardColor: color.primary,
    arcColor: color.secondary
}

export default Card;