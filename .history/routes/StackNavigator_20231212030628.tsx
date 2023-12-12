import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Jogo from "../pages/Jogo";

const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Jogo" component={Jogo} />
//       {/* <Stack.Screen name="Notifications" component={Notifications} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} /> */}
//     </Stack.Navigator>
//   );
// }



import { View, Text } from 'react-native'




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
