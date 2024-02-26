import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function TelaInicio() {
  return (
    <View style={styles.container}>
      <Text> App de clima! </Text>
      <Text> App de clima! </Text>
      <Text> App de clima! </Text>
      <Text> App de clima! </Text>
      <Text> App de clima! </Text>

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

