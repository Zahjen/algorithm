import React from "react";
import { Text, View } from "react-native";
import { color } from "../../variable/color";
import { codeBlockView } from "../../style/view";
import { CodeProps } from "../../interface/props";

/**
 * Composant permettant de générer un block de code avec le texte fournie.
 * 
 * ---
 * 
 * `CodeProps` : Interface composée de :
 * * `text` *(string)* : Le texte qu'il faudra tranformer pour générer un block de code.
 * 
 * ---
 * 
 * @param props `CodeProps`
 * @returns Composant `Code`
 */
const Code: React.FC<CodeProps> = (props: CodeProps): JSX.Element => {
    const keyword = ['if', 'else', 'while', 'for', 'let', 'const', 'case', 'switch', 'default'];
    const keywordType = ['string', 'number', 'boolean', 'void', 'undefined', 'return'];
    const symbole = ['{', '}', '[', ']', '=', '==', '===', '+', '++', '-', '--', ';', ';','*', '/', '*=', '+=', '-=', '/=', '%', '(', ')', '=>', '>=', '&&', '||', '|', '<', '>', '!==', '!='];

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