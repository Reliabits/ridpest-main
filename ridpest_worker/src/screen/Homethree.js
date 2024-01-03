import { View, Text, SafeAreaView,ScrollView, Image, StatusBar , TouchableOpacity} from 'react-native'
import React from 'react'
import AppColors from '../utils/ColorApp';
import Header from '../components/common/header/Header';
import dot1 from '../assets/images/dot1.png';
import Line from '../assets/images/Line.png';
import dot2 from '../assets/images/dot2.png';

import fonts from '../assets/fonts';
import { useNavigation } from '@react-navigation/native';
import { Divider, VStack } from 'native-base';
import Octicons from 'react-native-vector-icons/Octicons'
import insect1 from '../assets/images/insect1.png';
import insect2 from '../assets/images/insect2.png';
import upload from '../assets/images/upload.png'


const Homethree = () => {
    const navigation = useNavigation()
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

                  <View style={{ width: '100%', paddingHorizontal: 30, marginTop: 28, }}>
                      
                      <Text style={{fontFamily:fonts.OpenSansBold, fontSize:24, color:'white'}}>
                          Field Services Report
                      </Text>
                      <Text style={{fontFamily:fonts.OpenSansSemiBold, fontSize:18, color:'#979797'}}>
                          ABC Company Pte Ltd
                      </Text>
                      

                      <View style={{ width: '100%', marginTop: 18 }}>
                          
                          <Text style={{
                              fontFamily: fonts.OpenSansSemiBold, fontSize: 15, color: '#FCE029'}}>
                              Check in Onsite
                          </Text>
                          <Text style={{fontFamily:fonts.OpenSansSemiBold, fontSize:12, color:'white'}}>
                              ABC Company
                          </Text>

                          <Divider style={{
                              marginTop: 18, backgroundColor: "#444444"}} />
                          
                      </View>

                      <View style={{ width: '100%', marginTop: 18 }}>

                          <Text style={{
                              fontFamily: fonts.OpenSansSemiBold, fontSize: 15, color: '#FCE029'
                          }}>
                              Area of Work
                          </Text>
                          <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white' }}>
                              Work Area 1
                          </Text>

                          <Divider style={{
                              marginTop: 18, backgroundColor: "#444444"
                          }} />

                      </View>

                      <View style={{ width: '100%', marginTop: 18 }}>

                          <Text style={{
                              fontFamily: fonts.OpenSansSemiBold, fontSize: 15, color: '#FCE029'
                          }}>Task checklist 
                          </Text>

                          <View style={{flexDirection:"row", alignItems:'center'}}>
                              <Octicons name="dot" size={10} color={"#FCE029"} />
                          <Text style={{ paddingStart:10,fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white' }}>
                                  Task List 1
                          </Text>
                          </View>

                          <View style={{ flexDirection: "row", alignItems: 'center' }}>
                              <Octicons name="dot" size={10} color={"#FCE029"} />
                              <Text style={{ paddingStart: 10, fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white' }}>
                                  Task List 2
                              </Text>
                          </View>

                          <Divider style={{
                              marginTop: 18, backgroundColor: "#444444"
                          }} />
                      </View>

                      <View style={{ width: '100%', marginTop: 18 }}>

                          <Text style={{
                              fontFamily: fonts.OpenSansSemiBold, fontSize: 15, color: '#FCE029'
                          }}>Equiments
                          </Text>

                          <View style={{ flexDirection: "row", alignItems: 'center' }}>
                              <Octicons name="dot" size={10} color={"#FCE029"} />
                              <Text style={{ paddingStart: 10, fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white' }}>
                                  Equiments 1
                              </Text>
                          </View>

                          <View style={{ flexDirection: "row", alignItems: 'center' }}>
                              <Octicons name="dot" size={10} color={"#FCE029"} />
                              <Text style={{ paddingStart: 10, fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white' }}>
                                  Equiments 2
                              </Text>
                          </View>

                          <Divider style={{
                              marginTop: 18, backgroundColor: "#444444"
                          }} />
                      </View>

                      <View style={{ width: '100%', marginTop: 18 }}>

                          <Text style={{
                              fontFamily: fonts.OpenSansSemiBold, fontSize: 15, color: '#FCE029'
                          }}>Chemicals
                          </Text>

                          <View style={{ flexDirection: "row", alignItems: 'center' }}>
                              <Octicons name="dot" size={10} color={"#FCE029"} />
                              <Text style={{ paddingStart: 10, fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white' }}>
                                  Chemicals 1
                              </Text>
                          </View>

                          <View style={{ flexDirection: "row", alignItems: 'center' }}>
                              <Octicons name="dot" size={10} color={"#FCE029"} />
                              <Text style={{ paddingStart: 10, fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white' }}>
                                  Chemicals 2
                              </Text>
                          </View>

                          <Divider style={{
                              marginTop: 18, backgroundColor: "#444444"
                          }} />
                      </View>


                      <View style={{ width: '100%', marginTop: 18 }}>

                          <Text style={{
                              fontFamily: fonts.OpenSansSemiBold, fontSize: 15, color: '#FCE029'
                          }}>
                              Total Hours
                          </Text>
                          <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white' }}>
                              07 Hours
                          </Text>

                          <Divider style={{
                              marginTop: 18, backgroundColor: "#444444"
                          }} />

                      </View>


                      <View style={{ width: '100%', marginTop: 18 }}>

                          <Text style={{
                              fontFamily: fonts.OpenSansSemiBold, fontSize: 15, color: '#FCE029'
                          }}>
                              Start time
                          </Text>
                          <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white' }}>
                              07 : 15 AM
                          </Text>

                          <Divider style={{
                              marginTop: 18, backgroundColor: "#444444"
                          }} />

                      </View>


                      <View style={{ width: '100%', marginTop: 18 }}>

                          <Text style={{
                              fontFamily: fonts.OpenSansSemiBold, fontSize: 15, color: '#FCE029'
                          }}>
                              End time
                          </Text>
                          <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white' }}>
                              10 : 08 PM
                          </Text>

                          <Divider style={{
                              marginTop: 18, backgroundColor: "#444444"
                          }} />

                      </View>

                  </View>

                  <View style={{ width: '100%', paddingHorizontal: 30, marginTop: 24, }}>
                      <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 15, color: '#FCE029', }}>
                          Before
                      </Text>

                          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                          <View style={{ flexDirection: 'row', marginTop: 8, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                  <Image style={{ width: 171, height: 171, }} source={insect1} />
                                  <Image style={{ width: 171, height: 171, marginStart: 10 }} source={insect2} />
                                 
                          </View>
                          </ScrollView>
                          <Divider style={{
                              marginTop: 18, backgroundColor: "#444444"
                          }} />

                      </View>

                 


                  <View style={{ width: '100%', paddingHorizontal: 30, marginTop: 24, }}>
                      <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 15, color: '#FCE029', }}>
                          After
                      </Text>


                          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                      <View style={{ flexDirection: 'row', marginTop: 8, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            
                                  <Image style={{ width: 171, height: 171, }} source={insect1} />
                                  <Image style={{ width: 171, height: 171, marginStart: 10 }} source={insect2} />
                              </View>
                      </ScrollView>

                      <Text style={{marginTop:26,color:'#FCE029', fontFamily:fonts.OpenSansSemiBold, fontSize:15}}>
                          Signature
                      </Text>
                      <Divider style={{
                          marginTop: 59, backgroundColor: "#444444"
                      }} />
                      
                  </View>
                  
                  <View style={{ width: '100%', paddingHorizontal: 30, marginTop: 30 }}>
                      {/* <Text style={{ fontFamily: fonts.OpenSansSemiBold, color: 'white', fontSize: 15 }}>
                          
                      </Text> */}



                      <TouchableOpacity style={{ width: '100%', borderRadius: 5, marginTop: 14, flexDirection: 'row', height: 83, paddingHorizontal: 22.31, alignItems: 'center', borderWidth: 1, borderColor: '#444444', borderStyle: 'dashed', backgroundColor: '#101518' }}>
                          <Image source={upload} />

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

                  <View style={{ width: '100%', paddingHorizontal: 51, justifyContent: 'center', alignItems: 'center',  marginTop: 54 }}>
                      <TouchableOpacity onPress={() => { navigation.navigate("Homefour") }} style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#C4C4C4', borderRadius: 20, }}>
                          <Text style={{ fontFamily: fonts.OpenSansSemiBold, color: 'black', fontSize: 16 }}>
                              Save as PDF
                          </Text>

                      </TouchableOpacity>
                  </View>

                  <View style={{ width: '100%', paddingHorizontal: 51, justifyContent: 'center', alignItems: 'center', marginBottom: 100, marginTop: 54 }}>
                      <TouchableOpacity onPress={() => { navigation.navigate("Homethree") }} style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FCE029', borderRadius: 20, }}>
                          <Text style={{ fontFamily: fonts.OpenSansSemiBold, color: 'black', fontSize: 16 }}>
                              Submit
                          </Text>

                      </TouchableOpacity>
                  </View>
                  

                
              </ScrollView>
          </SafeAreaView>
          </View>
  )
}

export default Homethree