import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen, ProfileScreen} from "../screens";
import {EditProfileScreen} from "../screens/EditProfileScreen";

const PStack = createNativeStackNavigator();
const ProfileStack = () => {
  return (
    <PStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PStack.Screen
        component={ProfileScreen}
        name="ProfileScreen"
        options={{headerShown: false, gestureEnabled: false}}
      />
      <PStack.Screen
        component={EditProfileScreen}
        name="EditProfileScreen"
        options={{headerShown: false, gestureEnabled: false}}
      />
    </PStack.Navigator>
  );
};

export default ProfileStack;
