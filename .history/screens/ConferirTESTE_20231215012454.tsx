import React, { useState } from "react";
import { View, FlatList, RefreshControl, StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const Conferir2: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      // Lógica de atualização aqui
      setRefreshing(false);
    }, 2000); // Tempo simulado de atualização: 2000 milissegundos (2 segundos)
  };

  const renderItem = ({ item }) => (
    <RectButton style={styles.item}>
      <Text>{item}</Text>
    </RectButton>
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
