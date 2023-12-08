import * as Cores from "../assets/Cores";
import latestJson from "../assets/Latest.json";

import React, { FC } from "react";
import { View } from "react-native";
import Card from "../components/Card";
import { cor2 } from "../assets/Cores";

interface ResultadosScreenProps {}

const ResultadosScreen: FC<ResultadosScreenProps> = () => {
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