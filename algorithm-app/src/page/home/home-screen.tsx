import React from "react";
import { FlatList, View } from "react-native";
import Card from "../../component/card";
import Title from "../../component/title";
import { homeCard } from "../../ressource/card/home-card";
import { pageView } from "../../style/view";
import { widthHeight } from "../../style/global";

/**
 * Composant relatif à la page d'acceuil
 * 
 * @returns Page d'acceuil `HomeScreen`
 */
const HomeScreen = (): JSX.Element => {
    return (
        <View style = { pageView() }>
            <Title title = 'Bienvenue'/>

            <FlatList
                data = { homeCard }
                renderItem = { ({ item }: any) => {
                    return <Card item = { item.label }/>
                } }
                keyExtractor = { homeCard => homeCard.key }
                style = { widthHeight('100%') }
            />
        </View>
    );
}

export default HomeScreen;