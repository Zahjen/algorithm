import React from "react";
import { SafeAreaView, View } from "react-native";
import Title from "../../component/title";
import { color } from "../../variable/color";
import { pageView } from "../../style/view";

/**
 * Composant relatif à un cours
 * 
 * @returns Page `CourseItem`
 */
const CourseItem = (): JSX.Element => {

    return (
        <SafeAreaView style = {{ backgroundColor: color.bgColor, flex: 1 }}>
            <View style = { pageView() }>
                <Title title = "Hello" />
            </View>
        </SafeAreaView>
    );
}

export default CourseItem;