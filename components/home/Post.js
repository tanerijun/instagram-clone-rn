import { StyleSheet, Text, View } from "react-native";

// Data
import POSTS from "../../data/posts";

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },

  text: {
    color: "#FFF",
  },
});

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>POST</Text>
    </View>
  );
};

export default Post;
