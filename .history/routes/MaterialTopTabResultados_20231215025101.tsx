import React from "react";
import * as Cores from "../assets/Cores";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ResultadosScreen from "../screens/ResultadosScreen";
import HistoricoResultadosScreen from "../screens/HistoricoResultadosScreen";
import PesquisarSorteioScreen from "../screens/PesquisarSorteioScreen";


const Tab = createMaterialTopTabNavigator();

const MaterialTopTabResultados: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 9,
        fontWeight: "bold"},
        tabBarStyle: { backgroundColor: Cores.cor4 },
        tabBarActiveTintColor: Cores.cor1,
        // tabBarIndicatorStyle: Cores.cor1,
        tabBarIndicatorStyle: {
          borderBottomColor: Cores.cor2,
          borderBottomWidth: 3,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          borderTopLeftRadius: 5,
          borderTopRightRadius:
        },
      }}
    >
      <Tab.Screen name="Último concurso" component={ResultadosScreen} />
      <Tab.Screen
        name="Pesquisar concurso"
        component={PesquisarSorteioScreen}
      />
      <Tab.Screen name="Histórico" component={HistoricoResultadosScreen} />
    </Tab.Navigator>
  );
};

export default MaterialTopTabResultados;
