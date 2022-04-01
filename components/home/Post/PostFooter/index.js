import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

import { db, auth } from "../../../../firebase";
import {
  collection,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

import { useForm, Controller } from "react-hook-form";

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

  createCommentContainer: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#323232",
    padding: 3,
  },
});

const ICON_SIZE = 22;

const Icon = ({ source, onPress = null }) => (
  <TouchableOpacity onPress={onPress}>
    <FontAwesomeIcon
      icon={source}
      size={ICON_SIZE}
      style={styles.icon}
      color={source == fasHeart ? "#FF3250" : "#FFF"}
    />
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

const CreateComments = () => {
  // React Hook Form
  const { handleSubmit, control } = useForm();

  return (
    <View style={styles.createCommentContainer}>
      <Controller
        name="comment"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.text}
            placeholderTextColor={"#A9A9A9"}
            placeholder={"Write a comment..."}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
    </View>
  );
};

const PostFooter = ({ post }) => {
  const [liked, setLiked] = useState(
    post.likes_by_users.includes(auth.currentUser.email)
  );

  const handleLike = async () => {
    try {
      const currentLikeStatus = !post.likes_by_users.includes(
        auth.currentUser.email
      );

      // example path: projects/instagram-clone-rn-7aac5/databases/(default)/documents/users/dummy7@gmail.com/posts/HFvGC16rShu8h1Y5Hq2D
      const colRef = collection(db, "users");
      const docRef = doc(colRef, post.email);
      const colRef2 = collection(docRef, "posts");
      const docRef2 = doc(colRef2, post.id);

      await updateDoc(docRef2, {
        likes_by_users: currentLikeStatus
          ? arrayUnion(auth.currentUser.email)
          : arrayRemove(auth.currentUser.email),
      });

      setLiked(currentLikeStatus);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.leftIconContainer}>
          {/* change icon based on like status */}
          <Icon source={liked ? fasHeart : faHeart} onPress={handleLike} />
          <Icon source={faComment} />
          <Icon source={faPaperPlane} />
        </View>
        <View style={styles.rightIconContainer}>
          <Icon source={faBookmark} />
        </View>
      </View>
      <Likes likes={post.likes_by_users.length} />
      <Caption user={post.user} caption={post.caption} />
      <ViewComments comments={post.comments} />
      <CreateComments />
    </View>
  );
};

export default PostFooter;
