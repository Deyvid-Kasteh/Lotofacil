import { View, Text, ScrollView } from "react-native";
import React from 'react'
import * as Cores from "../assets/Cores";


const HistoricoResultadosScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Cores.cor3,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: Cores.cor5,
          }}
        >
          Todos os sorteios
        </Text>
      </View>
      <View
        style={{
          borderRadius: 16,
          backgroundColor: Cores.cor3,
          marginTop: 20,
          marginBottom: 30,
        }}
      >
        <View>
          {/* {jogosSalvos.length === 0 ? (
            <Text>Nenhum jogo salvo ainda</Text>
          ) : (
            <ScrollView style={{ maxHeight: 200 }}>
              {jogosSalvos.map((jogo, index) => (
                <Jogo
                  key={index}
                  numerosSelecionados={jogo.numerosSelecionados}
                  onDelete={() => handleDelete(index)}
                />
              ))}
            </ScrollView>
          )} */}
          
          <ScrollView
            style={{
              width: 350,
              height: 500,
              backgroundColor: Cores.cor1,

              maxHeight: 350,
              maxWidth: 350,
            }}
          >
            <View
              style={{
                width: 320,
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
            >
              {/* <View
                style={{
                  width: 20,
                  height: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 50,
                  // backgroundColor: Cores.cor3,
                  backgroundColor:
                    quantidadeNumerosIguais > 10 ? "#79A637" : Cores.cor3,
                  // backgroundColor: "#79A637",
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
              </View> */}
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
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default HistoricoResultadosScreen