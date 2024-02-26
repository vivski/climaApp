import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicio from "../../paginas/TelaInicio"
import TelaPesquisa from "../../paginas/TelaPesquisa"
import TelaPrevisao from "../../paginas/TelaPrevisao"


const Stack = createNativeStackNavigator();



function NavigatorTelaInicio() {
    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false,
          }}>
    
          <Stack.Screen 
            name="TelaInicio" 
            component={TelaInicio}
          />
        
        <Stack.Screen 
            name="TelaPesquisa" 
            component={TelaPesquisa}
          />

        <Stack.Screen 
            name="TelaPrevisao" 
            component={TelaPrevisao}
          />
          </Stack.Navigator>
       
      );
}

export default NavigatorTelaInicio;