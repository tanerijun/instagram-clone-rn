import { StatusBar } from "expo-status-bar";

import SignedInStack from "./navigation";

export default function App() {
  return (
    <>
      <SignedInStack />
      <StatusBar style="light" />
    </>
  );
}
