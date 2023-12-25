import { View, Text } from "react-native";
import * as Cores from "../assets/Cores";
import BouncyCheckbox from "react-native-bouncy-checkbox";
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
        <Text
          style={{
            fontSize: 11,
            color: Cores.cor5,
          }}
        >
          PASSO 1
        </Text>
        <View
          style={{
            width: 380,
            margin: 10,
            padding: 5,
            backgroundColor: Cores.cor4,
            borderRadius: 8,
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
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
              <BouncyCheckbox onPress={(isChecked: boolean) => {}} />
              Conferir todos os meus jogos
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
              <BouncyCheckbox onPress={(isChecked: boolean) => {}} />
              Conferir apenas jogos de concurso:
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
        <Text
          style={{
            fontSize: 11,
            color: Cores.cor5,
          }}
        >
          PASSO 2
        </Text>
        <View
          style={{
            width: 380,
            margin: 10,
            padding: 5,
            backgroundColor: Cores.cor4,
            borderRadius: 8,
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
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
            <BouncyCheckbox onPress={(isChecked: boolean) => {}} />
            <Text
              style={{
                fontSize: 11,
                color: Cores.cor5,
              }}
            >
              por seu concurso respectivo
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
              por concurso de número:
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
