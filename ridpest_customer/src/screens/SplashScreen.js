import {StackActions, useNavigation} from "@react-navigation/native";
import {useEffect} from "react";
import {Image, SafeAreaView, Text, View} from "react-native";
import {FocusAwareStatusBar} from "../components/common";
import AppColors from "../utils/ColorApp";

const SplashScreen = () => {
  const {dispatch} = useNavigation();

  const performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        dispatch(StackActions.replace("LoginScreen", {}));
        // if (token === null) {
        // } else {
        //   navigation.dispatch(StackActions.replace("AppStack", {}));
        // }
      }, 2500)
    );
  };
  useEffect(() => {
    performTimeConsumingTask();
  }, []);

  return (
    <View style={{height: "100%", width: "100%", backgroundColor: AppColors.mainBG}}>
      <SafeAreaView>
        <FocusAwareStatusBar barStyle={"light-content"} translucent backgroundColor={"transparent"} />
        <View style={{justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
          <View
            style={{
              width: 200,
              height: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/images/logo1.png")} style={{resizeMode: "cover"}} />
          </View>
          <View style={{width: "95%", alignItems: "center"}}>
            <Image source={require("../assets/images/logo2.png")} style={{resizeMode: "contain"}} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export {SplashScreen};
