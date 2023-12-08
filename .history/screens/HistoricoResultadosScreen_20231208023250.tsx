import { View, Text } from 'react-native'
import React from 'react'
import * as Cores from "../assets/Cores";


const HistoricoResultadosScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Cores.cor3,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            color: Cores.cor5,
          }}
        >
          Último Sorteio
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            color: Cores.cor5,
          }}
        >
          Último Sorteio
        </Text>
      </View>
    </View>
  );
}

export default HistoricoResultadosScreen