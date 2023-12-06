import { View, Text } from 'react-native'
import React from 'react'
import * as Cores from "../assets/Cores";

const ResultadosScreen = () => {


  const ultimoSorteio3 = [
    1, 2, 4, 5, 10, 11, 12, 14, 15, 16, 17, 18, 20, 21, 25,
  ];

  const backgroundColor1 = "#687B8C";
  const backgroundColor2 = "#394A59";
  const backgroundColor3 = "#E9ECF2";

   const [alturaView1, setAlturaView1] = useState(200);
   const toggleAltura = () => {
     const novaAltura = alturaView1 === 200 ? 50 : 200;
     setAlturaView1(novaAltura);
   };







  return (
    <View>
      <Text>ResultadosScreen</Text>
      <View
        key="1"
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
          <View style={bolhasContainerStyle}>
            {dezenas.map((numero, index) => (
              <Bubble key={index} numero={numero} />
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

export default ResultadosScreen