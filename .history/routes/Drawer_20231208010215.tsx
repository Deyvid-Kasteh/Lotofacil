import "react-native-gesture-handler";
import { View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import BottomTabNavigator from "../components/BottomTabNavigator";


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
