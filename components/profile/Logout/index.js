import { Button, View } from "react-native";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";

const handleSignout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.log(error.message);
  }
};

const Logout = () => {
  return (
    <View>
      <Button title="Log Out" onPress={handleSignout} />
    </View>
  );
};

export default Logout;
