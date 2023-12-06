// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";

// import ResultadosScreen from "../screens/ResultadosScreen";
// import CriarJogoScreen from "../screens/CriarJogoScreen";
// import MeusJogosScreen from "../screens/MeusJogosScreen";
// import ConferirScreen from "../screens/ConferirScreen";

// const Tab = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

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

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarLabelPosition: "beside-icon",
//         tabBarActiveTintColor: "blue",
//         tabBarInactiveTintColor: "gray",
//         tabBarStyle: {
//           display: "flex",
//         },
//       })}
//     >
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
