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
    {
      concurso: 2968,
      "Data Sorteio": "01/12/2023",
      Dezenas: [2, 4, 5, 6, 7, 9, 10, 13, 14, 15, 18, 19, 20, 21, 23],
      "Ganhadores 15 acertos": 2,
      "Cidade / UF": "GOIANIA/GO; ARMAZEM/SC",
      "Premio 15 Acertos": "R$754.666,63",
      "Ganhadores 14 Acertos": 285,
      "Premio 14 Acertos": "R$1.586,33",
      "Ganhadores 13 Acertos": 9477,
      "Premio 13 Acertos": "R$30,00",
      "Ganhadores 12 Acertos": 113095,
      "Premio 12 Acertos": "R$12,00",
      "Ganhadores 11 Acertos": 587971,
      "Premio 11 Acertos": "R$6,00",
    },
    {
      concurso: 2969,
      "Data Sorteio": "02/12/2023",
      Dezenas: [3, 4, 5, 6, 9, 11, 13, 17, 18, 19, 20, 21, 22, 23, 24],
      "Ganhadores 15 acertos": 0,
      "Premio 15 Acertos": "R$0,00",
      "Ganhadores 14 Acertos": 195,
      "Premio 14 Acertos": "R$1.621,61",
      "Ganhadores 13 Acertos": 7115,
      "Premio 13 Acertos": "R$30,00",
      "Ganhadores 12 Acertos": 100454,
      "Premio 12 Acertos": "R$12,00",
      "Ganhadores 11 Acertos": 571920,
      "Premio 11 Acertos": "R$6,00",
    },
    {
      concurso: 2970,
      "Data Sorteio": "04/12/2023",
      Dezenas: [1, 2, 3, 8, 9, 11, 12, 13, 14, 15, 18, 20, 21, 22, 25],
      "Ganhadores 15 acertos": 0,
      "Premio 15 Acertos": "R$0,00",
      "Ganhadores 14 Acertos": 482,
      "Premio 14 Acertos": "R$1.505,10",
      "Ganhadores 13 Acertos": 18989,
      "Premio 13 Acertos": "R$30,00",
      "Ganhadores 12 Acertos": 246454,
      "Premio 12 Acertos": "R$12,00",
      "Ganhadores 11 Acertos": 1315367,
      "Premio 11 Acertos": "R$6,00",
    },
    {
      concurso: 2971,
      "Data Sorteio": "05/12/2023",
      Dezenas: [1, 2, 4, 5, 10, 11, 12, 14, 15, 16, 17, 18, 20, 21, 25],
      "Ganhadores 15 acertos": 3,
      "Cidade / UF": "SAO SEBASTIAO DO MARANHAO/MG; BOA VISTA/RR; SAO PAULO/SP",
      "Premio 15 Acertos": "R$4.202.372,70",
      "Ganhadores 14 Acertos": 662,
      "Premio 14 Acertos": "R$1.618,98",
      "Ganhadores 13 Acertos": 25642,
      "Premio 13 Acertos": "R$30,00",
      "Ganhadores 12 Acertos": 327635,
      "Premio 12 Acertos": "R$12,00",
      "Ganhadores 11 Acertos": 1791282,
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
