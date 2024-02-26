import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicio from "../../paginas/TelaInicio"
import TelaPesquisa from "../../paginas/TelaPesquisa"
import NavigatorTabs from '../../componentes/barraInferior';


const Stack = createNativeStackNavigator();



function NavigatorTelaPesquisa() {
    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false,
          }}>
    
        
        <Stack.Screen 
            name="TelaPesquisa" 
            component={TelaPesquisa}
          />

         <Stack.Screen 
            name="TelaInicio" 
            component={TelaInicio}
          />

          </Stack.Navigator>
       
      );
}

export default NavigatorTelaPesquisa;