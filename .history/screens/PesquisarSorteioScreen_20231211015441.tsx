import React from 'react'
import { View, Text } from 'react-native'
import * as Cores from "../assets/Cores";


const PesquisarSorteioScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: Cores.cor3,
      }}
    >
      <Text>Pesquise um concurso específico:</Text>
      <Text>Digite o número do sorteio:</Text>
    </View>
  );
}

export default PesquisarSorteioScreen