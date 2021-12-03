// import { StatusBar } from 'expo-status-bar';

// basics
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

// screens 🖥️
import buddiesScreen from './screens/buddiesScreen'
import profilScreen from './screens/profilScreen'

function App() {

  const Stack = createStackNavigator()
  const Tab = createBottomTabNavigator()

  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Buddies' component={buddiesScreen} />
        <Tab.Screen name='Profil' component={profilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App