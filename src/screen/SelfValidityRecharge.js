import React, { Component } from "react";
import { StyleSheet, View, Text, Image, img, TouchableOpacity, ScrollView } from "react-native";
import {useNavigation} from '@react-navigation/native';


function SelfValidityRecharge(props) {
  const navigation = useNavigation();
    return (
        <ScrollView horizontal={true} style={styles.scrollView}>
      <View style={styles.container}>
      <View style={styles.horizontalContent}>
        <View style={styles.rect}>
          <View style={styles.rect2StackStack}>
            <View style={styles.rect2Stack}>
              <View style={styles.rect2}>
                <View style={styles.sNoRow}>
                  <Text style={styles.sNo}>S.No.</Text>
                  <Text style={styles.dateOfRecharge}>Date Of{"\n"}Recharge</Text>
                  <Text style={styles.noOfRecords}>No. of {"\n"}Records</Text>
                  <Text style={styles.amount}>Amount</Text>
                  <Text style={styles.transactionId}>Transaction ID</Text>
                  <Text style={styles.viewStyleSheet}>View Transaction{"\n"}Sheet</Text>
                </View>
              </View>
              <TouchableOpacity>
              {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
              <Image
                source={require("../../assets/schedule.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.rect3}>
              <View style={styles.loremIpsumRow}>
                <Text style={styles.loremIpsum}>1.</Text>
                <Text style={styles.loremIpsum2}>24-01-24</Text>
                <Text style={styles.loremIpsum3}>250</Text>
                <Text style={styles.loremIpsum4}>250000/-</Text>
                <Text style={styles.loremIpsum5}>83274832</Text>
              </View>
            </View>
          </View>
          <View style={styles.rect4}></View>
          <View style={styles.rect5}></View>
          <View style={styles.rect6}></View>
          <View style={styles.rect7}></View>
          <View style={styles.rect8}></View>
          <View style={styles.rect9}></View>
          <View style={styles.rect12}></View>
          <View style={styles.rect11}></View>
          <View style={styles.rect10}></View>
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
      rect: {
        width: 540,
        height: 723,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 15,
        marginTop: 20,
        marginLeft: 10
      },
      rect2: {
        top: 0,
        left: 0,
        width: 520,
        height: 82,
        position: "absolute",
        backgroundColor: "rgba(78,45,135,1)",
        flexDirection: "row",
        marginTop:-10
      },
      sNo: {
       
        color: "rgba(244,242,242,1)",
        marginTop: 8
      },
      dateOfRecharge: {
      
        color: "rgba(255,255,255,1)",
        marginLeft: 20
      },
      noOfRecords: {
      
        color: "rgba(255,255,255,1)",
        marginLeft: 20
      },
      amount: {
      
        color: "rgba(255,255,255,1)",
        marginLeft: 20,
        marginTop: 8
      },
      transactionId: {
       
        color: "rgba(255,255,255,1)",
        marginLeft: 20,
        marginTop: 9
      },
      viewStyleSheet: {
       
        color: "rgba(255,255,255,1)",
        marginLeft: 20,
        marginTop: 1
      },
      sNoRow: {
        height: 34,
        flexDirection: "row",
        flex: 1,
        marginRight: 11,
        marginLeft: 20,
        marginTop: 23
      },
      image: {
        top: 80,
        left: 358,
        width: 31,
        height: 58,
        position: "absolute",
        transform: [
          {
            rotate: "1.00deg"
          }
        ]
      },
      rect2Stack: {
        top: 0,
        left: 0,
        width: 421,
        height: 139,
        position: "absolute"
      },
      rect3: {
        top: 88,
        left: 0,
        width: 520,
        height: 48,
        position: "absolute",
        backgroundColor: "rgba(233,233,233,1)",
        borderRadius: 15,
        flexDirection: "row"
      },
      loremIpsum: {
       
        color: "#121212",
        marginLeft: 10,
        marginTop: 2,
      },
      loremIpsum2: {
       
        color: "#121212",
        marginLeft: 30,
        marginTop: 1
      },
      loremIpsum3: {
       
        color: "#121212",
        marginLeft: 26,
        marginTop: 1
      },
      loremIpsum4: {
      
        color: "#121212",
        marginLeft: 43,
        marginTop: 1
      },
      loremIpsum5: {
      
        color: "#121212",
        marginLeft: 20
      },
      loremIpsumRow: {
        height: 19,
        flexDirection: "row",
        flex: 1,
        marginRight: 89,
        marginLeft: 19,
        marginTop: 15
      },
      rect2StackStack: {
        width: 421,
        height: 139,
        marginTop: 45,
        marginLeft: 10
      },
      rect4: {
        width: 520,
        height: 48,
        backgroundColor: "rgba(226,213,249,1)",
        borderRadius: 15,
        marginTop: 3,
        marginLeft: 10
      },
      rect5: {
        width: 520,
        height: 48,
        backgroundColor: "rgba(233,233,233,1)",
        borderRadius: 15,
        marginTop: 7,
        marginLeft: 9
      },
      rect6: {
        width: 520,
        height: 48,
        backgroundColor: "rgba(226,213,249,1)",
        borderRadius: 15,
        marginTop: 7,
        marginLeft: 9
      },
      rect7: {
        width: 520,
        height: 48,
        backgroundColor: "rgba(233,233,233,1)",
        borderRadius: 15,
        marginTop: 6,
        marginLeft: 9
      },
      rect8: {
        width: 520,
        height: 48,
        backgroundColor: "rgba(226,213,249,1)",
        borderRadius: 15,
        marginTop: 6,
        marginLeft: 9
      },
      rect9: {
        width: 520,
        height: 48,
        backgroundColor: "rgba(233,233,233,1)",
        borderRadius: 15,
        marginTop: 8,
        marginLeft: 9
      },
      rect12: {
        width: 520,
        height: 48,
        backgroundColor: "rgba(226,213,249,1)",
        borderRadius: 15,
        marginTop: 5,
        marginLeft: 10
      },
      rect11: {
        width: 520,
        height: 48,
        backgroundColor: "rgba(233,233,233,1)",
        borderRadius: 15,
        marginTop: 8,
        marginLeft: 10
      },
      rect10: {
        width: 520,
        height: 48,
        backgroundColor: "rgba(226,213,249,1)",
        borderRadius: 15,
        marginTop: 6,
        marginLeft: 10
      }
})
export default SelfValidityRecharge;