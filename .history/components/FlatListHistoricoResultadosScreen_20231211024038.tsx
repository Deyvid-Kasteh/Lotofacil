import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import CardHistoricoResultadosScreen from "./CardHistoricoResultadosScreen";

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
    <View>
      <Text>FlatListHistoricoResultadosScreen</Text>
    </View>
  );
};

export default FlatListHistoricoResultadosScreen;
