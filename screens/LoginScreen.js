import { Image, StyleSheet, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";
import Logo from "../components/login/Logo";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});

const LoginScreen = () => (
  <SafeAreaView style={styles.container}>
    <Logo />
  </SafeAreaView>
);

export default LoginScreen;
