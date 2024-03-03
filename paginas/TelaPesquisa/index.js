import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

import { MapPinIcon } from 'react-native-heroicons/solid';


export default function TelaPesquisa() {
  const [mostrarPesquisa, alternarPesquisa] = useState(false);
  const [textoPesquisa, setTextoPesquisa] = useState('');
  const [locais, setLocais] = useState([1, 2, 3, 4]);

  ///função para lidar com o local, tendo loc como parâmetro
  const lidarPesquisa = (loc) => {
  console.log('local:', loc)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Pesquisar cidade'
            style={styles.textInput}
            value={textoPesquisa}
            onChangeText={(text) => setTextoPesquisa(text)}
          />
          <TouchableOpacity
            style={styles.IconeBotao}
            onPress={() => alternarPesquisa(!mostrarPesquisa)}
          >
            <MagnifyingGlassIcon size={25} color="white" />
          </TouchableOpacity>

        </View>
      </SafeAreaView>
      {locais.length > 0 && mostrarPesquisa ? (
        <View style={styles.pesquisaResultados} >
          {locais.map((loc, index) => {
            return (
              <View>
              <TouchableOpacity key={index}
              style={styles.locaisCard}
              onPress={ () => lidarPesquisa(loc)}
              >
                <MapPinIcon size={20} color={"blue"} /> 
                <Text style={styles.dadosCidade}>Maceió, Alagoas</Text>
                {index < locais.length - 1 && (
                <View style={styles.divider} />
                ///para adicionar uma linha entre os objetos do array que são exibidos
                )}
              </TouchableOpacity>
              </View>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#857ED7',
  },
  textInput: {
    flex: 1,
    height: 30,
    backgroundColor: '#9E97F0',
    borderRadius: 20,
    marginLeft: 10,
    paddingLeft: 5,
    color: 'white',
  },
  IconeBotao: {
    width: 50,
    height: 50,
    backgroundColor: '#9E97F0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#9E97F0',
    marginLeft: 10, /// margem do container com relação ao lado esquerdo da tela
    marginRight: 8,
    borderRadius: 20,
  },
  // locaisCard:{
  //   backgroundColor:'#9E97F0',
  //   gap:30,
  //   borderRadius:20,
  //   marginTop:20,
  //   marginLeft:20,
  //   marginRight:20,
  //   height:80
    
  // },
  dadosCidade:{
   marginTop:10,
   marginLeft:10,
   height:40
  },
  pesquisaResultados:{
    backgroundColor:'#9E97F0',
    borderRadius:15,
    marginTop:5,
    marginLeft:10,
    marginRight:10,
   
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: '#857ED7',
    marginTop: 5,
  }
});
