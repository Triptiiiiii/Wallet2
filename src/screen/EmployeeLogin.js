import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Image, img, TouchableOpacity } from "react-native"; 
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/Entypo";
import {useNavigation} from '@react-navigation/native';
import MDWallet from "./MDWallet";

function EmployeeLogin(props) {
    const navigation= useNavigation();
  return (
    <View style={styles.container}>
    <View style={styles.rect}>
      <Text style={styles.emailAddress}>User ID/ Name</Text>
      <View style={styles.rect2}>
        <View style={styles.iconRow}>
          <Icon name="email" style={styles.icon}></Icon>
          <TextInput placeholder="Enter" style={styles.enter}></TextInput>
        </View>
      </View>
      <Text style={styles.password}>Password</Text>
      <View style={styles.rect3}>
        <View style={styles.image3Row}>
          <Image
            source={require("../../assets/eye.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <TextInput placeholder="Enter" style={styles.enter1}></TextInput>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('MDWallet')}>
       <View style={styles.rect4}> 
        <Text style={styles.login}>Login</Text>
       </View>
      </TouchableOpacity>

      <View style={styles.notAMemberRow}>
        <Text style={styles.notAMember}>Not a member?</Text>
        <TouchableOpacity>
        <Text style={styles.joinNow}>Join Now</Text>
        </TouchableOpacity>
       
      </View>
    </View>
    <Image
      source={require("../../assets/ctpllogo.png")}
      resizeMode="contain"
      style={styles.image2}
    ></Image>
    {/* <View>
    <Text style={styles.welcome}>Welcome to</Text>
    </View> */}
    <View>
    </View>
    <View>
    <Text style={styles.signInToContinue}>Sign in to Continue</Text>
    </View>
   
    
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(78,45,135,1)"
  },
  rect: {
    width: 330,
    height: 446,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 12,
    marginTop: 150,
    marginLeft:15
  },
  emailAddress: {
    fontWeight:"bold",
    fontFamily: "roboto-700",
    color: "rgba(78,45,135,1)",
    fontSize: 16,
    marginTop: 71,
    marginLeft: 30
  },
  rect2: {
    width: 295,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(78,45,135,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 23
  },
  icon: {
    color: "rgba(78,45,135,1)",
    fontSize: 25,
    height: 27,
    width: 25,
    marginTop: 5
  },
  enter: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 243,
    fontSize: 16,
    marginLeft: 16
  },
  iconRow: {
    height: 37,
    flexDirection: "row",
    flex: 1,
    marginRight: 21,
    marginLeft: 10,
    marginTop: 3
  },
  password: {
    fontWeight:"bold",
    fontFamily: "roboto-700",
    color: "rgba(78,45,135,1)",
    fontSize: 16,
    marginTop: 35,
    marginLeft: 33
  },
  rect3: {
    width: 295,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(78,45,135,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 24
  },
  image3: {
    width: 29,
    height: 33,
    marginTop: 3
  },
  enter1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 233,
    fontSize: 16,
    backgroundColor: "rgba(15,15, 15,0)",
    marginLeft: 11,
    
  },
  image3Row: {
    height: 37,
    flexDirection: "row",
    flex: 1,
    marginRight: 25,
    marginLeft: 7,
    marginTop: 3
  },
  forgotPassword: {
    fontWeight:"bold",
    fontFamily: "roboto-700",
    color: "rgba(78,45,135,1)",
    marginTop: 29,
    marginLeft: 120
  },
  rect4: {
    width: 295,
    height: 42,
    backgroundColor: "rgba(254,190,64,1)",
    marginTop: 52,
    marginLeft: 23
  },
  login: {
    fontWeight:"bold",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 9,
    marginLeft: 120
  },
  notAMember: {
    fontWeight:"bold",
    fontFamily: "roboto-700",
    color: "rgba(78,45,135,1)",
    marginLeft:-10
  },
  joinNow: {
    fontWeight:"bold",
    fontFamily: "roboto-700",
    color: "rgba(254,190,64,1)",
    fontSize: 14,
    marginLeft: 5,
    marginTop: 1
  },
  notAMemberRow: {
    
    height: 18,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 100,
    marginRight: 100
  },
  image2: {
    width: 260,
    height: 70,
    marginTop: -601,
    marginLeft: 53,
  },
  welcome: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    marginTop: -95,
    marginLeft: 29
  },
  signInToContinue: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 50,
    marginLeft: 24,
    
  }
});

export default EmployeeLogin;
