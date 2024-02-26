import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicio from "../../paginas/TelaInicio"
import TelaPrevisao from "../../paginas/TelaPrevisao"
import NavigatorTabs from '../../componentes/barraInferior';


const Stack = createNativeStackNavigator();



function NavigatorTelaPrevisao() {
    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false,
          }}>
    

        <Stack.Screen 
            name="TelaPrevisao" 
            component={TelaPrevisao}
          />

          <Stack.Screen 
            name="TelaInicio" 
            component={TelaInicio}
          />
          </Stack.Navigator>
       
      );
}

export default NavigatorTelaPrevisao;