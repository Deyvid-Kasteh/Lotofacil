import React from 'react'
import * as Cores from "../assets/Cores";
import { View, Text } from 'react-native'







    const dezenasParaEscolher = Array.from({ length: 25 }, (_, i) => i + 1);



const CriarJogoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: Cores.cor3,
      }}
    >
      <Text>CriarJogoScreen</Text>
      <Text>Numeros</Text>
      <Text>Vinculado a concurso CHECKBOX</Text>
    </View>
  );
}

export default CriarJogoScreen