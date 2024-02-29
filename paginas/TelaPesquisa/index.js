import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

export default function TelaPesquisa() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Pesquisar cidade'
            style={styles.textInput}
          />
            <TouchableOpacity style={styles.IconeBotao}>
            <MagnifyingGlassIcon size={25} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
    height: 30, // ajuste conforme necessário
    backgroundColor: "#9E97F0",
    borderRadius: 20,
    marginLeft: 10,
    // marginRight: 1,
    paddingLeft: 5, // para ajustar o texto dentro do TextInput
    color: 'white',
  },
  IconeBotao: {
    width: 50, 
    height: 50, 
    backgroundColor: "#9E97F0",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: "#9E97F0",
    marginleft: 50,
    marginRight:8,
    borderRadius:20
  },
});
