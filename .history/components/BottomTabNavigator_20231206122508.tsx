


import React from "react";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";

import ResultadosScreen from "../screens/ResultadosScreen";
import CriarJogoScreen from "../screens/CriarJogoScreen";
import MeusJogosScreen from "../screens/MeusJogosScreen";
import ConferirScreen from "../screens/ConferirScreen";

// Definição dos tipos para as rotas da barra de navegação
type RootTabParamList = {
  Resultados: undefined;
  "Criar Jogo": undefined;
  "Meus Jogos": undefined;
  Conferir: undefined;
};

// Props para o ícone na barra de navegação
type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

// Cria uma instância do BottomTabNavigator com tipos definidos
const Tab = createBottomTabNavigator<RootTabParamList>();

// Componente BottomTabNavigator em TypeScript
const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      // screenOptions={({ route }): BottomTabNavigationOptions => ({
      //   // Configuração dos ícones na barra de navegação
      //   tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
      //     let iconName;

      //     // Define o ícone com base no nome da rota
      //     if (route.name === "Resultados") {
      //       iconName = focused ? "ios-trophy" : "ios-trophy-outline";
      //     } else if (route.name === "Criar Jogo") {
      //       iconName = focused ? "ios-create" : "ios-create-outline";
      //     } else if (route.name === "Meus Jogos") {
      //       iconName = focused ? "ios-list" : "ios-list-outline";
      //     } else if (route.name === "Conferir") {
      //       iconName = focused
      //         ? "ios-checkmark-circle"
      //         : "ios-checkmark-circle-outline";
      //     }

      //     // Renderiza o ícone correspondente
      //     return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      //   tabBarLabelPosition: "beside-icon",
      //   tabBarActiveTintColor: "blue",
      //   tabBarInactiveTintColor: "gray",
      //   tabBarStyle: {
      //     display: "flex",
      //   },
      // })}
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
          let iconName: string | undefined;

          if (route.name === "Resultados") {
            iconName = focused ? "ios-trophy" : "ios-trophy-outline";
          } else if (route.name === "Criar Jogo") {
            iconName = focused ? "ios-create" : "ios-create-outline";
          } else if (route.name === "Meus Jogos") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "Conferir") {
            iconName = focused
              ? "ios-checkmark-circle"
              : "ios-checkmark-circle-outline";
          }

          // Garantir que iconName não é undefined antes de usá-lo
          if (iconName) {
            return <Ionicons name={iconName} size={size} color={color} />;
          }

          // Caso iconName seja undefined, pode retornar null ou outro componente desejado
          return null;
        },
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          display: "flex",
        },
      })}
    >
      {/* Abas da barra de navegação */}
      <Tab.Screen
        name="Resultados"
        component={ResultadosScreen}
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
