import React from "react";
import { View } from "react-native";
import Spacer from "../../component/spacer";
import { flex, widthHeight } from "../../style/global";
import SquarePermutation from "./square-permutation";

/*

[{
    upper: 12,
    view: 12,
    lower: 12
}, {
    upper: 12,
    view: 12,
    lower: 12
}, {
    upper: 12,
    view: 12,
    lower: 12
}]

*/

interface Data {
    upper?: string,
    view?: string,
    lower?: string
}

interface Props {
    datasFirst: Data[]
    datasSecond?: Data[] 

    upperTextColorFirst?: string,
    upperTextFontSizeFirst?: number, 
    upperTextAlignFirst?: "center" | "auto" | "left" | "right" | "justify",

    viewTextColorFirst?: string,
    viewTextFontSizeFirst?: number, 
    viewTextAlignFirst?: "center" | "auto" | "left" | "right" | "justify",

    lowerTextColorFirst?: string,
    lowerTextFontSizeFirst?: number, 
    lowerTextAlignFirst?: "center" | "auto" | "left" | "right" | "justify",

    backgroundColorFirst?: string 

    upperTextColorSecond?: string,
    upperTextFontSizeSecond?: number, 
    upperTextAlignSecond?: "center" | "auto" | "left" | "right" | "justify",

    viewTextColorSecond?: string,
    viewTextFontSizeSecond?: number, 
    viewTextAlignSecond?: "center" | "auto" | "left" | "right" | "justify",

    lowerTextColorSecond?: string,
    lowerTextFontSizeSecond?: number, 
    lowerTextAlignSecond?: "center" | "auto" | "left" | "right" | "justify",

    backgroundColorSecond?: string 
}

const LineSquarePermutation: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <View>
            <View style = { [flex("row", "center", "space-evenly"), widthHeight('100%')] }>
                {
                    props.datasFirst.map((data: Data) => {
                        return <SquarePermutation
                            upperText = { data.upper }
                            upperTextAlign = { props.upperTextAlignFirst }
                            upperTextColor = { props.upperTextColorFirst }
                            upperTextFontSize = { props.upperTextFontSizeFirst }

                            viewText = { data.view }
                            viewTextAlign = { props.viewTextAlignFirst }
                            viewTextColor = { props.viewTextColorFirst }
                            viewTextFontSize = { props.viewTextFontSizeFirst }

                            lowerText = { data.lower }
                            lowerTextAlign = { props.lowerTextAlignFirst }
                            lowerTextColor = { props.lowerTextColorFirst }
                            lowerTextFontSize = { props.lowerTextFontSizeFirst }

                            backgroundColor = { props.backgroundColorFirst }
                        />
                    })
                }

                {
                    (props.datasSecond === undefined)
                        ? null
                        : props.datasSecond.map((data: Data) => {
                            return <SquarePermutation
                                upperText = { data.upper }
                                upperTextAlign = { props.upperTextAlignSecond }
                                upperTextColor = { props.upperTextColorSecond }
                                upperTextFontSize = { props.upperTextFontSizeSecond }
        
                                viewText = { data.view }
                                viewTextAlign = { props.viewTextAlignSecond }
                                viewTextColor = { props.viewTextColorSecond }
                                viewTextFontSize = { props.viewTextFontSizeSecond }
        
                                lowerText = { data.lower }
                                lowerTextAlign = { props.lowerTextAlignSecond }
                                lowerTextColor = { props.lowerTextColorSecond }
                                lowerTextFontSize = { props.lowerTextFontSizeSecond }
        
                                backgroundColor = { props.backgroundColorSecond }
                            />
                        })
                }
            </View>
            <Spacer height = { 30 }/>
        </View>
    );
}

export default LineSquarePermutation;