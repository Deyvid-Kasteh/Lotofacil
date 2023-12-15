import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import CardMeusJogosScreen from "./CardMeusJogosScreen";

interface FlatListMeusJogosScreenProps {
  data: Array<{
    concurso: null | number;
    numerosSelecionados: number[];
    dataEHora: string;
  }>;
}

const FlatListMeusJogosScreen: React.FC<FlatListMeusJogosScreenProps> = ({
  data,
}) => {
  const renderItem = ({ item }: { item: (typeof data)[number] }) => (
    <CardMeusJogosScreen
      concurso={item.concurso}
      numerosSelecionados={item.numerosSelecionados}
      dataEHora={item.dataEHora.split(" ")[0];}
    />
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.dataEHora?.toString() || ""}
      />
    </View>
  );
};

export default FlatListMeusJogosScreen;
