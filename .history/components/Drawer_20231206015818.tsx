import "react-native-gesture-handler";

import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
    </View>
  );
}
function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function DrawerLotofacil() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        headerShown: false, // Isso remove o cabeçalho do <link>Drawer Navigator</link>
          }}
          screenListeners={header}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default DrawerLotofacil