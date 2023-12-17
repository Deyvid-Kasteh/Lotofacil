import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import * as Cores from "../assets/Cores";
import Card from '../components/Card';
import { Ionicons } from "@expo/vector-icons";



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
      <Card
        sorteio={informacaoRecebida.concurso}
        numeros={informacaoRecebida.Dezenas}
        data={informacaoRecebida["Data Sorteio"]}
        locais={informacaoRecebida["Cidade / UF"]}
        ganhadores15={informacaoRecebida["Ganhadores 15 acertos"]}
        ganhadores14={informacaoRecebida["Ganhadores 14 Acertos"]}
        ganhadores13={informacaoRecebida["Ganhadores 13 Acertos"]}
        ganhadores12={informacaoRecebida["Ganhadores 12 Acertos"]}
        ganhadores11={informacaoRecebida["Ganhadores 11 Acertos"]}
        premio15={informacaoRecebida["Premio 15 Acertos"]}
        premio14={informacaoRecebida["Premio 14 Acertos"]}
        premio13={informacaoRecebida["Premio 13 Acertos"]}
        premio12={informacaoRecebida["Premio 12 Acertos"]}
        premio11={informacaoRecebida["Premio 11 Acertos"]}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <></>
      <Ionicons name="arrow-back-circle" size={24} color="black" />
    </View>
  );
};

export default Jogo