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
    {
    "concurso": 18,
    "Data Sorteio": "26/01/2004",
    "Dezenas": [
      2,
      6,
      7,
      8,
      10,
      11,
      14,
      15,
      17,
      18,
      19,
      20,
      22,
      23,
      24
    ],
    "Ganhadores 15 acertos": 3,
    "Cidade / UF": "MT; RJ; TO",
    "Premio 15 Acertos": "R$487.887,61",
    "Ganhadores 14 Acertos": 309,
    "Premio 14 Acertos": "R$2.030,05",
    "Ganhadores 13 Acertos": 12373,
    "Premio 13 Acertos": "R$10,00",
    "Ganhadores 12 Acertos": 174339,
    "Premio 12 Acertos": "R$4,00",
    "Ganhadores 11 Acertos": 1079894,
    "Premio 11 Acertos": "R$2,00"
  },
{
    "concurso": 19,
    "Data Sorteio": "02/02/2004",
    "Dezenas": [
      2,
      5,
      6,
      7,
      8,
      10,
      11,
      13,
      14,
      15,
      16,
      17,
      20,
      23,
      24
    ],
    "Ganhadores 15 acertos": 10,
    "Cidade / UF": "GO; MG; MT; PA; PI; RJ; SP",
    "Premio 15 Acertos": "R$82.040,05",
    "Ganhadores 14 Acertos": 818,
    "Premio 14 Acertos": "R$428,20",
    "Ganhadores 13 Acertos": 23594,
    "Premio 13 Acertos": "R$10,00",
    "Ganhadores 12 Acertos": 326913,
    "Premio 12 Acertos": "R$4,00",
    "Ganhadores 11 Acertos": 1333412,
    "Premio 11 Acertos": "R$2,00"
  },
  {
    "concurso": 20,
    "Data Sorteio": "09/02/2004",
    "Dezenas": [
      3,
      4,
      6,
      7,
      8,
      9,
      10,
      14,
      16,
      17,
      18,
      19,
      20,
      23,
      24
    ],
    "Ganhadores 15 acertos": 9,
    "Cidade / UF": "BA; MA; MG; MS; PA; PE; PR; SP",
    "Premio 15 Acertos": "R$122.882,04",
    "Ganhadores 14 Acertos": 931,
    "Premio 14 Acertos": "R$507,17",
    "Ganhadores 13 Acertos": 19580,
    "Premio 13 Acertos": "R$10,00",
    "Ganhadores 12 Acertos": 266087,
    "Premio 12 Acertos": "R$4,00",
    "Ganhadores 11 Acertos": 1462294,
    "Premio 11 Acertos": "R$2,00"
  },
  {
    "concurso": 21,
    "Data Sorteio": "16/02/2004",
    "Dezenas": [
      1,
      2,
      4,
      5,
      8,
      11,
      14,
      16,
      18,
      19,
      20,
      22,
      23,
      24,
      25
    ],
    "Ganhadores 15 acertos": 3,
    "Cidade / UF": "BA; GO; RJ",
    "Premio 15 Acertos": "R$530.990,23",
    "Ganhadores 14 Acertos": 316,
    "Premio 14 Acertos": "R$2.160,45",
    "Ganhadores 13 Acertos": 13077,
    "Premio 13 Acertos": "R$10,00",
    "Ganhadores 12 Acertos": 203475,
    "Premio 12 Acertos": "R$4,00",
    "Ganhadores 11 Acertos": 1211951,
    "Premio 11 Acertos": "R$2,00"
  },
  {
    "concurso": 22,
    "Data Sorteio": "25/02/2004",
    "Dezenas": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      9,
      10,
      12,
      13,
      14,
      15,
      22,
      25
    ],
    "Ganhadores 15 acertos": 1,
    "Cidade / UF": "BA",
    "Premio 15 Acertos": "R$1.081.149,89",
    "Ganhadores 14 Acertos": 484,
    "Premio 14 Acertos": "R$957,34",
    "Ganhadores 13 Acertos": 55372,
    "Premio 13 Acertos": "R$10,00",
    "Ganhadores 12 Acertos": 152738,
    "Premio 12 Acertos": "R$4,00",
    "Ganhadores 11 Acertos": 868693,
    "Premio 11 Acertos": "R$2,00"
  },
  {
    "concurso": 23,
    "Data Sorteio": "01/03/2004",
    "Dezenas": [
      1,
      3,
      4,
      5,
      6,
      8,
      10,
      11,
      12,
      14,
      16,
      17,
      18,
      19,
      20
    ],
    "Ganhadores 15 acertos": 1,
    "Cidade / UF": "SE",
    "Premio 15 Acertos": "R$1.178.452,05",
    "Ganhadores 14 Acertos": 541,
    "Premio 14 Acertos": "R$933,55",
    "Ganhadores 13 Acertos": 16248,
    "Premio 13 Acertos": "R$10,00",
    "Ganhadores 12 Acertos": 215670,
    "Premio 12 Acertos": "R$4,00",
    "Ganhadores 11 Acertos": 1187602,
    "Premio 11 Acertos": "R$2,00"
  },
  {
    "concurso": 24,
    "Data Sorteio": "08/03/2004",
    "Dezenas": [
      1,
      2,
      3,
      5,
      7,
      10,
      11,
      14,
      17,
      19,
      20,
      21,
      23,
      24,
      25
    ],
    "Ganhadores 15 acertos": 2,
    "Cidade / UF": "RJ; RO",
    "Premio 15 Acertos": "R$662.295,89",
    "Ganhadores 14 Acertos": 585,
    "Premio 14 Acertos": "R$970,40",
    "Ganhadores 13 Acertos": 22453,
    "Premio 13 Acertos": "R$10,00",
    "Ganhadores 12 Acertos": 258724,
    "Premio 12 Acertos": "R$4,00",
    "Ganhadores 11 Acertos": 1286374,
    "Premio 11 Acertos": "R$2,00"
  },
  {
    "concurso": 25,
    "Data Sorteio": "15/03/2004",
    "Dezenas": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      9,
      13,
      14,
      16,
      20,
      22,
      23,
      24
    ],
    "Ganhadores 15 acertos": 0,
    "Premio 15 Acertos": "R$0,00",
    "Ganhadores 14 Acertos": 417,
    "Premio 14 Acertos": "R$1.437,73",
    "Ganhadores 13 Acertos": 16108,
    "Premio 13 Acertos": "R$10,00",
    "Ganhadores 12 Acertos": 213231,
    "Premio 12 Acertos": "R$4,00",
    "Ganhadores 11 Acertos": 1288117,
    "Premio 11 Acertos": "R$2,00"
  },
  {
    "concurso": 26,
    "Data Sorteio": "22/03/2004",
    "Dezenas": [
      5,
      7,
      8,
      9,
      10,
      11,
      13,
      14,
      16,
      17,
      19,
      20,
      21,
      22,
      23
    ],
    "Ganhadores 15 acertos": 3,
    "Cidade / UF": "PE; SP",
    "Premio 15 Acertos": "R$970.676,17",
    "Ganhadores 14 Acertos": 602,
    "Premio 14 Acertos": "R$1.077,21",
    "Ganhadores 13 Acertos": 22397,
    "Premio 13 Acertos": "R$10,00",
    "Ganhadores 12 Acertos": 317722,
    "Premio 12 Acertos": "R$4,00",
    "Ganhadores 11 Acertos": 1659205,
    "Premio 11 Acertos": "R$2,00"
  },
  {
    "concurso": 27,
    "Data Sorteio": "29/03/2004",
    "Dezenas": [
      3,
      6,
      8,
      10,
      11,
      12,
      13,
      14,
      15,
      18,
      20,
      21,
      22,
      24,
      25
    ],
    "Ganhadores 15 acertos": 2,
    "Cidade / UF": "DF; SP",
    "Premio 15 Acertos": "R$811.005,39",
    "Ganhadores 14 Acertos": 466,
    "Premio 14 Acertos": "R$1.491,73",
    "Ganhadores 13 Acertos": 15650,
    "Premio 13 Acertos": "R$10,00",
    "Ganhadores 12 Acertos": 216827,
    "Premio 12 Acertos": "R$4,00",
    "Ganhadores 11 Acertos": 1192912,
    "Premio 11 Acertos": "R$2,00"
  },
  {
    "concurso": 28,
    "Data Sorteio": "05/04/2004",
    "Dezenas": [
      1,
      3,
      7,
      9,
      10,
      11,
      12,
      13,
      14,
      16,
      17,
      18,
      19,
      20,
      21
    ],
    "Ganhadores 15 acertos": 2,
    "Cidade / UF": "GO; MT",
    "Premio 15 Acertos": "R$536.916,65",
    "Ganhadores 14 Acertos": 556,
    "Premio 14 Acertos": "R$827,73",
    "Ganhadores 13 Acertos": 22300,
    "Premio 13 Acertos": "R$10,00",
    "Ganhadores 12 Acertos": 307113,
    "Premio 12 Acertos": "R$4,00",
    "Ganhadores 11 Acertos": 1363336,
    "Premio 11 Acertos": "R$2,00"
  },
  {
    "concurso": 29,
    "Data Sorteio": "12/04/2004",
    "Dezenas": [
      1,
      4,
      5,
      6,
      8,
      9,
      13,
      14,
      16,
      17,
      19,
      20,
      21,
      22,
      24
    ],
    "Ganhadores 15 acertos": 5,
    "Cidade / UF": "CE; MG; RJ; RS; SP",
    "Premio 15 Acertos": "R$317.538,81",
    "Ganhadores 14 Acertos": 456,
    "Premio 14 Acertos": "R$1.492,19",
    "Ganhadores 13 Acertos": 14375,
    "Premio 13 Acertos": "R$10,00",
    "Ganhadores 12 Acertos": 181147,
    "Premio 12 Acertos": "R$4,00",
    "Ganhadores 11 Acertos": 1203109,
    "Premio 11 Acertos": "R$2,00"
  },
  {
    "concurso": 30,
    "Data Sorteio": "19/04/2004",
    "Dezenas": [
      1,
      2,
      3,
      4,
      6,
      7,
      8,
      11,
      14,
      17,
      19,
      20,
      21,
      22,
      23
    ],
    "Ganhadores 15 acertos": 2,
    "Cidade / UF": "MG; SP",
    "Premio 15 Acertos": "R$813.271,34",
    "Ganhadores 14 Acertos": 345,
    "Premio 14 Acertos": "R$2.020,55",
    "Ganhadores 13 Acertos": 13480,
    "Premio 13 Acertos": "R$10,00",
    "Ganhadores 12 Acertos": 184916,
    "Premio 12 Acertos": "R$4,00",
    "Ganhadores 11 Acertos": 1136035,
    "Premio 11 Acertos": "R$2,00"
  },
  {
    "concurso": 31,
    "Data Sorteio": "26/04/2004",
    "Dezenas": [
      1,
      2,
      3,
      4,
      9,
      13,
      14,
      15,
      17,
      19,
      20,
      21,
      22,
      24,
      25
    ],
    "Ganhadores 15 acertos": 3,
    "Cidade / UF": "DF; ES; SP",
    "Premio 15 Acertos": "R$503.451,70",
    "Ganhadores 14 Acertos": 250,
    "Premio 14 Acertos": "R$2.589,18",
    "Ganhadores 13 Acertos": 13005,
    "Premio 13 Acertos": "R$10,00",
    "Ganhadores 12 Acertos": 189635,
    "Premio 12 Acertos": "R$4,00",
    "Ganhadores 11 Acertos": 1161305,
    "Premio 11 Acertos": "R$2,00"
  },
  {
    "concurso": 32,
    "Data Sorteio": "03/05/2004",
    "Dezenas": [
      1,
      2,
      4,
      6,
      7,
      9,
      10,
      11,
      14,
      15,
      16,
      17,
      20,
      22,
      23
    ],
    "Ganhadores 15 acertos": 2,
    "Cidade / UF": "BA; SP",
    "Premio 15 Acertos": "R$706.634,89",
    "Ganhadores 14 Acertos": 384,
    "Premio 14 Acertos": "R$1.577,31",
    "Ganhadores 13 Acertos": 14060,
    "Premio 13 Acertos": "R$10,00",
    "Ganhadores 12 Acertos": 199525,
    "Premio 12 Acertos": "R$4,00",
    "Ganhadores 11 Acertos": 1175480,
    "Premio 11 Acertos": "R$2,00"
  },
  {
    "concurso": 33,
    "Data Sorteio": "10/05/2004",
    "Dezenas": [
      1,
      2,
      5,
      7,
      8,
      10,
      11,
      12,
      14,
      16,
      19,
      20,
      21,
      23,
      24
    ],
    "Ganhadores 15 acertos": 9,
    "Cidade / UF": "BA; ES; GO; MA; PR; RJ; SE; SP",
    "Premio 15 Acertos": "R$109.171,84",
    "Ganhadores 14 Acertos": 1358,
    "Premio 14 Acertos": "R$308,91",
    "Ganhadores 13 Acertos": 35450,
    "Premio 13 Acertos": "R$10,00",
    "Ganhadores 12 Acertos": 328729,
    "Premio 12 Acertos": "R$4,00",
    "Ganhadores 11 Acertos": 1417927,
    "Premio 11 Acertos": "R$2,00"
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
