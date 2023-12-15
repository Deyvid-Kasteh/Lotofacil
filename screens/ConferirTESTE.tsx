import React, { useState } from "react";
import { View, FlatList, RefreshControl, StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const Conferir2: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    // Inicia a operação de atualização
    setRefreshing(true);

    try {
      // Lógica de atualização assíncrona aqui
      // Por exemplo, uma chamada de API usando await
      await fetch("https://api.exemplo.com/dados");

      // Conclui a operação de atualização
      setRefreshing(false);
    } catch (error) {
      // Lida com erros, se necessário
      console.error("Erro durante a atualização:", error);
      setRefreshing(false); // Certifique-se de chamar setRefreshing(false) em caso de erro também
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={["Item 1", "Item 2", "Item 3"]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#eee",
  },
});

export default Conferir2;
