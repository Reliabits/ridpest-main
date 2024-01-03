import { View, Text, SafeAreaView, StatusBar, Image, StyleSheet , TextInput, Pressable, TouchableOpacity, ScrollView} from 'react-native'
import React, { useState , useRef} from 'react'
import fonts from '../assets/fonts'
import AppColors from '../utils/ColorApp'
import R from '../assets/images/logo1.png'
import {TheTextInput} from '../components/common'
import { useNavigation } from '@react-navigation/native'
import Sperson from '../assets/icons/sPerson.svg'
import PasswordIcon from "../assets/icons/password.svg";
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Gmail from '../assets/images/gmail.png'
import Facebook from '../assets/images/facebook.png'

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(true);
    // const [hidePassword, setHidePassword] = useState(isSecure);
    const [changeOnFocus, setChangeOnFocus] = useState(false);
    const inputRef = useRef();
    const navigation = useNavigation();
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
      <View style={{ backgroundColor: AppColors.black, flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }} >
              <StatusBar animated={true} backgroundColor="#101518" barStyle="white-content" />
              <ScrollView>
              <View style={styles.logo}>
                  <Image source={R} />
              </View>
              <View style={styles.mainText}>
                  <Text style={{color:AppColors.appYellow, fontFamily:fonts.OpenSansBold, fontSize:24}}>
                      Let’s Sign You In
                  </Text>
              </View>

              <View style={styles.welcometext}>
                  <Text style={{ color: AppColors.textLabel, fontFamily: fonts.OpenSansSemiBold, fontSize: 24 }}>
                      Welcome back
                  </Text>
              </View>

              <View style={{width:'100%', paddingHorizontal:51, marginTop: 14}}>
                  <TextInput
                      placeholder='Full Name'
                      
                      style={{ width: '100%', color: 'white', height: 58, backgroundColor:'#444444' , borderRadius:5}}
                      placeholderTextColor={"white"}
                    //   underlineColorAndroid="transparent"
                         onBlur={() => setChangeOnFocus(false)}
                      onFocus={() => setChangeOnFocus(true)}
                      onSubmitEditing={onDismiss}
                      inputHeight={100}
                      onChangeText={(e) => setData((prev) => ({ ...prev, fullname: e }))}
                      customStyle={{ marginTop: 0 }}
                      text={data.fullname}
                      multiline={true}
                      validate={true}
                      multiValidateMode={true}
                  /> 
                  </View>
                  
                <View style={{paddingHorizontal:51, marginTop:16}}>
              <View style={styles.searchSection}>
                  {/* <AntDesign style={styles.searchIcon} name="lock" size={20} color="#A9A9A9" /> */}
                  <TextInput
                      style={styles.input}
                          placeholder="Enter Password"
                          placeholderTextColor={"white"}
                      secureTextEntry={passwordVisible}
                      underlineColorAndroid="transparent"
                  // onChangeText={(text) => setPassword(text)}
                  />
                          <Feather color={"#FCE029"} name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} size={15} style={styles.icon} />
                  </View>
              </View>

              <View style={{ width: "100%", justifyContent: "flex-end", alignItems: "center", flexDirection: 'row' }}>
                  <Text style={{fontFamily:fonts.OpenSansSemiBold, fontSize:12, paddingHorizontal:51, color:'white', marginTop:12}}>
                      Forget your password?
                  </Text>
              </View>

              <View style={{ width: '100%', paddingHorizontal: 51, justifyContent: 'center', alignItems: 'center', marginTop:26 }}>
                  <TouchableOpacity onPress={()=> {navigation.navigate("BottomNavigation")}} style={{ width:'100%', height:50,justifyContent: 'center', alignItems: 'center', backgroundColor: AppColors.appYellow, borderRadius: 20, }}>
                      <Text style={{fontFamily:fonts.OpenSansSemiBold, fontSize:16, color:"black"}}>
                          Sign In
                      </Text>
                  </TouchableOpacity>
              </View>

              <View style={{width:'100%', justifyContent:'center', alignItems:'center', marginTop:19}}>
                  <Text style={{fontFamily:fonts.OpenSansMedium, fontSize:12, color:'white'}}>
                      Or continue with
                </Text>
              </View>

                  <View style={{ width: '100%', marginTop: 90, flexDirection: 'row', alignItems: "center" , justifyContent:"center"}}>
                      <TouchableOpacity style={{ width: 60, height: 60, justifyContent: "center", alignItems: 'center', backgroundColor:'#262728', marginEnd:10, borderRadius:5}}>
                          <Image source={Gmail} />
                          
                      </TouchableOpacity>

                      <TouchableOpacity style={{ width: 60, height: 60, justifyContent: "center", alignItems: 'center', backgroundColor:'#262728',marginStart:10, borderRadius:5 }}>
                          <Image source={Facebook} />

                      </TouchableOpacity>
                  
                  </View>
                  
                  <View style={{ marginTop: 27, width: '100%', justifyContent: "center", alignItems: 'center' ,flexDirection:'row'}}>
                      
                      <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 14, color:"#B9B9B9"}}>
                          Don’t have an account?
                         
                      </Text>
                      <Text style={{ fontFamily: fonts.OpenSansBold, fontSize: 14, color: AppColors.appYellow, paddingStart:10}}>
                          SignUp
                      </Text>
                      
                  </View>

</ScrollView>

          </SafeAreaView>
      
    </View>
  )
}
const styles = StyleSheet.create({
    searchSection: {
        width:'100%',
        
        height: 58,
        // paddingHorizontal:51,
        flexDirection: 'row',
        
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#444444',
        borderRadius: 5,
       
    },
    searchIcon: {
        padding: 10,
    },
    icon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        paddingStart:5,
        backgroundColor: "#444444",
        color: 'white',
    },

    welcometext: {
        width: '100%',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10  
    },
    mainText: {
        width: '100%', 
        justifyContent: "center",
        alignItems: 'center',
        marginTop:24
    },
    logo: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:48
    }
})

export default Login