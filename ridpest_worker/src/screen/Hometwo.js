import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
} from 'react-native';
import React from 'react';
import AppColors from '../utils/ColorApp';
import Header from '../components/common/header/Header';
import dot1 from '../assets/images/dot1.png';
import Line from '../assets/images/Line.png';
import dot2 from '../assets/images/dot2.png';
import insect1 from '../assets/images/insect1.png';
import insect2 from '../assets/images/insect2.png';
import fonts from '../assets/fonts';
import DatePicker from 'react-native-date-picker';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import upload from '../assets/images/upload.png'
import { VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Hometwo = () => {
    const navigation = useNavigation()
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [dateValue, setDateValue] = React.useState('');
  const [selectedColor, setSelectedColor] = React.useState('AM');
  const [selectedColorOne, setSelectedColorOne] = React.useState('PM');

  return (
    <View style={{backgroundColor: AppColors.black, flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
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
            <Image style={{tintColor: '#FCE029'}} source={Line} />
            <Image source={dot1} />
            <Image source={Line} />
            <Image source={dot2} />
          </View>
          <View style={{width: '100%', paddingHorizontal: 30, marginTop: 28}}>
            <Text
              style={{
                fontFamily: fonts.OpenSansSemiBold,
                fontSize: 15,
                color: 'white',
              }}>
              Start time
            </Text>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 8,
              }}>
              <TextInput
                keyboardType="numeric"
                style={{
                  color: 'white',
                  width: 38,
                  height: 38,
                  backgroundColor: '#101518',
                  borderRadius: 5,
                  paddingStart: 10,
                }}
                placeholderTextColor={'white'}
                placeholder="07"
              />
              <Entypo name="dots-two-vertical" size={15} color="white" />
              <TextInput
                keyboardType="numeric"
                style={{
                  color: 'white',
                  borderRadius: 5,
                  backgroundColor: '#101518',
                  width: 38,
                  height: 38,
                  paddingStart: 10,
                }}
                placeholderTextColor={'white'}
                placeholder="15"
              />

              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  marginStart: 10,
                  width: 28,
                  height: 38,
                  borderColor: '#444444',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedColor('AM');
                  }}
                  style={{
                    backgroundColor:
                      selectedColor === 'AM' ? '#FCE029' : '#101518',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: selectedColor === 'AM' ? 'black' : '#979797',
                      fontFamily: fonts.OpenSansSemiBold,
                      fontSize: 12,
                    }}>
                    AM
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedColor('PM');
                  }}
                  style={{
                    backgroundColor:
                      selectedColor === 'PM' ? '#FCE029' : '#101518',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: selectedColor === 'PM' ? 'black' : '#979797',
                    }}>
                    PM
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{width: '100%', paddingHorizontal: 30, marginTop: 28}}>
            <Text
              style={{
                fontFamily: fonts.OpenSansSemiBold,
                fontSize: 15,
                color: 'white',
              }}>
              End time
            </Text>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 8,
              }}>
              <TextInput
                keyboardType="numeric"
                style={{
                  color: 'white',
                  width: 38,
                  height: 38,
                  backgroundColor: '#101518',
                  borderRadius: 5,
                  paddingStart: 10,
                }}
                placeholderTextColor={'white'}
                placeholder="11"
              />
              <Entypo name="dots-two-vertical" size={15} color="white" />
              <TextInput
                keyboardType="numeric"
                style={{
                  color: 'white',
                  borderRadius: 5,
                  backgroundColor: '#101518',
                  width: 38,
                  height: 38,
                  paddingStart: 10,
                }}
                placeholderTextColor={'white'}
                placeholder="08"
              />

              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  marginStart: 10,
                  width: 28,
                  height: 38,
                  borderColor: '#444444',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedColorOne('AM');
                  }}
                  style={{
                    backgroundColor:
                      selectedColorOne === 'AM' ? '#FCE029' : '#101518',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: selectedColorOne === 'AM' ? 'black' : '#979797',
                      fontFamily: fonts.OpenSansSemiBold,
                      fontSize: 12,
                    }}>
                    AM
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedColorOne('PM');
                  }}
                  style={{
                    backgroundColor:
                      selectedColorOne === 'PM' ? '#FCE029' : '#101518',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: selectedColorOne === 'PM' ? 'black' : '#979797',
                    }}>
                    PM
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            </View>
                  

                  <View style={{ width: '100%', paddingHorizontal: 30, marginTop: 24, }}>
                      <Text style={{fontFamily:fonts.OpenSansSemiBold, fontSize:15, color:'white', }}>
                          Before
                      </Text>

                      <VStack style={{ flexDirection: 'row', marginTop: 8, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                          
                          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <View >
                 
                                  <Image style={{ width: 171, height: 171, }} source={insect1} />
                  <TouchableOpacity style={{ position: "absolute", top: 0, right: 0, alignItems: 'center',  flexDirection: 'row', justifyContent: "flex-end", width: "100%", paddingEnd:7, paddingTop:7 }}>
                    <AntDesign name="closecircle" size={20} />
                  </TouchableOpacity>
                                  <View style={{ width: '100%', justifyContent: "center", alignItems: 'center', height: 32, position: 'absolute', bottom: 0, backgroundColor: 'rgba(16, 21, 24, 0.8)' }}>
                                      <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white' }}>
                                          View
                                          
                                      </Text>
                                  </View>
                              </View>
                              <View>
                                  
                  <Image style={{ width: 171, height: 171, marginStart: 10 }} source={insect2} />
                  <TouchableOpacity style={{ position: "absolute", top: 0, right: 0, alignItems: 'center', flexDirection: 'row', justifyContent: "flex-end", width: "100%", paddingEnd: 7, paddingTop: 7 }}>
                    <AntDesign name="closecircle" size={20} />
                  </TouchableOpacity>
                                  <View style={{ width: '100%', justifyContent: "center", alignItems: 'center', height: 32, position: 'absolute', bottom: 0, backgroundColor: 'rgba(16, 21, 24, 0.8)' }}>
                                      <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white' }}>
                                          View

                                      </Text>
                                  </View>
                              </View>
                              {/* <Image style={{ width: 171, height: 171, marginStart: 10 }} source={insect2} /> */}
                         
                          </ScrollView>
                      </VStack>
                      
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

                  <View style={{ width: '100%', paddingHorizontal: 30, marginTop: 24 }}>
                      <Text style={{ fontFamily: fonts.OpenSansSemiBold, color: 'white', fontSize: 15 }}>
                          After
                      </Text>



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



                  <View style={{ width: '100%', paddingHorizontal: 51, justifyContent: 'center', alignItems: 'center', marginBottom: 100, marginTop: 54 }}>
                      <TouchableOpacity onPress={() => { navigation.navigate("Homethree") }} style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FCE029', borderRadius: 20, }}>
                          <Text style={{ fontFamily: fonts.OpenSansSemiBold, color: 'black', fontSize: 16 }}>
                              Completed
                          </Text>

                      </TouchableOpacity>
                  </View>

          {/* <View style={{ backgroundColor: 'white', width: '100%', height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 10, borderRadius: 5 }}>

                          <Text style={{ color: 'black' }}>{dateValue}</Text>


                          <DatePicker
                              modal
                              open={open}
                              mode="time"
                              date={date}
                              onConfirm={(date) => {
                                  var currentdate = new Date(date);
                                  var datetime =
                                      +currentdate.getHours() +
                                      ":" +
                                      (currentdate.getMinutes() + 1)
                                     
                                  setOpen(false)
                                  setDate(date)
                                  setDateValue(datetime.toString());
                                  console.log("setdate: ", date)
                              }}
                              onCancel={() => {
                                  setOpen(false)
                              }}
                          />

                          <TouchableOpacity
                              onPress={() => setOpen(true)}

                          >
                              <Feather name="calendar" size={30} color="#A9A9A9" />
                          </TouchableOpacity>
                      </View> */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Hometwo;
