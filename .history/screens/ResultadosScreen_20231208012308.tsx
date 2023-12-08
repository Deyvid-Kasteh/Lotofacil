import * as Cores from "../assets/Cores";
import latestJson from "../assets/Latest.json";
import lotofacilLatest from "../assets/lotofacilLatest.json";

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
        backgroundColor: Cores.cor3,
      }}
    >
      <Card
        sorteio={lotofacilLatest.concurso}
        numeros={latestJson.Dezenas}
        data={latestJson["Data Sorteio"]}
        locais={latestJson["Cidade / UF"]}
        ganhadores15={latestJson["Ganhadores 15 acertos"]}
        ganhadores14={latestJson["Ganhadores 14 Acertos"]}
        ganhadores13={latestJson["Ganhadores 13 Acertos"]}
        ganhadores12={latestJson["Ganhadores 12 Acertos"]}
        ganhadores11={latestJson["Ganhadores 11 Acertos"]}
        premio15={latestJson["Premio 15 Acertos"]}
        premio14={latestJson["Premio 14 Acertos"]}
        premio13={latestJson["Premio 13 Acertos"]}
        premio12={latestJson["Premio 12 Acertos"]}
        premio11={latestJson["Premio 11 Acertos"]}
      />
    </View>
  );
};

export default ResultadosScreen;
