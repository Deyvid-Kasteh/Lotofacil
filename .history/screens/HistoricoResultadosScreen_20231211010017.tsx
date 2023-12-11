import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Cores from "../assets/Cores";
import Lotofacil from "../assets/lotofacilTeste.json";
import LotoComplete from "../assets/lotofacilCompleta.json";
import CardHistoricoResultadosScreen from "../components/CardHistoricoResultadosScreen";
import MenuTeste from "../components/TestComponents";
import DropdownPeriodo from "../components/DropdownPeriodo";

const HistoricoResultadosScreen = () => {
  const LotofacilTodosJogos = LotoComplete;
  const [value, setValue] = useState(null);
const [resultado, setResultado] = useState<MeuObjeto[] | null>(null);

  interface MeuObjeto {
    concurso: number;
    "Data Sorteio": string;
    Dezenas: number[];
    "Ganhadores 15 Acertos": number;
    CidadeUF?: string;
    "Premio 15 Acertos": string;
    "Ganhadores 14 Acertos": number;
    "Premio 14 Acertos": string;
    "Ganhadores 13 Acertos": number;
    "Premio 13 Acertos": string;
    "Ganhadores 12 Acertos": number;
    "Premio 12 Acertos": string;
    "Ganhadores 11 Acertos": number;
    "Premio 11 Acertos": string;
  }

  const meuArray: MeuObjeto[] = LotofacilTodosJogos;

  const obterSubArray = (periodoValue: number): MeuObjeto[] => {
    const objetosPorPagina = 100;
    console.log(objetosPorPagina);

    const indiceInicial = (periodoValue - 1) * objetosPorPagina;
    console.log(indiceInicial);

    const indiceFinal = periodoValue * objetosPorPagina;
    console.log(indiceFinal);

    return meuArray.slice(indiceInicial, indiceFinal);
  };

  // Exemplo de uso:
  // let resultado: MeuObjeto[] | null = 2;

  const BuscarPeriodo = (value: string) => {
    let valueStringToNumber: number | null = parseInt(value, 10);
    let periodoValue: number | null = valueStringToNumber;

    if (periodoValue !== null) {
      console.log("entrou no if");
      setResultado(obterSubArray(periodoValue))
    }
  };
  console.log(resultado);


  useEffect(() => {
    BuscarPeriodo()
  }, []);

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
            <DropdownPeriodo value={value} setValue={setValue} />
            <TouchableOpacity
              style={{
                borderRadius: 5,
                backgroundColor: Cores.cor1,
                width: 60,
                marginLeft: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => BuscarPeriodo(value)}
            >
              <Text
                style={{
                  fontSize: 11,
                  color: Cores.cor5,
                }}
              >
                Buscar
              </Text>
            </TouchableOpacity>
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
          <View
            style={{
              maxHeight: 500, // Defina a altura máxima desejada
            }}
          >
            {resultado && <MenuTeste periodo={resultado} />}
          </View>
        </View>
      </View>
    </View>
  );
};

export default HistoricoResultadosScreen;
