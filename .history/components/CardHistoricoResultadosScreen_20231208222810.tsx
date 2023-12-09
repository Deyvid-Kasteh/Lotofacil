import { View, Text } from 'react-native'
import React from 'react'
import * as Cores from "../assets/Cores";


const CardHistoricoResultadosScreen = () => {
  return (
    <View>
      <View
        style={{
          width: 380,
          height: 26,
          backgroundColor: Cores.cor2,
          borderColor: "black",
          borderRadius: 20,
          flexWrap: "nowrap",
          flexDirection: "row",
          // marginBottom: 8,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <View
                style={{
                  width: 20,
                  height: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 50,
                  // backgroundColor: Cores.cor3,

                  backgroundColor: "#79A637",
                  marginRight: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                    color: Cores.cor1,
                  }}
                >
                  {quantidadeNumerosIguais}
                </Text>
              </View>
        {/* {numerosOrdenados.map((numero, index) => {
                const estaNoUltimoSorteio = ultimoSorteio3.includes(numero);
                return (
                  <>
                    {estaNoUltimoSorteio ? (
                      <View
                        key={index}
                        style={{
                          width: 14,
                          height: 14,
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 5,
                          backgroundColor: Cores.cor4,
                          // backgroundColor: "#79A637",

                          margin: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 9,
                            color: Cores.cor1,
                          }}
                        >
                          {numero}
                        </Text>
                      </View>
                    ) : (
                      <View
                        key={index}
                        style={{
                          width: 14,
                          height: 14,
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 5,
                          backgroundColor: Cores.cor1,
                          margin: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 9,
                            color: Cores.cor5,
                          }}
                        >
                          {numero}
                        </Text>
                      </View>
                    )}
                  </>
                );
              })} */}
      </View>
    </View>
  );
}

export default CardHistoricoResultadosScreen