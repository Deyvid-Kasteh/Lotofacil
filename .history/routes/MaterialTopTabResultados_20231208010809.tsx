import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ResultadosScreen from "../screens/ResultadosScreen";
import HistoricoResultadosScreen from "../screens/HistoricoResultadosScreen";




const Tab = createMaterialTopTabNavigator();

const MaterialTopTabResultados: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Último sorteio" component={ResultadosScreen} />
      <Tab.Screen name="Histórico" component={HistoricoResultadosScreen} />
    </Tab.Navigator>
  );
};

export default MaterialTopTabResultados;
