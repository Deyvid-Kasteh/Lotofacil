import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from 'react-native'
import Jogo from "../pages/Jogo";

const Stack = createStackNavigator();






const StackNavigator = () => {







    return (
      <Stack.Navigator>
        // <Stack.Screen name="Jogo" component={Jogo} />
        {/* <Stack.Screen name="Notifications" component={Notifications} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    );
}

export default StackNavigator
