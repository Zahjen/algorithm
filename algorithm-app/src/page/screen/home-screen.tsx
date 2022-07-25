import React from "react";
import { FlatList, View, SafeAreaView } from "react-native";
import Card from "../../component/card";
import Title from "../../component/title";
import { homeCard } from "../../ressource/card/home-card";
import { pageView } from "../../style/view";
import { widthHeight } from "../../style/global";
import Spacer from "../../component/spacer";
import { spacer } from "../../variable/spacer";
import { color } from "../../variable/color";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteNavigatorParams } from "../../navigation/route-navigator";
import Code from "../element/code";


/**
 * Composant relatif à la page d'acceuil
 * 
 * @returns Page d'acceuil `HomeScreen`
 */
const HomeScreen = (): JSX.Element => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteNavigatorParams>>();

    return (
        <SafeAreaView style = {{ backgroundColor: color.bgColor, flex: 1 }}>
            <View style = { pageView() }>
                <Title title = 'Bienvenue'/>

                <FlatList
                    data = { homeCard }
                    renderItem = { ({ item }: any) => {
                        return (
                            <Card 
                                item = { item }
                                onPress = {() => {
                                    navigation.navigate('CourseListScreen', {
                                        key: item.key,
                                        title: item.label,
                                    })
                                }} />
                        )
                    } }
                    keyExtractor = { homeCard => homeCard.key }
                    style = { widthHeight('100%') }
                    ItemSeparatorComponent = { () => {
                        return <Spacer height = { spacer.spaceBtwCard }/>
                    } }
                />
                <Code
                    text = { 'const var_name: string = "un nom" ;' }
                ></Code>
            </View>
        </SafeAreaView>
        
    );
}

export default HomeScreen;