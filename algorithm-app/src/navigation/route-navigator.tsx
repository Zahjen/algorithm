import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CourseListScreen from "../page/screen/course-list-screen";
import CourseItem from "../page/screen/couse-item";
import HomeScreen from "../page/screen/home-screen";

export type RouteNavigatorParams = {
    Home: undefined,
    CourseListScreen: {
        key: string,
        title: string
    },
    CourseItem: undefined
}

const Stack = createNativeStackNavigator<RouteNavigatorParams>();

export const RouteNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen 
                    name = "Home" 
                    component = {HomeScreen}
                    options = {{
                        headerShown: false
                    }}/>

                <Stack.Screen 
                    name = "CourseListScreen" 
                    component = {CourseListScreen}
                    options = {{
                        animation: "slide_from_right",
                        headerShown: false
                    }}/>

                <Stack.Screen 
                    name = "CourseItem" 
                    component = { CourseItem }
                    options = {{
                        animation: "slide_from_right",
                        headerShown: false
                    }}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}