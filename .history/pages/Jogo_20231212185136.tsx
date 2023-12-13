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
      <Card
        sorteio={informacaoRecebida.concurso}
        numeros={informacaoRecebida.Dezenas}
        data={informacaoRecebida["Data Sorteio"]}
        locais={informacaoRecebida["Cidade / UF"]}
        ganhadores15={informacaoRecebida["Ganhadores 15 acertos"]}
        ganhadores14={informacaoRecebida["Ganhadores 14 Acertos"]}
        ganhadores13={informacaoRecebida["Ganhadores 13 Acertos"]}
        ganhadores12={lotofacilLatest["Ganhadores 12 Acertos"]}
        ganhadores11={lotofacilLatest["Ganhadores 11 Acertos"]}
        premio15={lotofacilLatest["Premio 15 Acertos"]}
        premio14={lotofacilLatest["Premio 14 Acertos"]}
        premio13={lotofacilLatest["Premio 13 Acertos"]}
        premio12={lotofacilLatest["Premio 12 Acertos"]}
        premio11={lotofacilLatest["Premio 11 Acertos"]}
      />
      <Text>Jogo dncjkdfbvjr</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Jogo