import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: "#282828",
    marginBottom: 15,
  },
});

const Separator = () => {
  return <View style={styles.container}></View>;
};

export default Separator;
