// import { StatusBar } from 'expo-status-bar';

// basics
import React from "react";

import { StyleSheet, Text, View } from "react-native";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens 🖥️
import buddiesScreen from "./screens/BuddiesScreen";
import profilScreen from "./screens/ProfilScreen";
import signIn from "./screens/SignIn";
import signUp from "./screens/SignUp";
import session from "./screens/Session";
import setting from "./screens/Settings";
// navbar
import NavBarPopUp from "./components/buddiesScreen/navbar/NavBarPopUp";

// reducers
import userInfosModal from "./reducers/userInfosModal.reducer";
import token from "./reducers/token";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
const store = createStore(combineReducers({ userInfosModal, token }));

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              // backgroundColor: 'red',
              // position: 'absolute',
              // bottom: -100,
              // opacity: 0
            },
          }}
        >
          <Tab.Screen name="SignIn" component={signIn} />
          <Tab.Screen name="Buddies" component={buddiesScreen} />
          <Tab.Screen name="Profil" component={profilScreen} />
          <Tab.Screen name="SignUp" component={signUp} />
          <Tab.Screen name="Session" component={session} />
          <Tab.Screen name="Settings" component={setting} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>

    // <Provider store={store}>
    //   <NavigationContainer>
    //     <Stack.Navigator
    //       screenOptions={{
    //         headerShown: false,
    //       }}
    //     >
    //       <Stack.Screen name="SignIn" component={signIn} />
    //       <Stack.Screen name="Buddies" component={buddiesScreen} />
    //       <Stack.Screen name="Profil" component={profilScreen} />
    //       <Stack.Screen name="SignUp" component={signUp} />
    //       <Stack.Screen name="Session" component={session} />
    //       <Stack.Screen name="Settings" component={setting} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </Provider>
  );
}

// const BottomNavigator = () => {
//   return (
//     <Tab.Navigator screenOptions={{headerShown: false}}>
//       <Tab.Screen name="SignIn" component={signIn} />
//       <Tab.Screen name="Buddies" component={buddiesScreen} />
//       <Tab.Screen name="Profil" component={profilScreen} />
//       <Tab.Screen name="SignUp" component={signUp} />
//       <Tab.Screen name="Session" component={session} />
//       <Tab.Screen name="Settings" component={setting} />
//     </Tab.Navigator>
//   )
// }

// export default function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{headerShown: false}}>
//           {/* <Stack.Screen name='NavBar' component={NavBarPopUp}/> */}
//           <Stack.Screen name='BottomNavigator' component={BottomNavigator}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   )
// }

export default App;
