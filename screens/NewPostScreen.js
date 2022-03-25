import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

import Header from "../components/newPost/Header";
import PostUploader from "../components/newPost/PostUploader";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <PostUploader />
    </SafeAreaView>
  );
};

export default NewPostScreen;
