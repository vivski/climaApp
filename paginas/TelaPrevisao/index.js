import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function TelaPrevisao() {
  return (
    <View style={styles.container}>
      <Text> tela de previsão dos proximos 10 dias </Text>
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

