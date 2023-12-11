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
      <Text>Pesquise um concurso espec</Text>
    </View>
  );
}

export default PesquisarSorteioScreen