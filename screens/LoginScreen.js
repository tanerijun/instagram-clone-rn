import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import Logo from "../components/login/Logo";
import LoginForm from "../components/login/LoginForm";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});

const LoginScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Logo />
    <LoginForm navigation={navigation} />
  </SafeAreaView>
);

export default LoginScreen;
