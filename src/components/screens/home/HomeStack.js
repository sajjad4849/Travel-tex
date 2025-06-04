// HomeStack.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home'; // 👈 This is your main screen inside Tab
// import Delete from './Edit';
import EditScreen from './EditScreen';
// import MainHome from './MainHome';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainHome" component={Home} />
      {/* <Stack.Screen name="EditScreen" component={EditScreen} /> */}
    </Stack.Navigator>
  );
}
