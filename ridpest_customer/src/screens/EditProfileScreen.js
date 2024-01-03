import {useState} from "react";
import {Image, Keyboard, Platform, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {CustomHeader2, DateInput, FocusAwareStatusBar, OurButton, TheTextInput2} from "../components/common";
import AppColors from "../utils/ColorApp";
import {fonts} from "../utils/constants";
import CheckBox from "@react-native-community/checkbox";

const EditProfileScreen = () => {
  const [checkBoxData, setCheckBoxData] = useState();
  const [data, setData] = useState({
    mobile: null,
    email: null,
    firstName: null,
    lastName: null,
    birthday: null,
    identity: null,
    married: null,
    postalCode: null,
    address: null,
    unitNumber: null,
    buildingName: null,
  });
  const onDismiss = () => {
    Keyboard.dismiss;
  };

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
            height: 400,
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
              top: "-54%",

              width: "100%",
              borderRadius: 200,
              transform: [{scaleX: 1.5}],
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          ></View>
          <View style={{position: "relative", zIndex: 3, alignSelf: "center", alignItems: "center", marginTop: 20}}>
            <View>
              <Image
                source={{uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}}
                style={{width: 80, height: 80, borderRadius: 80 / 2}}
              />
              <TouchableOpacity
                style={{
                  borderColor: AppColors.appYellow,
                  backgroundColor: "#000000be",
                  position: "absolute",
                  bottom: "-10%",
                  borderWidth: 1,
                  borderRadius: 20,
                  paddingHorizontal: 15,
                  paddingVertical: 3,
                  alignSelf: "center",
                }}
              >
                <Text style={{color: "white", fontSize: 17, textAlign: "center"}}>Edit</Text>
              </TouchableOpacity>
            </View>
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
          </View>

          <View style={{paddingHorizontal: 20}}>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 13, color: AppColors.textLabel}}>Mobile Number</Text>
              <TheTextInput2
                onChangeText={(e) => setData((prev) => ({...prev, mobile: e}))}
                customStyle={{marginTop: 0}}
                text={data.mobile}
                validate={true}
                multiValidateMode={true}
                onSubmitEditing={onDismiss}
                inputHeight={40}
                keyboardType={"numeric"}
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 13, color: AppColors.textLabel}}>Email</Text>
              <TheTextInput2
                onChangeText={(e) => setData((prev) => ({...prev, email: e}))}
                customStyle={{marginTop: 0}}
                text={data.email}
                validate={true}
                multiValidateMode={true}
                onSubmitEditing={onDismiss}
                inputHeight={40}
              />
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
            <TheTextInput2
              onChangeText={(e) => setData((prev) => ({...prev, firstName: e}))}
              customStyle={{marginTop: 0}}
              text={data.firstName}
              validate={true}
              multiValidateMode={true}
              onSubmitEditing={onDismiss}
              inputHeight={40}
            />
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>Last Name</Text>
            <TheTextInput2
              onChangeText={(e) => setData((prev) => ({...prev, lastName: e}))}
              customStyle={{marginTop: 0}}
              text={data.lastName}
              validate={true}
              multiValidateMode={true}
              onSubmitEditing={onDismiss}
              inputHeight={40}
            />
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>BirthDay(optional)</Text>
            <DateInput
              onChangeText={(e) => setData((prev) => ({...prev, birthday: e}))}
              customStyle={{marginTop: 0}}
              text={data.birthday}
              validate={true}
              multiValidateMode={true}
              onSubmitEditing={onDismiss}
              inputHeight={40}
            />
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>Identity(optional)</Text>
            <View style={{flexDirection: "row", marginVertical: 10}}>
              <TouchableOpacity
                style={{
                  borderColor: AppColors.appYellow,
                  backgroundColor: "#000000be",
                  borderWidth: 1,
                  borderRadius: 20,
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  alignSelf: "center",
                  marginRight: 20,
                }}
              >
                <Text style={{color: "white", fontSize: 16, textAlign: "center"}}>Woman</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderColor: AppColors.appYellow,
                  backgroundColor: "#000000be",
                  borderWidth: 1,
                  borderRadius: 20,
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  alignSelf: "center",
                }}
              >
                <Text style={{color: "white", fontSize: 16, textAlign: "center"}}>Man</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>Married(optional)</Text>
            <View style={{flexDirection: "row", marginVertical: 10}}>
              <TouchableOpacity
                style={{
                  borderColor: AppColors.appYellow,
                  backgroundColor: "#000000be",
                  borderWidth: 1,
                  borderRadius: 20,
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  alignSelf: "center",
                  marginRight: 20,
                }}
              >
                <Text style={{color: "white", fontSize: 16, textAlign: "center"}}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderColor: AppColors.appYellow,
                  backgroundColor: "#000000be",
                  borderWidth: 1,
                  borderRadius: 20,
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  alignSelf: "center",
                }}
              >
                <Text style={{color: "white", fontSize: 16, textAlign: "center"}}>No</Text>
              </TouchableOpacity>
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
            Address
          </Text>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>Postal Code</Text>
            <TheTextInput2
              onChangeText={(e) => setData((prev) => ({...prev, postalCode: e}))}
              customStyle={{marginTop: 0}}
              text={data.postalCode}
              validate={true}
              multiValidateMode={true}
              onSubmitEditing={onDismiss}
              inputHeight={40}
            />
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>Address</Text>
            <TheTextInput2
              onChangeText={(e) => setData((prev) => ({...prev, address: e}))}
              customStyle={{marginTop: 0}}
              text={data.address}
              validate={true}
              multiValidateMode={true}
              onSubmitEditing={onDismiss}
              inputHeight={40}
            />
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>Unit Number</Text>
            <TheTextInput2
              onChangeText={(e) => setData((prev) => ({...prev, unitNumber: e}))}
              customStyle={{marginTop: 0}}
              text={data.unitNumber}
              validate={true}
              multiValidateMode={true}
              onSubmitEditing={onDismiss}
              inputHeight={40}
            />
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 13, color: AppColors.textLabel}}>Building name</Text>
            <TheTextInput2
              onChangeText={(e) => setData((prev) => ({...prev, buildingName: e}))}
              customStyle={{marginTop: 0}}
              text={data.buildingName}
              validate={true}
              multiValidateMode={true}
              onSubmitEditing={onDismiss}
              inputHeight={40}
            />
          </View>
          <View style={{padding: 20}}>
            <OurButton text={"Save Changes"} />
          </View>

          <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <CheckBox
              style={{color: AppColors.appYellow, marginRight: 10}}
              value={checkBoxData}
              onValueChange={(newValue) => {
                setCheckBoxData(newValue);
              }}
              tintColor={AppColors.appYellow}
              onCheckColor={AppColors.appYellow}
              onFillColor={AppColors.appYellow}
            />

            <Text style={{fontSize: 14, color: "white"}}>I agree to </Text>
            <Text style={{fontSize: 14, color: AppColors.appYellow}}>Terms & Condition </Text>
            <Text style={{fontSize: 14, color: "white"}}>and </Text>
            <Text style={{fontSize: 14, color: AppColors.appYellow}}>Privacy Policy</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export {EditProfileScreen};
