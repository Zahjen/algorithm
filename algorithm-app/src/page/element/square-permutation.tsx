import React from "react";
import { View } from "react-native";
import Spacer from "../../component/spacer";
import MyText from "../../component/text";
import { flex, widthHeight } from "../../style/global";
import { color } from "../../variable/color";

interface Props {
    upperTextColor?: string,
    upperTextFontSize?: number, 
    upperTextAlign?: "center" | "auto" | "left" | "right" | "justify",
    upperText?: string,

    viewTextColor?: string,
    viewTextFontSize?: number, 
    viewTextAlign?: "center" | "auto" | "left" | "right" | "justify",
    viewText?: string,

    lowerTextColor?: string,
    lowerTextFontSize?: number, 
    lowerTextAlign?: "center" | "auto" | "left" | "right" | "justify",
    lowerText?: string,

    backgroundColor?: string 
}

const SquarePermutation: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <View style = { [flex("column", "center", "center"), { backgroundColor: 'blue' }] }>
            {
                (props.upperText === undefined) 
                    ? null
                    : <View>
                        <MyText
                            text = { props.upperText }
                            color = { props.upperTextColor }
                            fontSize = { props.upperTextFontSize }
                            textAlign = { props.upperTextAlign }
                        />
                        <Spacer height = { 10 }/>
                    </View>
            }            
            <View style = { [
                widthHeight(40, 40), 
                { backgroundColor: 'red', borderRadius: 5 }, 
                flex("row", "center", "center")
            ] }>
                <MyText
                    text = { props.viewText }
                    color = { props.viewTextColor }
                    fontSize = { props.viewTextFontSize }
                    textAlign = { props.viewTextAlign }
                />
            </View>
            {
                (props.lowerText === undefined) 
                    ? null
                    : <View>
                        <Spacer height = { 10 }/>
                        <MyText
                            text = { props.lowerText }
                            color = { props.lowerTextColor }
                            fontSize = { props.lowerTextFontSize }
                            textAlign = { props.lowerTextAlign }
                        />
                    </View>
            }    
        </View>
    );
}

export default SquarePermutation;