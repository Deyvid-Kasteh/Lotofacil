import React, { useState } from "react";
import * as Cores from "../assets/Cores";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const dezenasParaEscolher = Array.from({ length: 25 }, (_, i) => i + 1);

const [chosenNumbers, setChosenNumbers] = useState([]);
const bolhasSelecionadas = chosenNumbers.length;
const onSaveJogoPress = async () => {
  if (bolhasSelecionadas === 15) {
    try {
      // Recupera os jogos já salvos (se existirem)
      const jogosSalvosJSON = await AsyncStorage.getItem("meusJogos");
      const jogosSalvos = jogosSalvosJSON ? JSON.parse(jogosSalvosJSON) : [];

      // Cria um objeto representando o jogo atual
      const jogoAtual = {
        numerosSelecionados: chosenNumbers,
        data: new Date().toLocaleString(),
      };

      // Adiciona o jogo atual à lista de jogos
      jogosSalvos.push(jogoAtual);

      // Salva a lista atualizada de jogos no AsyncStorage
      await AsyncStorage.setItem("meusJogos", JSON.stringify(jogosSalvos));

      console.log("Jogo salvo!");
      // Limpa os números escolhidos após salvar o jogo
      setChosenNumbers([]);
    } catch (error) {
      console.error("Erro ao salvar o jogo:", error);
    }
  } else {
    console.log("Selecione exatamente 15 números para salvar o jogo.");
  }
};
const handleBolhaPress = (numero) => {
  if (chosenNumbers.includes(numero)) {
    setChosenNumbers(chosenNumbers.filter((num) => num !== numero));
  } else {
    if (bolhasSelecionadas < 15) {
      setChosenNumbers([...chosenNumbers, numero]);
    }
  }
};

const CriarJogoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: Cores.cor3,
      }}
    >
      <Text>CriarJogoScreen</Text>
      <Text>Numeros</Text>
      <Text>Vinculado a concurso CHECKBOX</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{}}>
          <Text
            style={{
              // color: backgroundColor3,
              fontSize: 16,
            }}
          >
            Escolha 15 números
          </Text>
        </View>
        <View>
          {/* {dezenasParaEscolher.map((numero, index) => (
            <Bolhas
              key={index}
              numero={numero}
              choose={chosenNumbers.includes(numero)}
              onPress={() => handleBolhaPress(numero)}
            />
          ))} */}
        </View>
        <View key="números" style={{}}>
          <Text
            style={{
              // color: backgroundColor3,
              fontSize: 16,
            }}
          >
            {/* {bolhasSelecionadas} números selecionados */}
          </Text>
          <TouchableOpacity
            onPress={onSaveJogoPress}
          >
            <Text
            >
              SALVAR JOGO
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CriarJogoScreen;
