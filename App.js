import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigatorTabs from "./componentes/barraInferior";
import TelaInicio from "./paginas/TelaInicio";
import NavigatorTelaPesquisa from "./paginas/NavigatorTelaPesquisa";
import NavigatorTelaPrevisao from "./paginas/NavigatorTelaPrevisao";
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >

        <Stack.Screen name="Inicio" component={TelaInicio} />
        <Stack.Screen name="pesquisa" component={NavigatorTelaPesquisa} />
        <Stack.Screen name="previsao" component={NavigatorTelaPrevisao} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
