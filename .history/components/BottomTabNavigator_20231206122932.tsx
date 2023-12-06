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
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          display: "flex",
        },
      })}
    >
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






















// import React from "react";
// import {
//   createBottomTabNavigator,
//   BottomTabNavigationOptions,
// } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";
// import { RouteProp } from "@react-navigation/native";

// import ResultadosScreen from "../screens/ResultadosScreen";
// import CriarJogoScreen from "../screens/CriarJogoScreen";
// import MeusJogosScreen from "../screens/MeusJogosScreen";
// import ConferirScreen from "../screens/ConferirScreen";

// // Definição dos tipos para as rotas da barra de navegação
// type RootTabParamList = {
//   Resultados: undefined;
//   "Criar Jogo": undefined;
//   "Meus Jogos": undefined;
//   Conferir: undefined;
// };

// // Props para o ícone na barra de navegação
// type TabBarIconProps = {
//   focused: boolean;
//   color: string;
//   size: number;
// };

// // Cria uma instância do BottomTabNavigator com tipos definidos
// const Tab = createBottomTabNavigator<RootTabParamList>();

// // Componente BottomTabNavigator em TypeScript
// const BottomTabNavigator: React.FC = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }): BottomTabNavigationOptions => ({
//         tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
//           let iconName: string | undefined;

//           if (route.name === "Resultados") {
//             iconName = focused ? "ios-trophy" : "ios-trophy-outline";
//           } else if (route.name === "Criar Jogo") {
//             iconName = focused ? "ios-create" : "ios-create-outline";
//           } else if (route.name === "Meus Jogos") {
//             iconName = focused ? "ios-list" : "ios-list-outline";
//           } else if (route.name === "Conferir") {
//             iconName = focused
//               ? "ios-checkmark-circle"
//               : "ios-checkmark-circle-outline";
//           }

//           // Garantir que iconName não é undefined antes de usá-lo
//           if (iconName) {
//             return <Ionicons name={iconName} size={size} color={color} />;
//           }

//           // Caso iconName seja undefined, pode retornar null ou outro componente desejado
//           return null;
//         },
//         tabBarLabelPosition: "beside-icon",
//         tabBarActiveTintColor: "blue",
//         tabBarInactiveTintColor: "gray",
//         tabBarStyle: {
//           display: "flex",
//         },
//       })}
//     >
//       {/* Abas da barra de navegação */}
//       <Tab.Screen
//         name="Resultados"
//         component={ResultadosScreen}
//         options={{ headerShown: true, headerTitleAlign: "center" }}
//       />
//       <Tab.Screen
//         name="Criar Jogo"
//         component={CriarJogoScreen}
//         options={{ headerShown: true, headerTitleAlign: "center" }}
//       />
//       <Tab.Screen
//         name="Meus Jogos"
//         component={MeusJogosScreen}
//         options={{ headerShown: true, headerTitleAlign: "center" }}
//       />
//       <Tab.Screen
//         name="Conferir"
//         component={ConferirScreen}
//         options={{ headerShown: true, headerTitleAlign: "center" }}
//       />
//     </Tab.Navigator>
//   );
// };
// export default BottomTabNavigator;

