import React, { useState } from "react";
import * as Cores from "../assets/Cores";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Bolhas from "../components/Bolhas";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const dezenasParaEscolher: number[] = Array.from(
  { length: 25 },
  (_, i) => i + 1
);

const CriarJogoScreen: React.FC = () => {
  const [chosenNumbers, setChosenNumbers] = useState<number[]>([]);
  const [checkboxState, setCheckboxState] = useState<>(false);
  const bolhasSelecionadas = chosenNumbers.length;
  console.log(chosenNumbers);

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
    setChosenNumbers([])
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: Cores.cor3,
      }}
    >
      <View
        style={{
          width: 350,
          elevation: 5,
          paddingLeft: 10,
          paddingRight: 10,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Cores.cor4,
        }}
      >
        <View
          style={{
            width: 250,
            height: 40,
            elevation: 5,

            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Cores.cor1,
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: Cores.cor5,
            }}
          >
            Escolha 15 números
          </Text>
        </View>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-evenly",
          }}
        >
          {dezenasParaEscolher.map((numero, index) => (
            <Bolhas
              key={index}
              numero={numero}
              choose={chosenNumbers.includes(numero)}
              onPress={() => handleBolhaPress(numero)}
            />
          ))}
        </View>
        <View
          key="números"
          style={{
            width: 250,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Cores.cor1,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: Cores.cor5,
            }}
          >
            {bolhasSelecionadas}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: Cores.cor5,
            }}
          >
            números selecionados
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Fazer jogo aleatório</Text>
        <View
          style={{
            width: 340,
            height: 26,
            backgroundColor: Cores.cor2,
            borderRadius: 20,
            flexWrap: "nowrap",
            flexDirection: "row",
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <View
            style={{
              borderRadius: 5,
              backgroundColor: Cores.cor1,
              width: 40,
              marginLeft: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 11,
                color: Cores.cor5,
              }}
            ></Text>
          </View>
          <View
            style={{
              flexWrap: "nowrap",
              flexDirection: "row",
            }}
          >
            {chosenNumbers?.map((numero, index) => (
              <View
                key={index}
                style={{
                  width: 14,
                  height: 14,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  backgroundColor: Cores.cor1,
                  margin: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                    color: Cores.cor5,
                  }}
                >
                  {numero}
                </Text>
              </View>
            ))}
          </View>
          {chosenNumbers.length > 0 ? (
            <TouchableOpacity
              style={{
                borderRadius: 50,
                backgroundColor: Cores.cor1,
              }}
              onPress={() => {
                handleGameDelete(), console.log("Game deleted");
              }}
            >
              <AntDesign name="closecircle" size={16} color="#D96248" />
            </TouchableOpacity>
          ) : null}
        </View>
        <View
          style={{
            width: 310,
            height: 26,
            borderRadius: 20,
            flexWrap: "nowrap",
            flexDirection: "row",
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <BouncyCheckbox
            size={16}
            fillColor={Cores.cor5}
            unfillColor={Cores.cor3}
            // text="Custom Checkbox"
            innerIconStyle={{ borderWidth: 2 }}
            onPress={(isChecked: boolean) => {}}
          />
          <Text>Vincular ao próximo concurso</Text>
        </View>
      </View>
      {bolhasSelecionadas === 15 ? (
        <View
          style={{
            width: 250,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Cores.cor1,
            borderRadius: 50,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <TouchableOpacity onPress={onSaveJogoPress}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: Cores.cor5,
              }}
            >
              SALVAR JOGO
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default CriarJogoScreen;
