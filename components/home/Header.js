import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});

const Header = () => {
  return (
    <View>
      <Text style={styles.text}>Header!</Text>
    </View>
  );
};

export default Header;
