import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import * as Cores from "../assets/Cores";
import Card from '../components/Card';

import { View, Text, Button } from "react-native";


const Jogo = ({ route, navigation }: { route: any; navigation: any }) => {
    // Receber as informações passadas
    const informacaoRecebida = route.params?.informacao || "Informação Padrão";
        console.log("Dentro do Modal");
    console.log(informacaoRecebida);
        console.log("Dentro do Modal");



  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: Cores.cor3,
      }}
    >
      <Text>Jogo dncjkdfbvjr</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Jogo