import { View, Text } from "react-native";
import * as Cores from "../assets/Cores";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import RNBounceable from "@freakycoder/react-native-bounceable";
import React from "react";

const ConferirScreen = () => {
  let bouncyCheckboxRef1: BouncyCheckbox | null = null;
  let bouncyCheckboxRef2: BouncyCheckbox | null = null;

  let bouncyCheckboxRef3: BouncyCheckbox | null = null;
  let bouncyCheckboxRef4: BouncyCheckbox | null = null;

  const [checkboxStatePasso1, setCheckboxStatePasso1] = React.useState(false);
  const [checkboxStatePasso2, setCheckboxStatePasso2] = React.useState(false);

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
      <View
        style={{
          width: 380,
          margin: 10,
          padding: 5,
          backgroundColor: Cores.cor4,
          borderRadius: 8,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: Cores.cor1,
          }}
        >
          PASSO 1
        </Text>
        <View
          style={{
            width: 380,
            margin: 10,
            padding: 16,
            backgroundColor: Cores.cor4,
            borderRadius: 8,
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              padding: 10,
              borderRadius: 5,
              backgroundColor: Cores.cor1,
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <BouncyCheckbox
              size={28}
              fillColor={Cores.cor4}
              unfillColor="#FFFFFF"
              text="Conferir todos os meus jogos"
              iconStyle={{ borderRadius: 8 }}
              innerIconStyle={{
                borderWidth: 2,
                borderRadius: 8,
              }}
              textStyle={{
                fontSize: 12,
                textDecorationLine: "none",
              }}
              onPress={(isChecked: boolean) => {}}
            />
          </View>

          <RNBounceable
            style={{
              padding: 10,
              borderRadius: 5,
              backgroundColor: Cores.cor1,
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <Text></Text>

          </RNBounceable>

          <View
            style={{
              padding: 10,
              borderRadius: 5,
              backgroundColor: Cores.cor1,
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <BouncyCheckbox
              size={28}
              fillColor={Cores.cor4}
              unfillColor="#FFFFFF"
              text="Conferir apenas jogos de concurso:"
              iconStyle={{
                borderRadius: 8,
              }}
              innerIconStyle={{
                borderWidth: 2,
                borderRadius: 8,
              }}
              textStyle={{
                fontSize: 12,
                textDecorationLine: "none",
              }}
              onPress={(isChecked: boolean) => {}}
            />
          </View>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: Cores.cor1,
          }}
        >
          PASSO 2
        </Text>
        <View
          style={{
            width: 380,
            margin: 10,
            padding: 16,
            backgroundColor: Cores.cor4,
            borderRadius: 8,
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              padding: 10,
              borderRadius: 5,
              backgroundColor: Cores.cor1,
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <BouncyCheckbox
              size={28}
              fillColor={Cores.cor4}
              unfillColor="#FFFFFF"
              text="Por seu concurso respectivo"
              iconStyle={{ borderRadius: 8 }}
              innerIconStyle={{
                borderWidth: 2,
                borderRadius: 8,
              }}
              textStyle={{
                fontSize: 12,
                textDecorationLine: "none",
              }}
              onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View
            style={{
              padding: 10,
              borderRadius: 5,
              backgroundColor: Cores.cor1,
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <BouncyCheckbox
              size={28}
              fillColor={Cores.cor4}
              unfillColor="#FFFFFF"
              text="Por concurso de número:"
              iconStyle={{ borderRadius: 8 }}
              innerIconStyle={{
                borderWidth: 2,
                borderRadius: 8,
              }}
              textStyle={{
                fontSize: 12,
                textDecorationLine: "none",
              }}
              onPress={(isChecked: boolean) => {}}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          width: 380,
          height: 5,
          margin: 10,
          backgroundColor: Cores.cor4,
          borderRadius: 8,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      ></View>
      <RNBounceable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          borderRadius: 5,
          backgroundColor: Cores.cor1,
        }}
        onPress={() => {
          // Adicione lógica aqui, se necessário
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: Cores.cor4,
            textDecorationLine: "none",
          }}
        >
          Por concurso de número:
        </Text>
        {/* Adicione o ícone ou qualquer outro conteúdo desejado aqui */}
      </RNBounceable>
    </View>
  );
};

export default ConferirScreen;
