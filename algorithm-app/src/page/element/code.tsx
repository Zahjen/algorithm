import React from "react";
import { Text, View } from "react-native";
import { color } from "../../variable/color";
import { codeBlockView } from "../../style/view";

const keyword = ['if', 'else', 'while', 'for', 'let', 'const', 'case', 'switch', 'default'];
const keywordType = ['string', 'number', 'boolean', 'void', 'undefined', 'return'];
const symbole = ['{', '}', '[', ']', '=', '==', '===', '+', '++', '-', '--', ';', ';','*', '/', '*=', '+=', '-=', '/=', '%', '(', ')'];

interface Props {
    text: string
}

const Code: React.FC<Props> = (props: Props): JSX.Element => {
    const texts: string[] = props.text.split(' ');
    let i: number = 0;

    return (
        <View style = { codeBlockView() }>
            <Text>{
                texts.map((word: string) => {
                    i++;

                    if (keyword.includes(word)) return <Text key = { i } style = {{ color: color.codeKeyWord }}>{word} </Text>
                    else if (keywordType.includes(word)) return <Text key = { i } style = {{ color: color.codeType }}>{word} </Text>
                    else if (symbole.includes(word)) return <Text key = { i } style = {{ color: color.codeSymbol }}>{word} </Text>
                    else if (word.endsWith(':')) return <Text key = { i } style = {{ color: color.codeVariable }}>{word} </Text>

                    return <Text key = { i } style = {{ color: color.text }}>{word} </Text>
                })
            }</Text>
        </View>
    );
}

export default Code;