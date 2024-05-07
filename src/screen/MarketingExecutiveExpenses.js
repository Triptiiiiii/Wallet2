import React, { Component } from "react";
import { StyleSheet, View, TextInput, Image, img, Text, TouchableOpacity ,ScrollView } from "react-native";
 import {useNavigation} from '@react-navigation/native';

function MarketingExecutiveExpenses(props) {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
    <View style={styles.container}>
    <View style={styles.horizontalContent}>
      <View style={styles.rect}>
       <TouchableOpacity onPress={() => navigation.navigate('ExpensesForm')}>
       <View style={styles.rect3}>
          <View style={styles.filterStack}>
            <Text style={styles.filter}>ADD NEW</Text>
         
          </View>
        </View>
       </TouchableOpacity>
       
        <Text style={styles.spendsList}>Marketing Excetutive Expenses - LIST(EXECUTIVE LOGIN)</Text>
        <View style={styles.rect4}>
          <View style={styles.sNoRow}>
            <Text style={styles.sNo}>S.no.</Text>
            <Text style={styles.dateOfSpend}>Date of{"\n"}Expense</Text>
            <Text style={styles.amountRs}>Expense Head</Text>
            <Text style={styles.transactionId}>Narration</Text>
            <Text style={styles.loremIpsum}>Amount (Rs.)</Text>
            <Text style={styles.transactionId}>Approved by</Text>
            <Text style={styles.loremIpsum10}>Verified by</Text>
            </View>
        </View>
        <View style={styles.rect5Stack}>
          <View style={styles.rect5}>
            <View style={styles.loremIpsum2Row}>
              <Text style={styles.loremIpsum2}>1.</Text>
              <Text style={styles.loremIpsum3}>28-01-24</Text>
              <Text style={styles.loremIpsum4}></Text>
              <Text style={styles.loremIpsum5}>Travelling from Mumbai{"\n"} to Hyderabad</Text>
              <Text style={styles.loremIpsum6}>5000</Text>
              <Text style={styles.loremIpsum16}>Ashwin</Text>
              <Text style={styles.loremIpsum17}>Ashwin</Text>
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
   width:750,
   
  },
  rect: {
    width: 730,
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
    width: 408,
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
    width: 85,
    height: 37,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius:15,
    marginTop: 18,
    marginLeft: 250
   
  },
  filter: {
    top: 4,
    left: 0,
    position: "absolute",
    fontWeight:"bold",
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
    width: 78,
    height: 25,
    marginTop: 5,
    marginLeft: 12,
    
  },
  spendsList: {
    
    color: "rgba(78,45,151,1)",
    fontSize: 16,
    marginTop: 17,
    marginLeft: 18,
    fontWeight:"bold",
  },
  rect4: {
    width: 700,
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
  dateOfSpend: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 25,
    marginTop: 8
  },
  amountRs: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 27,
    marginTop: 17
  },
  transactionId: {
    
    color: "rgba(255,255,255,1)",
    marginLeft: 40,
    marginTop: 17
  },
  loremIpsum: {
  
    color: "rgba(255,255,255,1)",
    marginLeft: 55,
    marginTop:18
  },
  loremIpsum10: {
  
    color: "rgba(255,255,255,1)",
    marginLeft: 25,
    marginTop:18
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
    width: 700,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(233,233,233,1)",
 
    flexDirection: "row"
  },
  loremIpsum2: {
   
    color: "#121212",
    marginTop: 1
  },
  loremIpsum6: {
    marginLeft:25,
    color: "#121212",
    marginTop: 1
  },
  loremIpsum16: {
    marginLeft:70,
    color: "#121212",
    marginTop: 1
  },
  loremIpsum17: {
    marginLeft:60,
    color: "#121212",
    marginTop: 1
  },
  
  loremIpsum3: {
   
    color: "#121212",
    marginLeft: 27,
    marginTop: 1
  },
  loremIpsum4: {
   
    color: "#121212",
    marginLeft: 23,
    marginTop: 2
  },
  loremIpsum5: {
   height:40,
    color: "rgba(74,144,226,1)",
    marginLeft: 106,
    top:-10
  },
  loremIpsum2Row: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 148,
    marginLeft: 16,
    marginTop: 12
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
  }
});

export default MarketingExecutiveExpenses;
