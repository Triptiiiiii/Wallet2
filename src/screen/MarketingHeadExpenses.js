import React, { Component } from "react";
import { StyleSheet, View, TextInput, Image, img, Text, TouchableOpacity ,ScrollView } from "react-native";
// import {useNavigation} from '@react-navigation/native';

function MarketingHeadExpenses(props) {
  // const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
    <View style={styles.container}>
    <View style={styles.horizontalContent}>
      <View style={styles.rect}>
        
        <Text style={styles.spendsList}>Expenses of Marketing Executives- {'\n'} List (MD SIR LOGIN, STATE HEAD LOGIN)</Text>
        <View style={styles.rect4}>
          <View style={styles.sNoRow}>
            <Text style={styles.sNo}>S.no.</Text>
            <Text style={styles.executivename}>Marketing {"\n"} Executive Name</Text>
            <Text style={styles.amountRs}>State</Text>
            <Text style={styles.transactionId}>Date of Expenses</Text>
            <Text style={styles.loremIpsum}>
              Expense{"\n"}Head
            </Text>
            <Text style={styles.transactionId}>Narration</Text>
            <Text style={styles.transactionId}>Amount(Rs.)</Text>
            <Text style={styles.transactionId}>Approved by</Text>
            <Text style={styles.transactionId}>Verified by</Text>
          </View>
        </View>
        <View style={styles.rect5Stack}>
          <View style={styles.rect5}>
            <View style={styles.loremIpsum2Row}>
              <Text style={styles.loremIpsum2}>1.</Text>
              <Text style={styles.loremIpsum3}>Tripti Kumari</Text>
              <Text style={styles.loremIpsum4}>Jharkhand</Text>
              <Text style={styles.loremIpsum5}>04-05-24</Text>
              <Text style={styles.loremIpsum6}></Text>
              <Text style={styles.loremIpsum2}>Travelling from Goa {"\n"} to Hyderabad</Text>
              <Text style={styles.loremIpsum7}>8000</Text>
              <Text style={styles.loremIpsum8}>Ashwin</Text>
              <Text style={styles.loremIpsum9}>Ashwin</Text>
            </View>
          </View>
         
        </View>
        <View style={styles.rect5Stack}>
          <View style={styles.rect5}>
            <View style={styles.loremIpsum2Row}>
           
            </View>
          </View>
         
        </View>
        <View style={styles.rect5Stack}>
          <View style={styles.rect5}>
            <View style={styles.loremIpsum2Row}>
          
            </View>
          </View>
        
        </View>
        <View style={styles.rect5Stack}>
          <View style={styles.rect5}>
            <View style={styles.loremIpsum2Row}>
          
            </View>
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
   width:920,
   
  },
  rect: {
    width: 890,
    height: 600,
    backgroundColor: "rgba(255,255,255,1)",
    // borderTopRightRadius: 15,
    // borderBottomLeftRadius: 15,
    borderRadius:15,
    marginLeft: 10,
    alignSelf: "center",
    marginTop:20
  },
  rect2: {
    width: 325,
    height: 41,
    backgroundColor: "#E6E6E6",
   borderRadius:15,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 13
  },
  search: {
   
    color: "#121212",
    height: 41,
    width: 303
  },
  image: {
    width: 39,
    height: 31,
    marginTop: 5
  },
  searchRow: {
    height: 41,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 17
  },
  rect3: {
    width: 79,
    height: 27,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius:15,
    marginTop: 18,
    marginLeft: 302
  },
  filter: {
    top: 4,
    left: 0,
    position: "absolute",
  
    color: "rgba(255,255,255,1)"
  },
  image2: {
    top: 0,
    left: 28,
    width: 30,
    height: 23,
    position: "absolute"
  },
  filterStack: {
    width: 58,
    height: 23,
    marginTop: 2,
    marginLeft: 15,
    
  },
  spendsList: {
    
    color: "rgba(78,45,151,1)",
    fontSize: 16,
    marginTop: 17,
    marginLeft: 18,
    fontWeight:"bold",
  },
  rect4: {
    width: 860,
    height: 55,
    backgroundColor: "rgba(78,45,135,1)",
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 18
  },
  sNo: {
   
    color: "rgba(255,255,255,1)",
    marginTop: 17
  },
  executivename: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 15,
    marginTop: 8
  },
  amountRs: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 27,
    marginTop: 17
  },
  transactionId: {
    
    color: "rgba(255,255,255,1)",
    marginLeft: 32,
    marginTop: 17
  },
  loremIpsum: {
  
    color: "rgba(255,255,255,1)",
    marginLeft: 35,
    marginTop:8
  },
  sNoRow: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: 28,
    marginLeft: 7,
    marginTop: 3
  },
  rect5: {
    top: 5,
    left: 0,
    width: 860,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(233,233,233,1)",
 
    flexDirection: "row"
  },
  loremIpsum2: {
   
    color: "#121212",
    marginTop: 1
  },
  loremIpsum3: {
   
    color: "#121212",
    marginLeft: 27,
    marginTop: 1
  },
  loremIpsum7:{
    color: "#121212",
    marginLeft: 22,
    marginTop: 1
  },
  loremIpsum4: {
   
    color: "#121212",
    marginLeft: 35,
    marginTop: 2
  },
  loremIpsum8: {
   
    color: "#121212",
    marginLeft: 50,
    marginTop: 2
  },
  loremIpsum5: {
   
    color: "rgba(74,144,226,1)",
    marginLeft: 36
  },
  loremIpsum9: {
   top:2,
    color: "rgba(74,144,226,1)",
    marginLeft: 60
  },
  loremIpsum6:{
    marginLeft:120
  },
  loremIpsum2Row: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 148,
    marginLeft: 26,
    marginTop: 5
  },
  image4: {
    top: 16,
    left: 342,
    width: 25,
    height: 25,
    position: "absolute",
    transform: [
      {
        rotate: "1.00deg"
      }
    ]
  },
  rect5Stack: {
    width: 430,
    height: 53,
    marginLeft: 18
  },
  rect6: {
    width: 430,
    height: 44,
    backgroundColor: "rgba(226,213,249,1)",
    
    marginTop: 1,
    marginLeft: 19
  },
  rect7: {
    width: 430,
    height: 44,
    backgroundColor: "rgba(233,233,233,1)",
   
    marginTop: 5,
    marginLeft: 18
  },
  rect8: {
    width: 430,
    height: 44,
    backgroundColor: "rgba(226,213,249,1)",
    borderRadius: 15,
    marginTop: 6,
    marginLeft: 18
  },

});

export default MarketingHeadExpenses;
