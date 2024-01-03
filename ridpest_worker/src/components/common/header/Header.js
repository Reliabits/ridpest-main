import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { Avatar } from 'native-base'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
            const navigation = useNavigation()
  return (
      <View style={{
          width: '100%', paddingHorizontal: 28, alignItems: 'center', flexDirection:'row', marginTop:35, justifyContent:'space-between'}}>
              <TouchableOpacity onPress={()=> {navigation.goBack()}} style={{justifyContent:'center', alignItems:'center', }}>
        <AntDesign name={"left"} size={14} color={"#E6F6FC"} />
      </TouchableOpacity>
        
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>    
        <Feather style={{marginEnd:20}} name={"bell"} color={"#FFFFFF"} size={20} />
        <Avatar style={{width:36, height:36}} bg="green.500" source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }} />

        </View>
      
    
    </View>
  )
}

export default Header