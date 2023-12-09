import React from "react";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import * as Cores from "../assets/Cores";

import { Ionicons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import MaterialTopTabResultados from "./MaterialTopTabResultados";
import CriarJogoScreen from "../screens/CriarJogoScreen";
import MeusJogosScreen from "../screens/MeusJogosScreen";
import ConferirScreen from "../screens/ConferirScreen";

import MenuTeste from "../components/TestComponents";















type RootTabParamList = {
  Resultados: undefined;
  "Criar Jogo": undefined;
  "Meus Jogos": undefined;
  Conferir: undefined;
};

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};
const Tab = createBottomTabNavigator<RootTabParamList>();

const getIconName = (routeName: string, focused: boolean): string => {
  switch (routeName) {
    case "Resultados":
      return focused ? "ios-trophy" : "ios-trophy-outline";
    case "Criar Jogo":
      return focused ? "ios-create" : "ios-create-outline";
    case "Meus Jogos":
      return focused ? "ios-list" : "ios-list-outline";
    case "Conferir":
      return focused ? "ios-checkmark-circle" : "ios-checkmark-circle-outline";
    default:
      return "";
  }
};

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
          const iconName = getIconName(route.name, focused);

          return (
            <Ionicons
              name={iconName as keyof typeof Ionicons.glyphMap}
              size={size}
              color={color}
            />
          );
        },
        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: Cores.cor5,
        tabBarInactiveTintColor: Cores.cor4,
        tabBarStyle: {
          display: "flex",
          backgroundColor: Cores.cor1,
        },
        headerStyle: {
          backgroundColor: Cores.cor5,
          // height: 80,
        },
        headerTintColor: Cores.cor2, // Cor do texto no cabeçalho
        headerTitleStyle: {
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen
        name="Resultados"
        component={MaterialTopTabResultados}
        options={{ headerShown: true, headerTitleAlign: "center" }}
      />
      <Tab.Screen
        name="Criar Jogo"
        component={CriarJogoScreen}
        options={{ headerShown: true, headerTitleAlign: "center" }}
      />
      <Tab.Screen
        name="Meus Jogos"
        component={MeusJogosScreen}
        options={{ headerShown: true, headerTitleAlign: "center" }}
      />
      <Tab.Screen
        name="Conferir"
        component={ConferirScreen}
        options={{ headerShown: true, headerTitleAlign: "center" }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
