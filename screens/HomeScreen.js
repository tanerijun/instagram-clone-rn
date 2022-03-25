import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";

import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Separator from "../components/home/Separator";
import Post from "../components/home/Post";
import BottomTabs from "../components/home/BottomTabs";

// Data
import POSTS from "../data/posts";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories />
        <Separator />
        {POSTS.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
};

export default HomeScreen;
