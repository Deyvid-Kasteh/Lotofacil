import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerLotofacil from "./Drawer";
import Jogo from "../pages/Jogo";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Drawer"
          component={DrawerLotofacil}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Sorteio" component={Jogo} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
