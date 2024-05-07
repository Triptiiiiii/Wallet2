import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity,img } from "react-native";
import {useNavigation} from '@react-navigation/native';
import FinanceLogin from "./FinanceLogin";
import AddAmount2 from "./AddAmount2";
const FinanceDashboard = () => {
  const navigation = useNavigation();
  return (
 
     <View style={styles.container}>
        <View style={styles.BackgroundStyle}>
      <View style={styles.rect}>
      <TouchableOpacity style={styles.button1}onPress={() => navigation.navigate('AddAmount2')} >
          <Text style={styles.addAmount}>Add Amount</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
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
   
  },
  setCreditLimit: {
    
    color: "rgba(255,255,255,1)",
    marginTop: 24,
    marginLeft: 25
  },
  button1: {
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
  addAmount: {
    fontWeight:"bold",
    color: "rgba(255,255,255,1)",
    marginTop: 15,
    marginLeft: 80
  },
  buttonRow: {
    height: 66,
    flexDirection: "row",
    marginTop: 0,
    marginLeft: 35,
    marginRight: 23
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
export default FinanceDashboard;