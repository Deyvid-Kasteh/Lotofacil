import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import * as Cores from "../assets/Cores";
import LotofacilCompleta




const PesquisarSorteioScreen: React.FC = () => {






  interface Concurso {
  concurso: number;
  // ... (outras propriedades)
}

  const [numeroConcurso, setNumeroConcurso] = useState<number | null>(null);

  const buscarConcurso = () => {
    if (numeroConcurso !== null) {
      const concursoEncontrado = dadosConcursos.find(
        (concurso) => concurso.concurso === numeroConcurso
      );

      if (concursoEncontrado) {
        console.log("Concurso encontrado:", concursoEncontrado);
      } else {
        console.log("Concurso não encontrado");
      }
    }
  };



























  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: Cores.cor3,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: Cores.cor5,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        Pesquise um concurso específico
      </Text>
      <View
        style={{
          width: 380,
          height: 40,
          margin: 10,
          padding: 5,
          backgroundColor: Cores.cor4,
          borderRadius: 8,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            // width: 140,
            borderRadius: 5,
            backgroundColor: Cores.cor1,
            marginLeft: 5,
            justifyContent: "center",
            alignItems: "center",
            paddingRight: 8,
            paddingLeft: 8,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: Cores.cor5,
            }}
          >
            Digite o número do concurso:
          </Text>
        </View>
        <TextInput
          style={{
            borderColor: "gray",
            borderWidth: 1,
            paddingHorizontal: 10,
            borderRadius: 5,
            backgroundColor: Cores.cor1,
            // width: 200,
            marginLeft: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          placeholder="Ex.: 2890"
          keyboardType="numeric"
          value={numeroConcurso !== null ? numeroConcurso.toString() : ""}
          onChangeText={(text) =>
            setNumeroConcurso(text ? parseInt(text, 10) : null)
          }
        />
        <TouchableOpacity
          style={{
            borderRadius: 5,
            backgroundColor: Cores.cor1,
            width: 60,
            marginLeft: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          //   onPress={() => BuscarPeriodo(value)}
        >
          <Text
            style={{
              fontSize: 11,
              color: Cores.cor5,
            }}
          >
            Buscar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PesquisarSorteioScreen;
