import { View, Image, StyleSheet } from "react-native";

// Assets
import logo from "../../../assets/instagramLogo.png";

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    margin: 50,
  },

  logo: {
    width: 150,
    height: 150,
  },
});

const Logo = () => (
  <View style={styles.logoContainer}>
    <Image source={logo} style={styles.logo} />
  </View>
);

export default Logo;
