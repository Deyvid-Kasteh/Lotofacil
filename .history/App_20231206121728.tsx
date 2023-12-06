import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
import DrawerLotofacil from "./components/Drawer";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerLotofacil />
    </NavigationContainer>
  );
}