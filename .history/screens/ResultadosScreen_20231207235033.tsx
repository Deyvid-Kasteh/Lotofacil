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
        ganhadores14={latestJson["Ganhadores 14 Acertos"]}
        ganhadores13={latestJson["Ganhadores 13 Acertos"]}
        ganhadores12={latestJson["Ganhadores 12 Acertos"]}
        ganhadores11={latestJson["Ganhadores 11 Acertos"]}
      />
    </View>
  );
};

export default ResultadosScreen;
