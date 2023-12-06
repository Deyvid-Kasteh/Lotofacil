import "react-native-gesture-handler";
// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <NavigationContainer>
//       <View style={styles.container}>
//         <Text>teste</Text>
//         <StatusBar style="auto" />
//       </View>
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


// import * as React from "react";
// import { Button, View, Text } from "react-native";
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
//   DrawerNavigationProp,
// } from "@react-navigation/drawer";
// import { NavigationContainer, RouteProp } from "@react-navigation/native";

// type RootDrawerParamList = {
//   Home: undefined;
//   Details: undefined;
// };

// type HomeScreenProps = {
//   navigation: DrawerNavigationProp<RootDrawerParamList, "Home">;
// };

// type DetailsScreenProps = {
//   navigation: DrawerNavigationProp<RootDrawerParamList, "Details">;
// };

// function HomeScreen({ navigation }: HomeScreenProps) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }: DetailsScreenProps) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Details Screen</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
//     </View>
//   );
// }

// function CustomDrawerContent(props: DrawerContentComponentProps) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }

// const Drawer = createDrawerNavigator<RootDrawerParamList>();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerContent={(props) => <CustomDrawerContent {...props} />}
//       >
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Details" component={DetailsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }



// Importando as bibliotecas necessárias
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

// Definindo telas para o Drawer
const TelaPrincipal = () => (
  <View>
    <Text>Tela Principal</Text>
  </View>
);

const TelaSecundaria = () => (
  <View>
    <Text>Tela Secundária</Text>
  </View>
);

// Componente personalizado para o conteúdo do Drawer
const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Sair" onPress={() => alert('Implemente a lógica de saída aqui!')} />
    </DrawerContentScrollView>
  );
};

// Criando o Drawer Navigator
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Principal" component={TelaPrincipal} />
        <Drawer.Screen name="Secundária" component={TelaSecundaria} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
