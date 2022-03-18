import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    marginHorizontal: 15,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  userInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  profilePicture: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 10,
  },

  text: {
    color: "#FFF",
  },

  boldText: {
    fontWeight: "bold",
  },

  bigFont: {
    fontSize: 24,
  },
});

const PostHeader = ({ post }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.userInfo}>
        <Image
          source={{ uri: post.profile_picture }}
          style={styles.profilePicture}
        />
        <Text style={[styles.text, styles.boldText]}>
          {post.user.toLowerCase()}
        </Text>
      </View>
      <Text style={[styles.text, styles.bigFont]}>⋮</Text>
    </View>
  );
};

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <PostHeader post={post} />
    </View>
  );
};

export default Post;
