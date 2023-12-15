import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import CardMeusJogosScreen from "./CardMeusJogosScreen";


interface FlatListMeusJogosScreenProps {
    data: Objeto{concurso: null | number;
  numerosSelecionados: number[];
  dataEHora: string;};
}



const FlatListMeusJogosScreen: React.FC<FlatListMeusJogosScreenProps> = ({
  data
}) => {
    const renderItem = ({ item }: { item: Objeto }) => (
      <CardMeusJogosScreen
        concurso={item.concurso}
        numerosSelecionados={item.numerosSelecionados}
        dataEHora={item.dataEHora}
      />
    );
  return <View></View>;
};

export default FlatListMeusJogosScreen;
