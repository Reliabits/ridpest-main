import { View, Text , SafeAreaView, StatusBar, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import AppColors from '../utils/ColorApp'
import Header from '../components/common/header/Header'
import dot1 from '../assets/images/dot1.png'
import Line from '../assets/images/Line.png'
import dot2 from '../assets/images/dot2.png'
import upload from '../assets/images/upload.png'
import fonts from '../assets/fonts'
import { Select, VStack, CheckIcon, Box, Center, Checkbox, Divider } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
    let [service, setService] = React.useState("");
    let [serviceone, setServiceone] = React.useState("");
    let [servicetwo, setServicetwo] = React.useState("");
    const [visible, setVisible] = useState(false);
    const [visibleone, setVisibleone] = useState("")
    const [visibletwo,setVisibletwo] = useState("")

    const toggleDropdownTask = () => {
        setVisible(!visible)
    }

    const renderDropdownTask = () => {
        if (visible){
            return (
                <View style={{width:'100%'}}>

                    <View style={{ borderRadius: 5, borderColor: '#444444', width: '100%',paddingHorizontal: 16, alignItems: 'center', justifyContent: 'center', borderWidth:1}}>
                    <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row", alignItems: 'center',height:40 }}>
                        <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white', }}>
                            Task
                        </Text>

                        <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked />
                    </View>
                        <Divider style={{ backgroundColor: '#444444' }} />
                    <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', height: 40 }}>
                        <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white', }}>
                            Task
                        </Text>

                        <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked />
                    </View>
                        <Divider style={{ backgroundColor: '#444444' }} />
                    <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', height: 40 }}>
                        <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white', }}>
                            Task
                        </Text>

                        <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked />
                        </View>
                    </View>

                    
                    <View style={{width:'100%', paddingHorizontal:16}}>
                    <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', height: 40 }}>
                        <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white', }}>
                            Task
                            </Text>
                            
                            <AntDesign name="minuscircleo" size={15} color="red" />

                        {/* <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked /> */}
                    </View>
                    <Divider style={{ backgroundColor: '#444444' }} />

                    
                    <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', height: 40 }}>
                        <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white', }}>
                            Task
                            </Text>
                            
                            <AntDesign name='minuscircleo' size={15} color="red" />

                        {/* <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked /> */}
                        </View>
                    </View>
                    

                </View>
            )
        }
    }



    const toggleDropdownEquiments = () => {
        setVisibleone(!visibleone)
    }

    const renderDropdownEquiments = () => {
        if (visibleone) {
            return (
                <View style={{ width: '100%' }}>

                    <View style={{ borderRadius: 5, borderColor: '#444444', width: '100%', paddingHorizontal: 16, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
                        <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', height: 40 }}>
                            <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white', }}>
                                Equipments 1
                            </Text>

                            <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked />
                        </View>
                        <Divider style={{ backgroundColor: '#444444' }} />
                        <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', height: 40 }}>
                            <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white', }}>
                                Equipments 2
                            </Text>

                            <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked />
                        </View>
                        <Divider style={{ backgroundColor: '#444444' }} />
                        <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', height: 40 }}>
                            <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white', }}>
                                Equipments 3
                            </Text>

                            <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked />
                        </View>
                    </View>


                    <View style={{ width: '100%', paddingHorizontal: 16 }}>
                        <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', height: 40 }}>
                            <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white', }}>
                                Equipments 1
                            </Text>

                            <AntDesign name="minuscircleo" size={15} color="red" />

                            {/* <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked /> */}
                        </View>
                        <Divider style={{ backgroundColor: '#444444' }} />


                        <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', height: 40 }}>
                            <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white', }}>
                                Equipments 2
                            </Text>

                            <AntDesign name='minuscircleo' size={15} color="red" />

                            {/* <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked /> */}
                        </View>
                    </View>


                </View>
            )
        }
    }


     const toggleDropdownChemicals = () => {
        setVisibletwo(!visibletwo)
    }

    const renderDropdownChemicals = () => {
        if (visibletwo) {
            return (
                <View style={{ width: '100%' }}>

                    <View style={{ borderRadius: 5, borderColor: '#444444', width: '100%', paddingHorizontal: 16, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
                        <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', height: 40 }}>
                            <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white', }}>
                               Chemicals 1
                            </Text>

                            <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked />
                        </View>
                        <Divider style={{ backgroundColor: '#444444' }} />
                        <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', height: 40 }}>
                            <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white', }}>
                                Chemicals 2
                            </Text>

                            <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked />
                        </View>
                        <Divider style={{ backgroundColor: '#444444' }} />
                        <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', height: 40 }}>
                            <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white', }}>
                                Chemicals 3
                            </Text>

                            <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked />
                        </View>
                    </View>


                    <View style={{ width: '100%', paddingHorizontal: 16 }}>
                        <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', height: 40 }}>
                            <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white', }}>
                                Chemicals 1
                            </Text>

                            <AntDesign name="minuscircleo" size={15} color="red" />

                            {/* <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked /> */}
                        </View>
                        <Divider style={{ backgroundColor: '#444444' }} />


                        <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', height: 40 }}>
                            <Text style={{ fontFamily: fonts.OpenSansSemiBold, fontSize: 12, color: 'white', }}>
                                Chemicals 2
                            </Text>

                            <AntDesign name='minuscircleo' size={15} color="red" />

                            {/* <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked /> */}
                        </View>
                    </View>


                </View>
            )
        }
    }


  return (
      <View style={{ backgroundColor: AppColors.black, flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }} >
              <StatusBar animated={true} backgroundColor="#101518" barStyle="white-content" />
              <Header />
              <ScrollView>
                  
                  <View style={{ width: '100%', justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: 28 }}>
                      <Image source={dot1} />
                      <Image source={Line} />
                      <Image source={dot2} />
                      <Image source={Line} />
                      <Image source={dot2} />
                      
                  </View>

                  <View style={{ width: '100%', paddingHorizontal: 30 , marginTop:28}}>
                      <Text style={{fontFamily:fonts.OpenSansSemiBold, color:'white', fontSize:15}}>
                          Check in Onsite
                      </Text>

                    <View style={{width:"100%", marginTop:8}}>
                          <Box style={{ backgroundColor: "#101518" ,}} width={"100%"} >
                              <Select selectedValue={service} minWidth="200" style={{
                                  color: '#979797', fontFamily:fonts.OpenSansSemiBold, fontSize:14}} placeholderTextColor={"#979797"} accessibilityLabel="Company 1" placeholder="Company 1" _selectedItem={{
                                  bg: "teal.600",
                                  endIcon: <CheckIcon size="5" />
                              }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                  <Select.Item label="UX Research" value="ux" />
                                  <Select.Item label="Web Development" value="web" />
                                  <Select.Item label="Cross Platform Development" value="cross" />
                                  <Select.Item label="UI Designing" value="ui" />
                                  <Select.Item label="Backend Development" value="backend" />
                              </Select>
                          </Box>
                      </View>

                  </View>

                  <View style={{ width: '100%', paddingHorizontal: 30, marginTop: 24 }}>
                      <Text style={{ fontFamily: fonts.OpenSansSemiBold, color: 'white', fontSize: 15 }}>
                          Area of Work
                      </Text>

                      <TextInput style={{
                          width: '100%', height: 100, borderRadius: 5, borderWidth: 1, borderColor: '#444444', marginTop: 8, color: "#979797", backgroundColor:'#101518'
                      }} placeholder='Address' placeholderTextColor={"#979797"} />
                      
                      <TouchableOpacity style={{ width: '100%', borderRadius: 5, marginTop: 14, flexDirection: 'row', height: 83, paddingHorizontal: 22.31, alignItems: 'center', borderWidth: 1, borderColor: '#444444', borderStyle: 'dashed', backgroundColor:'#101518'}}>
                          <Image source={upload} />

                          <View style={{marginStart:17, }}>
                              
                              <Text style={{fontFamily:fonts.OpenSansSemiBold, fontSize:16, color:'white'}}>
                                  Click to upload.
                              </Text>
                              <Text style={{fontFamily:fonts.OpenSansSemiBold, fontSize:13, color:'white'}}>
                                  File size no more than 10MB
                              </Text>
                              
                          </View>

                      </TouchableOpacity>
                      
                  </View>

                  <View style={{ width: '100%', paddingHorizontal: 30, marginTop: 28 }}>
                      <Text style={{ fontFamily: fonts.OpenSansSemiBold, color: 'white', fontSize: 15 }}>
                         Task checklist
                      </Text>

                     

                      <View style={{ width: "100%", backgroundColor: '#101518', height: 48, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 16, alignItems: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5, borderWidth: 1, borderColor: '#444444', borderRadius: 5, marginTop: 8, }}>
                          <Text style={{
                              fontFamily: fonts.OpenSansSemiBold, fontSize: 14, color: "#979797"}}>
                              Select
                          </Text>

                          <TouchableOpacity onPress={toggleDropdownTask} style={{ justifyContent: 'center', alignItems: 'center' }}>
                              {!visible ?(

                                  < AntDesign name="down" size={15} color={"white"} />
                              )
                              :

                              ( < AntDesign name="up" size={15} color={"white"} />)
                              }
                          </TouchableOpacity>
                      </View>

                      {renderDropdownTask()}

                      </View>
                
                  <View style={{ width: '100%', paddingHorizontal: 30, marginTop: 28 }}>
                      <Text style={{ fontFamily: fonts.OpenSansSemiBold, color: 'white', fontSize: 15 }}>
                          Equipment
                      </Text>



                      <View style={{ width: "100%", backgroundColor: '#101518', height: 48, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 16, alignItems: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5, borderWidth: 1, borderColor: '#444444', borderRadius: 5, marginTop: 8, }}>
                          <Text style={{
                              fontFamily: fonts.OpenSansSemiBold, fontSize: 14, color: "#979797"
                          }}>
                              Select
                          </Text>

                          <TouchableOpacity onPress={toggleDropdownEquiments} style={{ justifyContent: 'center', alignItems: 'center' }}>
                              {!visibleone ? (

                                  < AntDesign name="down" size={15} color={"white"} />
                              )
                                  :

                                  (< AntDesign name="up" size={15} color={"white"} />)
                              }
                          </TouchableOpacity>
                      </View>

                      {renderDropdownEquiments()}

                  </View>
                 

                  <View style={{ width: '100%', paddingHorizontal: 30, marginTop: 28, }}>
                      <Text style={{ fontFamily: fonts.OpenSansSemiBold, color: 'white', fontSize: 15 }}>
                              Chemicals
                      </Text>



                      <View style={{ width: "100%", backgroundColor: '#101518', height: 48, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 16, alignItems: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5, borderWidth: 1, borderColor: '#444444', borderRadius: 5, marginTop: 8, }}>
                          <Text style={{
                              fontFamily: fonts.OpenSansSemiBold, fontSize: 14, color: "#979797"
                          }}>
                              Select
                          </Text>

                          <TouchableOpacity onPress={toggleDropdownChemicals} style={{ justifyContent: 'center', alignItems: 'center' }}>
                              {!visibletwo ? (

                                  < AntDesign name="down" size={15} color={"white"} />
                              )
                                  :

                                  (< AntDesign name="up" size={15} color={"white"} />)
                              }
                          </TouchableOpacity>
                      </View>

                      {renderDropdownChemicals()}

                  </View>


                  <View style={{ width: '100%', paddingHorizontal: 51,justifyContent: 'center', alignItems: 'center', marginBottom: 100 , marginTop:54}}>
                      <TouchableOpacity onPress={()=> {navigation.navigate("Hometwo")}} style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FCE029', borderRadius: 20, }}>
                          <Text style={{fontFamily:fonts.OpenSansSemiBold, color:'black', fontSize:16}}>
                              Next
                          </Text>
                          
                      </TouchableOpacity>
                  </View>


                  

                  
                  

                  
              </ScrollView>
          </SafeAreaView>
          </View>
  )
}

export default Home