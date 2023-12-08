import { View, Text } from 'react-native'
import React from 'react'
import * as Cores from "../assets/Cores";


const HistoricoResultadosScreen = () => {
  return (
    <View
      style={{
        width: 350,
        borderRadius: 50,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: Cores.cor3,
      }}
    >
      <Text>Historico de Resultados da lotofacil</Text>
    </View>
  );
}

export default HistoricoResultadosScreen