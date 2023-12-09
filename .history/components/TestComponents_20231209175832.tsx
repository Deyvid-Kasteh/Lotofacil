import React, { useState } from "react";
import * as Cores from "../assets/Cores";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, View, Text, StyleSheet } from 'react-native';

interface Pessoa {
  id: number;
  nome: string;
  idade: number;
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

export default MenuTeste;
