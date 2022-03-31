import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

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
    marginBottom: 50,
  },

  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginBottom: 30,
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

const LoginForm = ({ navigation }) => {
  const onLogin = async (email, password) => {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in, ", cred.user);
    } catch (error) {
      Alert.alert("Error", "Invalid email or password");
    }
  };

  // React Hook Form
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  const onSubmit = (data) => {
    onLogin(data.email, data.password);
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

      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.linkText}>Forgot password?</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Log In"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        />
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.text}>
          Don't have an account?{" "}
          <Text
            style={styles.linkText}
            onPress={() => navigation.push("SignupScreen")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginForm;
