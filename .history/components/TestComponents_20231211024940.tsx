import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

// Seu array de objetos
const dadosConcursos = [
  // ... (seus dados aqui)
  {
    concurso: 2967,
    "Data Sorteio": "30/11/2023",
    Dezenas: [1, 2, 3, 4, 6, 7, 8, 9, 14, 17, 18, 19, 20, 22, 25],
    "Ganhadores 15 acertos": 1,
    "Cidade / UF": "CANAL ELETRONICO",
    "Premio 15 Acertos": "R$1.476.157,40",
    "Ganhadores 14 Acertos": 171,
    "Premio 14 Acertos": "R$1.810,04",
    "Ganhadores 13 Acertos": 6660,
    "Premio 13 Acertos": "R$30,00",
    "Ganhadores 12 Acertos": 86871,
    "Premio 12 Acertos": "R$12,00",
    "Ganhadores 11 Acertos": 499368,
    "Premio 11 Acertos": "R$6,00",
  },
  {
    concurso: 2968,
    "Data Sorteio": "01/12/2023",
    Dezenas: [2, 4, 5, 6, 7, 9, 10, 13, 14, 15, 18, 19, 20, 21, 23],
    "Ganhadores 15 acertos": 2,
    "Cidade / UF": "GOIANIA/GO; ARMAZEM/SC",
    "Premio 15 Acertos": "R$754.666,63",
    "Ganhadores 14 Acertos": 285,
    "Premio 14 Acertos": "R$1.586,33",
    "Ganhadores 13 Acertos": 9477,
    "Premio 13 Acertos": "R$30,00",
    "Ganhadores 12 Acertos": 113095,
    "Premio 12 Acertos": "R$12,00",
    "Ganhadores 11 Acertos": 587971,
    "Premio 11 Acertos": "R$6,00",
  },
  {
    concurso: 2969,
    "Data Sorteio": "02/12/2023",
    Dezenas: [3, 4, 5, 6, 9, 11, 13, 17, 18, 19, 20, 21, 22, 23, 24],
    "Ganhadores 15 acertos": 0,
    "Premio 15 Acertos": "R$0,00",
    "Ganhadores 14 Acertos": 195,
    "Premio 14 Acertos": "R$1.621,61",
    "Ganhadores 13 Acertos": 7115,
    "Premio 13 Acertos": "R$30,00",
    "Ganhadores 12 Acertos": 100454,
    "Premio 12 Acertos": "R$12,00",
    "Ganhadores 11 Acertos": 571920,
    "Premio 11 Acertos": "R$6,00",
  },
  {
    concurso: 2970,
    "Data Sorteio": "04/12/2023",
    Dezenas: [1, 2, 3, 8, 9, 11, 12, 13, 14, 15, 18, 20, 21, 22, 25],
    "Ganhadores 15 acertos": 0,
    "Premio 15 Acertos": "R$0,00",
    "Ganhadores 14 Acertos": 482,
    "Premio 14 Acertos": "R$1.505,10",
    "Ganhadores 13 Acertos": 18989,
    "Premio 13 Acertos": "R$30,00",
    "Ganhadores 12 Acertos": 246454,
    "Premio 12 Acertos": "R$12,00",
    "Ganhadores 11 Acertos": 1315367,
    "Premio 11 Acertos": "R$6,00",
  },
  {
    concurso: 2971,
    "Data Sorteio": "05/12/2023",
    Dezenas: [1, 2, 4, 5, 10, 11, 12, 14, 15, 16, 17, 18, 20, 21, 25],
    "Ganhadores 15 acertos": 3,
    "Cidade / UF": "SAO SEBASTIAO DO MARANHAO/MG; BOA VISTA/RR; SAO PAULO/SP",
    "Premio 15 Acertos": "R$4.202.372,70",
    "Ganhadores 14 Acertos": 662,
    "Premio 14 Acertos": "R$1.618,98",
    "Ganhadores 13 Acertos": 25642,
    "Premio 13 Acertos": "R$30,00",
    "Ganhadores 12 Acertos": 327635,
    "Premio 12 Acertos": "R$12,00",
    "Ganhadores 11 Acertos": 1791282,
    "Premio 11 Acertos": "R$6,00",
  },
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
