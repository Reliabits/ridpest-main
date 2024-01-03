import {createNavigationContainerRef, NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import MainStack from "./navigator/mainStack";

export const navigationRef = createNavigationContainerRef();

const MainApp = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <MainStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default MainApp;
