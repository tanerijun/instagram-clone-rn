import { Image, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: 350,
  },
});

const PostImage = ({ image }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};

export default PostImage;
