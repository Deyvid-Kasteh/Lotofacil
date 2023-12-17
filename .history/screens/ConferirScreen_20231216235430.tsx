import { View, Text } from 'react-native'
import * as Cores from "../assets/Cores";
import React from 'react'

const ConferirScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: Cores.cor3,
      }}
    >
      <Text>Conferir todos por um único concurso</Text>
      <Text>Conferir todos por respectivos concursos atrelados</Text>
      <Text>Conferir jogo com concurso X</Text>
      <Text>Selecionar qual jogos conferir</Text>
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
            Conferir
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
            XXXXXXX
          </Text>
        </View>
        <View
          style={{
            borderRadius: 5,
            backgroundColor: Cores.cor1,
            width: 80,
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
            por concurso:
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
            XXXXXXXX
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 380,
          height: 150,
          margin: 50,
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
            Conferir
          </Text>
        </View>
        <View
          style={{
            borderRadius: 5,
            backgroundColor: Cores.cor1,
            width: 250,
            marginLeft: 5,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              margin: 4,
              backgroundColor: Cores.cor5,
              width: 200,
              height: 25,
            }}
          >
            <Text
              style={{
                fontSize: 11,
                color: Cores.cor3,
              }}
            >
              Todos os meus jogos
            </Text>
          </View>
          <View
            style={{
              margin: 4,
              backgroundColor: Cores.cor5,
              width: 200,
              height: 25,
            }}
          >
            <Text
              style={{
                fontSize: 11,
                color: Cores.cor3,
              }}
            >
              Apenas meus jogos com número de sorteio
            </Text>
          </View>
          <View
            style={{
              margin: 4,
              backgroundColor: Cores.cor5,
              width: 200,
              height: 25,
            }}
          ></View>
          <View
            style={{
              margin: 4,
              backgroundColor: Cores.cor5,
              width: 200,
              height: 25,
            }}
          ></View>
        </View>
      </View>
    </View>
  );
}

export default ConferirScreen