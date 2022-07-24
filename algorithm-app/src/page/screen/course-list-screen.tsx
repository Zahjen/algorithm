import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View, FlatList } from "react-native";
import Title from "../../component/title";
import { CourseCard } from "../../ressource/card/courses-card";
import { pageView } from "../../style/view";
import { color } from "../../variable/color";
import { widthHeight } from "../../style/global";
import Spacer from "../../component/spacer";
import { spacer } from "../../variable/spacer";
import Card from "../../component/card";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteNavigatorParams } from "../../navigation/route-navigator";

/**
 * Composant relatif à la page contenant les titres des différents cours
 * 
 * @returns Page `CourseListScreen`
 */
const CourseListScreen = (): JSX.Element => {

    const navigation = useNavigation<NativeStackNavigationProp<RouteNavigatorParams>>();
    const route = useRoute<RouteProp<RouteNavigatorParams>>();

    return (
        <SafeAreaView style = {{ backgroundColor: color.bgColor, flex: 1 }}>
            <View style = { pageView() }>
                <Title title = { route.params!.title } />

                <FlatList
                    data = { CourseCard[route.params!.key] }
                    renderItem = { ({ item }: any) => {
                        return (
                            <Card
                                item = { item }
                                onPress = {() => {
                                    navigation.navigate('CourseItem')
                                }}
                                arcColor = { color.tertiary }
                            />
                        )
                    } }
                    keyExtractor = { homeCard => homeCard.key }
                    style = { widthHeight('100%') }
                    ItemSeparatorComponent = { () => {return <Spacer height = { spacer.spaceBtwCard }/>} }
                />
            </View>
        </SafeAreaView>
    );
}

export default CourseListScreen;