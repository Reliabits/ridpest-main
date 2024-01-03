import {TouchableOpacity} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {useNavigation} from "@react-navigation/native";
import styled from "styled-components/native";
import GoBack from "../../../assets/icons/back.svg";
import Bell from "../../../assets/icons/bell.svg";
import {CONSTANTS} from "../../../utils/constants";
import {Text, View, Image} from "react-native";
import AppColors from "../../../utils/ColorApp";
const HeaderContainer = styled.View`
  height: ${getStatusBarHeight() - 10}px;
  width: 100%;
  padding: 4px 0px;
`;

const CustomHeader = () => {
  const {
    goBack,
    getState: {name},
  } = useNavigation();

  return (
    <HeaderContainer>
      <TouchableOpacity onPress={() => goBack()}>
        <GoBack />
      </TouchableOpacity>
    </HeaderContainer>
  );
};
export const CustomHeader2 = ({title}) => {
  const {goBack, navigate, getState} = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: CONSTANTS.SPACE_54_VERTICAL,
        // borderBottomColor: "gray",
        // borderBottomWidth: 1,
        elevation: 1,
        width: "100%",
        paddingHorizontal: CONSTANTS.SPACE_12_HORIZONTAL,
      }}
    >
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <TouchableOpacity onPress={() => goBack()} style={{marginRight: 10, width: 30, height: "80%"}}>
          <GoBack />
        </TouchableOpacity>
        {getState().routeNames.includes("ProfileStack") && (
          <Text style={{color: "white", fontSize: 22, fontWeight: "600"}}>{title ? title : "LHZLIQUOR"}</Text>
        )}
      </View>

      {getState().routeNames.includes("ProfileStack") && (
        <TouchableOpacity onPress={() => navigate("CartScreen")}>
          <Bell />
        </TouchableOpacity>
      )}
    </View>
  );
};

export {CustomHeader};
