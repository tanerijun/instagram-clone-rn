import { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { db } from "../firebase";
import { collectionGroup, onSnapshot } from "firebase/firestore";

import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Separator from "../components/home/Separator";
import Post from "../components/home/Post";
import BottomTabs from "../components/home/BottomTabs";

// Mockup data
import POSTS from "../data/posts";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = collectionGroup(db, "posts");
    onSnapshot(q, (snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories />
        <Separator />
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;
