import { StyleSheet, View } from "react-native";

// Components
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <PostHeader user={post.user} profilePicture={post.profile_picture} />
      <PostImage image={post.imageUrl} />
      <PostFooter user={post.user} likes={post.likes} caption={post.caption} />
    </View>
  );
};

export default Post;
