import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

// Seu array de objetos
const dadosConcursos = [
  // ... (seus dados aqui)
];

interface Concurso {
  concurso: number;
  // ... (outras propriedades)
}

const EncontrarConcurso: React.FC = () => {
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
    <View>
      <Text>Digite o número do concurso:</Text>
      <TextInput
        keyboardType="numeric"
        value={numeroConcurso !== null ? numeroConcurso.toString() : ""}
        onChangeText={(text) =>
          setNumeroConcurso(text ? parseInt(text, 10) : null)
        }
      />
      <Button title="Buscar Concurso" onPress={buscarConcurso} />
    </View>
  );
};

export default EncontrarConcurso;
