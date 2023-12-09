import React, { useState } from "react";
import * as Cores from "../assets/Cores";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, View, Text, StyleSheet } from 'react-native';
import CardHistoricoResultadosScreen from "./CardHistoricoResultadosScreen";

interface Jogo {
  concurso: number;
  DataSorteio: string;
  Dezenas: number[];
  Ganhadores15Acertos: number;
  CidadeUF?: string;
  Premio15Acertos: string;
  Ganhadores14Acertos: number;
  Premio14Acertos: string;
  Ganhadores13Acertos: number;
  Premio13Acertos: string;
  Ganhadores12Acertos: number;
  Premio12Acertos: string;
  Ganhadores11Acertos: number;
  Premio11Acertos: string;
}

const MenuTeste: React.FC = ({ periodo }) => {
  const renderItem = ({ item }: { item: Jogo }) => (
    <JogoComponente jogo={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={periodo}
        renderItem={renderItem}
        // keyExtractor={(item) => item.Concurso.toString()}
        keyExtractor={(item) => { console.log(item) }}
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
    <Text>{`Data Sorteio: ${jogo.DataSorteio}`}</Text>
    <Text>{`Dezenas: ${jogo.Dezenas ? jogo.Dezenas.join(", ") : "N/A"}`}</Text>
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
