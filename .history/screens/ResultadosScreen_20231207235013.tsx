import * as Cores from "../assets/Cores";
import latestJson from "../assets/Latest.json";
import React, { FC } from "react";
import { View } from "react-native";
import Card from "../components/Card";

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
        ganhadores15={latestJson["Ganhadores 15 acertos"]}
        ganhadores14={latestJson}
        ganhadores13={latestJson}
        ganhadores12={latestJson}
        ganhadores11={latestJson}
      />
    </View>
  );
};

export default ResultadosScreen;
