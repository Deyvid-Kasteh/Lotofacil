import React from "react";
import * as Cores from "../assets/Cores";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ResultadosScreen from "../screens/ResultadosScreen";
import HistoricoResultadosScreen from "../screens/HistoricoResultadosScreen";

const Tab = createMaterialTopTabNavigator();

const MaterialTopTabResultados: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: Cores.cor4 },
        tabBarActiveTintColor: Cores.cor1,
        // tabBarIndicatorStyle: Cores.cor1,
        tabBarIndicatorStyle: {
          borderBottomColor: Cores.cor1,
          borderBottomWidth: 3,
        },
      }}
    >
      <Tab.Screen name="Último sorteio" component={ResultadosScreen} />
      <Tab.Screen name="Histórico" component={HistoricoResultadosScreen} />
    </Tab.Navigator>
  );
};

export default MaterialTopTabResultados;
