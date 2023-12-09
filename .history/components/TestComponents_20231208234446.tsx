import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

interface MenuItem {
  label: string;
  value: string;
}

const MenuItems: Array<MenuItem> = [
  { label: "Opção 1", value: "1" },
  { label: "Opção 2", value: "2" },
  { label: "Opção 3", value: "3" },
  { label: "Opção 4", value: "4" },
  { label: "Opção 5", value: "5" },
  { label: "Opção 6", value: "6" },
  { label: "Opção 7", value: "7" },
  { label: "Opção 8", value: "8" },
  { label: "Opção 9", value: "9" },
  { label: "Opção 10", value: "10" },
];

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
