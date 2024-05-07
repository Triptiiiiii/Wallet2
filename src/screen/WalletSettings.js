import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity,img } from "react-native";
import {useNavigation} from '@react-navigation/native';

const WalletSettings = () => {
  const navigation = useNavigation();
  return (
 
    <View style={styles.container}>
    <View style={styles.rect}>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Assign Credit Limits')}>
        <Text style={styles.setCreditLimit}>Set Credit Limit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={()=>navigation.navigate('AddAmount2')}>
        <Text style={styles.addAmount}>Add Amount</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 317,
    height: 214,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 116,
    marginLeft: 21
  },
  button: {
    width: 264,
    height: 54,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 15,
    marginTop: 42,
    marginLeft: 26
  },
  setCreditLimit: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 17,
    marginLeft: 78,
    fontWeight:"bold"
  },
  button2: {
    width: 264,
    height: 54,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 15,
    marginTop: 18,
    marginLeft: 26
  },
  addAmount: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 16,
    marginLeft: 90,
    fontWeight:"bold"
  }
 
});
export default WalletSettings;