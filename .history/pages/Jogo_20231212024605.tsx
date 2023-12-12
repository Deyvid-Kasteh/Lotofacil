import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from 'react-native'


const Jogo = ({ navigation }) => {
  return (
    <View>
      <Text>Jogo dncjkdfbvjr</Text>
      <button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Jogo