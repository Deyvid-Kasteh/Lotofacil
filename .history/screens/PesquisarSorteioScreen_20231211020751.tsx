import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
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
      <Text>Digite o número do concurso:</Text>
      <Text>Buscar</Text>
      <View
        style={{
          width: 380,
          height: 40,
          margin: 10,
          padding: 5,
          backgroundColor: Cores.cor4,
          borderRadius: 8,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: 1240,
            borderRadius: 5,
            backgroundColor: Cores.cor1,
            marginLeft: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 11,
              color: Cores.cor5,
            }}
          >
            Digite o número do concurso:
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            backgroundColor: Cores.cor1,
            width: 60,
            marginLeft: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        //   onPress={() => BuscarPeriodo(value)}
        >
          <Text
            style={{
              fontSize: 11,
              color: Cores.cor5,
            }}
          >
            Buscar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PesquisarSorteioScreen