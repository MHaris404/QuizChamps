import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector } from 'react-redux';

import SplashScreen from '../components/SplashScreen'
import LoginScreen from '../components/LoginScreen'
import SignupScreen from '../components/SignupScreen'
import HomeScreen from '../components/HomeScreen'
import ForgetPasswordScreen from '../components/ForgetPasswordScreen'

const Stack = createStackNavigator();

const Navigation = () => {

    let getUserState = useSelector(({ userState }) => userState.infoUser);
    console.log(getUserState)
    return (
        <NavigationContainer>

            {
                getUserState
                    ?
                    <HomeScreen />
                    :
                    <Stack.Navigator >
                        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} options={{ headerShown: false }} />
                    </Stack.Navigator>
            }

        </NavigationContainer>
    )
}

export default Navigation