import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button, Modal } from "react-native";


const Jogo = ({ route, navigation }: { route: any; navigation: any }) => {
  return (
    <View>
      <Text>Jogo dncjkdfbvjr</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Jogo






import React from "react";
import { TouchableOpacity, Text } from "react-native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

const TelaInicial = ({ navigation }: { navigation: any }) => {
  const onPressHandler = () => {
    // Passar informações como segundo argumento
    navigation.navigate("TelaDaStack", {
      informacao: "Dados a serem passados",
    });
  };

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <Text>Pressione para abrir a Stack Navigator</Text>
    </TouchableOpacity>
  );
};

const TelaDaStack = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  // Receber as informações passadas
  const informacaoRecebida = route.params?.informacao || "Informação Padrão";

  return (
    <>
      <Text>{informacaoRecebida}</Text>
      {/* Adicionar um botão de retorno na barra de navegação */}
      <HeaderBackButton onPress={() => navigation.goBack()} />
    </>
  );
};

export { TelaInicial, TelaDaStack };
