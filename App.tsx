import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ListVillagersScreen } from "./src/screens/ListVillagersScreen";
import { useFonts } from "expo-font";
import { VillagerScreen } from "./src/screens/VillagerScreen";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
    const [fontsLoaded] = useFonts({
        'FOT-RodinBokutohProEB': require('./assets/fonts/FOT-RodinBokutoh Pro EB.otf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <SafeAreaView style={{ flex: 1 }}>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="ListVillagers" component={ListVillagersScreen} />
                        <Stack.Screen name="Villager" component={VillagerScreen} />
                    </Stack.Navigator>
                </SafeAreaView>
            </NavigationContainer>
        </QueryClientProvider>
    );
}
