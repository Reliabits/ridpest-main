import {useState} from "react";
import {Platform} from "react-native";
import {Keyboard} from "react-native";
import {Image, SafeAreaView, ScrollView, Text, View} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {FocusAwareStatusBar, TheTextInput, OurButton} from "../components/common";
import AppColors from "../utils/ColorApp";
import {fonts} from "../utils/constants";
import AppleIcon from "../assets/icons/apple.svg";
import GmailIcon from "../assets/icons/gmail.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import {TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
const LoginScreen = () => {
  const {navigate} = useNavigation();
  const [email, setEmail] = useState();
  const onDismiss = () => {
    Keyboard.dismiss;
  };

  return (
    <View style={{backgroundColor: AppColors.black, flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <FocusAwareStatusBar barStyle={"light-content"} translucent backgroundColor={AppColors.black} />
        <View
          style={{
            width: "100%",
            height: "100%",
            marginTop: Platform.OS === "ios" ? 15 + getStatusBarHeight() : 15 + getStatusBarHeight(),
            paddingTop: 37,
          }}
        >
          <View style={{paddingHorizontal: 20}}>
            <View style={{alignItems: "center", marginBottom: 40}}>
              <View style={{width: 100, height: 100}}>
                <Image
                  source={require("../assets/images/logo1.png")}
                  style={{resizeMode: "contain", width: "100%", height: "100%"}}
                />
              </View>
              <Text
                style={{textTransform: "uppercase", fontSize: 35, fontFamily: fonts.CBold, color: AppColors.appYellow}}
              >
                Let’s Sign You In
              </Text>
            </View>
            <TheTextInput
              label={"Email"}
              onChangeText={(e) => setEmail(e)}
              customStyle={{marginTop: 0}}
              text={email}
              validate={true}
              multiValidateMode={true}
              onSubmitEditing={onDismiss}
              icon={false}
              inputHeight={40}
            />
            <View style={{marginBottom: 3}}>
              <TheTextInput
                label={"Password"}
                onChangeText={(e) => setEmail(e)}
                customStyle={{marginTop: 0}}
                text={email}
                validate={true}
                multiValidateMode={true}
                onSubmitEditing={onDismiss}
                icon={false}
                isSecure
                inputHeight={40}
              />
            </View>
            <View style={{alignItems: "flex-end"}}>
              <Text style={{color: "white", fontSize: 15, fontFamily: fonts.Regular}}>Forgot Password?</Text>
            </View>
            <View style={{marginTop: 15}}>
              <OurButton text={"Login"} onPress={() => navigate("AppStack")} />
            </View>
            <View style={{alignItems: "center", marginTop: 10}}>
              <Text style={{color: "white", fontSize: 15, fontFamily: fonts.Thin}}>Or continue with</Text>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-around", paddingHorizontal: 20, marginTop: 30}}>
              <View
                style={{
                  width: 55,
                  height: 55,
                  backgroundColor: AppColors.inputBg,
                  borderRadius: 4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <GmailIcon />
              </View>
              <View
                style={{
                  width: 55,
                  height: 55,
                  backgroundColor: AppColors.inputBg,
                  borderRadius: 4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AppleIcon />
              </View>
              <View
                style={{
                  width: 55,
                  height: 55,
                  backgroundColor: AppColors.inputBg,
                  borderRadius: 4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FacebookIcon />
              </View>
            </View>

            <View style={{flexDirection: "row", justifyContent: "center", marginTop: 20}}>
              <Text style={{color: "white", fontSize: 15, fontFamily: fonts.Regular}}>Don’t have an account? </Text>
              <TouchableOpacity onPress={() => navigate("SignUpScreen")}>
                <Text style={{color: AppColors.appYellow, fontSize: 15, fontFamily: fonts.Regular}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export {LoginScreen};
