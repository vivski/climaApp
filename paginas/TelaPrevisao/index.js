import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function TelaPrevisao() {
  return (
    <View style={styles.container}>
      <View style={styles.previsaoDias}>
      <Text> tela de previsão dos proximos 10 dias </Text>
      </View>
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
  previsaoDias:{
    backgroundColor:'#9E97F0',

  }
});

