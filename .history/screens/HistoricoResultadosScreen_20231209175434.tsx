import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import * as Cores from "../assets/Cores";
import Lotofacil from "../assets/lotofacilTeste.json";
import LotoComplete from "../assets/lotofacilCompleta.json";
import CardHistoricoResultadosScreen from "../components/CardHistoricoResultadosScreen";
import MenuTeste from "../components/TestComponents";
import DropdownPeriodo from "../components/DropdownPeriodo";

const HistoricoResultadosScreen = () => {
  const LotofacilTodosJogos = Lotofacil;
  const [value, setValue] = useState(null);

  interface MeuObjeto {
    concurso: number;
    dataSorteio: string;
    dezenas: number[];
    ganhadores15Acertos: number;
    cidadeUF: string;
    premio15Acertos: string;
    ganhadores14Acertos: number;
    premio14Acertos: string;
    ganhadores13Acertos: number;
    premio13Acertos: string;
    ganhadores12Acertos: number;
    premio12Acertos: string;
    ganhadores11Acertos: number;
    premio11Acertos: string;
  }

  const meuArray: MeuObjeto[] = LotofacilTodosJogos;

  const obterSubArray = (numeroEscolhido: number): MeuObjeto[] => {
    const objetosPorPagina = 100;
    const indiceInicial = (numeroEscolhido - 1) * objetosPorPagina;
    const indiceFinal = numeroEscolhido * objetosPorPagina;

    return meuArray.slice(indiceInicial, indiceFinal);
  };

  // Exemplo de uso:
  const numeroEscolhido = 1;
  const resultado = obterSubArray(numeroEscolhido);
  // console.log(resultado);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Cores.cor3,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: Cores.cor5,
            marginTop: 10,
          }}
        >
          Todos os sorteios
        </Text>
      </View>
      <View
        style={{
          borderRadius: 16,
          backgroundColor: Cores.cor3,
          marginTop: 20,
          marginBottom: 30,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
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
                width: 120,
                borderRadius: 5,
                backgroundColor: Cores.cor1,
                marginLeft: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  color: Cores.cor5,
                }}
              >
                Escolha o período:
              </Text>
            </View>
            <MenuTeste value={value} setValue={setValue} />
            <DropdownPeriodo />

            <View
              style={{
                borderRadius: 5,
                backgroundColor: Cores.cor1,
                width: 60,
                marginLeft: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  color: Cores.cor5,
                }}
              >
                Buscar
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 380,

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
                borderRadius: 5,
                backgroundColor: Cores.cor1,
                width: 60,
                marginLeft: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  color: Cores.cor5,
                }}
              >
                Sorteio
              </Text>
            </View>
            <View
              style={{
                borderRadius: 5,
                backgroundColor: Cores.cor1,
                width: 60,
                marginLeft: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  color: Cores.cor5,
                }}
              >
                Dezenas
              </Text>
            </View>
            <View
              style={{
                borderRadius: 5,
                backgroundColor: Cores.cor1,
                width: 60,
                marginLeft: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  color: Cores.cor5,
                }}
              >
                Prêmio
              </Text>
            </View>
          </View>
          <ScrollView
            contentContainerStyle={{
              height: 500,
              maxHeight: 370,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {LotofacilTodosJogos.map((jogo, index) => (
              <CardHistoricoResultadosScreen key={index} jogoCard={jogo} />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HistoricoResultadosScreen;
