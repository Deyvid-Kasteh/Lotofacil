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
  const dados: Pessoa[] = [
    { id: 1, nome: 'João', idade: 25 },
    { id: 2, nome: 'Maria', idade: 30 },
    { id: 3, nome: 'Pedro', idade: 28 },
    // Adicione mais pessoas conforme necessário
  ];

  const renderItem = ({ item }: { item: Pessoa }) => (
    <PessoaComponente nome={item.nome} idade={item.idade} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};


interface PessoaComponenteProps {
  nome: string;
  idade: number;
}

const PessoaComponente: React.FC<PessoaComponenteProps> = ({ nome, idade }) => (
  <View style={styles.item}>
    <Text>{`Nome: ${nome}, Idade: ${idade}`}</Text>
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
