import React, { FC } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";

interface BolhasProps {
  numero: number;
  choose: boolean;
  onPress: () => void;
}

const Bolhas: FC<BolhasProps> = ({ numero, choose, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.bolha,
          {
            backgroundColor: choose ? "#394A59" : "#687B8C",
          } as StyleProp<ViewStyle>,
        ]}
      >
        <Text style={styles.bolhaTexto}>{numero}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bolha: {
    width: 45,
    height: 45,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
    opacity: 1,
  },
  bolhaTexto: {
    color: "#E9ECF2",
    fontSize: 20,
  },
});

export default Bolhas;