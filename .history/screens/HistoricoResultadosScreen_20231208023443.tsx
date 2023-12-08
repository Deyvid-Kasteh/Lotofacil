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
          Todos os sorteios
        </Text>
      </View>
      <View
        style={{
          width: "80%",
          height: 26,
          backgroundColor: Cores.cor2,
          borderColor: "black",
          borderRadius: 20,
          flexWrap: "nowrap",
          flexDirection: "row",
          marginBottom: 8,
          // marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      ></View>
    </View>
  );
}

export default HistoricoResultadosScreen