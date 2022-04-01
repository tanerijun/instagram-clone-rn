import { SafeAreaView, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import Logout from "../components/profile/Logout";
import BottomTabs from "../components/home/BottomTabs";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    justifyContent: "flex-end",
  },
});

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Logout />
      <BottomTabs navigation={navigation} initialIcon={"profile"} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
