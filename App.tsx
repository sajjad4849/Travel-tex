import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/components/screens/Splash';
import LanguageScreen from './src/components/screens/LanguageScreen';
import OnboardingScreen from './src/components/screens/OnboardingScreen';
import SelectAccount from './src/components/screens/SelectAccount';
import SocialLoginScreen from './src/components/screens/Auth/SocialLoginScreen';
import Login from './src/components/screens/Auth/Login';
import CreateAccount from './src/components/screens/Auth/CreateAccount';
import OTP from './src/components/screens/Auth/OTP';
import ForgetPassword from './src/components/screens/Auth/ForgetPassword';
import OTPverification from './src/components/screens/Auth/OTPverification';
import CreateNewPassword from './src/components/screens/Auth/CreateNewPassword';
import CountrySelectionScreen from './src/components/screens/Profile/CountrySelectionScreen';
import SetProfile from './src/components/screens/Profile/SetProfile';
import CompleteProfile from './src/components/screens/Profile/CompleteProfile';
import SubScription from './src/components/screens/Profile/SubScription';
import Home from './src/components/screens/home/Home';
import BottomTabs from './src/components/screens/home/BottomTabs';
import Delete from './Delete';
import EditScreen from './src/components/screens/home/EditScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LanguageScreen"
          component={LanguageScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectAccount"
          component={SelectAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SocialLoginScreen"
          component={SocialLoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTPverification"
          component={OTPverification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateNewPassword"
          component={CreateNewPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CountrySelectionScreen"
          component={CountrySelectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SetProfile"
          component={SetProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CompleteProfile"
          component={CompleteProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SubScription"
          component={SubScription}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditScreen"
          component={EditScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
