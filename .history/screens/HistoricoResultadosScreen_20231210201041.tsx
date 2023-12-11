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

  interface MeuObjeto {
    concurso: number;
    DataSorteio: string;
    Dezenas: number[];
    Ganhadores15Acertos: number;
    CidadeUF?: string;
    Premio15Acertos: string;
    Ganhadores14Acertos: number;
    Premio14Acertos: string;
    Ganhadores13Acertos: number;
    Premio13Acertos: string;
    Ganhadores12Acertos: number;
    Premio12Acertos: string;
    Ganhadores11Acertos: number;
    Premio11Acertos: string;
  }

  const meuArray: MeuObjeto[] = LotofacilTodosJogos;

  const obterSubArray = (periodoValue: number): MeuObjeto[] => {
    const objetosPorPagina = 100;
    const indiceInicial = (periodoValue - 1) * objetosPorPagina;
    const indiceFinal = periodoValue * objetosPorPagina;

    return meuArray.slice(indiceInicial, indiceFinal);
  };

  // Exemplo de uso:
  let resultado: MeuObjeto[] | null = null;

  const BuscarPeriodo = (value: string) => {
    let valueStringToNumber: number | null = parseInt(value, 10);
    let periodoValue: number | null = valueStringToNumber;

    if (periodoValue !== null) {
        console.log("entrou no if");
      resultado = obterSubArray(periodoValue);
    } else {
      // Lógica para tratar quando periodoValue é null
      resultado = null;
              console.log("NÃO entrou no if");

    }
  };

  console.log(typeof value);
  console.log(value);


   useEffect(() => {
     if (buttonPressed) {
       // Coloque aqui a lógica que deseja executar quando o botão for pressionado
       console.log("Botão pressionado! Executando useEffect...");

       // Lembre-se de redefinir o estado do botão para evitar loops infinitos
       setButtonPressed(false);
     }
   }, [buttonPressed]);




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
