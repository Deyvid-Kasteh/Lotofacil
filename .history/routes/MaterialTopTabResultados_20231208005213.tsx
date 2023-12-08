import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const MaterialTopTabResultados: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ultimo so" component={} />
      <Tab.Screen name="Tab2" component={} />
    </Tab.Navigator>
  );
};

export default MaterialTopTabResultados;
