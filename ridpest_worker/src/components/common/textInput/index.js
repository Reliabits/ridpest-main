import React, {useRef, useState} from "react";
import {Text, View} from "react-native";
import {StyleSheet, TextInput, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import {EyeIcon} from "../../../assets/J_icons/eye";
import DateIcon from "../../../assets/icons/dateIcon.svg";
import AppColors from "../../../utils/ColorApp";
import moment from "moment";
import {CONSTANTS, fonts} from "../../../utils/constants";
import DatePicker from "react-native-date-picker";

const textFieldHeight = CONSTANTS.SPACE_40_VERTICAL;
const textSize = CONSTANTS.SPACE_12_VERTICAL;
const titleSize = CONSTANTS.SPACE_9_HORIZONTAL;

const Container = styled.View`
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 20px;
  backgroundcolor: #444444;
`;

const Title = styled.Text`
  color: white;

  font-size: 13px;
  font-family: "Amiko";
`;

const TextInputContainer = styled.View`
  // align-items: center;
  // flex-direction: row;
`;
const StyledTextInput = styled(TextInput)`
  color: white;
  font-family: "Amiko";
  font-size: 13px;
`;

const TheTextInput = ({
  inputHeight = textFieldHeight,
  label = "",
  placeHolder,
  customStyle,
  onChangeText,
  icon = false,
  preicon: Preicon,
  isSecure = false,
  text = "",
  validate = true,
  multiValidateMode = false,
  keyboardType = "default",
  onSubmitEditing,
  autoCapitalize = "none",
  editable,
  onPress,
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(isSecure);
  const [changeOnFocus, setChangeOnFocus] = useState(false);
  const inputRef = useRef();

  return (
    <View
      style={{
        backgroundColor: changeOnFocus ? "black" : "#444444",
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderColor: "#444444",
        borderWidth: 1,
        marginBottom: 13,
      }}
    >
      {label !== "" && <Title style={{fontSize: 12, fontFamily: fonts.Regular}}>{label}</Title>}
      <TouchableOpacity onPress={onPress}>
        <View style={{height: 28, flexDirection: "row"}}>
          {icon && (
            <View style={{justifyContent: "center", alignItems: "center"}}>
              <Preicon />
            </View>
          )}
          <TextInput
            // height={inputHeight}
            keyboardType={keyboardType}
            selectionColor="white"
            placeholder={placeHolder}
            placeholderTextColor={"#rgba(0,0,0,0.3)"}
            onChangeText={onChangeText}
            value={text}
            secureTextEntry={hidePassword}
            underlineColorAndroid="transparent"
            onSubmitEditing={onSubmitEditing}
            autoCapitalize={autoCapitalize}
            onBlur={() => setChangeOnFocus(false)}
            onFocus={() => setChangeOnFocus(true)}
            // editable={editable}
            pointerEvents={onPress ? "none" : "auto"}
            // multiline
            // textAlignVertical={'top'}
            style={{flex: 1, height: 33, paddingVertical: 0, fontSize: 16}}
          />

          {isSecure && (
            <TouchableOpacity style={styles.hidePass} onPress={() => setHidePassword(!hidePassword)}>
              {<EyeIcon color={hidePassword ? AppColors.lightGray2 : AppColors.appYellow} />}
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
const TheTextInput2 = ({
  inputHeight = textFieldHeight,
  placeHolder,
  customStyle,
  onChangeText,
  icon = false,
  preicon: Preicon,
  isSecure = false,
  text = "",
  validate = true,
  multiValidateMode = false,
  keyboardType = "default",
  onSubmitEditing,
  autoCapitalize = "none",
  editable,
  onPress,
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(isSecure);
  const inputRef = useRef();

  return (
    <View
      style={{
        backgroundColor: "transparent",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: "#858585",
        borderWidth: 1,
        marginTop: 5,
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <View style={{height: 28, flexDirection: "row"}}>
          {icon && (
            <View style={{justifyContent: "center", alignItems: "center"}}>
              <Preicon />
            </View>
          )}
          <TextInput
            // height={inputHeight}
            keyboardType={keyboardType}
            selectionColor="white"
            placeholder={placeHolder}
            placeholderTextColor={"#rgba(0,0,0,0.3)"}
            onChangeText={onChangeText}
            value={text}
            secureTextEntry={hidePassword}
            underlineColorAndroid="transparent"
            onSubmitEditing={onSubmitEditing}
            autoCapitalize={autoCapitalize}
            // editable={editable}
            pointerEvents={onPress ? "none" : "auto"}
            // multiline
            // textAlignVertical={'top'}
            style={{flex: 1, height: 33, paddingVertical: 0, fontSize: 18, fontFamily: fonts.Medium}}
          />

          {isSecure && (
            <TouchableOpacity style={styles.hidePass} onPress={() => setHidePassword(!hidePassword)}>
              {<EyeIcon color={hidePassword ? AppColors.lightGray2 : AppColors.appYellow} />}
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
const DateInput = ({
  inputHeight = textFieldHeight,
  placeHolder,
  customStyle,
  onChangeText,
  icon = false,
  preicon: Preicon,
  isSecure = false,
  text = "",
  validate = true,
  multiValidateMode = false,
  onSubmitEditing,
  editable,
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(isSecure);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  return (
    <View
      style={{
        backgroundColor: "transparent",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: "#858585",
        borderWidth: 1,
        marginTop: 5,
      }}
    >
      <TouchableOpacity onPress={() => setOpen(true)}>
        <View style={{height: 28, flexDirection: "row"}}>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false);
              onChangeText(moment(date).format("YYYY/MM/DD"));
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <View
            // height={inputHeight}
            // editable={editable}
            // multiline
            // textAlignVertical={'top'}
            style={{}}
          />
          <Text style={{flex: 1, height: 33, paddingVertical: 0, fontSize: 18, fontFamily: fonts.Medium}}>{text}</Text>

          <TouchableOpacity style={styles.hidePass} onPress={() => setHidePassword(!hidePassword)}>
            {<DateIcon />}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  hidePass: {
    padding: 7,
  },
  textValidate: {
    color: "sea-green",
  },
  onFocus: {
    borderBottomColor: AppColors.darkSeaGreen,

    borderBottomWidth: 2,
  },
});

export {TheTextInput, TheTextInput2, DateInput};
