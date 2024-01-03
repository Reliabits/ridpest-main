import {TouchableOpacity} from "react-native";
import {Text} from "react-native";
import styled from "styled-components/native";
import AppColors from "../../../utils/ColorApp";
import {CONSTANTS, fonts} from "../../../utils/constants";

const ButtonContainer = styled.View`
  width: 100%;
  background-color: ${AppColors.darkSeaGreen};
  height: ${CONSTANTS.SPACE_44_VERTICAL}px;
  border-radius: ${CONSTANTS.SPACE_12_VERTICAL}px;
  align-items: center;
  justify-content: center;
`;

const OurButton = ({text, onPress, customStyle, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContainer style={customStyle ?? {backgroundColor: AppColors.appYellow, borderRadius: 15, height: 55}}>
        <Text style={{color: AppColors.black, fontSize: 18, fontFamily: fonts.CBold, ...textStyle}}>{text}</Text>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export {OurButton};
