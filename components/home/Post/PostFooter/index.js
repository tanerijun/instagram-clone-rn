import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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

  grayText: {
    fontSize: 14,
    color: "#A9A9A9",
  },

  viewCommentsContainer: {
    marginTop: 5,
  },

  commentContainer: {
    marginTop: 5,
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

  // check how many newlines are there inside a string
  const checkNewline = (s) =>
    s.match(/\n/g) ? caption.match(/\n/g).length : 0;

  return (
    <View style={styles.captionContainer}>
      <Text>
        <Text style={[styles.text, styles.boldText]}>
          {user?.toLowerCase() + " "}
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
            <Text style={styles.grayText} onPress={() => setMore(!more)}>
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

const ViewComments = ({ comments }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <View style={styles.viewCommentsContainer}>
      {comments?.length > 0 ? (
        <Text style={styles.grayText} onPress={() => setShowComments(true)}>
          View {comments.length > 1 ? "all" : ""} {comments.length + " "}
          {comments.length > 1 ? "comments" : "comment"}
        </Text>
      ) : null}

      {/* show comments when ViewComments is pressed */}
      {showComments && <Comments comments={comments} />}
    </View>
  );
};

const Comments = ({ comments }) => (
  <>
    {comments.map((comment, index) => (
      <View key={index} style={styles.commentContainer}>
        <Text style={styles.text}>
          <Text style={styles.boldText}>{comment.user}</Text> {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const PostFooter = ({ post }) => {
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
      <Likes likes={post.likes} />
      <Caption user={post.user} caption={post.caption} />
      <ViewComments comments={post.comments} />
    </View>
  );
};

export default PostFooter;
