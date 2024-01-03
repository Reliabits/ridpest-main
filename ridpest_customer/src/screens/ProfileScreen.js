import {useNavigation} from "@react-navigation/native";
import {Image, Platform, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {CustomHeader2, FocusAwareStatusBar, OurButton} from "../components/common";
import AppColors from "../utils/ColorApp";
import {fonts} from "../utils/constants";

const ProfileScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View
      style={{
        backgroundColor: AppColors.black,
        flex: 1,
        paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : getStatusBarHeight(),
      }}
    >
      <FocusAwareStatusBar barStyle={"light-content"} translucent backgroundColor={AppColors.black} />
      <View style={{paddingHorizontal: 10}}>
        <CustomHeader2 />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: AppColors.mainBG,
            height: 350,
            width: "100%",
            overflow: "hidden",
            justifyContent: "space-between",
            paddingBottom: 10,
          }}
        >
          <View
            style={{
              backgroundColor: AppColors.black,
              height: 400,
              position: "absolute",
              top: "-56%",

              width: "100%",
              borderRadius: 200,
              transform: [{scaleX: 1.5}],
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          ></View>
          <View style={{position: "relative", zIndex: 3, alignSelf: "center", alignItems: "center"}}>
            <Image
              source={{uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}}
              style={{width: 80, height: 80, borderRadius: 80 / 2}}
            />
            <Text
              style={{
                textTransform: "uppercase",
                fontSize: 33,
                color: AppColors.appYellow,
                fontFamily: fonts.CBold,
                marginVertical: 10,
              }}
            >
              JOHN DEE
            </Text>

            <TouchableOpacity
              style={{
                borderColor: AppColors.appYellow,
                borderWidth: 1,
                borderRadius: 20,
                paddingHorizontal: 22,
                paddingVertical: 7,
              }}
              onPress={() => navigate("EditProfileScreen")}
            >
              <Text style={{color: "white", fontSize: 17, textAlign: "center"}}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={{paddingHorizontal: 20}}>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 13, color: AppColors.textLabel}}>Mobile Number</Text>
              <Text style={{fontSize: 22, fontFamily: fonts.Bold, color: "white"}}>+65 12345 67890</Text>
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 13, color: AppColors.textLabel}}>Email</Text>
              <Text style={{fontSize: 22, fontFamily: fonts.Bold, color: "white"}}>test@gmail.com</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: AppColors.mainBG,
            width: "100%",
            paddingVertical: 30,
            paddingHorizontal: 20,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              textTransform: "uppercase",
              fontSize: 31,
              color: AppColors.appYellow,
              fontFamily: fonts.CBold,
              marginVertical: 10,
            }}
          >
            Personal Details
          </Text>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>First Name</Text>
            <Text style={{fontSize: 22, fontFamily: fonts.Bold, color: "white"}}>John</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>Last Name</Text>
            <Text style={{fontSize: 22, fontFamily: fonts.Bold, color: "white"}}>Doe</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>BirthDay(optional)</Text>
            <Text style={{fontSize: 22, fontFamily: fonts.Bold, color: "white"}}>DD/MM/YYYY</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>Identity(optional)</Text>
            <Text style={{fontSize: 22, fontFamily: fonts.Bold, color: "white"}}>Male</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>Married(optional)</Text>
            <Text style={{fontSize: 22, fontFamily: fonts.Bold, color: "white"}}>Yes</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: AppColors.mainBG,
            width: "100%",
            paddingVertical: 30,
            paddingHorizontal: 20,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              textTransform: "uppercase",
              fontSize: 31,
              color: AppColors.appYellow,
              fontFamily: fonts.CBold,
              marginVertical: 10,
            }}
          >
            Address
          </Text>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>Postal Code</Text>
            <Text style={{fontSize: 22, fontFamily: fonts.Bold, color: "white"}}>Eg. 56000</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>Address</Text>
            <Text style={{fontSize: 22, fontFamily: fonts.Bold, color: "white"}}>Flat No, House No, Building</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>Unit Number</Text>
            <Text style={{fontSize: 22, fontFamily: fonts.Bold, color: "white"}}>Area, Street</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>Building name</Text>
            <Text style={{fontSize: 22, fontFamily: fonts.Bold, color: "white"}}>XYZ Name</Text>
          </View>
          {/* <View>
            <OurButton text={''}/>
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export {ProfileScreen};
