import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import CardHistoricoResultadosScreen from "./CardHistoricoResultadosScreen";

interface MenuTesteProps {
  periodo: MeuObjeto[];
}

const MenuTeste: React.FC<MenuTesteProps> = ({ periodo }) => {
  // console.log(periodo);

  const renderItem = ({ item }: { item: MeuObjeto }) => (
    <CardHistoricoResultadosScreen
      concurso={item.concurso}
      dezenas={item.Dezenas}
      premio={item["Prem}
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

export default MenuTeste;

