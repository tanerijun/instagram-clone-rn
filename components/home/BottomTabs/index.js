import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Separator from "../Separator";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  faHouse,
  faSquarePlus,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
  iconsContainer: {
    marginHorizontal: 25,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  icon: {
    color: "#FFF",
  },

  underline: {
    marginTop: 1,
    height: 2,
    backgroundColor: "#FFF",
  },
});

const ICON_SIZE = 22;

const Icon = ({ icon, active }) => (
  <View>
    <FontAwesomeIcon icon={icon} size={ICON_SIZE} style={styles.icon} />

    {/* underline the icon when it's active */}
    {active === icon ? <View style={styles.underline}></View> : null}
  </View>
);

const BottomTabs = ({ navigation }) => {
  const [active, setActive] = useState(faHouse);

  const icons = [faHouse, faMagnifyingGlass, faSquarePlus, faStore, faUser];

  return (
    <>
      <Separator />
      <View style={styles.iconsContainer}>
        {/* Home */}
        <TouchableOpacity
          onPress={() => {
            setActive(icons[0]);
          }}
        >
          <Icon icon={icons[0]} active={active} />
        </TouchableOpacity>
        {/* Search */}
        <TouchableOpacity
          onPress={() => {
            setActive(icons[1]);
          }}
        >
          <Icon icon={icons[1]} active={active} />
        </TouchableOpacity>
        {/* Post */}
        <TouchableOpacity
          onPress={() => {
            setActive(icons[2]);
            navigation.push("NewPostScreen");
          }}
        >
          <Icon icon={icons[2]} active={active} />
        </TouchableOpacity>
        {/* Store */}
        <TouchableOpacity
          onPress={() => {
            setActive(icons[3]);
          }}
        >
          <Icon icon={icons[3]} active={active} />
        </TouchableOpacity>
        {/* Profile */}
        <TouchableOpacity
          onPress={() => {
            setActive(icons[4]);
          }}
        >
          <Icon icon={icons[4]} active={active} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BottomTabs;
