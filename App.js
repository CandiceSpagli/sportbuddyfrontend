// import { StatusBar } from 'expo-status-bar';

// basics
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens 🖥️
import buddiesScreen from "./screens/BuddiesScreen";
import profilScreen from "./screens/ProfilScreen";
import signIn from "./screens/SignIn";
import signUp from "./screens/SignUp";
import session from "./screens/Session";
import setting from "./screens/Settings";

// import {createStore, combineReducers} from 'redux';
import { Provider } from "react-redux";

function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="SignIn" component={signIn} />
        <Tab.Screen name="Buddies" component={buddiesScreen} />
        <Tab.Screen name="Profil" component={profilScreen} />
        <Tab.Screen name="SignUp" component={signUp} />
        <Tab.Screen name="Session" component={session} />
        <Tab.Screen name="Settings" component={setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
