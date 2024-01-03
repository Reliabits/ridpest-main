import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useSelector} from "react-redux";
import {Loader} from "../components/common";
import {LoginScreen, SignUpScreen, SplashScreen} from "../screens";
import {AuthenticationStack} from "./authenticationStack";
import BottomTab from "./bottomTab";

export const Stack = createNativeStackNavigator();

const MainStack = () => {
  const {loading} = useSelector((state) => state.loader);
  return (
    <>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen component={SplashScreen} name="SplashScreen" options={{headerShown: false}} />
        {/* <Stack.Screen
          component={AuthenticationStack}
          name="AuthStack"
          options={{headerShown: false, gestureEnabled: false}}
        /> */}
        <Stack.Screen component={BottomTab} name="AppStack" options={{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen
          component={LoginScreen}
          name="LoginScreen"
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          component={SignUpScreen}
          name="SignUpScreen"
          options={{headerShown: false, gestureEnabled: false}}
        />
      </Stack.Navigator>
      {/* {loading && <Loader />} */}
    </>
  );
};

export default MainStack;
