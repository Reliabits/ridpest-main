import {SafeAreaView, ScrollView, View, Image, Platform} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {CustomHeader2, FocusAwareStatusBar} from "../components/common";
import AppColors from "../utils/ColorApp";

const HomeScreen = () => {
  return (
    <View
      style={{
        backgroundColor: AppColors.black,
        flex: 1,
        paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : getStatusBarHeight(),
      }}
    >
      <FocusAwareStatusBar barStyle={"light-content"} translucent backgroundColor={AppColors.black} />

      <CustomHeader2 />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View></View>
      </ScrollView>
    </View>
  );
};

export {HomeScreen};
