import { View, Text, ScrollView } from "react-native";
import React from 'react'
import * as Cores from "../assets/Cores";


const HistoricoResultadosScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Cores.cor3,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            color: Cores.cor5,
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
        <View>
          {/* {jogosSalvos.length === 0 ? (
            <Text>Nenhum jogo salvo ainda</Text>
          ) : (
            <ScrollView style={{ maxHeight: 200 }}>
              {jogosSalvos.map((jogo, index) => (
                <Jogo
                  key={index}
                  numerosSelecionados={jogo.numerosSelecionados}
                  onDelete={() => handleDelete(index)}
                />
              ))}
            </ScrollView>
          )} */}
          <ScrollView style={{
            width: 100,
            height: 100,
            maxHeight: 200,
          maxWidth: 200}}>
            {/* {jogosSalvos.map((jogo, index) => (
              <Jogo
                key={index}
                numerosSelecionados={jogo.numerosSelecionados}
                onDelete={() => handleDelete(index)}
              />
            ))} */}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default HistoricoResultadosScreen