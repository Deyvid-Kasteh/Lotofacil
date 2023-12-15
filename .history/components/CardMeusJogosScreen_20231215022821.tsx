import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Cores from "../assets/Cores";

interface CardMeusJogosScreenProps {
  concurso: null | number;
  numerosSelecionados: number[];
  dataEHora: string;
}

const CardMeusJogosScreen: React.FC<CardMeusJogosScreenProps> = ({
  concurso,
  numerosSelecionados,
  dataEHora,
}) => {
  return (
    <View>
      <View
        style={{
          width: 390,
          height: 26,
          backgroundColor: Cores.cor2,
          borderColor: "black",
          borderRadius: 20,
          flexWrap: "nowrap",
          flexDirection: "row",
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <View
          style={{
            borderRadius: 5,
            backgroundColor: Cores.cor1,
            width: 40,
            marginLeft: 2,
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
            {concurso ? concurso : "-"}
          </Text>
        </View>
        <View
          style={{
            flexWrap: "nowrap",
            flexDirection: "row",
          }}
        >
          {numerosSelecionados?.map((numero, index) => (
            <View
              key={index}
              style={{
                width: 14,
                height: 14,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                backgroundColor: Cores.cor1,
                margin: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 9,
                  color: Cores.cor5,
                }}
              >
                {numero}
              </Text>
            </View>
          ))}
        </View>
        <View
          style={{
            borderRadius: 5,
            backgroundColor: Cores.cor1,
            width: 60,
            marginLeft: 2,
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Text
            style={{
              fontSize: 9,
              // fontWeight: "bold",
              color: Cores.cor5,
            }}
          >
            {dataEHora}
          </Text>
        </View>
        <TouchableOpacity
          // onPress={handleDelete}
          style={{
            width: 20,
            height: 20,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            backgroundColor: Cores.cor1,
          }}
        >
          <MaterialCommunityIcons
            name="delete-forever"
            size={14}
            // color="#F26430"
            color="#D96248"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardMeusJogosScreen;
