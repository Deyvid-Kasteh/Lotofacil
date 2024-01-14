import React, { useState } from "react";
import * as Cores from "../assets/Cores";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import RNBounceable from "@freakycoder/react-native-bounceable";
import Bolhas from "../components/Bolhas";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const dezenasParaEscolher: number[] = Array.from(
  { length: 25 },
  (_, i) => i + 1
);

const testedeStorage = async () => {
  const jogosSalvosJSON = await AsyncStorage.getItem("meusJogos");
  console.log(jogosSalvosJSON);
};

testedeStorage();

const CriarJogoScreen: React.FC = () => {
  const [chosenNumbers, setChosenNumbers] = useState<number[]>([]);
  const [vincularAoProximoConcurso, setVincularAoProximoConcurso] =
    useState<boolean>(false);
  let proximoConcurso = 2957;

  const [vincularAoConcursoX, setVincularAoConcursoX] =
    useState<boolean>(false);
  const [numeroConcursoX, setNumeroConcursoX] = useState<number | null>(null);

  let numeroVinculado: any = null;
const [identificadorDeConcurso, setIdentificadorDeConcurso] = useState<
  number | null
>(2958);





  const bolhasSelecionadas = chosenNumbers.length;

  function gerarNumerosAleatorios(): void {
    const numerosUnicos: number[] = [];

    while (numerosUnicos.length < 15) {
      const numeroAleatorio = Math.floor(Math.random() * 25) + 1;

      // Verifica se o número gerado já está no array
      if (!numerosUnicos.includes(numeroAleatorio)) {
        numerosUnicos.push(numeroAleatorio);
      }
    }

    setChosenNumbers(numerosUnicos);
  }

  const onSaveJogoPress = async () => {
    if (bolhasSelecionadas === 15) {
      try {
        // Recupera os jogos já salvos (se existirem)
        const jogosSalvosJSON = await AsyncStorage.getItem("meusJogos");
        const jogosSalvos = jogosSalvosJSON ? JSON.parse(jogosSalvosJSON) : [];

        if (vincularAoProximoConcurso) {
          numeroVinculado = proximoConcurso;
        } else if (vincularAoConcursoX) {
          numeroVinculado = numeroConcursoX;
        } else {
          numeroVinculado = null;
        }

        // Cria um objeto representando o jogo atual
        const jogoAtual = {
          numerosSelecionados: chosenNumbers,
          dataEHora: new Date().toLocaleString("pt-BR", {
            timeZone: "America/Sao_Paulo",
            dateStyle: "short",
            timeStyle: "medium",
          }),
          concurso: numeroVinculado,
        };

        // Adiciona o jogo atual à lista de jogos
        jogosSalvos.push(jogoAtual);

        // Salva a lista atualizada de jogos no AsyncStorage
        await AsyncStorage.setItem("meusJogos", JSON.stringify(jogosSalvos));
        console.log("Jogo salvo!");
        console.log(jogosSalvos);

        // Limpa os números escolhidos após salvar o jogo
        setChosenNumbers([]);
      } catch (error) {
        console.error("Erro ao salvar o jogo:", error);
      }
    } else {
      console.log("Selecione exatamente 15 números para salvar o jogo.");
    }
  };

  const handleBolhaPress = (numero: number) => {
    if (chosenNumbers.includes(numero)) {
      setChosenNumbers(chosenNumbers.filter((num) => num !== numero));
    } else {
      if (bolhasSelecionadas < 15) {
        setChosenNumbers([...chosenNumbers, numero]);
      }
    }
  };

  const handleGameDelete = () => {
    setChosenNumbers([]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        // padding: 10,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: Cores.cor3,
      }}
    >
      <ScrollView>


      </ScrollView>
      
    </KeyboardAvoidingView>
  );
};

export default CriarJogoScreen;
