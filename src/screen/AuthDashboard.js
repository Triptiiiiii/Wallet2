import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity,img } from "react-native";
import {useNavigation} from '@react-navigation/native';
import AuthenticationLogin from "./AuthenticationLogin";
import AssignCreditLimit from "./AssignCreditLimit";
const AuthDashboard = () => {
  const navigation = useNavigation();
  return (
 
     <View style={styles.container}>
      <View style={styles.BackgroundStyle}>
     <View style={styles.rect}>
    <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('Assign Credit Limits')}>
       <Text style={styles.setCreditLimit}>Set Credit Limit</Text>
     </TouchableOpacity>
    </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 0,
    backgroundColor: "rgba(255,255,255,1)"
  },
 
  BackgroundStyle:{
    width:320,
    height:100,
    marginLeft:20,
    top:50,
    backgroundColor:'#e9e9e9',
    borderRadius:15,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 2,
    shadowOpacity: 0.01,
    shadowRadius: 0,
  },
  image: {
    width: 31,
    height: 46
  },
  walletSettings: {
    
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 27,
    marginTop: 20
  },
  imageRow: {
    height: 46,
    flexDirection: "row",
    flex: 1,
    marginRight: 174,
    marginLeft: 22,
    marginTop: 23
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: "rgba(78,45,135,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderRadius: 15,
    marginTop: 25,
    marginLeft:35
  },
  setCreditLimit: {
    fontWeight:"bold",
    color: "rgba(255,255,255,1)",
    marginTop: 17,
    marginLeft: 80
  },
  button1: {
    width: 147,
    height: 65,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 15,
    marginLeft: 5,
    marginTop: 1
  },
 
  
  wallet: {
    
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 5
  },
  image3: {
    width: 22,
    height: 25,
    transform: [
      {
        rotate: "179.00deg"
      }
    ],
    marginLeft: 97
  },
 
});
export default AuthDashboard;