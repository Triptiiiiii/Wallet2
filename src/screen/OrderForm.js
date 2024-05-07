import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView
 } from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import {useNavigation} from '@react-navigation/native';

function OrderForm(props) {
  const navigation = useNavigation();
  return (
 <ScrollView>
    <View>
    <View style={styles.container}>
    <View style={styles.rect}>
      <Text style={styles.orderForm}>Order Form</Text>
      <View style={styles.rect2}>
        <Text style={styles.loremIpsum}>Marketing Executive Name</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.loremIpsum2}>Autopopulate from Login</Text>
        </TouchableOpacity>
        <View style={styles.dateOfOrderRow}>
          <Text style={styles.dateOfOrder}>Date of Order :</Text>
          <View style={styles.rect4Stack}>
            <View style={styles.rect4}>
              <TextInput placeholder="" style={styles.textInput}></TextInput>
            </View>
            <EvilIconsIcon
              name="calendar"
              style={styles.icon}
            ></EvilIconsIcon>
          </View>
        </View>
        <View style={styles.forStateRow}>
          <Text style={styles.forState}>For State :</Text>
          <View style={styles.rect5Stack}>
            <View style={styles.rect5}>
              <TextInput placeholder="" style={styles.textInput1}></TextInput>
            </View>
            <EntypoIcon
              name="chevron-small-down"
              style={styles.icon2}
            ></EntypoIcon>
          </View>
        </View>
        <View style={styles.loremIpsum3Row}>
          <Text style={styles.loremIpsum3}>
            Select Distributor {"\n"}or Dealer :
          </Text>
          <View style={styles.rect6Stack}>
            <View style={styles.rect6}>
              <TextInput placeholder="" style={styles.textInput2}></TextInput>
            </View>
            <EntypoIcon
              name="chevron-small-down"
              style={styles.icon3}
            ></EntypoIcon>
          </View>
        </View>
        <View style={styles.loremIpsum4Row}>
          <Text style={styles.loremIpsum4}>Party Business{"\n"}Name :</Text>
          <View style={styles.rect7}>
            <TextInput placeholder="" style={styles.textInput3}></TextInput>
          </View>
        </View>
        <View style={styles.loremIpsum5Row}>
          <Text style={styles.loremIpsum5}>Contact Person{"\n"}Name :</Text>
          <View style={styles.rect8}>
            <TextInput placeholder="" style={styles.textInput4}></TextInput>
          </View>
        </View>
        <View style={styles.hisDesignationRow}>
          <Text style={styles.hisDesignation}>His Designation :</Text>
          <View style={styles.rect9}>
            <TextInput placeholder="" style={styles.textInput5}></TextInput>
          </View>
        </View>
        <View style={styles.contactNumberRow}>
          <Text style={styles.contactNumber}>Contact Number :</Text>
          <View style={styles.rect10}>
            <TextInput placeholder="" style={styles.textInput6}></TextInput>
          </View>
        </View>
        <View style={styles.eMailIdRow}>
          <Text style={styles.eMailId}>E-mail ID :</Text>
          <View style={styles.rect11}>
            <TextInput placeholder="" style={styles.textInput7}></TextInput>
          </View>
        </View>
        <View style={styles.billingAddressRow}>
          <Text style={styles.billingAddress}>Billing Address :</Text>
          <View style={styles.rect12}>
            <TextInput placeholder="" style={styles.textInput8}></TextInput>
          </View>
        </View>
        <View style={styles.shippingAddressRow}>
          <Text style={styles.shippingAddress}>Shipping Address :</Text>
          <View style={styles.rect13}>
            <TextInput placeholder="" style={styles.textInput9}></TextInput>
          </View>
        </View>
        <View style={styles.panNumberRow}>
          <Text style={styles.panNumber}>PAN Number :</Text>
          <View style={styles.rect14}>
            <TextInput placeholder="" style={styles.textInput10}></TextInput>
          </View>
        </View>
        <View style={styles.gstNumberRow}>
          <Text style={styles.gstNumber}>GST Number :</Text>
          <View style={styles.rect15}>
            <TextInput placeholder="" style={styles.textInput11}></TextInput>
          </View>
        </View>
        <View style={styles.loremIpsum6Row}>
          <Text style={styles.loremIpsum6}>
            Order from Device{"\n"}Type :
          </Text>
          <View style={styles.rect16Stack}>
            <View style={styles.rect16}>
              <TextInput
                placeholder=""
                style={styles.textInput12}
              ></TextInput>
            </View>
            <EntypoIcon
              name="chevron-small-down"
              style={styles.icon4}
            ></EntypoIcon>
          </View>
        </View>
        <View style={styles.rateRow}>
          <Text style={styles.rate}>Rate :</Text>
          <View style={styles.rect17}>
            <TextInput placeholder="" style={styles.textInput13}></TextInput>
          </View>
        </View>
        <View style={styles.totalValueRow}>
          <Text style={styles.totalValue}>Total Value :</Text>
          <View style={styles.rect18}>
            <TextInput placeholder="" style={styles.textInput14}></TextInput>
          </View>
        </View>
        <View style={styles.loremIpsum7Row}>
          <Text style={styles.loremIpsum7}>
            Extra no. of Panic{"\n"}Buttons :
          </Text>
          <View style={styles.rect19}>
            <TextInput placeholder="" style={styles.textInput15}></TextInput>
          </View>
        </View>
        <View style={styles.loremIpsum8Row}>
          <Text style={styles.loremIpsum8}>
            Rate of Panic {"\n"}Buttons :
          </Text>
          <View style={styles.rect20}>
            <TextInput placeholder="" style={styles.textInput16}></TextInput>
          </View>
        </View>
        <View style={styles.loremIpsum9Row}>
          <Text style={styles.loremIpsum9}>
            Value of Extra {"\n"}Panic Buttons :
          </Text>
          <View style={styles.rect21}>
            <TextInput placeholder="" style={styles.textInput17}></TextInput>
          </View>
        </View>
        <View style={styles.grandTotalValueRow}>
          <Text style={styles.grandTotalValue}>Grand Total{"\n"}Value :</Text>
          <View style={styles.rect22}>
            <TextInput placeholder="" style={styles.textInput18}></TextInput>
          </View>
        </View>
      </View>
      <Text style={styles.paymentTerms}>Payment Terms :</Text>
      <View style={styles.rect23}>
        <View style={styles.modeOfPaymentRow}>
          <Text style={styles.modeOfPayment}>Mode of Payment :</Text>
          <View style={styles.rect24}>
            <TextInput placeholder="" style={styles.textInput19}></TextInput>
          </View>
        </View>
        <View style={styles.loremIpsum10Row}>
          <Text style={styles.loremIpsum10}>
            Mode of Transport{"\n"}from Dispatch :
          </Text>
          <View style={styles.rect25}>
            <TextInput placeholder="" style={styles.textInput20}></TextInput>
          </View>
        </View>
      </View>
      <TouchableOpacity>
      <View style={styles.rect26}>
        <Text style={styles.submit}>Submit</Text>
      </View>
      </TouchableOpacity>
    </View>
  </View>
  </View>
  </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(78,45,135,1)",
    height:1000
  },
  rect: {
    width: 331,
    height: 980,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 10,
    marginLeft: 15
  },
  orderForm: {
    fontWeight:"bold",
    fontSize:16,
    fontFamily:"roboto-700",
    color: "rgba(78,45,135,1)",
    textDecorationLine: "underline",
    marginTop: 30,
    marginLeft: 15
    
  },
  rect2: {
    width: 299,
    height: 750,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 4,
    marginLeft: 16
  },
  rect3:{
    width: 299,
    height: 750,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOFFset:{
      width:3,
      height:3
    },
    elevation:30,
    shadowOpacity:0.5,
    shadowRadius:10,
    marginTop:4,
    marginLeft:16
  },

  loremIpsum1:{
    fontFamily:"roboto-700",
    color: "#121212",
    marginalTop:28,
    marginLeft:60
  },
  button: {
    width: 185,
    height:25,
    borderRadius:5,
    backgroundColor: '#e9e9e9'
  },

  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 28,
    marginLeft: 60
  },
  
  button: {
    width: 185,
    height: 25,
    borderRadius:5,
    backgroundColor: "rgba(155,155,155,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 5,
    marginLeft: 53
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 24
  },
  dateOfOrder: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)",
    marginTop: 5
  },
  rect4: {
    top: 0,
    left: 0,
    width: 146,
    height: 24,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 107,
    marginTop: 3,
    marginLeft: 11
  },
  icon: {
    top: 0,
    left: 120,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 26,
    height: 28,
    width: 26
  },
  rect4Stack: {
    width: 146,
    height: 28,
    marginLeft: 31
  },
  dateOfOrderRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 6,
    marginRight: 26
  },
  forState: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)",
    marginTop: 6
  },
  rect5: {
    top: 1,
    left: 0,
    width: 146,
    height: 24,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 107,
    marginTop: 4,
    marginLeft: 11
  },
  icon2: {
    top: 0,
    left: 119,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 26,
    height: 28,
    width: 26
  },
  rect5Stack: {
    width: 146,
    height: 28,
    marginLeft: 58
  },
  forStateRow: {
    height: 28,
    flexDirection: "row",
    marginLeft: 6,
    marginRight: 26
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)",
    marginTop: 2
  },
  rect6: {
    top: 1,
    left: 0,
    width: 146,
    height: 24,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 107,
    marginTop: 4,
    marginLeft: 11
  },
  icon3: {
    top: 0,
    left: 119,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 26,
    height: 28,
    width: 26
  },
  rect6Stack: {
    width: 146,
    height: 28,
    marginLeft: 9
  },
  loremIpsum3Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 7,
    marginRight: 26
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)"
  },
  rect7: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 28,
    marginTop: 1
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 3,
    marginLeft: 11
  },
  loremIpsum4Row: {
    height: 34,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 6,
    marginRight: 26
  },
  loremIpsum5: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)"
  },
  rect8: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 26,
    marginTop: 1
  },
  textInput4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 3,
    marginLeft: 10
  },
  loremIpsum5Row: {
    height: 34,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 6,
    marginRight: 25
  },
  hisDesignation: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)",
    marginTop: 6
  },
  rect9: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 16
  },
  textInput5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 3,
    marginLeft: 10
  },
  hisDesignationRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 7,
    marginRight: 25
  },
  contactNumber: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)",
    marginTop: 5
  },
  rect10: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 12
  },
  textInput6: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 3,
    marginLeft: 10
  },
  contactNumberRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 7,
    marginRight: 25
  },
  eMailId: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)",
    marginTop: 5
  },
  rect11: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 59
  },
  textInput7: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 3,
    marginLeft: 10
  },
  eMailIdRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 7,
    marginRight: 25
  },
  billingAddress: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)",
    marginTop: 3
  },
  rect12: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 22
  },
  textInput8: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 4,
    marginLeft: 10
  },
  billingAddressRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 6,
    marginRight: 25
  },
  shippingAddress: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)",
    marginTop: 4
  },
  rect13: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 5
  },
  textInput9: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 4,
    marginLeft: 10
  },
  shippingAddressRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 7,
    marginRight: 25
  },
  panNumber: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)",
    marginTop: 5
  },
  rect14: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 34
  },
  textInput10: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 4,
    marginLeft: 10
  },
  panNumberRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 7,
    marginRight: 25
  },
  gstNumber: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)",
    marginTop: 4
  },
  rect15: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 35
  },
  textInput11: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 4,
    marginLeft: 10
  },
  gstNumberRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 7,
    marginRight: 25
  },
  loremIpsum6: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)",
    marginTop: 1
  },
  rect16: {
    top: 3,
    left: 0,
    width: 146,
    height: 24,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5
  },
  textInput12: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 107,
    marginTop: 3,
    marginLeft: 10
  },
  icon4: {
    top: 0,
    left: 117,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 26,
    height: 28,
    width: 26
  },
  rect16Stack: {
    width: 146,
    height: 28,
    marginLeft: 11
  },
  loremIpsum6Row: {
    height: 35,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 6,
    marginRight: 24
  },
  rate: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)",
    marginTop: 7
  },
  rect17: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 87
  },
  textInput13: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 4,
    marginLeft: 9
  },
  rateRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 7,
    marginRight: 24
  },
  totalValue: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)",
    marginTop: 3
  },
  rect18: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 48
  },
  textInput14: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 3,
    marginLeft: 9
  },
  totalValueRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 6,
    marginRight: 23
  },
  loremIpsum7: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)"
  },
  rect19: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 14,
    marginTop: 5
  },
  textInput15: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 3,
    marginLeft: 9
  },
  loremIpsum7Row: {
    height: 34,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 7,
    marginRight: 23
  },
  loremIpsum8: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)"
  },
  rect20: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 37,
    marginTop: 2
  },
  textInput16: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 3,
    marginLeft: 8
  },
  loremIpsum8Row: {
    height: 34,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 7,
    marginRight: 23
  },
  loremIpsum9: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)"
  },
  rect21: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 28,
    marginTop: 1
  },
  textInput17: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 3,
    marginLeft: 8
  },
  loremIpsum9Row: {
    height: 34,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 8,
    marginRight: 23
  },
  grandTotalValue: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)"
  },
  rect22: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 51,
    marginTop: 6
  },
  textInput18: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 3,
    marginLeft: 8
  },
  grandTotalValueRow: {
    height: 34,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 7,
    marginRight: 23
  },
  paymentTerms: {
    fontWeight:"bold",
    fontSize:16,
    fontFamily: "roboto-700",
    color: "rgba(78,45,135,1)",
    textDecorationLine: "underline",
    marginTop: 17,
    marginLeft: 25
  },
  rect23: {
    width: 299,
    height: 77,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 3,
    marginLeft: 16
  },
  modeOfPayment: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)",
    marginTop: 3
  },
  rect24: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 8
  },
  textInput19: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 3,
    marginLeft: 12
  },
  modeOfPaymentRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 10,
    marginRight: 18
  },
  loremIpsum10: {
    fontFamily: "roboto-regular",
    color: "rgba(78,45,135,1)"
  },
  rect25: {
    width: 146,
    height: 24,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 7
  },
  textInput20: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 126,
    marginTop: 3,
    marginLeft: 12
  },
  loremIpsum10Row: {
    height: 34,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 10,
    marginRight: 18
  },
  rect26: {
    width: 250,
    height: 30,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 44
  },
  submit: {
    fontWeight:"bold",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 4,
    marginLeft: 102
  }
});

export default OrderForm;