import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import CardHistoricoResultadosScreen from "./CardHistoricoResultadosScreen";

interface FlatListHistoricoResultadosScreenProps {
  periodo: MeuObjeto[];
}

const FlatListHistoricoResultadosScreen: React.FC<
  FlatListHistoricoResultadosScreenProps
> = ({ periodo }) => {
  return (
    <View>
      <Text>FlatListHistoricoResultadosScreen</Text>
    </View>
  );
};

export default FlatListHistoricoResultadosScreen;
