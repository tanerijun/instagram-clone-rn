import { StatusBar } from "expo-status-bar";

import AuthNavigation from "./components/AuthNavigation";

// Suppress Async storage warning (imported by Expo)
import { LogBox } from "react-native";
LogBox.ignoreLogs([/^AsyncStorage has been extracted from react-native core/]);

export default function App() {
  return (
    <>
      <AuthNavigation />
      <StatusBar style="light" />
    </>
  );
}
