import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from "react";
import {useNavigation} from '@react-navigation/native';

function Notifications2(props) {
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <View style={styles.loremIpsum2Row}>
          <Text style={styles.loremIpsum2}></Text>
          <View style={styles.rect}>
            <View style={styles.rect2}>
              <Text style={styles.loremIpsum}>Credit Limit Approval</Text>
              <Text style={styles.text}>OEM/Distributor : OEM-1</Text>
              <Text style={styles.text2}>Name : J Technologies</Text>
              <Text style={styles.text3}>Credit Limit : Rs. 6,00,000</Text>
              <View style={styles.button10Row}>
                <TouchableOpacity style={styles.button10}>
                  <Text style={styles.hold}>Hold</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button9}>
                  <Text style={styles.approve}>Approve</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rect3}>
              <Text style={styles.loremIpsum3}>Credit Limit Approval</Text>
              <Text style={styles.text4}>OEM/Distributor : OEM-1</Text>
              <Text style={styles.text5}>Name : J Technologies</Text>
              <Text style={styles.text6}>Credit Limit : Rs. 6,00,000</Text>
              <View style={styles.button8Row}>
                <TouchableOpacity style={styles.button8}>
                  <Text style={styles.hold1}>Hold</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button7}>
                  <Text style={styles.approve1}>Approve</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rect4}>
              <Text style={styles.loremIpsum4}>Credit Limit Approval</Text>
              <Text style={styles.text7}>OEM/Distributor : OEM-1</Text>
              <Text style={styles.text8}>Name : J Technologies</Text>
              <Text style={styles.text9}>Credit Limit : Rs. 6,00,000</Text>
              <View style={styles.button6Row}>
                <TouchableOpacity style={styles.button6}>
                  <Text style={styles.hold2}>Hold</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button5}>
                  <Text style={styles.approve2}>Approve</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(78,45,135,1)",
        borderRadius: 1,
        flexDirection: "row"
      },
      loremIpsum2: {
       color: "#121212",
        marginTop: 7
      },
      rect: {
        width: 330,
        height: 663,
        backgroundColor: "#E6E6E6",
        borderRadius: 15,
        marginLeft: 448
      },
      rect2: {
        width: 301,
        height: 160,
        backgroundColor: "rgba(229,193,251,0.33)",
        borderRadius: 15,
        marginTop: 5,
        marginLeft: 15
      },
      loremIpsum: {
       
        color: "rgba(78,45,135,1)",
        fontSize: 16,
        marginTop: 9,
        marginLeft: 71
      },
      text: {
        
        color: "#121212",
        marginTop: 13,
        marginLeft: 10
      },
      text2: {
      
        color: "#121212",
        marginLeft: 10
      },
      text3: {
      
        color: "#121212",
        marginLeft: 10
      },
      button10: {
        width: 73,
        height: 22,
        backgroundColor: "rgba(231,21,21,1)",
        borderRadius: 15
      },
      hold: {
        
        color: "rgba(255,255,255,1)",
        marginTop: 1,
        marginLeft: 22
      },
      button9: {
        width: 73,
        height: 22,
        backgroundColor: "rgba(68,189,68,1)",
        borderRadius: 15,
        marginLeft: 126
      },
      approve: {
       
        color: "rgba(255,255,255,1)",
        marginTop: 1,
        marginLeft: 13
      },
      button10Row: {
        height: 22,
        flexDirection: "row",
        marginTop: 16,
        marginLeft: 8,
        marginRight: 21
      },
      rect3: {
        width: 301,
        height: 170,
        backgroundColor: "rgba(229,193,251,0.32)",
        borderRadius: 15,
        marginTop: 10,
        marginLeft: 15
      },
      loremIpsum3: {
        
        color: "rgba(78,45,135,1)",
        fontSize: 16,
        marginTop: 13,
        marginLeft: 75
      },
      text4: {
       
        color: "#121212",
        marginTop: 13,
        marginLeft: 10
      },
      text5: {
       
        color: "#121212",
        marginLeft: 10
      },
      text6: {
      
        color: "#121212",
        marginTop: 1,
        marginLeft: 10
      },
      button8: {
        width: 73,
        height: 22,
        backgroundColor: "rgba(231,21,21,1)",
        borderRadius: 15,
      },
      hold1: {
       
        color: "rgba(255,255,255,1)",
        marginTop: 1,
        marginLeft: 19
      },
      button7: {
        width: 73,
        height: 22,
        backgroundColor: "rgba(68,189,68,1)",
        borderRadius: 15,
        marginLeft: 124
      },
      approve1: {
      
        color: "rgba(255,255,255,1)",
        marginTop: 1,
        marginLeft: 11
      },
      button8Row: {
        height: 22,
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 11,
        marginRight: 20
      },
      rect4: {
        width: 301,
        height: 160,
        backgroundColor: "rgba(229,193,251,0.32)",
        borderRadius: 15,
        marginTop: 9,
        marginLeft: 15
      },
      loremIpsum4: {
      
        color: "rgba(78,45,135,1)",
        fontSize: 16,
        marginTop: 16,
        marginLeft: 76
      },
      text7: {
       
        color: "#121212",
        marginTop: 15,
        marginLeft: 11
      },
      text8: {

        color: "#121212",
        marginLeft: 11
      },
      text9: {
        
        color: "#121212",
        marginTop: 1,
        marginLeft: 11
      },
      button6: {
        width: 73,
        height: 22,
        backgroundColor: "rgba(231,21,21,1)",
        borderRadius: 15
      },
      hold2: {
       
        color: "rgba(255,255,255,1)",
        marginTop: 1,
        marginLeft: 22
      },
      button5: {
        width: 73,
        height: 22,
        backgroundColor: "rgba(68,189,68,1)",
        borderRadius: 15,
        marginLeft: 124,
        marginTop: 1
      },
      approve2: {
        
        color: "rgba(255,255,255,1)",
        marginTop: 1,
        marginLeft: 13
      },
      button6Row: {
        height: 23,
        flexDirection: "row",
        marginTop: 9,
        marginLeft: 11,
        marginRight: 20
      },
      loremIpsum2Row: {
        height: 663,
        flexDirection: "row",
        flex: 1,
        marginRight: 20,
        marginLeft: -434,
        marginTop: 20
      }
})
export default Notifications2;
