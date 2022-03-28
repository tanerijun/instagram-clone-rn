import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Separator from "../../home/Separator";

import placeholderImage from "../../../assets/icon.png";

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    marginRight: 20,
    borderRadius: 5,
  },

  text: {
    color: "#FFF",
  },

  textInput: {
    padding: 5,
  },

  captionTextInput: {
    height: 80,
  },

  parentContainer: {
    marginHorizontal: 10,
  },

  captionWithImageContainer: {
    flexDirection: "row",
    maxHeight: 100,
    marginTop: 10,
    marginBottom: 15,
  },

  captionContainer: {
    flex: 1,
  },

  captionInput: {
    flex: 1,
  },

  urlContainer: {
    marginHorizontal: 5,
  },

  errorContainer: {
    borderColor: "red",
    borderWidth: 1,
  },

  errorMessage: {
    color: "red",
    marginBottom: 10,
  },
});

const urlValidationRegex = /^(ftp|http|https):\/\/[^ "]+$/;

const PostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Form submitted");
    navigation.goBack();
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.captionWithImageContainer}>
        <Image
          style={styles.image}
          source={thumbnailUrl ? { uri: thumbnailUrl } : placeholderImage}
        />
        <Controller
          name="caption"
          control={control}
          rules={{
            required: "Caption required",
            maxLength: {
              value: 2200,
              message: "Maximum character limit reached",
            },
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <View style={styles.captionContainer}>
              <TextInput
                style={[
                  styles.text,
                  styles.textInput,
                  styles.captionTextInput,
                  error ? styles.errorContainer : null,
                ]}
                placeholder="Write a caption"
                placeholderTextColor={"#A9A9A9"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline
              />
              {error && (
                <Text style={styles.errorMessage}>{error.message}</Text>
              )}
            </View>
          )}
        />
      </View>

      <Separator />

      <Controller
        name="imageUrl"
        control={control}
        rules={{
          required: "Image URL required",
          validate: (value) => urlValidationRegex.test(value) || "Invalid URL",
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View>
            <TextInput
              style={[
                styles.text,
                styles.textInput,
                error ? styles.errorContainer : null,
              ]}
              placeholder="Enter image url ..."
              placeholderTextColor={"#A9A9A9"}
              onBlur={onBlur}
              onChangeText={onChange}
              onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
              value={value}
            />
            {error && <Text style={styles.errorMessage}>{error.message}</Text>}
          </View>
        )}
      />

      <Button
        title="POST"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
    </View>
  );
};

export default PostUploader;
