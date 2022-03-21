import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
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

const PostHeader = ({ user, profilePicture }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.userInfo}>
        <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        <Text style={[styles.text, styles.boldText]}>{user.toLowerCase()}</Text>
      </View>
      <Text style={[styles.text, styles.bigFont]}>⋮</Text>
    </View>
  );
};

export default PostHeader;
