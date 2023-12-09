import { View, Text, ScrollView } from "react-native";
import React from 'react'
import * as Cores from "../assets/Cores";
import Lotofacil from "../assets/lotofacilTeste.json";


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
          <View
            style={{
              width: 380,

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
                borderRadius: 5,
                backgroundColor: Cores.cor1,
                width: 60,
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
                Sorteio
              </Text>
            </View>
            <View
              style={{
                borderRadius: 5,
                backgroundColor: Cores.cor1,
                width: 60,
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
                Dezenas
              </Text>
            </View>
            <View
              style={{
                borderRadius: 5,
                backgroundColor: Cores.cor1,
                width: 60,
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
                Prêmio
              </Text>
            </View>
          </View>
          <ScrollView
            style={{
              width: 380,
              height: 500,
              backgroundColor: Cores.cor1,

              maxHeight: 370,
              maxWidth: 380,
            }}
          >
            {Lotofacil ??
            ()}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default HistoricoResultadosScreen