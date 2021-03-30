import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Tasks, Location, NewTasks } from "./src/screens";
import { BottomTabBar } from './src/components';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabBar {...props} />} >
      <Tab.Screen name="Tasks" component={Tasks} />
      <Tab.Screen name="Create" component={NewTasks} />
      <Tab.Screen name="Location" component={Location} />
    </Tab.Navigator>
  )
}