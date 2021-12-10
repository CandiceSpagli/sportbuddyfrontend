// import { StatusBar } from 'expo-status-bar';

// basics
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens 🖥️
import buddiesScreen from "./screens/buddiesScreen";
import profilScreen from "./screens/profilScreen";
import signIn from "./screens/signIn";
import signUp from "./screens/SignUp";
import session from "./screens/session";
import setting from "./screens/settings";

// reducers
import userInfosModal from './reducers/userInfosModal.reducer'

import { Provider } from "react-redux";
import {createStore, combineReducers} from 'redux';
const store = createStore(combineReducers({userInfosModal}))

function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
