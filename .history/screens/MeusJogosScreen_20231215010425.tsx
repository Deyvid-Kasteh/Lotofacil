import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Cores from "../assets/Cores";
import FlatListMeusJogosScreen from "../components/FlatListMeusJogosScreen";

const MeusJogosScreen = () => {
  const [meusJogos, setMeusJogos] = useState(null)

  useEffect(() => {





    // Código a ser executado ao iniciar o componente


    const fetchData = async () => {
      try {
        // Operações assíncronas (por exemplo, uma chamada API)
        const jogosSalvosJSON = await AsyncStorage.getItem("meusJogos");
         const jogosSalvos = jogosSalvosJSON ? JSON.parse(jogosSalvosJSON) : [];


        // Faça algo com os dados

        setMeusJogos(jogosSalvos);
        console.log(jogosSalvos);
      } catch (error) {
        // Trate erros, se necessário
        console.error("Erro ao obter dados:", error);
      }
    };

    // Chame a função assíncrona
    fetchData();
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
                Concurso
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
                Números
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
                Data
              </Text>
            </View>
          </View>
          <View
            style={{
              maxHeight: 500, // Defina a altura máxima desejada
            }}
          >
            {/* {resultado && (
              <FlatListHistoricoResultadosScreen periodo={resultado} />
            )} */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default MeusJogosScreen;
