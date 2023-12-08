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
        numeros={lotofacilLatest.Dezenas}
        data={lotofacilLatest["Data Sorteio"]}
        locais={lotofacilLatest["Cidade / UF"]}
        ganhadores15={lotofacilLatest["Ganhadores 15 acertos"]}
        ganhadores14={lotofacilLatest["Ganhadores 14 Acertos"]}
        ganhadores13={lotofacilLatest["Ganhadores 13 Acertos"]}
        ganhadores12={lotofacilLatest["Ganhadores 12 Acertos"]}
        ganhadores11={lotofacilLatest["Ganhadores 11 Acertos"]}
        premio15={lotofacilLatest["Premio 15 Acertos"]}
        premio14={lotofacilLatest["Premio 14 Acertos"]}
        premio13={lotofacilLatest["Premio 13 Acertos"]}
        premio12={latestJson["Premio 12 Acertos"]}
        premio11={latestJson["Premio 11 Acertos"]}
      />
    </View>
  );
};

export default ResultadosScreen;
