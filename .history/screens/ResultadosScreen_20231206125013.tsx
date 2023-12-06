import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Bolhas from "../components/Bolhas";


const ResultadosScreen: React.FC = () => {
  const ultimoSorteio3: number[] = [
    1, 2, 4, 5, 10, 11, 12, 14, 15, 16, 17, 18, 20, 21, 25,
  ];

  const backgroundColor1: string = "#687B8C";
  const backgroundColor2: string = "#394A59";
  const backgroundColor3: string = "#E9ECF2";

  const [alturaView1, setAlturaView1] = useState<number>(200);

  const toggleAltura = (): void => {
    const novaAltura: number = alturaView1 === 200 ? 50 : 200;
    setAlturaView1(novaAltura);
  };

  return (
    <View>
      <Text>ResultadosScreen</Text>
      <View
        style={[
          {
            width: 300,
            padding: 10,
            borderRadius: 50,
            alignItems: "center",
            elevation: 2,
            backgroundColor: backgroundColor1,
            marginBottom: 10,
          },
          alturaView1 === 50
            ? { width: 250, backgroundColor: "#E9ECF2" }
            : { width: 300, backgroundColor: "#687B8C" },
        ]}
      >
        <TouchableOpacity
          style={[
            {
              width: 240,
              backgroundColor: backgroundColor3,
              elevation: 5,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderRadius: 20,
              marginBottom: 5,
            },
            alturaView1 === 50
              ? { width: 190, backgroundColor: "#BFCDD9" }
              : { width: 240, backgroundColor: "#E9ECF2" },
          ]}
          onPress={() => toggleAltura()}
        >
          <Text
            style={{
              fontSize: 20,
              color: alturaView1 === 50 ? backgroundColor1 : backgroundColor2,
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
              <Bolhas key={index}>{numero}</Bolhas>
              <Bolhas key={index} numero=/>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default ResultadosScreen;














// const ResultadosScreen = () => {
//   const ultimoSorteio3 = [
//     1, 2, 4, 5, 10, 11, 12, 14, 15, 16, 17, 18, 20, 21, 25,
//   ];

//   const backgroundColor1 = "#687B8C";
//   const backgroundColor2 = "#394A59";
//   const backgroundColor3 = "#E9ECF2";

//   const [alturaView1, setAlturaView1] = useState(200);
//   const toggleAltura = () => {
//     const novaAltura = alturaView1 === 200 ? 50 : 200;
//     setAlturaView1(novaAltura);
//   };

//   return (
//     <View>
//       <Text>ResultadosScreen</Text>
//       <View
//         style={[
//           {
//             width: 300,
//             padding: 10,
//             borderRadius: 50,
//             alignItems: "center",
//             elevation: 2,
//             backgroundColor: backgroundColor1,
//             marginBottom: 10,
//           },
//           alturaView1 === 50
//             ? { width: 250, backgroundColor: "#E9ECF2" }
//             : { width: 300, backgroundColor: "#687B8C" },
//         ]}
//       >
//         <TouchableOpacity
//           style={[
//             {
//               width: 240,
//               backgroundColor: backgroundColor3,
//               elevation: 5,
//               justifyContent: "center",
//               alignItems: "center",
//               padding: 10,
//               borderRadius: 20,
//               marginBottom: 5,
//             },
//             alturaView1 === 50
//               ? { width: 190, backgroundColor: "#BFCDD9" }
//               : { width: 240, backgroundColor: "#E9ECF2" },
//           ]}
//           onPress={() => toggleAltura()}
//         >
//           <Text
//             style={{
//               fontSize: 20,
//               color: alturaView1 === 50 ? backgroundColor1 : backgroundColor2,
//             }}
//           >
//             Último Sorteio
//           </Text>
//         </TouchableOpacity>

//         {alturaView1 === 200 && (
//           <View
//             style={{
//               flexWrap: "wrap",
//               flexDirection: "row",
//               alignContent: "center",
//               justifyContent: "space-evenly",
//             }}
//           >
//             {ultimoSorteio3.map((numero, index) => (
//               // <Bubble key={index} numero={numero} />
//               <Text key={index}>{numero}</Text>
//             ))}
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// export default ResultadosScreen;
