import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Data
import USERS from "../../data/users";

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: 8,
  },

  storyContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  storyOuter: {
    height: 74,
    width: 74,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginHorizontal: 7,
  },

  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#000",
  },

  text: {
    color: "#FFF",
    fontSize: 12,
  },
});

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story) => (
          <View key={story.id} style={styles.storyContainer}>
            <LinearGradient
              colors={["#EBB010", "#F2703F", "#CA1D7E"]}
              start={{ x: 0.0, y: 0.8 }}
              end={{ x: 0.8, y: 0.1 }}
              style={styles.storyOuter}
            >
              <Image source={{ uri: story.image }} style={styles.story} />
            </LinearGradient>
            <Text style={styles.text}>
              {story.user.length > 12
                ? story.user.slice(0, 11).toLowerCase() + "..."
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;
