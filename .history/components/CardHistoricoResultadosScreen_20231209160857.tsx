import { View, Text } from "react-native";
import React from "react";
import * as Cores from "../assets/Cores";

const CardHistoricoResultadosScreen = ({ jogoCard }) => {
  const concurso = jogoCard.concurso
  const dezenas = jogoCard.Dezenas
  const premio = jogoCard["Premio 15 Acertos"]
    // console.log(premio);

  return (
    <View>
      <View
        style={{
          width: 390,
          height: 26,
          backgroundColor: Cores.cor2,
          borderColor: "black",
          borderRadius: 20,
          flexWrap: "nowrap",
          flexDirection: "row",
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <View
          style={{
            borderRadius: 5,
            backgroundColor: Cores.cor1,
            width: 40,
            marginLeft: 2,
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
            {concurso}
          </Text>
        </View>
        <View
          style={{
            flexWrap: "nowrap",
            flexDirection: "row",
          }}
        >
          {dezenas.map((numero, index) => {
            return (
              <>
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
              </>
            );
          })}
        </View>
        <View
          style={{
            borderRadius: 5,
            backgroundColor: Cores.cor1,
            width: 70,
            marginLeft: 2,
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Text
            style={{
              fontSize: 8,
              color: Cores.cor5,
            }}
          >
            {premio !== "R$0,00" ? premio.replace(/^R\$/, "") : "Acumulou"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardHistoricoResultadosScreen;
