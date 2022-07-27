import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Title from "../../component/title";
import { color } from "../../variable/color";
import { pageView } from "../../style/view";
import { ComponentGenerator } from "../../services/component-generator";
import { ElementProps, insertionSortCourse } from "../../ressource/course/sort/insertion-sort";
import Spacer from "../../component/spacer";
import { widthHeight } from "../../style/global";

/**
 * Composant relatif à un cours
 * 
 * @returns Page `CourseItem`
 */
const CourseItem = (): JSX.Element => {

    const componentGenerator = ComponentGenerator.getInstance();
    const datas = insertionSortCourse;
    let i = 0;

    return (
        <SafeAreaView style = {{ backgroundColor: color.bgColor, flex: 1 }}>
            <ScrollView>
                <View style = { pageView() }>
                    <Title title = "Hello" />
                    {
                        datas.map((data: ElementProps) => {
                            i++;

                            return ( 
                                <View style = { widthHeight('100%') } key = { i }>
                                    { componentGenerator.renderComponent(data) }
                                    <Spacer height = { 10 }/>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default CourseItem;