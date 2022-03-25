import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";

export default function App() {
  return (
    <>
      {/* <HomeScreen /> */}
      <NewPostScreen />
      <StatusBar style="light" />
    </>
  );
}
