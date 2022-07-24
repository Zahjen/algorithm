import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CourseListScreen from "../page/screen/course-list-screen";
import CourseItem from "../page/screen/couse-item";
import HomeScreen from "../page/screen/home-screen";

export type HomeRouteNavigatorParams = {
    Home: undefined,
    CourseListScreen: {
        key: string,
        title: string
    },
    CourseItem: undefined
}

const HomeStack = createNativeStackNavigator<HomeRouteNavigatorParams>();

export const HomeRouteNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Group>
                <HomeStack.Screen 
                    name = "Home" 
                    component = {HomeScreen}
                    options = {{
                        headerShown: false
                    }}/>

                <HomeStack.Screen 
                    name = "CourseListScreen" 
                    component = {CourseListScreen}
                    options = {{
                        animation: "slide_from_right",
                        headerShown: false
                    }}/>

                <HomeStack.Screen 
                    name = "CourseItem" 
                    component = { CourseItem }
                    options = {{
                        animation: "slide_from_right",
                        headerShown: false
                    }}/>
            </HomeStack.Group>
        </HomeStack.Navigator>
    )
}