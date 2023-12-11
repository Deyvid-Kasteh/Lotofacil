import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import * as Cores from "../assets/Cores";


interface NumericInputProps {
  value: number | string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const NumericInput: React.FC<NumericInputProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  const handleTextChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, "");

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
        placeholder={placeholder}
        placeholderTextColor="#a9a9a9" // Cor do texto do placeholder
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginVertical: 10,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: Cores.cor1,
    // width: 200,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NumericInput;
