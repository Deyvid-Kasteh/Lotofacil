import React, { useState, FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Cores from "../assets/Cores";
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
    <View></View>
    
  );
};

export default Card;

