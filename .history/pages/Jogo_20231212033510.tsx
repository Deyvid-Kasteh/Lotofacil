import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button, Modal } from "react-native";


const Jogo = ({ route, navigation }: { route: any; navigation: any }) => {
  return (
    <View>
      <Text>Jogo dncjkdfbvjr</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Jogo