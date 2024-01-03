import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image, StatusBar, TextInput } from 'react-native'
import React from 'react'
import AppColors from '../utils/ColorApp';
import Header from '../components/common/header/Header';
import dot1 from '../assets/images/dot1.png';
import Line from '../assets/images/Line.png';
import fonts from '../assets/fonts';
import pdf from '../assets/images/pdf.png'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Homefour = () => {
  return (
      <View style={{ backgroundColor: AppColors.black, flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }}>
              <StatusBar
                  animated={true}
                  backgroundColor="#101518"
                  barStyle="white-content"
              />
              <Header />
              <ScrollView >
                  <View
                      style={{
                          width: '100%',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                          marginTop: 28,
                      }}>
                      <Image source={dot1} />
                      <Image style={{ tintColor: '#FCE029' }} source={Line} />
                      <Image source={dot1} />
                      <Image style={{ tintColor: '#FCE029' }} source={Line} />
                      <Image source={dot1} />

                  </View>

                  <View style={{width:'100%', paddingHorizontal:30,marginTop:53 }}>
                      <Text style={{ fontFamily: fonts.OpenSansSemiBold, color: 'white', fontSize: 15 }}>
                        Email Address
                      </Text>

                      <TextInput style={{
                          width: '100%', height: 48, borderRadius: 5, borderWidth: 1, borderColor: '#444444', marginTop: 8, color: "#979797", backgroundColor: '#101518'
                      }}  placeholderTextColor={"#979797"} />
                  </View>


                  
                     



                      <View style={{ width: '100%', borderRadius: 5, marginTop: 25, flexDirection: 'row', height: 83,  alignItems: 'center',paddingHorizontal:30, justifyContent: 'space-between' }}>
                          
                          <View style={{width:'70%', flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
                          <Image source={pdf} />

                          <View  style={{marginStart:8}}>

                              <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 16, color: 'white' }}>
                                  Click to upload.
                              </Text>
                              <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 13, color: 'white' }}>
                                  File size no more than 10MB
                              </Text>

                          </View>
                          </View>
                          <TouchableOpacity style={{width:'30%', flexDirection:'row', justifyContent:"flex-end", alignItems:'center'}}>
                              <AntDesign name="delete" color="red" size={15.75} />
                          </TouchableOpacity>

                      </View>

                

                  <View style={{ width: '100%', paddingHorizontal: 30, marginTop: 30 }}>
                      {/* <Text style={{ fontFamily: fonts.OpenSansSemiBold, color: 'white', fontSize: 15 }}>
                          
                      </Text> */}



                      <TouchableOpacity style={{ width: '100%', borderRadius: 5, marginTop: 14, flexDirection: 'row', height: 83, paddingHorizontal: 22.31, alignItems: 'center', borderWidth: 1, borderColor: '#444444', borderStyle: 'dashed', backgroundColor: '#101518' }}>
                          <Image source={pdf} />

                          <View style={{ marginStart: 17, }}>

                              <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 16, color: 'white' }}>
                                  Click to upload.
                              </Text>
                              <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 13, color: 'white' }}>
                                  File size no more than 10MB
                              </Text>

                          </View>

                      </TouchableOpacity>

                  </View>


                  <View style={{ width: '100%', paddingHorizontal: 51, justifyContent: 'center', alignItems: 'center', marginBottom: 100, marginTop: 54 }}>
                      <TouchableOpacity  style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FCE029', borderRadius: 20, }}>
                          <Text style={{ fontFamily: fonts.OpenSansSemiBold, color: 'black', fontSize: 16 }}>
                              Send
                          </Text>

                      </TouchableOpacity>
                  </View>
              </ScrollView>
          </SafeAreaView>
          </View>
  )
}

export default Homefour