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
import SquarePermutation from "../element/square-permutation";
import LineSquarePermutation from "../element/line-square-permutation";


/**
 * Composant relatif à la page d'acceuil
 * 
 * @returns Page d'acceuil `HomeScreen`
 */
const HomeScreen = (): JSX.Element => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteNavigatorParams>>();
    const datas = [{
        upper: "Clé",
        view: "12",
    }]

    const datasFirst = [{
        upper: "0",
        view: "12",
        lower: "3"
    }, {
        upper: "2",
        view: "5",
        lower: "1"
    }, {
        upper: "0",
        view: "15",
        lower: "3"
    }]

    const datasSecond = [{
        upper: "5",
        view: "3",
        lower: "8"
    }, {
        upper: "9",
        view: "36",
        lower: "1"
    }]


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
                
                <LineSquarePermutation
                    datasFirst = { datas }
                    backgroundColorFirst = { color.squarePermutationPrimary }
                />

                <LineSquarePermutation
                    datasFirst = { datasFirst }
                    datasSecond = { datasSecond }
                    backgroundColorFirst = { color.squarePermutationPrimary }
                    backgroundColorSecond = { color.squarePermutationSecondary }
                />
            </View>
        </SafeAreaView>
        
    );
}

export default HomeScreen;