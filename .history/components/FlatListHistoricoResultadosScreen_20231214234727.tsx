import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import CardHistoricoResultadosScreen from "./CardHistoricoResultadosScreen";
import { MeuObjeto } from "../assets/MeuObjeto";

interface FlatListHistoricoResultadosScreenProps {
  periodo: MeuObjeto[];
}

const FlatListHistoricoResultadosScreen: React.FC<
  FlatListHistoricoResultadosScreenProps
> = ({ periodo }) => {
  const renderItem = ({ item }: { item: MeuObjeto }) => (
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
    height: 450,
  },
});
export default FlatListHistoricoResultadosScreen;
