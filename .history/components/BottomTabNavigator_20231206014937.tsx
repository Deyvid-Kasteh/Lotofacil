import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ResultadosScreen from "../screens/ResultadosScreen";
import CriarJogoScreen from "../screens/CriarJogoScreen";
import MeusJogosScreen from "../screens/MeusJogosScreen";
import ConferirScreen from "../screens/ConferirScreen";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
       WARN  Bottom Tab Navigator: 'tabBarOptions' is deprecated. Migrate the options to 'screenOptions' instead.

Place the following in 'screenOptions' in your code to keep current behavior:

{
  "tabBarActiveTintColor": "blue",
  "tabBarInactiveTintColor": "gray",
  "tabBarStyle": [
    {
      "display": "flex"
    },
    null
  ]
}
    >
      <Tab.Screen name="Resultados" component={ResultadosScreen} />
      <Tab.Screen name="Criar Jogo" component={CriarJogoScreen} />
      <Tab.Screen name="Meus Jogos" component={MeusJogosScreen} />
      <Tab.Screen name="Conferir" component={ConferirScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
