import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 15,
  },

  textContainer: {
    marginLeft: 20,
  },

  text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 24,
  },
});

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faXmark} size={32} color={"#FFF"} />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.text}>NEW POST</Text>
      </View>
    </View>
  );
};

export default Header;
