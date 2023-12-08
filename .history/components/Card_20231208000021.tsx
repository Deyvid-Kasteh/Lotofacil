import React, { useState, FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Cores from "../assets/Cores";
import Bolhas from "./Bolhas";
import { MaterialIcons } from "@expo/vector-icons";

interface CardProps {
  sorteio: number;
  numeros: number[];
  data: string;
  locais: string;
  ganhadores15: number;
  ganhadores14: number;
  ganhadores13: number;
  ganhadores12: number;
  ganhadores11: number;
  premio15: string;
  premio14: string;
  premio13: string;
  premio12: string;
  premio11: string;
}

const Card: FC<CardProps> = ({
  sorteio,
  numeros,
  data,
  locais,
  ganhadores15,
  ganhadores14,
  ganhadores13,
  ganhadores12,
  ganhadores11,
  premio15,
  premio14,
  premio13,
  premio12,
  premio11,
}) => {
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
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: Cores.cor3,
        }}
      >
        <View
          style={{
            width: 350,
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
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
              <View></View>
            </>
          )}
        </View>
        <View
          style={{
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              width: 270,
              backgroundColor: Cores.cor5,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 24, color: Cores.cor1 }}>Prêmio</Text>
          </View>
          <View
            style={{
              width: 270,
              backgroundColor: Cores.cor1,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 28, color: Cores.cor5 }}>{premio15}</Text>
          </View>
          <View
            style={{
              width: 270,
              backgroundColor: Cores.cor1,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View>
              <Text style={{ color: Cores.cor5 }}>Ganhadores:</Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, color: Cores.cor5 }}>
                {ganhadores15}
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 270,
              backgroundColor: Cores.cor1,
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontSize: 12, color: Cores.cor5 }}>
                Cidade / UF:
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 270,
              backgroundColor: Cores.cor1,
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontSize: 9, color: Cores.cor5 }}>
                {}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 270,
              height: 16,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              backgroundColor: Cores.cor1,
              alignItems: "center",
            }}
          ></View>
        </View>

        {/* sfdaggggggggggggggggggggggggggggggggggggggggg */}
        <View
          style={{
            width: 270,
            height: 28,
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
            backgroundColor: Cores.cor2,
            borderRadius: 8,
            marginBottom: 8,
            borderTopWidth: 2,
            borderTopColor: Cores.cor5,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: Cores.cor5 }}
            >
              14 Pontos
            </Text>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <MaterialIcons name="emoji-people" size={20} color={Cores.cor5} />
            <Text style={{ fontSize: 16, color: Cores.cor5 }}>433</Text>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <MaterialIcons name="attach-money" size={20} color={Cores.cor5} />
            <Text style={{ fontSize: 16, color: Cores.cor5 }}>R$1.732,84</Text>
          </View>
        </View>
        <View
          style={{
            width: 270,
            height: 28,
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
            backgroundColor: Cores.cor2,
            borderRadius: 8,
            marginBottom: 8,
            borderTopWidth: 2,
            borderTopColor: Cores.cor5,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: Cores.cor5 }}
            >
              13 Pontos
            </Text>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <MaterialIcons name="emoji-people" size={20} color={Cores.cor5} />
            <Text style={{ fontSize: 16, color: Cores.cor5 }}>433</Text>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <MaterialIcons name="attach-money" size={20} color={Cores.cor5} />
            <Text style={{ fontSize: 16, color: Cores.cor5 }}>R$1.732,84</Text>
          </View>
        </View>
        <View
          style={{
            width: 270,
            height: 28,
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
            backgroundColor: Cores.cor2,
            borderRadius: 8,
            marginBottom: 8,
            borderTopWidth: 2,
            borderTopColor: Cores.cor5,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: Cores.cor5 }}
            >
              12 Pontos
            </Text>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <MaterialIcons name="emoji-people" size={20} color={Cores.cor5} />
            <Text style={{ fontSize: 16, color: Cores.cor5 }}>433</Text>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <MaterialIcons name="attach-money" size={20} color={Cores.cor5} />
            <Text style={{ fontSize: 16, color: Cores.cor5 }}>R$1.732,84</Text>
          </View>
        </View>
        <View
          style={{
            width: 270,
            height: 28,
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
            backgroundColor: Cores.cor2,
            borderRadius: 8,
            marginBottom: 8,
            borderTopWidth: 2,
            borderTopColor: Cores.cor5,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: Cores.cor5 }}
            >
              11 Pontos
            </Text>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <MaterialIcons name="emoji-people" size={20} color={Cores.cor5} />
            <Text style={{ fontSize: 16, color: Cores.cor5 }}>433</Text>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <MaterialIcons name="attach-money" size={20} color={Cores.cor5} />
            <Text style={{ fontSize: 16, color: Cores.cor5 }}>R$1.732,84</Text>
          </View>
        </View>

        {/* fffffffffffffffffffffffffffffffffffffff */}
      </View>
    </View>
  );
};

export default Card;

