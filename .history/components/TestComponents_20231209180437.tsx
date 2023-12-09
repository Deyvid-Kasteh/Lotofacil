import React, { useState } from "react";
import * as Cores from "../assets/Cores";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, View, Text, StyleSheet } from 'react-native';

interface Jogo {
  concurso: number;
  dataSorteio: string;
  dezenas: number[];
  ganhadores15Acertos: number;
  cidadeUF?: string; // Pode ser undefined, então tornamos opcional
  premio15Acertos: string;
  ganhadores14Acertos: number;
  premio14Acertos: string;
  ganhadores13Acertos: number;
  premio13Acertos: string;
  ganhadores12Acertos: number;
  premio12Acertos: string;
  ganhadores11Acertos: number;
  premio11Acertos: string;
}



const MenuTeste: React.FC = () => {
  const arrayJogos: Jogo[] = [
    {
      concurso: 2967,
      "Data Sorteio": "30/11/2023",
      Dezenas: [1, 2, 3, 4, 6, 7, 8, 9, 14, 17, 18, 19, 20, 22, 25],
      "Ganhadores 15 acertos": 1,
      "Cidade / UF": "CANAL ELETRONICO",
      "Premio 15 Acertos": "R$1.476.157,40",
      "Ganhadores 14 Acertos": 171,
      "Premio 14 Acertos": "R$1.810,04",
      "Ganhadores 13 Acertos": 6660,
      "Premio 13 Acertos": "R$30,00",
      "Ganhadores 12 Acertos": 86871,
      "Premio 12 Acertos": "R$12,00",
      "Ganhadores 11 Acertos": 499368,
      "Premio 11 Acertos": "R$6,00",
    },
    // Adicione mais jogos conforme necessário
  ];

  const renderItem = ({ item }: { item: Jogo }) => (
    <JogoComponente jogo={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={arrayJogos}
        renderItem={renderItem}
        keyExtractor={(item) => item.concurso.toString()}
      />
    </View>
  );
};

interface JogoComponenteProps {
  jogo: Jogo;
}

const JogoComponente: React.FC<JogoComponenteProps> = ({ jogo }) => (
  <View style={styles.item}>
    <Text>{`Concurso: ${jogo.concurso}`}</Text>
    <Text>{`Data Sorteio: ${jogo.dataSorteio}`}</Text>
    <Text>{`Dezenas: ${jogo.Dezenas.join(", ")}`}</Text>
    {/* Adicione mais informações conforme necessário */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});


export default MenuTeste;
