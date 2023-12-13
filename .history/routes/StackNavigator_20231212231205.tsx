import React from "react";
import * as Cores from "../assets/Cores";

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
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerStyle: { backgroundColor: Cores.cor5 },
        }}
      >
        <Stack.Screen
          name="Sorteio"
          component={Jogo}
          options={{ headerShown: true, headerTitleAlign: "center" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
