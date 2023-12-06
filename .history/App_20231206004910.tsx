// import "react-native-gesture-handler";
// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import DrawerLotofacil from "./components/Drawer";

// export default function App() {
//   return (
//     <NavigationContainer>
//       <DrawerLotofacil />
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });




import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TelaPrincipal = () => (
  <View>
    <Text>Tela Principal</Text>
  </View>
);

const TelaSecundaria = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Tela Secundária</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        onPress={() => alert("Implemente a lógica de saída aqui!")}
      />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Principal" component={TelaPrincipal} />
        <Drawer.Screen name="Secundária" component={TelaSecundaria} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Fu App;
