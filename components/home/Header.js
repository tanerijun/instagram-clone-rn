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
    marginHorizontal: 15,
  },

  iconsContainer: {
    flexDirection: "row",
  },

  icons: {
    color: "white",
    marginLeft: 20,
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },

  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 32,
    bottom: 16,
    width: 14,
    height: 14,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  unreadCount: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "bold",
  },
});

const ICON_SIZE = 22;

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={logo} />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <FontAwesomeIcon
            icon={faSquarePlus}
            size={ICON_SIZE}
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon
            icon={faHeart}
            size={ICON_SIZE}
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon
            icon={faPaperPlane}
            size={ICON_SIZE}
            style={styles.icons}
          />
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadCount}>11</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
