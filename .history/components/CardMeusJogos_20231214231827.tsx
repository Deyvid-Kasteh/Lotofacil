import { View, Text } from 'react-native'
import React from 'react'



interface CardMeusJogos {
  concurso: null | number;
  numerosSelecionados: number[];
  dataEHora: string;
}



const CardMeusJogos = () => {
  return (
    <View>
      <Text>CardMeusJogos</Text>
    </View>
  )
}

export default CardMeusJogos