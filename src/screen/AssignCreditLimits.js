import React, { Component } from "react";
import { StyleSheet, View, Text, Image, img, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

function AssignCreditLimit2(props) {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <View style={styles.container}>
        
      <TouchableOpacity style={styles.assignButton}onPress={() => navigation.navigate('Assign Credit Limit')}> 
          <Text style={styles.assignButtonText}>Assign Credit Limit</Text>
        </TouchableOpacity>
        <View style={styles.horizontalContent}>
          <View style={styles.rect}>
            <View style={styles.rect2}>
              <View style={styles.sNoRow}>
                <Text style={styles.sNo}>S.No.</Text>
                <Text style={styles.date}>Date</Text>
                <Text style={styles.oemDistributor}>OEM/{"\n"}Distributor</Text>
                <Text style={styles.accountId}>Account ID</Text>
                <Text style={styles.transactionId}>Transaction ID</Text>
                <Text style={styles.oemDistributorName}>
                  OEM/Distributor{"\n"}Name
                </Text>
                <Text style={styles.creditLimit}>Credit {"\n"}Limit</Text>
                <Text style={styles.usedLimit}>Used {"\n"}Limit</Text>
                <Text style={styles.balance}>Balance</Text>
                <Text style={styles.action2}>Action</Text>
                <Text style={styles.viewAccount}>View{"\n"}Account</Text>
              </View>
            </View>
            <View style={styles.rect3}>
              <View style={styles.loremIpsumRow}>
                <Text style={styles.loremIpsum}>1.</Text>
                <Text style={styles.text}>23-01-24</Text>
                <Text style={styles.oem2}>OEM</Text>
                <Text style={styles.text2}>143267894</Text>
                <Text style={styles.text3}>12345678</Text>
                <Text style={styles.oem1}>Tripti</Text>
                <Text style={styles.text4}>6,00,000</Text>
                <Text style={styles.text5}>7,000</Text>
                <Text style={styles.text6}>6,00,000</Text>
                <TouchableOpacity>
                  {img && <Image source={img} style={{ width: 50, height: 50, position: 'absolute', top: 1, left: 10, padding: 10, margin: 10, }} resizeMode='cover' />}
                  <Image
                    source={require("../../assets/pencil.png")}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.viewButton} onPress={() => navigation.navigate('Statement')}>View Button</Text>
                </TouchableOpacity>
                </View>
             
            </View>
            <View style={styles.rect3}>
              <View style={styles.loremIpsumRow}>
                <Text style={styles.loremIpsum}>2.</Text>
                <Text style={styles.text}>24-01-24</Text>
                <Text style={styles.oem2}>Distri.</Text>
                <Text style={styles.text12}>148867894</Text>
                <Text style={styles.text3}>56345678</Text>
                <Text style={styles.oem1}>Divya</Text>
                <Text style={styles.text4}>8,00,000</Text>
                <Text style={styles.text5}>6,000</Text>
                <Text style={styles.text6}>5,30,000</Text>
                <TouchableOpacity>
                  {img && <Image source={img} style={{ width: 50, height: 50, position: 'absolute', top: 1, left: 10, padding: 10, margin: 10, }} resizeMode='cover' />}
                  <Image
                    source={require("../../assets/pencil.png")}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.viewButton} onPress={() => navigation.navigate('Statement')}>View Button</Text>
                </TouchableOpacity>
                </View>
             
            </View>
            <View style={styles.rect4}></View>
            <View style={styles.rect5}></View>
            <View style={styles.rect6}></View>
            <View style={styles.rect7}></View>
            <View style={styles.rect8}></View>
            <View style={styles.rect9}></View>
            <View style={styles.rect10}></View>
            <View style={styles.rect11}></View>
            <View style={styles.totalCreditRow}>
              <Text style={styles.totalCredit}>Total Credit</Text>
              <View style={styles.rect12}>
                <Text style={styles.loremIpsum2}>6,00,000</Text>
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
  container: {
    flex: 1,
    backgroundColor: "rgba(78,45,135,1)"
  },
  horizontalContent: {
    flexDirection: "row",
  },
  assignButton: {
    backgroundColor: "rgba(68,189,68,1)",
    padding: 10,
    borderRadius: 15,
    margin: 10,
    marginLeft:750,
    alignSelf: 'flex-start', // Align button to the left
  },
  assignButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  rect: {
    width: 920,
    height: 581,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.38,
    shadowRadius: 0,
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 15,
  },
  
  rect2: {
    width: 893,
    height: 67,
    backgroundColor: "rgba(78,45,135,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.35,
    shadowRadius: 0,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 14
  },
  sNo: {
   
    color: "rgba(255,255,255,1)",
    marginTop: 10
  },
  date: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 12,
    marginTop: 10
  },
  oemDistributor: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 24
  },
  accountId: {
    
    color: "rgba(255,255,255,1)",
    marginLeft: 14,
    marginTop: 8
  },
  transactionId: {
    
    color: "rgba(255,255,255,1)",
    marginLeft: 16,
    marginTop: 9
  },
  oemDistributorName: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 16,
    marginTop: 1
  },
  creditLimit: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 27,
    marginTop: 2
  },
  usedLimit: {
    
    color: "rgba(255,255,255,1)",
    marginLeft: 30,
    marginTop: 2
  },
  balance: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 34,
    marginTop: 9
  },
  action2: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 31,
    marginTop: 10
  },
  viewAccount: {
    
    color: "rgba(255,255,255,1)",
    marginLeft: 37,
    marginTop: 3
  },
  sNoRow: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 43,
    marginLeft: 5,
    marginTop: 17
  },
  rect3: {
    width: 893,
    height: 43,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 14
  },
  loremIpsum: {
   
    color: "#121212",
    marginTop: 13
  },
  text: {
   
    color: "#121212",
    marginLeft: 15,
    marginTop: 13
  },
  oem2: {
   
    color: "#121212",
    marginLeft: 17,
    marginTop: 13
  },
  text2: {
   
    color: "#121212",
    marginLeft: 39,
    marginTop: 13
  },
  text12:{
    color: "#121212",
    marginLeft: 33,
    marginTop: 13
  },
  text3: {
    
    color: "rgba(74,144,226,1)",
    marginLeft: 25,
    marginTop: 13
  },
  oem1: {
    
    color: "#121212",
    marginLeft: 46,
    marginTop: 13
  },
  text4: {
  
    color: "#121212",
    marginLeft: 67,
    marginTop: 13
  },
  text5: {
    
    color: "#121212",
    marginLeft: 25,
    marginTop: 13
  },
  text6: {
  
    color: "#121212",
    marginLeft: 33,
    marginTop: 13
  },
  image: {
    width: 25,
    height: 37,
    marginLeft: 36
  },
  loremIpsumRow: {
    height: 37,
    flexDirection: "row",
    flex: 1,
    marginRight: 140,
    marginLeft: 12
  },
  rect4: {
    width: 893,
    height: 43,
    backgroundColor: "rgba(226,213,249,1)",
    borderRadius: 15,
    marginTop: 4,
    marginLeft: 14
  },
  rect5: {
    width: 893,
    height: 43,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    marginTop: 4,
    marginLeft: 14
  },
  rect6: {
    width: 893,
    height: 43,
    backgroundColor: "rgba(226,213,249,1)",
    borderRadius: 15,
    marginTop: 4,
    marginLeft: 14
  },
  rect7: {
    width: 893,
    height: 43,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    marginTop: 4,
    marginLeft: 14
  },
  rect8: {
    width: 893,
    height: 43,
    backgroundColor: "rgba(226,213,249,1)",
    borderRadius: 15,
    marginTop: 4,
    marginLeft: 14
  },
  rect9: {
    width: 893,
    height: 43,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    marginTop: 4,
    marginLeft: 14
  },
  rect10: {
    width: 893,
    height: 43,
    backgroundColor: "rgba(226,213,249,1)",
    borderRadius: 15,
    marginTop: 4,
    marginLeft: 14
  },
  rect11: {
    width: 893,
    height: 43,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    marginTop: 4,
    marginLeft: 14
  },
  totalCredit: {
    
    color: "#121212",
    fontSize: 16,
    fontWeight: "bold"
  },
  rect12: {
    width: 73,
    height: 21,
    backgroundColor: "rgba(81,176,230,0.73)",
    borderRadius: 15,
    marginLeft: 14,
    marginTop: 2,
  },
  loremIpsum2: {
   
    color: "rgba(255,255,255,1)",
    marginTop: 1,
    marginLeft: 11,
    fontWeight: "bold"
  },
  totalCreditRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 402,
    marginRight: 342
  },
  viewButton:{
  backgroundColor: '#F0E158',
  width: 70,
  height: 30,
  textAlign: 'center',
  lineHeight: 15,
  borderRadius: 5,
  color: '#000',
  marginLeft:30,
  marginTop:5,
  fontSize:12,
  paddingTop:8,
  }
  
})
export default AssignCreditLimit2;