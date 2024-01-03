import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "../screens";

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName="HomeScreen"
    >
      <Stack.Screen component={HomeScreen} name="HomeScreen" options={{headerShown: false, gestureEnabled: false}} />
    </Stack.Navigator>
  );
};

export default HomeStack;
