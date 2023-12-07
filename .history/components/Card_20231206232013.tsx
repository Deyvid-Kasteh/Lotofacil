// import React, { useState, FC } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import * as Cores from "../assets/Cores";
// import Bolhas from "./Bolhas";

// const Card = (props) => {
//   const [alturaCard1, setAlturaCard1] = useState<number>(200);

//   const toggleAltura = (): void => {
//     const novaAltura: number = alturaCard1 === 200 ? 50 : 200;
//     setAlturaCard1(novaAltura);
//   };
//   return (
//     <View
//       style={[
//         {
//           padding: 10,
//           borderRadius: 50,
//           alignItems: "center",
//           elevation: 2,
//           backgroundColor: Cores.cor4,
//           marginBottom: 10,
//         },
//         alturaCard1 === 50
//           ? { width: 250, backgroundColor: Cores.cor1 }
//           : { width: 350, backgroundColor: Cores.cor4 },
//       ]}
//     >
//       <TouchableOpacity
//         style={[
//           {
//             width: 240,
//             backgroundColor: Cores.cor1,
//             elevation: 5,
//             justifyContent: "center",
//             alignItems: "center",
//             padding: 10,
//             borderRadius: 20,
//             marginBottom: 5,
//           },
//           alturaCard1 === 50
//             ? { width: 190, backgroundColor: Cores.cor2 }
//             : { width: 240, backgroundColor: Cores.cor1 },
//         ]}
//         onPress={() => toggleAltura()}
//       >
//         <Text
//           style={{
//             fontSize: 20,
//             color: alturaCard1 === 50 ? Cores.cor4 : Cores.cor5,
//           }}
//         >
//           Último Sorteio: {props.sorteio}
//         </Text>
//       </TouchableOpacity>

//       {alturaCard1 === 200 && (
//         <>
//           <View
//             style={{
//               flexWrap: "wrap",
//               flexDirection: "row",
//               alignContent: "center",
//               justifyContent: "space-evenly",
//             }}
//           >
//             {props.numeros.map((numero, index) => (
//               <Bolhas
//                 key={index}
//                 numero={numero}
//                 choose={false}
//                 onPress={() => {}}
//               />
//             ))}
//           </View>
//           <Text style={{ color: "#E9ECF2" }}>Data: {props.data}</Text>
//         </>
//       )}
//     </View>
//   );
// };

// export default Card;







import React, { useState, FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Cor1, Cor2, Cor4, Cor5 } from "../assets/Cores"; // Certifique-se de que as cores estejam definidas em Cores.ts
import Bolhas from "./Bolhas";

interface CardProps {
  sorteio: number;
  numeros: number[];
  data: string;
}

const Card: FC<CardProps> = ({ sorteio, numeros, data }) => {
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
          backgroundColor: Cor4,
          marginBottom: 10,
        },
        alturaCard1 === 50
          ? { width: 250, backgroundColor: Cor1 }
          : { width: 350, backgroundColor: Cor4 },
      ]}
    >
      <TouchableOpacity
        style={[
          {
            width: 240,
            backgroundColor: Cor1,
            elevation: 5,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 20,
            marginBottom: 5,
          },
          alturaCard1 === 50
            ? { width: 190, backgroundColor: Cor2 }
            : { width: 240, backgroundColor: Cor1 },
        ]}
        onPress={() => toggleAltura()}
      >
        <Text
          style={{
            fontSize: 20,
            color: alturaCard1 === 50 ? Cor4 : Cor5,
          }}
        >
          Último Sorteio: {sorteio}
        </Text>
      </TouchableOpacity>

      {alturaCard1 === 200 && (
        <>
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-evenly",
            }}
          >
            {numeros.map((numero, index) => (
              <Bolhas
                key={index}
                numero={numero}
                choose={false}
                onPress={() => {}}
              />
            ))}
          </View>
          <Text style={{ color: "#E9ECF2" }}>Data: {data}</Text>
        </>
      )}
    </View>
  );
};

export default Card;
