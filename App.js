import { SafeAreaView, Text, StyleSheet, Platform, StatusBar } from 'react-native';

import Home from './src/telas/Home';

export default function App() {
  return (
    <SafeAreaView style={estilos.AndroidSafeArea}>
      <Home />
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
