import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView,TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import {useNavigation} from '@react-navigation/native';
//import { TouchableOpacity } from "react-native-gesture-handler";

function Statement(props) {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
    <View style={styles.container}>
    <View style={styles.horizontalContent}>
      <View style={styles.rect}>
        <View style={styles.rect2Row}>
          <View style={styles.rect2}>
            <View style={styles.jTechnologiesRow}>
              <Text style={styles.jTechnologies}>J Technologies</Text>
              <Text style={styles.id9293209}>ID-9293209</Text>
            </View>
          </View>
          <View style={styles.rect3}>
            <View style={styles.creditLimitRow}>
              <Text style={styles.creditLimit}>Credit Limit</Text>
              <Text style={styles.loremIpsum}>6,00,000</Text>
            </View>
          </View>
        </View>
        <View style={styles.rect4}>
          <View style={styles.dateRow}>
            <Text style={styles.date}>DATE</Text>
            <Text style={styles.particulars}>PARTICULARS</Text>
            <Text style={styles.transactionId}>TRANSACTION ID</Text>
            <Text style={styles.loremIpsum2}>
              VIEW{"\n"}TRANSACTION{"\n"}SHEET
            </Text>
            <Text style={styles.debitRs}>DEBIT(RS)</Text>
            <Text style={styles.creditCr}>CREDIT(CR)</Text>
            <Text style={styles.balance}>BALANCE</Text>
          </View>
        </View>
        <View style={styles.rect5}>
          <View style={styles.rect7}>
            <View style={styles.loremIpsum3Row}>
              <Text style={styles.loremIpsum3}>21-01-24</Text>
              <Text style={styles.text}>Divya   </Text>
              <Text style={styles.loremIpsum4}>123456</Text>
              <TouchableOpacity>
              <EntypoIcon name="text-document" style={styles.icon}></EntypoIcon>
              </TouchableOpacity>
              <Text style={styles.loremIpsum5}>6,00,000</Text>
              <Text style={styles.loremIpsum6}>6,00,000</Text>
            </View>
          </View>
        </View>
        <View style={styles.rect6}>
          <View style={styles.loremIpsum9Row}>
            <Text style={styles.loremIpsum9}>24-01-24</Text>
            <Text style={styles.text2}>Tripti    </Text>
            <Text style={styles.loremIpsum10}>123456</Text>
            <TouchableOpacity>
              <EntypoIcon name="text-document" style={styles.icon}></EntypoIcon>
              </TouchableOpacity>
            <Text style={styles.loremIpsum11}>5,000</Text>
            <Text style={styles.loremIpsum12}>5,95,000</Text>
          </View>
        </View>
        <View style={styles.rect8}>
          <View style={styles.loremIpsum13Row}>
            <Text style={styles.loremIpsum13}>24-01-24</Text>
            <Text style={styles.text3}>Swetha</Text>
            <Text style={styles.loremIpsum14}>123456</Text>
            <TouchableOpacity>
              <EntypoIcon name="text-document" style={styles.icon}></EntypoIcon>
              </TouchableOpacity>
            <Text style={styles.loremIpsum15}>5,000</Text>
            <Text style={styles.loremIpsum16}>5,93,000</Text>
          </View>
        </View>
        <View style={styles.rect9}></View>
        <View style={styles.rect10}></View>
        <View style={styles.rect11}></View>
        <View style={styles.totalRow}>
          <Text style={styles.total}>TOTAL</Text>
          <View style={styles.rect12}>
            <Text style={styles.loremIpsum7}>5,000</Text>
          </View>
          <View style={styles.rect13}>
            <Text style={styles.loremIpsum8}>6,00,000</Text>
          </View>
        </View>
        <View style={styles.balance2Row}>
          <Text style={styles.balance2}>BALANCE</Text>
          <View style={styles.rect14}>
            <Text style={styles.loremIpsum17}>7,93,000</Text>
          </View>
        </View>
      </View>
    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },

  horizontalContent: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(78,45,135,1)",
    justifyContent: "center"
  },
  rect: {
    width: 821,
    height: 680,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    marginLeft: 0
  },
  rect2: {
    width: 501,
    height: 38,
    backgroundColor: "#E6E6E6",
    flexDirection: "row"
  },
  jTechnologies: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 16
  },
  id9293209: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 128,
    marginTop: 1
  },
  jTechnologiesRow: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 173,
    marginTop: 10
  },
  rect3: {
    width: 200,
    height: 38,
    backgroundColor: "#E6E6E6",
    flexDirection: "row",
    marginLeft: 55
  },
  creditLimit: {
    fontFamily: "roboto-700",
    color: "#121212"
  },
  loremIpsum: {
    fontFamily: "roboto-500",
    color: "#121212",
    marginLeft: 46
  },
  creditLimitRow: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 12,
    marginTop: 10
  },
  rect2Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 25,
    marginRight: 40
  },
  rect4: {
    width: 768,
    height: 68,
    backgroundColor: "rgba(78,45,135,1)",
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 25
  },
  date: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 19
  },
  particulars: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 34,
    marginTop: 19
  },
  transactionId: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 38,
    marginTop: 19
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 32
  },
  debitRs: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 29,
    marginTop: 18
  },
  creditCr: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 28,
    marginTop: 19
  },
  balance: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 38,
    marginTop: 20
  },
  dateRow: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: 27,
    marginLeft: 14,
    marginTop: 7
  },
  rect5: {
    width: 768,
    height: 36,
    backgroundColor: "#E6E6E6",
    marginTop: 7,
    marginLeft: 25
  },
  rect7: {
    width: 768,
    height: 36,
    backgroundColor: "rgba(217,217,217,1)",
    flexDirection: "row",
    
  },
  loremIpsum3: {
    
    color: "#121212",
    marginTop: 11
  },
  text: {
  
    color: "#121212",
    marginLeft: 40,
    marginTop: 10
  },
  loremIpsum4: {
    color: "#121212",
    marginLeft: 100,
    marginTop: 10
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 28,
    height: 31,
    width: 28,
    marginLeft: 87
  },
  loremIpsum5: {
   
    color: "rgba(68,189,68,1)",
    marginLeft: 168,
    marginTop: 7
  },
  loremIpsum6: {
  
    color: "#121212",
    marginLeft: 63,
    marginTop: 8
  },
  loremIpsum3Row: {
    height: 31,
    flexDirection: "row",
    flex: 1,
    marginRight: 29,
    marginLeft: 4,
    marginTop: 2,
  },
  rect6: {
    width: 768,
    height: 36,
    backgroundColor: "rgba(226,213,249,1)",
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 25
  },
  loremIpsum9: {
   
    color: "#121212",
    marginTop: 8
  },
  text2: {
  
    color: "#121212",
    marginLeft: 40,
    marginTop: 8
  },
  loremIpsum10: {
   
    color: "#121212",
    marginLeft: 100,
    marginTop: 7
  },
  icon1: {
   
    fontSize: 28,
    height: 31,
    width: 28,
    marginLeft: 88
  },
  loremIpsum11: {
    
    color: "rgba(231,21,21,1)",
    marginLeft: 82,
    marginTop: 7
  },
  loremIpsum12: {
  
    color: "#121212",
    marginLeft: 168,
    marginTop: 7
  },
  loremIpsum9Row: {
    height: 31,
    flexDirection: "row",
    flex: 1,
    marginRight: 27,
    marginLeft: 4,
    marginTop: 2
  },
  rect8: {
    width: 768,
    height: 36,
    backgroundColor: "#E6E6E6",
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 25
  },
  loremIpsum13: {
  
    color: "#121212",
    marginTop: 7
  },
  text3: {
  
    color: "#121212",
    marginLeft: 40,
    marginTop: 7
  },
  loremIpsum14: {
 
    color: "#121212",
    marginLeft: 100,
    marginTop: 7
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 28,
    height: 31,
    width: 28,
    marginLeft: 88
  },
  loremIpsum15: {
 
    color: "rgba(231,21,21,1)",
    marginLeft: 83,
    marginTop: 7
  },
  loremIpsum16: {
  
    color: "#121212",
    marginLeft: 168,
    marginTop: 7
  },
  loremIpsum13Row: {
    height: 31,
    flexDirection: "row",
    flex: 1,
    marginRight: 26,
    marginLeft: 4,
    marginTop: 2
  },
  rect9: {
    width: 768,
    height: 36,
    backgroundColor: "rgba(226,213,249,1)",
    marginTop: 9,
    marginLeft: 26
  },
  rect10: {
    width: 768,
    height: 36,
    backgroundColor: "#E6E6E6",
    marginTop: 8,
    marginLeft: 26
  },
  rect11: {
    width: 768,
    height: 36,
    backgroundColor: "rgba(226,213,249,1)",
    marginTop: 7,
    marginLeft: 26
  },
  total: {
  fontWeight:"bold",
    color: "#121212",
    marginTop: 3
  },
  rect12: {
    width: 64,
    height: 20,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    marginLeft: 83,
    marginTop: -1
  },
  loremIpsum7: {
    
    color: "rgba(231,21,21,1)",
    marginTop: 2,
    marginLeft: 13
  },
  rect13: {
    width: 71,
    height: 20,
    backgroundColor: "#E6E6E6",
    borderRadius: 16,
    marginLeft: 23
  },
  loremIpsum8: {
    
    color: "rgba(68,189,68,1)",
    marginTop: 1,
    marginLeft: 10
  },
  totalRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 383,
    marginRight: 155
  },
  balance2: {
   fontWeight:"bold",
    color: "#121212",
    marginTop: 10
  },
  rect14: {
    width: 132,
    height: 29,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    marginLeft: 85
  },
  loremIpsum17: {
  fontWeight:"bold",
    color: "#121212",
    fontSize: 16,
    marginTop: 5,
    marginLeft: 35
  },
  balance2Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 369,
    marginRight: 173
  }
});

export default Statement;
