import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'

import Header from '../components/home/Header'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0
  },
})

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

export default HomeScreen