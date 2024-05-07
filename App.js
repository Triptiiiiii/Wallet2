import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
// import StackNavigation from './src/navigation/StackNavigation'
// import Icon from 'react-native-vector-icons/FontAwesome';
import AppNavigation from './src/navigation/AppNavigation';
// import { enGB, registerTranslation } from 'react-native-paper-dates'
// registerTranslation('en-GB', enGB)


export default function App() {
  return (
    <NavigationContainer>
   <AppNavigation/>
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({
  
})