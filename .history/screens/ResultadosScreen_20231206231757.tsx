// import React, { useState, FC } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
// } from "react-native";
// import Bolhas from "../components/Bolhas";
// import * as Cores from "../assets/Cores";
// import Card from "../components/Card";
import latestJson from "../assets/Latest.json";

// interface ResultadosScreenProps {}

// const ResultadosScreen: FC<ResultadosScreenProps> = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         padding: 10,
//         alignItems: "center",
//         backgroundColor: Cores.cor2,
//       }}
//     >
      // <Card
      //   sorteio={latestJson.concurso}
      //   numeros={latestJson.Dezenas}
      //   data={latestJson["Data Sorteio"]}
      // />
//     </View>
//   );
// };

// export default ResultadosScreen;







import React, { FC } from "react";
import { View } from "react-native";
import Card from "../components/Card";
import { Cor2 } from "../assets/Cores";

interface ResultadosScreenProps {}

const ResultadosScreen: FC<ResultadosScreenProps> = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: Cor2,
      }}
    >
      <Card
        sorteio={latestJson.concurso}
        numeros={exemploJson.Dezenas}
        data={exemploJson["Data Sorteio"]}
      />
    </View>
  );
};

export default ResultadosScreen;

