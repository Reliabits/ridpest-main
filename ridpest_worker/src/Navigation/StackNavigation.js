import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/Login'
import BottomNavigation from './BottonNavigation';
import {NativeBaseProvider} from 'native-base'



const Stack = createNativeStackNavigator();

function StackNavigation() {
    return (
        <NativeBaseProvider >
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='BottomNavigation' component={BottomNavigation} />
                
            </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}

export default StackNavigation;