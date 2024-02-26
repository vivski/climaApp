import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function TelaPesquisa() {
  return (
    <View style={styles.container}>
      <Text> tela de pesquisa </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#857ED7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

