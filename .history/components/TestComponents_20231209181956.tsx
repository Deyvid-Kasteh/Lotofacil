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



const MenuTeste: React.FC = ({}) => {
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
    <Text>{`Dezenas: ${jogo.dezenas ? jogo.dezenas.join(", ") : "N/A"}`}</Text>
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
