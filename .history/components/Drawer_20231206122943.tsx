

import "react-native-gesture-handler";
import { View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";

// Componente para a tela de Feed
function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

// Componente para a tela de Article
function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}

// Definição do tipo para as rotas do Drawer
type RootDrawerParamList = {
  Home: undefined;
  Article: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

// Componente DrawerLotofacil
function DrawerLotofacil() {
  return (
    <Drawer.Navigator
      screenOptions={(): DrawerNavigationOptions => ({
        // Configurações de estilo para as telas do Drawer
        // headerShown: false,
      })}
    >
      {/* Tela principal com o BottomTabNavigator */}
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
      />
      {/* Tela de Article */}
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default DrawerLotofacil;





// import "react-native-gesture-handler";

// import { View, Text } from "react-native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import BottomTabNavigator from "./BottomTabNavigator";

// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Feed Screen</Text>
//     </View>
//   );
// }
// function Article() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Article Screen</Text>
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// function DrawerLotofacil() {
//   return (
//     <Drawer.Navigator
//       screenOptions={
//         {
//           // headerShown: false,
//         }
//       }
//     >
//       <Drawer.Screen
//         name="Home"
//         component={BottomTabNavigator}
//         options={{
//           headerShown: false,
//           headerTitleAlign: "center",
//         }}
//       />
//       <Drawer.Screen name="Article" component={Article} />
//       <Drawer.Screen name="Feed" component={Feed} />
//     </Drawer.Navigator>
//   );
// }

// export default DrawerLotofacil;

