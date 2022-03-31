import { StatusBar } from "expo-status-bar";

import SignedInStack from "./navigation";

// Suppress Async storage warning (imported by Expo)
import { LogBox } from "react-native";
LogBox.ignoreLogs([
  /^Warning: Async Storage has been extracted from react-native core/,
]);

export default function App() {
  return (
    <>
      <SignedInStack />
      <StatusBar style="light" />
    </>
  );
}
