import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
  icon: {
    color: "#FFF",
    marginRight: 25,
  },

  container: {
    marginHorizontal: 15,
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  leftIconContainer: {
    flexDirection: "row",
  },

  rightIconContainer: {
    marginRight: -25, // deny the margin of size 25 set by styles.icon
  },

  likesContainer: {
    marginTop: 10,
  },

  captionContainer: {
    flexDirection: "row",
  },

  text: {
    color: "#FFF",
  },

  boldText: {
    fontWeight: "bold",
  },

  moreButton: {
    fontSize: 14,
    color: "#A9A9A9",
  },
});

const ICON_SIZE = 22;

const Icon = ({ source }) => (
  <TouchableOpacity>
    <FontAwesomeIcon icon={source} size={ICON_SIZE} style={styles.icon} />
  </TouchableOpacity>
);

const Likes = ({ likes }) => (
  <View style={styles.likesContainer}>
    <Text style={[styles.text, styles.boldText]}>{likes} likes</Text>
  </View>
);

const Caption = ({ user, caption }) => {
  const [more, setMore] = useState(false);

  const checkNewline = (s) =>
    s.match(/\n/g) ? caption.match(/\n/g).length : 0;

  return (
    <View style={styles.captionContainer}>
      <Text>
        <Text style={[styles.text, styles.boldText]}>
          {user.toLowerCase() + " "}
        </Text>

        {/* render part of the caption with a button to read more if the caption is too long
            or if there are more than 2 newlines in the caption 
        */}

        {(caption.length > 50 || checkNewline(caption) > 2) && !more ? (
          <>
            <Text style={styles.text}>
              {checkNewline(caption) > 2
                ? caption.slice(0, caption.indexOf("\n", 2))
                : caption.slice(0, 50)}
            </Text>
            <Text style={styles.moreButton} onPress={() => setMore(!more)}>
              ... more
            </Text>
          </>
        ) : (
          <Text style={styles.text}>{caption}</Text>
        )}
      </Text>
    </View>
  );
};

const PostFooter = ({ user, likes, caption }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.leftIconContainer}>
          <Icon source={faHeart} />
          <Icon source={faComment} />
          <Icon source={faPaperPlane} />
        </View>
        <View style={styles.rightIconContainer}>
          <Icon source={faBookmark} />
        </View>
      </View>
      <Likes likes={likes} />
      <Caption user={user} caption={caption} />
    </View>
  );
};

export default PostFooter;
