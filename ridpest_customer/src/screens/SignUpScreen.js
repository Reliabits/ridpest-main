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
import Sperson from "../assets/icons/sPerson.svg";
import EmailIcon from "../assets/icons/email.svg";
import PasswordIcon from "../assets/icons/password.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import {TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {CountryPhoneInput} from "../components/common/textInput/countryPhoneInput";
const SignUpScreen = () => {
  const {navigate} = useNavigation();
  const [data, setData] = useState({
    fullname: null,
    email: null,
    phone: null,
    password: null,
    confirmpassword: null,
  });
  const [email, setEmail] = useState();
  const onDismiss = () => {
    Keyboard.dismiss;
  };

  return (
    <View style={{backgroundColor: AppColors.black, flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <FocusAwareStatusBar barStyle={"light-content"} translucent backgroundColor={AppColors.black} />
        <ScrollView
          style={{
            width: "100%",
            marginTop: Platform.OS === "ios" ? 15 + getStatusBarHeight() : 15 + getStatusBarHeight(),
            paddingTop: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{paddingHorizontal: 20, paddingBottom: 40}}>
            <View style={{alignItems: "center", marginBottom: 20}}>
              <View style={{width: 80, height: 80}}>
                <Image
                  source={require("../assets/images/logo1.png")}
                  style={{resizeMode: "contain", width: "100%", height: "100%"}}
                />
              </View>
              <Text
                style={{textTransform: "uppercase", fontSize: 32, fontFamily: fonts.CBold, color: AppColors.appYellow}}
              >
                Sign Up
              </Text>
            </View>
            <TheTextInput
              label={"Full Name"}
              onChangeText={(e) => setData((prev) => ({...prev, fullname: e}))}
              customStyle={{marginTop: 0}}
              text={data.fullname}
              validate={true}
              multiValidateMode={true}
              onSubmitEditing={onDismiss}
              icon={true}
              inputHeight={40}
              preicon={Sperson}
            />
            <TheTextInput
              label={"Email"}
              onChangeText={(e) => setData((prev) => ({...prev, email: e}))}
              customStyle={{marginTop: 0}}
              text={data.email}
              validate={true}
              multiValidateMode={true}
              onSubmitEditing={onDismiss}
              icon={true}
              preicon={EmailIcon}
            />
            <CountryPhoneInput
              label={"Phone"}
              onChangeText={(e) => setData((prev) => ({...prev, phone: e}))}
              customStyle={{marginTop: 0}}
              text={data.phone}
              validate={true}
              keyboardType={"numeric"}
              multiValidateMode={true}
              onSubmitEditing={onDismiss}
              icon={true}
              preicon={PhoneIcon}
            />
            <TheTextInput
              label={"Password"}
              onChangeText={(e) => setData((prev) => ({...prev, password: e}))}
              customStyle={{marginTop: 0}}
              text={data.password}
              validate={true}
              multiValidateMode={true}
              onSubmitEditing={onDismiss}
              icon={true}
              preicon={PasswordIcon}
            />
            <View style={{marginBottom: 3}}>
              <TheTextInput
                label={"Confirm Password"}
                onChangeText={(e) => setData((prev) => ({...prev, confirmpassword: e}))}
                customStyle={{marginTop: 0}}
                text={data.confirmpassword}
                validate={true}
                multiValidateMode={true}
                onSubmitEditing={onDismiss}
                icon={true}
                preicon={PasswordIcon}
              />
            </View>
            <View style={{marginTop: 15}}>
              <OurButton text={"Login"} />
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
              <Text style={{color: "white", fontSize: 15, fontFamily: fonts.Regular}}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigate("LoginScreen")}>
                <Text style={{color: AppColors.appYellow, fontSize: 15, fontFamily: fonts.Regular}}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export {SignUpScreen};
