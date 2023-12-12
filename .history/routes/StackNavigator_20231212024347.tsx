import { createStackNavigator } from "@react-navigation/stack";
import Jogo from "../pages/Jogo";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Jogo" component={Home} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
