import React, { useState, FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Cores from "../assets/Cores";
import Bolhas from "./Bolhas";












const Card = () => {





    const [alturaView1, setAlturaView1] = useState<number>(200);

    const toggleAltura = (): void => {
      const novaAltura: number = alturaView1 === 200 ? 50 : 200;
      setAlturaView1(novaAltura);
    };
  return (
    <View>
      <Text>Card</Text>
    </View>
  );
};

export default Card;
