import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import drawer from '../assets/images/drawer.png'
import gallery from '../assets/images/gallery.png'
import home from '../assets/images/home.png'
import Hometwo from '../screen/Hometwo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homethree from '../screen/Homethree';
import Homefour from '../screen/Homefour';


function Search() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function Images() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function Drawer() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Hometwo" component={Hometwo} />         
      <Stack.Screen name="Homethree" component={Homethree} />         
      <Stack.Screen name="Homefour" component={Homefour} />         

    </Stack.Navigator>
  )
}


const Tab = createBottomTabNavigator();



export default function BottomNavigation() {
  return (
   
    <Tab.Navigator
    
      style={{ backgroundColor: 'black' }} initialRouteName='Home' screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: '#181A1E',
          position: 'absolute',
          borderTopWidth: 0,
        },
      
      }}>
      <Tab.Screen options={{
        // tabBarLabel: 'Home',x
        tabBarShowLabel:false,
        tabBarIcon: ({ focused, color, size }) => (
         
          <View>
            {
              focused ? (<Image source={home} style={{ tintColor: 'yellow' }} />) : (<Image style={{tintColor:color}} source={home} />)

            }
            
          </View>
        ),
      }} name="HomeStack" component={HomeStack} />
      <Tab.Screen options={{
        tabBarShowLabel: false,
        // tabBarLabel: 'Profile',
        tabBarIcon: ({ focused, size , color}) => (
          <View>
            {focused ? (<AntDesign name="user" color={"yellow"} size={size} />) : (<AntDesign name="user" color={color} size={size} />)}
            
          </View>
        ),
      }} name="Search" component={Profile} />
      <Tab.Screen options={{
        tabBarShowLabel: false,
        // tabBarLabel: 'Search',
        tabBarIcon: ({ focused, color, size }) => (
          <View>
            {
              focused ?
                (
                  <Ionicons name="search-outline" color={"yellow"} size={size} />
                ) :
                (<Ionicons name="search-outline" color={color} size={size} />
)
            }
          </View>
        ),
      }} name="serach" component={Search} />
      <Tab.Screen options={{
        tabBarShowLabel: false,
        // tabBarLabel: 'Home',
        tabBarIcon: ({ color, size, focused }) => (
          <View>
            {focused ? (
              
              <Image style={{tintColor: "yellow"}} source={gallery} />
              ) : (
                
                <Image style={{tintColor:color}} source={gallery} />
                
            )
            }
          </View>
        ),
      }} name="Images" component={Images} />
      <Tab.Screen options={{
        tabBarShowLabel: false,
        // tabBarLabel: 'Home',
        tabBarIcon: ({focused, color, size }) => (
          <View>
            {
              focused ?
                (<Image style={{ color: 'yellow', tintColor:'yellow' }} source={drawer} />) :
                (<Image style={{ tintColor:color }} source={drawer} />)
            }
            
          </View>
        ),
      }} name="Drawer" component={Drawer} />
      </Tab.Navigator>
   
  );
}