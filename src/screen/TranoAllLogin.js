import React, { Component } from "react";
import { StyleSheet, View, Image, Text, img, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import {useNavigation} from '@react-navigation/native';
import Login from "./Login";


function TranoAllLogin(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.rect8Stack}>
        <View style={styles.rect8}>
        {/* {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />} */}
          <Image 
            source={require("../../assets/ctpllogo.png")}
            resizeMode="contain"
            style={styles.image8}
          ></Image>
        </View>
        <Svg viewBox="0 0 70 70" style={styles.ellipse2}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="#f4f4f4"
            cx={34}
            cy={34}
            rx={34}
            ry={34}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 55 55" style={styles.ellipse3}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(78,45,135,1)"
            cx={27}
            cy={27}
            rx={27}
            ry={27}
          ></Ellipse>
        </Svg>
        <Image
          source={require("../../assets/car.png")}
          resizeMode="contain"
          style={styles.image9}
        ></Image>
      </View>
      <View style={styles.rect2}>
        <View style={styles.image1Row}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Image
            source={require("../../assets/person.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('DistributorLogin')}>
          <Image
            source={require("../../assets/enter.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
         <Image
            source={require("../../assets/leader.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
         </TouchableOpacity>
        </View>
        <View style={styles.customerLogin1Row}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.customerLogin1}>Customer{"\n"} Login</Text>
          </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('DistributorLogin')}>
         <Text style={styles.loremIpsum1}>
            Distributor/{"\n"}Dealer{"\n"}Login
          </Text>
         </TouchableOpacity >
         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
         <Text style={styles.parentLogin1}>Parent{"\n"}Login</Text>
         </TouchableOpacity>
          </View>
      </View>
      <View style={styles.rect3}>
        <View style={styles.rect4Row}>
          <TouchableOpacity onPress={() => navigation.navigate('OEMLogin')}>
          <View gradientImage="Gradient_lBuIJhQ.png" style={styles.rect4}>
            <Image
              source={require("../../assets/manufacture (1).png")}
              resizeMode="contain"
              style={styles.image10}
            ></Image>
            <Text style={styles.oemLogin1}>OEM Login</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('ManagersLogin')}>
          <View gradientImage="Gradient_lBuIJhQ.png" style={styles.rect5}>
            <View style={styles.employeeLogin1Stack}>
              <Text style={styles.employeeLogin1}>Employee Login</Text>
              <Image
                source={require("../../assets/employee (2).png")}
                resizeMode="contain"
                style={styles.image11}
              ></Image>
            </View>
          </View>
          </TouchableOpacity>
         
        </View>
        <View style={styles.rect6Row}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View gradientImage="Gradient_Z9j3MmK.png" style={styles.rect6}>
            <View style={styles.giveSelfValidity1Stack}>
              <Text style={styles.giveSelfValidity1}>Give Self Validity</Text>
              <Image
                source={require("../../assets/self-service (1).png")}
                resizeMode="contain"
                style={styles.image12}
              ></Image>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View gradientImage="Gradient_Z9j3MmK.png" style={styles.rect7}>
            <Image
              source={require("../../assets/downloading (1).png")}
              resizeMode="contain"
              style={styles.image13}
            ></Image>
            <Text style={styles.downloadCertificate1}>
              Download{"\n"}Certificate
            </Text>
          </View>
          </TouchableOpacity>
         
        </View>
        <View style={styles.rect7Row}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.rect9}>
            <Image
              source={require("../../assets/wallet.png")}
              resizeMode="contain"
              style={styles.image14}
            ></Image>
            <Text style={styles.WalletLogin}>
             Wallet Login
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TechnicianLogin')}>
          <View gradientImage="Gradient_Z9j3MmK.png" style={styles.rect7}>
            <Image
              source={require("../../assets/engineer.png")}
              resizeMode="contain"
              style={styles.image13}
            ></Image>
            <Text style={styles.downloadCertificate1}>
              Technician{"\n"}    Login
            </Text>
          </View>
         </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect8: {
    top: 0,
    left: 0,
    width: 360,
    height: 102,
    position: "absolute",
    backgroundColor: "rgba(78,45,135,1)"
  },
  image8: {
    width: 190,
    height: 71,
    marginTop: 17,
    marginLeft: 38,
  },
  ellipse2: {
    top: 70,
    left: 244,
    width: 70,
    height: 70,
    position: "absolute"
  },
  ellipse3: {
    top: 77,
    left: 251,
    width: 55,
    height: 55,
    position: "absolute"
  },
  image9: {
    top: 82,
    left: 256,
    width: 45,
    height: 41,
    position: "absolute"
  },
  rect8Stack: {
    width: 360,
    height: 142,
    marginTop: 23
  },
  rect2: {
    width: 308,
    height: 111,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.6,
    shadowRadius: 10,
    marginTop: 2,
    marginLeft: 26
  },
  image1: {
    width: 35,
    height: 39
  },
  image2: {
    width: 30,
    height: 39,
    marginLeft: 64,
    marginTop: 2
  },
  image3: {
    width: 35,
    height: 39,
    marginLeft: 66,
    marginTop: 2
  },
  image1Row: {
    height: 42,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 34,
    marginRight: 44
  },
  customerLogin1: {
    fontFamily: "roboto-700",
    color: "rgba(78,45,135,1)",
    fontSize: 12,
    lineHeight: 12,
    marginLeft: 8
  },
  loremIpsum1: {
    fontFamily: "roboto-700",
    color: "rgba(78,45,135,1)",
    fontSize: 12,
    lineHeight: 12,
    marginLeft: 40,
    marginTop: 1
  },
  parentLogin1: {
    fontFamily: "roboto-700",
    color: "rgba(78,45,135,1)",
    fontSize: 12,
    lineHeight: 12,
    marginLeft: 41,
    marginTop: 3
  },
  customerLogin1Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 26,
    marginRight: 38
  },
  rect3: {
    width: 325,
    height: 438,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.6,
    shadowRadius: 10,
    borderRadius: 15,
    marginTop: 22,
    marginLeft: 17
  },
  rect4: {
    width: 139,
    height: 113,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.6,
    shadowRadius: 10,
    borderRadius: 15,
    backgroundColor: "rgba(78,45,135,1)"
  },
  image10: {
    width: 67,
    height: 63,
    marginTop: 11,
    marginLeft: 38
  },
  oemLogin1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 1,
    marginLeft: 32
  },
  rect5: {
    width: 139,
    height: 113,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.6,
    shadowRadius: 10,
    borderRadius: 15,
    backgroundColor: "rgba(78,45,135,1)",
    marginLeft: 15,
    marginTop: 1
  },
  employeeLogin1: {
    top: 72,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  image11: {
    top: 0,
    left: 16,
    width: 84,
    height: 76,
    position: "absolute"
  },
  employeeLogin1Stack: {
    width: 114,
    height: 91,
    marginTop: 3,
    marginLeft: 12
  },
  rect4Row: {
    height: 114,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 16,
    marginRight: 16
  },
  rect6: {
    width: 139,
    height: 113,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.6,
    shadowRadius: 10,
    borderRadius: 15,
    backgroundColor: "rgba(78,45,135,1)"
  },
  giveSelfValidity1: {
    top: 60,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  image12: {
    top: 0,
    left: 34,
    width: 62,
    height: 61,
    position: "absolute"
  },
  giveSelfValidity1Stack: {
    width: 122,
    height: 79,
    marginTop: 15,
    marginLeft: 9
  },
  rect7: {
    width: 139,
    height: 113,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.6,
    shadowRadius: 10,
    borderRadius: 15,
    backgroundColor: "rgba(78,45,135,1)",
    marginLeft: 15
  },
  image13: {
    width: 46,
    height: 48,
    marginTop: 15,
    marginLeft: 50
  },
  image14: {
    top: 10,
    left: 40,
    width: 62,
    height: 61,
    position: "absolute"
  },
  downloadCertificate1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 36
  },
  WalletLogin: {
    top: 75,
    left: 30,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  rect6Row: {
    height: 113,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 18,
    marginRight: 14
  },
  rect7Row: {
    height: 113,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 18,
    marginRight: 14
  },
  rect9: {
    width: 139,
    height: 113,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.6,
    shadowRadius: 10,
    borderRadius: 15,
    backgroundColor: "rgba(78,45,135,1)"
  }
 
});

export default TranoAllLogin;































