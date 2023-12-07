import React, { useState, FC } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import Bolhas from "../components/Bolhas";
import * as Cores from "../assets/Cores";

interface ResultadosScreenProps {}

const ResultadosScreen: FC<ResultadosScreenProps> = () => {
  const ultimoSorteio3: number[] = [
    1, 2, 4, 5, 10, 11, 12, 14, 15, 16, 17, 18, 20, 21, 25,
  ];



  const [alturaView1, setAlturaView1] = useState<number>(200);

  const toggleAltura = (): void => {
    const novaAltura: number = alturaView1 === 200 ? 50 : 200;
    setAlturaView1(novaAltura);
  };

  return (
    <View >
      <View
        style={[
          {
            width: 300,
            padding: 10,
            borderRadius: 50,
            alignItems: "center",
            elevation: 2,
            backgroundColor: Cores.cor4,
            marginBottom: 10,
          },
          alturaView1 === 50
            ? { width: 250, backgroundColor: Cores.cor1 }
            : { width: 300, backgroundColor: Cores.cor4 },
        ]}
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
            alturaView1 === 50
              ? { width: 190, backgroundColor: Cores.cor2 }
              : { width: 240, backgroundColor: Cores.cor1 },
          ]}
          onPress={() => toggleAltura()}
        >
          <Text
            style={{
              fontSize: 20,
              color: alturaView1 === 50 ? Cores.cor4 : Cores.cor5,
            }}
          >
            Último Sorteio
          </Text>
        </TouchableOpacity>

        {alturaView1 === 200 && (
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-evenly",
            }}
          >
            {ultimoSorteio3.map((numero, index) => (
              <Bolhas
                key={index}
                numero={numero}
                choose={false}
                onPress={() => {}}
              />
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default ResultadosScreen;