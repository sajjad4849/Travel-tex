// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Calendar from './Calendar';
import Connect from './Connect';
import HomeStack from './HomeStack';
import Setting from './Setting';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Connect" component={Connect} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
