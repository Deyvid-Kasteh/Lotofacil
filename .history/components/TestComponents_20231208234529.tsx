import React, { useState } from "react";
import { View, Text, Picker } from "react-native";

const MenuTeste = ({ value = "1" }) => {
  const [selectedValue, setSelectedValue] = useState(value);

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Selecione uma opção:</Text>
      </View>
      <ScrollView>
        {MenuItems.map((item) => (
          <TouchableOpacity
            key={item.value}
            style={styles.item}
            onPress={() => setSelectedValue(item.value)}
          >
            <Text style={styles.text}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  labelContainer: {
    width: 200,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default MenuTeste;
