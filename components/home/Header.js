import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faSquarePlus,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import logo from "../../assets/instagram-header-white.png";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },

  iconsContainer: {
    flexDirection: "row",
  },

  icons: {
    color: "white",
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={logo} />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <FontAwesomeIcon icon={faSquarePlus} style={styles.icons} />
        <FontAwesomeIcon icon={faHeart} style={styles.icons} />
        <FontAwesomeIcon icon={faPaperPlane} style={styles.icons} />
      </View>
    </View>
  );
};
// <FontAwesomeIcon icon={faSquarePlus} />

export default Header;
