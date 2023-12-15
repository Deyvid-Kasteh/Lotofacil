import React, { useState } from "react";
import { FlatList, View, StyleSheet, RefreshControl } from "react-native";
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
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
      // Lógica de atualização aqui
      // Chame setRefreshing(true) antes da operação de atualização
      // e setRefreshing(false) quando a operação for concluída
      setRefreshing(true);
      // Simule uma operação assíncrona, por exemplo, com setTimeout
      setTimeout(() => {
        // Atualize seus dados aqui
        setRefreshing(false);
      }, 2000); // Tempo simulado de atualização: 2000 milissegundos (2 segundos)
    };







  const renderItem = ({ item }: { item: (typeof data)[number] }) => (
    <CardMeusJogosScreen
      concurso={item.concurso}
      numerosSelecionados={item.numerosSelecionados}
      dataEHora={item.dataEHora.split(" ")[0]}
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
