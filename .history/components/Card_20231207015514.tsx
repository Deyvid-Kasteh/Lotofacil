import React, { useState, FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Cores from "../assets/Cores";
import Bolhas from "./Bolhas";

interface CardProps {
  sorteio: number;
  numeros: number[];
  data: string;
}

const Card: FC<CardProps> = ({ sorteio, numeros, data }) => {
  const [alturaCard1, setAlturaCard1] = useState<number>(200);

  const toggleAltura = (): void => {
    const novaAltura: number = alturaCard1 === 200 ? 50 : 200;
    setAlturaCard1(novaAltura);
  };

  return (
    <View>
      <View
        style={{
          width: 350,
          borderRadius: 50,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: Cores.cor3,
        }}
      >
        <View
          style={{
            width: 350,
            paddingTop: 10,
            borderRadius: 50,
            alignItems: "center",
            elevation: 2,
            backgroundColor: Cores.cor4,
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            style={[
              {
                width: 240,
                backgroundColor: Cores.cor1,
                elevation: 5,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 20,
                marginBottom: 5,
              },
              alturaCard1 === 50
                ? { width: 190, backgroundColor: Cores.cor2 }
                : { width: 240, backgroundColor: Cores.cor1 },
            ]}
            onPress={() => toggleAltura()}
          >
            <Text
              style={{
                fontSize: 20,
                color: alturaCard1 === 50 ? Cores.cor4 : Cores.cor5,
              }}
            >
              Último Sorteio: {sorteio}
            </Text>
            <Text style={{ color: Cores.cor5 }}>Data: {data}</Text>
          </TouchableOpacity>

          {alturaCard1 === 200 && (
            <>
              <View
                style={{
                  flexWrap: "wrap",
                  flexDirection: "row",
                  alignContent: "center",
                  justifyContent: "space-evenly",
                }}
              >
                {numeros.map((numero, index) => (
                  <Bolhas
                    key={index}
                    numero={numero}
                    choose={false}
                    onPress={() => {}}
                  />
                ))}
              </View>
              {/* <Text style={{ color: Cores.cor1 }}>Data: {data}</Text> */}
              <View>
                <View
                  style={{
                    width: 180,
                    backgroundColor: Cores.cor3,
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 16, color: Cores.cor1 }}>
                    Detalhes
                  </Text>
                </View>
              </View>
            </>
          )}
        </View>
        <View>
          <Text style={{ color: Cores.cor1 }}>Ganhadores 15 acertos: </Text>
        </View>
        <Text style={{ color: Cores.cor1 }}>Cidade / UF</Text>
        <Text style={{ color: Cores.cor1 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor1 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
        <Text style={{ color: Cores.cor5 }}>Detalhes</Text>
      </View>
    </View>
  );
};

export default Card;
