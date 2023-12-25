import { View, Text } from "react-native";
import * as Cores from "../assets/Cores";
import React from "react";

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
      <View
        style={{
          width: 380,
          margin: 10,
          padding: 5,
          backgroundColor: Cores.cor4,
          borderRadius: 8,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderRadius: 5,
            backgroundColor: Cores.cor1,
            width: 100,
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
            Conferira
          </Text>
        </View>
        <View
          style={{
            width: 380,
            margin: 10,
            padding: 5,
            backgroundColor: Cores.cor4,
            borderRadius: 8,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderRadius: 5,
              backgroundColor: Cores.cor1,
              // width: 60,
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
              Todos os meus jogos
            </Text>
          </View>
          <View
            style={{
              borderRadius: 5,
              backgroundColor: Cores.cor1,
              // width: 60,
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
              Apenas jogos de concurso:
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: 380,
          margin: 10,
          padding: 5,
          backgroundColor: Cores.cor4,
          borderRadius: 8,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderRadius: 5,
            backgroundColor: Cores.cor1,
            width: 100,
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
            por
          </Text>
        </View>
        <View
          style={{
            width: 380,
            margin: 10,
            padding: 5,
            backgroundColor: Cores.cor4,
            borderRadius: 8,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderRadius: 5,
              backgroundColor: Cores.cor1,
              // width: 60,
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
              seu concurso respectivo
            </Text>
          </View>
          <View
            style={{
              borderRadius: 5,
              backgroundColor: Cores.cor1,
              // width: 60,
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
              concurso de número:
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: 380,
          height: 5,
          margin: 10,
          backgroundColor: Cores.cor4,
          borderRadius: 8,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      ></View>
    </View>
  );
};

export default ConferirScreen;
