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
      initialRouteName="TelaInicio"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#857ED7",
        },
      }}
    >
      <Tab.Screen
        name="TelaPrevisao"
        component={TelaPrevisao}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="TelaPrincipal"
        component={NavigatorTelaInicio}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="TelaPesquisa"
        component={TelaPesquisa}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="home" size={23} color={white} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NavigatorTabs;
