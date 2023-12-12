import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Jogo from "../pages/Jogo";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ presentation: "modal" }}>
      <>
        {" "}
        <Stack.Screen name="Jogo" component={Jogo} />
        <Stack.Screen name="Jogo" component={Jogo} />
      </>
    </Stack.Navigator>
  );
};

export default StackNavigator;
