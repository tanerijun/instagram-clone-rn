import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import Logo from "../components/signup/Logo";
import SignupForm from "../components/signup/SignupForm";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});

const SignupScreen = () => (
  <SafeAreaView style={styles.container}>
    <Logo />
    <SignupForm />
  </SafeAreaView>
);

export default SignupScreen;
