import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { auth, db } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { getRandomProfilePicture } from "../../../helper";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  text: {
    color: "#FFF",
  },

  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 5,
    marginVertical: 5,
  },

  buttonContainer: {
    marginTop: 30,
    marginBottom: 50,
  },

  linkText: {
    color: "#6BB0F5",
  },

  signUpContainer: {
    alignItems: "center",
  },

  errorContainer: {
    borderColor: "red",
    borderWidth: 1,
  },
});

const emailValidationRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const usernameValidationRegex = /^[a-zA-Z].*/; // Username must start with an alphabet

const SignupForm = ({ navigation }) => {
  const onSignup = async (email, password, username) => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up, ", cred.user);

      // add user to database
      const colRef = collection(db, "users");
      await addDoc(colRef, {
        uid: cred.user.uid,
        username: username,
        email: cred.user.email,
        profile_picture: await getRandomProfilePicture(),
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  // React Hook Form
  const {
    handleSubmit,
    control,
    watch,
    formState: { isValid },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  // Used in onSubmit function
  // AsyncAlert will make it so that the function pause until the user press "OK" on the alert
  const AsyncAlert = (title, msg) =>
    new Promise((resolve) => {
      Alert.alert(
        title,
        msg,
        [
          {
            text: "ok",
            onPress: () => {
              resolve("YES");
            },
          },
        ],
        { cancelable: false }
      );
    });

  const onSubmit = async (data) => {
    onSignup(data.email, data.password, data.username);
    await AsyncAlert("Success!", "You are now registered");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email address required",
          validate: (value) =>
            emailValidationRegex.test(value) || "Invalid email",
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextInput
            style={[
              styles.text,
              styles.textInput,
              error ? styles.errorContainer : null,
            ]}
            placeholderTextColor={error ? "red" : "#A9A9A9"}
            placeholder={error ? error.message : "Email address"}
            keyboardType={"email-address"}
            textContentType={"emailAddress"}
            autoCapitalize={"none"}
            autoFocus={true}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />

      <Controller
        name="username"
        control={control}
        rules={{
          required: "Username must be at least 8 characters",
          minLength: {
            value: 3,
            message: "Username must be at least 8 characters",
          },
          validate: (value) =>
            usernameValidationRegex.test(value) ||
            "Username must start with an alphabet",
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              style={[
                styles.text,
                styles.textInput,
                error ? styles.errorContainer : null,
              ]}
              placeholderTextColor={error ? "red" : "#A9A9A9"}
              placeholder={error ? error.message : "Username"}
              textContentType={"username"}
              autoCapitalize={"none"}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          </>
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              style={[
                styles.text,
                styles.textInput,
                error ? styles.errorContainer : null,
              ]}
              placeholderTextColor={error ? "red" : "#A9A9A9"}
              placeholder={error ? error.message : "Password"}
              textContentType={"password"}
              secureTextEntry={true}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          </>
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        rules={{
          required: "Password doesn't match",
          validate: (value) => value === watch("password"),
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              style={[
                styles.text,
                styles.textInput,
                error ? styles.errorContainer : null,
              ]}
              placeholderTextColor={error ? "red" : "#A9A9A9"}
              placeholder={error ? error.message : "Confirm password"}
              textContentType={"password"}
              secureTextEntry={true}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          </>
        )}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Sign Up"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        />
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.text}>
          Already have an account?{" "}
          <Text style={styles.linkText} onPress={() => navigation.goBack()}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignupForm;
