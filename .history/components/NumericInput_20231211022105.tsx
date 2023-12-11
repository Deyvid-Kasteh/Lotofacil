import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

interface NumericInputProps {
  value: number | string;
  onChangeText: (text: string) => void;
}

const NumericInput: React.FC<NumericInputProps> = ({ value, onChangeText }) => {
  const handleTextChange = (text: string) => {
    // Remove caracteres não numéricos
    const numericText = text.replace(/[^0-9]/g, "");

    // Atualiza o estado apenas se o texto for numérico ou vazio
    if (numericText === "" || !isNaN(Number(numericText))) {
      onChangeText(numericText);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value.toString()}
        onChangeText={handleTextChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginVertical: 10,
  },
  input: {
    // height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: Cores.cor1,
    width: 60,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NumericInput;
