import { View, Text } from 'react-native'
import * as Cores from "../assets/Cores";
import React from 'react'

const ConferirScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: Cores.cor3,
      }}
    >
      <Text>Conferir por um úni</Text>
    </View>
  );
}

export default ConferirScreen