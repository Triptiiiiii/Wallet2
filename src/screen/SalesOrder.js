import React, { Component } from "react";
import { StyleSheet, View, TextInput, Image, img, Text, TouchableOpacity ,ScrollView } from "react-native";
// import {useNavigation} from '@react-navigation/native';

function SalesOrder(props) {
  // const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
    <View style={styles.container}>
    <View style={styles.horizontalContent}>
      <View style={styles.rect}>
    <TouchableOpacity>
    <View style={styles.rect3}>
          <View style={styles.filterStack}>
            <Text style={styles.filter}>ADD NEW</Text>
          
          </View>
        </View>
    </TouchableOpacity>
        
        <Text style={styles.spendsList}>Order Form</Text>
        <View style={styles.rect4}>
          <View style={styles.sNoRow}>
            <Text style={styles.sNo}>S.no.</Text>
            <Text style={styles.dateOfSpend1}>Order Date</Text>
            <Text style={styles.amountRs}>For State</Text>
            <Text style={styles.transactionId}>Distributor/{"\n"} Dealer</Text>
            <Text style={styles.loremIpsum}>Business Name</Text>
            <Text style={styles.sNo1}>Contact Person Name</Text>
            <Text style={styles.dateOfSpend2}>Designation</Text>
            <Text style={styles.amountRs2}>Contact NO.</Text>
            <Text style={styles.transactionId2}>Email ID</Text>
            <Text style={styles.loremIpsum21}>Order for Device Type</Text>
            <Text style={styles.dateOfSpend3}>Rate</Text>
            <Text style={styles.amountRs3}>Total Value</Text>
            <Text style={styles.transactionId3}>Extra Panic Buttons</Text>
            <Text style={styles.loremIpsum}>Value of Panic Buttons</Text>
            <Text style={styles.amountRs4}>Grand Total Value {"\n"} (Rs.)</Text>
            <Text style={styles.transactionId4}>Payment Terms</Text>
            <Text style={styles.loremIpsum}>Mode of Transport</Text>
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
   width:2000,
   
  },
  rect: {
    width: 1967,
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
    width: 368,
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
    width: 89,
    height: 37,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius:15,
    marginTop: 18,
    marginLeft: 302
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
    width: 68,
    height: 23,
    marginTop: 5,
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
    width: 1930,
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
  sNo1: {
   
    color: "rgba(255,255,255,1)",
    marginTop: 17,
    marginLeft:24
  },
  dateOfSpend1: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 25,
    marginTop: 16
  },
  dateOfSpend3: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 35,
    marginTop: 18
  },
  dateOfSpend2: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 25,
    marginTop: 15
  },
  amountRs: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 26,
    marginTop: 16
  },
  amountRs4: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 30,
    marginTop: 8
  },
  amountRs3: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 35,
    marginTop: 16
  },
  amountRs2: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 27,
    marginTop: 16
  },
  transactionId: {
    
    color: "rgba(255,255,255,1)",
    marginLeft: 20,
    marginTop: 8
  },
  transactionId4: {
    
    color: "rgba(255,255,255,1)",
    marginLeft: 20,
    marginTop: 16.
  },
  transactionId3: {
    
    color: "rgba(255,255,255,1)",
    marginLeft: 20,
    marginTop: 15
  },
  transactionId2: {
    
    color: "rgba(255,255,255,1)",
    marginLeft: 30,
    marginTop: 16
  },
  loremIpsum: {
  marginTop:16,
    color: "rgba(255,255,255,1)",
    marginLeft: 30
  },
  loremIpsum21: {
    marginTop:16,
      color: "rgba(255,255,255,1)",
      marginLeft: 35
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
    width: 1930,
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
  loremIpsum4: {
   
    color: "#121212",
    marginLeft: 23,
    marginTop: 2
  },
  loremIpsum5: {
   
    color: "rgba(74,144,226,1)",
    marginLeft: 36
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

export default SalesOrder;
