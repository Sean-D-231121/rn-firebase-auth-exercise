import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './screens/ProfileScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import RegistrationScreen from './screens/RegistrationScreen';

// TODO: Navigation Container
const Stack = createNativeStackNavigator();
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsLoggedIn(true);
        console.log("User is logged in")
      } else {
        setIsLoggedIn(false);
        console.log('User not logged in')
      }
    });
    // Research how to convert this to UseContext for better practice.
  }, [])
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        //Show logged in screen
        <Stack.Navigator>
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      ) : (
        // Show Auth Screens when not logged in
        <Stack.Navigator>
          <Stack.Screen
            name="SignUp"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
      ;
    </NavigationContainer>
  );
}

