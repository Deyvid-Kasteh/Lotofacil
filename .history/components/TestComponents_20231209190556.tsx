import React, { useState } from "react";
import * as Cores from "../assets/Cores";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, View, Text, StyleSheet } from "react-native";
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
    <CardHistoricoResultadosScreen
      concurso={item.concurso}
      dezenas={item.Dezenas}
      premio={item["Premio 15 Acertos"]}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={periodo}
        renderItem={renderItem}
        keyExtractor={(item) => item.concurso.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
  },
});

export default MenuTeste;
