import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

function AddAmount2(props) {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <View style={styles.container}>
      <View style={styles.horizontalContent}>
        <View style={styles.rect}>
          <View style={styles.rect2}>
            <View style={styles.snoRow}>
              <Text style={styles.sno}>Sno.</Text>
              <Text style={styles.date}>Date</Text>
              <Text style={styles.oemDistributor}>OEM/{"\n"}Distributor</Text>
              <Text style={styles.accountId}>Account ID</Text>
              <Text style={styles.oemDistributorName}>
                OEM Distributor{"\n"}Name
              </Text>
              <Text style={styles.referenceUtrNo}>Reference{"\n"} UTR No.</Text>
              <Text style={styles.amountAdded2}>Amount{"\n"}Added</Text>
              <Text style={styles.action}>Action</Text>
            </View>
          </View>
          <View style={styles.rect3}>
            <View style={styles.loremIpsumRow}>
              <Text style={styles.loremIpsum}>1.</Text>
              <Text style={styles.loremIpsum2}>23-01-24</Text>
              <Text style={styles.oem2}>OEM</Text>
              <Text style={styles.loremIpsum3}>938492384</Text>
              <Text style={styles.oem1}>Tripti</Text>
              <Text style={styles.loremIpsum5}>1234</Text>
              <Text style={styles.loremIpsum4}>2,00,000</Text>
            </View>
          </View>
          <View style={styles.rect3}>
            <View style={styles.loremIpsumRow}>
              <Text style={styles.loremIpsum}>2.</Text>
              <Text style={styles.loremIpsum2}>24-01-24</Text>
              <Text style={styles.oem2}>Distr.</Text>
              <Text style={styles.loremIpsum3}>908492384</Text>
              <Text style={styles.oem1}>Divya</Text>
              <Text style={styles.loremIpsum5}>6234</Text>
              <Text style={styles.loremIpsum4}>4,00,000</Text>
            </View>
          </View>
          <View style={styles.rect4}></View>
          <View style={styles.rect5}></View>
          <View style={styles.rect6}></View>
          <View style={styles.rect7}>
            <View style={styles.totalAmountAdeedRow}>
              <Text style={styles.totalAmountAdeed}>Total Amount{"\n"}Adeed</Text>
              <Text style={styles.loremIpsum6}>3,50,000</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AddAmount')}>
          <View style={styles.rect8}>
            <Text style={styles.addAmount}>Add Amount</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(78,45,135,1)"
  },
  rect: {
    width: 761,
    height: 657,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    marginTop: 46,
    marginLeft: 29,
    alignSelf: "center"
  },
  rect2: {
    width: 728,
    height: 67,
    backgroundColor: "rgba(78,45,135,1)",
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 16
  },
  sno: {

    color: "rgba(255,255,255,1)",
    marginTop: 7
  },
  date: {

    color: "rgba(255,255,255,1)",
    marginLeft: 24,
    marginTop: 7
  },
  oemDistributor: {

    color: "rgba(255,255,255,1)",
    marginLeft: 36,
    marginTop: 1
  },
  accountId: {

    color: "rgba(255,255,255,1)",
    marginLeft: 25,
    marginTop: 7
  },
  oemDistributorName: {

    color: "rgba(255,255,255,1)",
    marginLeft: 25,
    marginTop: 1
  },
  referenceUtrNo: {

    color: "rgba(255,255,255,1)",
    marginLeft: 34
  },
  amountAdded2: {

    color: "rgba(255,255,255,1)",
    marginLeft: 50,
    marginTop: 2
  },
  action: {

    color: "rgba(255,255,255,1)",
    marginLeft: 43,
    marginTop: 12
  },
  snoRow: {
    height: 35,
    flexDirection: "row",
    flex: 1,
    marginRight: 32,
    marginLeft: 16,
    marginTop: 15
  },
  rect3: {
    width: 728,
    height: 55,
    backgroundColor: "rgba(233,233,233,1)",
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 17
  },
  loremIpsum: {

    color: "#121212",
    marginTop: 6
  },
  loremIpsum2: {

    color: "#121212",
    marginLeft: 23,
    marginTop: 4
  },
  oem2: {

    color: "#121212",
    marginLeft: 31,
    marginTop: 5
  },
  loremIpsum3: {

    color: "#121212",
    marginLeft: 49,
    marginTop: 2
  },
  oem1: {

    color: "#121212",
    marginLeft: 44,
    marginTop: 2
  },
  loremIpsum5: {

    color: "#121212",
    marginLeft: 85,
    marginTop: 1
  },
  loremIpsum4: {

    color: "#121212",
    marginLeft: 70
  },
  loremIpsumRow: {
    height: 23,
    flexDirection: "row",
    flex: 1,
    marginRight: 113,
    marginLeft: 23,
    marginTop: 17
  },
  rect4: {
    width: 728,
    height: 55,
    backgroundColor: "rgba(226,213,249,1)",
    borderRadius: 15,
    marginTop: 8,
    marginLeft: 17
  },
  rect5: {
    width: 728,
    height: 55,
    backgroundColor: "rgba(233,233,233,1)",
    borderRadius: 15,
    marginTop: 8,
    marginLeft: 17
  },
  rect6: {
    width: 728,
    height: 55,
    backgroundColor: "rgba(226,213,249,1)",
    borderRadius: 15,
    marginTop: 7,
    marginLeft: 17
  },
  rect7: {
    width: 728,
    height: 55,
    backgroundColor: "rgba(233,233,233,1)",
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 17
  },
  totalAmountAdeed: {
color: "#121212"
  },
  loremIpsum6: {
    color: "#121212",
    marginLeft: 156,
    marginTop: 8
  },
  totalAmountAdeedRow: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 108,
    marginLeft: 326,
    marginTop: 11
  },
  rect8: {
    width: 152,
    height: 36,
    backgroundColor: "rgba(68,189,68,1)",
    borderRadius: 15,
    marginTop: -699,
    marginLeft: 594
  },
  addAmount: {

    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 8,
    marginLeft: 30
  }
});

export default AddAmount2;

