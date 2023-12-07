import React, { useState, FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Cores from "../assets/Cores";
import Bolhas from "./Bolhas";

const Card = (props) => {

      const ultimoSorteio3: number[] = [
        1, 2, 4, 5, 10, 11, 12, 14, 15, 16, 17, 18, 20, 21, 25,
      ];





    const [alturaCard1, setAlturaCard1] = useState<number>(200);

    const toggleAltura = (): void => {
      const novaAltura: number = alturaCard1 === 200 ? 50 : 200;
      setAlturaCard1(novaAltura);
    };
  return (
    <View
      style={[
        {
          padding: 10,
          borderRadius: 50,
          alignItems: "center",
          elevation: 2,
          backgroundColor: Cores.cor4,
          marginBottom: 10,
        },
        alturaCard1 === 50
          ? { width: 250, backgroundColor: Cores.cor1 }
          : { width: 350, backgroundColor: Cores.cor4 },
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
          alturaCard1 === 50
            ? { width: 190, backgroundColor: Cores.cor2 }
            : { width: 240, backgroundColor: Cores.cor1 },
        ]}
        onPress={() => toggleAltura()}
      >
        <<>>
          style={{
            fontSize: 20,
            color: alturaCard1 === 50 ? Cores.cor4 : Cores.cor5,
          }}
        >
          Último Sorteio: {props.sorteio}
        </>
      </TouchableOpacity>

      {alturaCard1 === 200 && (
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
              TextText
      )}
    </View>
  );
};

export default Card;
