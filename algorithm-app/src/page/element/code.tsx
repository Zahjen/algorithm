import React from "react";
import { Text } from "react-native";

const keyword = ['if', 'else', 'while', 'for', 'let', 'const', 'case', 'switch', 'default', "return"]
const keywordSecond = ['string', 'number', 'boolean', 'void', 'undefined']

export const Code = () => {
    const codeString = 'const hello: string = if cc else cc \n     coucoiu';
    return (
        <CustomText
            text = { codeString }
        />
    )
}

const CustomText = (props: any) => {
    const text = props.text.split(' ');
    return <Text>{text.map((text: any) => {
      if (keyword.includes(text)) {
        return <Text key={text} style={{ color: 'red' }}>{text} </Text>;
      } else if (keywordSecond.includes(text)) {
        return <Text key={text} style={{ color: 'orange' }}>{text} </Text>;
      }
      return `${text} `;
    })}</Text>;
}