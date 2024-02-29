import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IconButton } from "react-native-paper";
import TelaInicio from "../../paginas/TelaInicio";
import TelaPesquisa from "../../paginas/TelaPesquisa";
import TelaPrevisao from "../../paginas/TelaPrevisao";
import NavigatorTelaInicio from "../../paginas/NavigatorTelaInicio";



const Tab = createBottomTabNavigator();




function NavigatorTabs() {
  return (
    <Tab.Navigator
      initialRouteName="TelaPrincipal"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#635DCD",
        },
      }}
    >
      <Tab.Screen
        name="TelaPrevisao"
        component={TelaPrevisao}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="map-legend" size={size} iconColor="white" />
          ),
        }}
      />

      <Tab.Screen
        name="TelaPrincipal"
        component={NavigatorTelaInicio}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="dots-horizontal" size={size} color={color} iconColor="white" />
          ),
        }}
      />

      <Tab.Screen
        name="TelaPesquisa"
        component={TelaPesquisa}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="format-list-bulleted" size={size} color={color} iconColor="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NavigatorTabs;
