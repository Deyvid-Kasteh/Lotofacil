import React, { useState, FC } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Bolhas from "../components/Bolhas";
import * as Cores from "../assets/Cores";
import Card from "../components/Card";
import latestJson from "../assets/Latest.json";

interface ResultadosScreenProps {}

const ResultadosScreen: FC<ResultadosScreenProps> = () => {
  const ultimoSorteio3: number[] = [
    1, 2, 4, 5, 10, 11, 12, 14, 15, 16, 17, 18, 20, 21, 

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: Cores.cor2,
      }}
    >
      <Card
        sorteio={latestJson.concurso}
        numeros={latestJson.Dezenas}
        data={latestJson["Data Sorteio"]}
      />
    </View>
  );
};

export default ResultadosScreen;
