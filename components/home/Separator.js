import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: "#181818",
  },
});

const Separator = () => {
  return <View style={styles.container}></View>;
};

export default Separator;
