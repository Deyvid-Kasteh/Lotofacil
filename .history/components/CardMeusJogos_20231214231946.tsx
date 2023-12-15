import React from "react";
import { View, Text } from "react-native";
import * as Cores from "../assets/Cores";

interface CardMeusJogos {
  concurso: null | number;
  numerosSelecionados: number[];
  dataEHora: string;
}

const CardMeusJogos: React.FC<CardMeusJogos> = ({ concurso,  }) => {
  return (
    <View>
      <Text>CardMeusJogos</Text>
    </View>
  );
};

export default CardMeusJogos;
