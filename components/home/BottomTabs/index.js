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
    marginHorizontal: 35,
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

const BottomTabs = () => {
  const [active, setActive] = useState(faHouse);

  const icons = [faHouse, faMagnifyingGlass, faSquarePlus, faStore, faUser];

  return (
    <>
      <Separator />
      <View style={styles.iconsContainer}>
        {icons.map((icon, index) => (
          <TouchableOpacity
            onPress={() => {
              setActive(icon);
            }}
          >
            <Icon key={index} icon={icon} active={active} />
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default BottomTabs;
