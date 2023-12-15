import React, { useState } from "react";
import * as Cores from "../assets/Cores";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Bolhas from "../components/Bolhas";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
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
  const [checkboxState, setCheckboxState] = useState<boolean>(false);
  const [vinculaProximoConcurso, setVinculaProximoConcurso] = useState<boolean>(false);

  const bolhasSelecionadas = chosenNumbers.length;

  function gerarNumerosAleatorios(): number[] {
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
        let proximoConcurso = null

        if (vinculadoProximoConcurso) {
          proximoConcurso = "2957"
        }
          // Cria um objeto representando o jogo atual
          const jogoAtual = {
            numerosSelecionados: chosenNumbers,
            dataEHora: new Date().toLocaleString("pt-BR", {
              timeZone: "America/Sao_Paulo",
              dateStyle: "short",
              timeStyle: "medium",
            }),
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

  const deleteItemFromStorage = async (key: string): Promise<void> => {
    try {
      // Deleta o item associado à chave fornecida
      await AsyncStorage.removeItem(key);
      console.log(`Item com chave ${key} deletado com sucesso.`);
    } catch (error) {
      console.error(`Erro ao deletar o item: ${error}`);
    }
  };
  const keyToDelete = "meusJogos";

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
    <View
      style={{
        flex: 1,
        // padding: 10,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: Cores.cor3,
      }}
    >
      <View
        style={{
          width: 350,
          elevation: 5,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 10,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Cores.cor4,
          marginTop: 20,
          marginBottom: 30,
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
            Escolha {15 - bolhasSelecionadas} números
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
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 56,
          // backgroundColor: Cores.cor5,
          marginBottom: 40,
        }}
      >
        {chosenNumbers.length > 0 ? (
          <>
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
              <TouchableOpacity
                style={{
                  borderRadius: 5,
                  backgroundColor: checkboxState ? Cores.cor5 : Cores.cor1,
                  width: 40,
                  marginLeft: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => setCheckboxState(!checkboxState)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: Cores.cor1,
                  }}
                >
                  2957
                </Text>
              </TouchableOpacity>
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
            </View>
            <View
              style={{
                width: 324,
                height: 26,
                borderRadius: 20,
                flexWrap: "nowrap",
                flexDirection: "row",
                // marginTop: 10,
                // marginLeft: 10,
                marginRight: 10,
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              {checkboxState === true ? (
                <Text
                  style={{
                    color: Cores.cor5,
                  }}
                >
                  Vinculado
                </Text>
              ) : (
                <Text
                  style={{
                    color: Cores.cor1,
                  }}
                >
                  Vincular ao próximo concurso
                </Text>
              )}
            </View>
          </>
        ) : null}
      </View>
      <TouchableOpacity
        style={{
          width: 220,
          height: 40,
          backgroundColor: Cores.cor1,
          borderRadius: 20,
          flexWrap: "nowrap",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingLeft: 10,
          paddingRight: 10,
          marginBottom: 20,
        }}
        onPress={() => gerarNumerosAleatorios()}
      >
        <FontAwesome name="random" size={24} color={Cores.cor5} />
        <Text
          style={{
            fontSize: 16,
            color: Cores.cor5,
          }}
        >
          Números aleatórios
        </Text>
      </TouchableOpacity>
      {bolhasSelecionadas === 15 ? (
        <TouchableOpacity
          style={{
            width: 250,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Cores.cor1,
            borderRadius: 20,
            elevation: 10,
          }}
          onPress={onSaveJogoPress}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: Cores.cor5,
            }}
          >
            SALVAR JOGO
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            width: 250,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Cores.cor2,
            borderRadius: 20,
          }}
          onPress={onSaveJogoPress}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: Cores.cor3,
              textDecorationLine: "line-through",
            }}
          >
            SALVAR JOGO
          </Text>
        </TouchableOpacity>
      )}
      <>
        <TouchableOpacity
          style={{
            width: 250,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Cores.cor1,
            borderRadius: 20,
          }}
          onPress={() => deleteItemFromStorage(keyToDelete)}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: Cores.cor5,
            }}
          >
            Deletar
          </Text>
        </TouchableOpacity>
      </>
    </View>
  );
};

export default CriarJogoScreen;
