import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";



const Tab = createMaterialTopTabNavigator();




const MaterialTopTabResultados: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 16, fontWeight: "bold" },
        indicatorStyle: { backgroundColor: colors.primary },
        style: { backgroundColor: colors.background },
      }}
    >
      <Tab.Screen name="Tab1" component={Tab1Screen} />
      <Tab.Screen name="Tab2" component={Tab2Screen} />
    </Tab.Navigator>
  );
};

export default MaterialTopTabResultados