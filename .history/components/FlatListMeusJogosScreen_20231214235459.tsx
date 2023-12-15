import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import CardMeusJogosScreen from "./CardMeusJogosScreen";


interface FlatListMeusJogosScreenProps {
    data: Objeto[];
}



const FlatListMeusJogosScreen: React.FC<FlatListMeusJogosScreenProps> = ({
  data
}) => {
    const renderItem = ({ item }: { item: Objeto }) => (
      <CardMeusJogosScreen
        concurso={item.concurso}
        dezenas={item.Dezenas}
        premio={item["Premio 15 Acertos"]}
      />
    );
  return <View></View>;
};

export default FlatListMeusJogosScreen;
