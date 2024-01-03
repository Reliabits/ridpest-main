import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen} from "../screens";

const Stack = createNativeStackNavigator();
const AuthenticationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LoginScreen"
    >
      <Stack.Screen component={LoginScreen} name="LoginScreen" options={{headerShown: false, gestureEnabled: false}} />
    </Stack.Navigator>
  );
};

export {AuthenticationStack};
