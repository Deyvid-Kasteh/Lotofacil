import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Cores from "../assets/Cores";
import { Feather } from "@expo/vector-icons";
import CardMeusJogosScreen from "../components/CardMeusJogosScreen";

interface Jogo {
  concurso: null | number;
  numerosSelecionados: number[];
  dataEHora: string;
}
const MeusJogosScreen = () => {
  const [meusJogos, setMeusJogos] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const jogosSalvosJSON = await AsyncStorage.getItem("meusJogos");
      const jogosSalvos = jogosSalvosJSON ? JSON.parse(jogosSalvosJSON) : [];
      setMeusJogos(jogosSalvos);
      console.log(jogosSalvos);
    } catch (error) {
      console.error("Erro ao obter dados:", error);
    }
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const deleteItemFromStorage = async (key: string): Promise<void> => {
    try {
      // Deleta o item associado à chave fornecida
      await AsyncStorage.removeItem(key);
      console.log(`Item com chave ${key} deletado com sucesso.`);
      onRefresh()
    } catch (error) {
      console.error(`Erro ao deletar o item: ${error}`);
    }
  };
  const keyToDelete = "meusJogos";

  const renderItem = ({ item }: { item: Jogo }) => (
    <CardMeusJogosScreen
      concurso={item.concurso}
      numerosSelecionados={item.numerosSelecionados}
      dataEHora={item.dataEHora.split(" ")[0]}
    />
  );

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
            {/* Cabeçalho da lista */}
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
              height: 500,
              maxHeight: 500, // Defina a altura máxima desejada
            }}
          >
            <FlatList
              data={meusJogos}
              renderItem={renderItem}
              keyExtractor={(item) => item.dataEHora?.toString() || ""}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          </View>
          <View
          style>
            <TouchableOpacity
              style={{
                width: 250,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Cores.cor1,
                borderRadius: 20,
                marginTop: 50,
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
            <View>
              <Feather name="refresh-cw" size={24} color="black" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MeusJogosScreen;
