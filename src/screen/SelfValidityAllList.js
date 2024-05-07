import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function SelfValidityAllList(props) {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
    <View style={styles.container}>
    <View style={styles.horizontalContent}>
      <View style={styles.rect}>
        <View style={styles.rect2}>
          <View style={styles.snoRow}>
            <Text style={styles.sno}>Sno.</Text>
            <Text style={styles.dateOfRecharge}>Date of{"\n"}Recharge</Text>
            <View style={styles.loremIpsum2Stack}>
              <Text style={styles.loremIpsum2}>
                OEM/{"\n"}Dealer/{"\n"}Distributor
              </Text>
              <Text style={styles.loremIpsum3}></Text>
            </View>
            <Text style={styles.businessName}>Business{"\n"}Name</Text>
            <Text style={styles.noOfRecords}>No. of{"\n"}Records</Text>
            <Text style={styles.amount}>Amount</Text>
            <Text style={styles.batchId}>BatchID</Text>
            <Text style={styles.transactionId}>Transaction ID</Text>
            <Text style={styles.viewTransactionId}>View Transaction ID</Text>
          </View>
        </View>
        <View style={styles.rect3}>
          <Icon name="text-document" style={styles.icon}></Icon>
        </View>
        <View style={styles.rect4}></View>
        <View style={styles.rect5}></View>
        <View style={styles.rect6}></View>
        <View style={styles.rect7}></View>
        <View style={styles.rect8}></View>
        <View style={styles.rect10}></View>
        <View style={styles.rect9}></View>
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
    width: 867,
    height: 520,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 16,
    marginTop: 20,
    marginLeft: 17
  },
  rect2: {
    width: 833,
    height: 67,
    backgroundColor: "rgba(78,45,135,1)",
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 17
  },
  sno: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 17
  },
  dateOfRecharge: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 39,
    marginTop: 9
  },
  loremIpsum2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)"
  },
  loremIpsum3: {
    top: 14,
    left: 49,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum2Stack: {
    width: 65,
    height: 50,
    marginLeft: 39
  },
  businessName: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 27,
    marginTop: 10
  },
  noOfRecords: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 30,
    marginTop: 9
  },
  amount: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 23,
    marginTop: 18
  },
  batchId: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 28,
    marginTop: 18
  },
  transactionId: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 19,
    marginTop: 18
  },
  viewTransactionId: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 23,
    marginTop: 19
  },
  snoRow: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 16,
    marginTop: 10
  },
  rect3: {
    width: 833,
    height: 44,
    backgroundColor: "rgba(233,233,233,1)",
    marginTop: 7,
    marginLeft: 17
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 29,
    height: 31,
    width: 29,
    marginTop: 6,
    marginLeft: 729
  },
  rect4: {
    width: 833,
    height: 44,
    backgroundColor: "rgba(226,213,249,1)",
    marginTop: 8,
    marginLeft: 17
  },
  rect5: {
    width: 833,
    height: 44,
    backgroundColor: "rgba(233,233,233,1)",
    marginTop: 9,
    marginLeft: 17
  },
  rect6: {
    width: 833,
    height: 44,
    backgroundColor: "rgba(226,213,249,1)",
    marginTop: 10,
    marginLeft: 17
  },
  rect7: {
    width: 833,
    height: 44,
    backgroundColor: "rgba(233,233,233,1)",
    marginTop: 9,
    marginLeft: 16
  },
  rect8: {
    width: 833,
    height: 44,
    backgroundColor: "rgba(226,213,249,1)",
    marginTop: 8,
    marginLeft: 18
  },
  rect10: {
    width: 833,
    height: 44,
    backgroundColor: "rgba(233,233,233,1)",
    marginTop: 9,
    marginLeft: 16
  },
  rect9: {
    width: 833,
    height: 44,
    backgroundColor: "rgba(226,213,249,1)",
    marginTop: 9,
    marginLeft: 15
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: -570,
    marginLeft: 44
  }
});

export default SelfValidityAllList;
