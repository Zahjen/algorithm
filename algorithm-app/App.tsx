import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { HomeRouteNavigator } from './src/navigation/home-route-navigaor';

export default function App() {
    // Charger les polices souhaitées à utiliser à travers l'application.
    const [loaded] = useFonts({
        PoppinsLight: require('./assets/fonts/poppins/Poppins-Light.ttf'),
        PoppinsLightItalic: require('./assets/fonts/poppins/Poppins-LightItalic.ttf'),
        PoppinsBold: require('./assets/fonts/poppins/Poppins-SemiBold.ttf'),
        PoppinsBoldItalic: require('./assets/fonts/poppins/Poppins-SemiBoldItalic.ttf'),
    });
    
    // Si le chargement ne s'est pas fait on ne retourne rien.
    if (!loaded) return null;

    return (
        <NavigationContainer>
            <HomeRouteNavigator/>
        </NavigationContainer>
    );
}