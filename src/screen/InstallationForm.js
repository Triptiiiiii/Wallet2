import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { SelectList } from 'react-native-dropdown-select-list';

function InstallationForm(props) {
const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]
  return (
    <ScrollView Vertical={true} style={styles.scrollView}>
    <View style={styles.container}>
      <View style={styles.VerticleContent}>
      <View style={styles.rect}>
        <View style={styles.imeiStack}>
          <Text style={styles.imei}>IMEI</Text>
          <View style={styles.rect4Stack}>
            <View style={styles.rect4}>
            <TextInput placeholder="Select" style={styles.select}></TextInput>
           </View>
            <EntypoIcon name="chevron-down" style={styles.icon2}></EntypoIcon>
          </View>
        </View>
        
        <View style={styles.customerStack}>
          <Text style={styles.customer}>Customer</Text>
          <View style={styles.rect5}>
          <TextInput placeholder="Select" style={styles.select}></TextInput>
          </View>
          <EntypoIcon name="chevron-down" style={styles.icon3}></EntypoIcon>
        </View>
        <Text style={styles.rtoDetails}>RTO Details</Text>
        <View style={styles.stateStack}>
          <Text style={styles.state}> State</Text>
          <View style={styles.rect6}>
          <TextInput placeholder="Select" style={styles.select}></TextInput>
          </View>
          <EntypoIcon name="chevron-down" style={styles.icon4}></EntypoIcon>
        </View>
        <View style={styles.districtStack}>
          <Text style={styles.district}>District</Text>
          <View style={styles.rect7}>
          <TextInput placeholder="Select" style={styles.select}></TextInput>
          </View>
          <EntypoIcon name="chevron-down" style={styles.icon5}></EntypoIcon>
        </View>
        <View style={styles.rect8Stack}>
          <View style={styles.rect8}>
          <TextInput placeholder="Select" style={styles.select}></TextInput>
          </View>
          <EntypoIcon name="chevron-down" style={styles.icon6}></EntypoIcon>
          <Text style={styles.rtoDivision}>RTO Division</Text>
        </View>
        <Text style={styles.addVehicleDetails}>Add Vehicle Details</Text>
        <View style={styles.vehicleBirthStack}>
          <Text style={styles.vehicleBirth}>Vehicle Birth</Text>
          <View style={styles.rect9Stack}>
            <View style={styles.rect9}>
            <TextInput placeholder="Select" style={styles.select}></TextInput>
            </View>
            <EntypoIcon name="chevron-down" style={styles.icon7}></EntypoIcon>
          </View>
        </View>
        <View style={styles.vehicleTypeStack}>
          <Text style={styles.vehicleType}>Vehicle Type</Text>
          <View style={styles.rect10Stack}>
            <View style={styles.rect10}>
            <TextInput placeholder="Select" style={styles.select}></TextInput>
            </View>
            <EntypoIcon name="chevron-down" style={styles.icon8}></EntypoIcon>
        </View>
        </View>
        <Text style={styles.vehicleModel}>Vehicle Model</Text>
        <View style={styles.rect12}>
        <TextInput placeholder="Select" style={styles.select}></TextInput>
        </View>
        <Text style={styles.engineNumber}>Engine Number</Text>
        <View style={styles.rect11}>
        <TextInput placeholder="Select" style={styles.select}></TextInput>
        </View>
        <View style={styles.rect13Stack}>
          <View style={styles.rect13}>
          <TextInput placeholder="Select" style={styles.select}></TextInput>
          </View>
          <EntypoIcon name="chevron-down" style={styles.icon9}></EntypoIcon>
          <Text style={styles.loremIpsum}>No. of SOS/Panic Button</Text>
        </View>
        <Text style={styles.vehicleNo}>Vehicle No.</Text>
        <View style={styles.rect14}>
        <TextInput placeholder="Select" style={styles.select}></TextInput>
        </View>
        <Text style={styles.vehicleMake}>Vehicle Make</Text>
        <View style={styles.rect15}>
        <TextInput placeholder="Select" style={styles.select}></TextInput>
        </View>
        <Text style={styles.vehicleMake}>Manufacturing Year</Text>
        <View style={styles.rect15}>
        <TextInput placeholder="Select" style={styles.select}></TextInput>
        </View>
        <Text style={styles.vehicleMake}>Chassis Number</Text>
        <View style={styles.rect15}>
        <TextInput placeholder="Select" style={styles.select}></TextInput>
        </View>
        <Text style={styles.uploadDocuments}>Upload Documents</Text>
        <Text style={styles.vehicleImage}>Vehicle Image</Text>
        <View style={styles.rect16Row}>
          <View style={styles.rect16}>
            <TouchableOpacity>
            <View style={styles.icon10Row}>
              <EntypoIcon name="folder" style={styles.icon10}></EntypoIcon>
              <Text style={styles.browse}>Browse</Text>
            </View>
            </TouchableOpacity>
            </View>
          <View style={styles.rect17}>
            <TouchableOpacity>
            <View style={styles.icon11Row}>
              <EntypoIcon
                name="circle-with-cross"
                style={styles.icon11}
              ></EntypoIcon>
              <Text style={styles.clear}>Clear</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.vehicleRc}>Vehicle RC</Text>
        <View style={styles.rect18Row}>
          <View style={styles.rect18}>
            <TouchableOpacity>
            <View style={styles.icon12Row}>
              <EntypoIcon name="folder" style={styles.icon12}></EntypoIcon>
              <Text style={styles.browse1}>Browse</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rect19}>
            <TouchableOpacity>
            <View style={styles.icon13Row}>
              <EntypoIcon
                name="circle-with-cross"
                style={styles.icon13}
              ></EntypoIcon>
              <Text style={styles.clear1}>Clear</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.vehicleImage}>Vehicle Device Image</Text>
        <View style={styles.rect16Row}>
          <View style={styles.rect16}>
            <View style={styles.icon10Row}>
              <EntypoIcon name="folder" style={styles.icon10}></EntypoIcon>
              <Text style={styles.browse}>Browse</Text>
            </View>
          </View>
          <View style={styles.rect17}>
            <TouchableOpacity>
            <View style={styles.icon11Row}>
              <EntypoIcon
                name="circle-with-cross"
                style={styles.icon11}
              ></EntypoIcon>
              <Text style={styles.clear}>Clear</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.vehicleImage}>Customer Aadhar Card</Text>
        <View style={styles.rect16Row}>
          <View style={styles.rect16}>
            <TouchableOpacity>
            <View style={styles.icon10Row}>
              <EntypoIcon name="folder" style={styles.icon10}></EntypoIcon>
              <Text style={styles.browse}>Browse</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rect17}>
          <TouchableOpacity>
            <View style={styles.icon11Row}>
              <EntypoIcon
                name="circle-with-cross"
                style={styles.icon11}
              ></EntypoIcon>
              <Text style={styles.clear}>Clear</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.vehicleImage}>Customer Pan Card</Text>
        <View style={styles.rect16Row}>
          <View style={styles.rect16}>
            <TouchableOpacity>
            <View style={styles.icon10Row}>
              <EntypoIcon name="folder" style={styles.icon10}></EntypoIcon>
              <Text style={styles.browse}>Browse</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rect17}>
            <View style={styles.icon11Row}>
              <EntypoIcon
                name="circle-with-cross"
                style={styles.icon11}
              ></EntypoIcon>
              <Text style={styles.clear}>Clear</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
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
    backgroundColor: "rgba(233,233,233,1)",
    justifyContent: "center"
  },
  rect: {
    width: 311,
    height: 1400,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 11,
    alignSelf: "center"
  },
  imei: {
    top: 1,
    left: 1,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  select: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 20,
    width: 186,
    marginTop: 6,
    marginLeft: 11
  },
  
  rect4: {
    top: 4,
    left: 1,
    width: 231,
    height: 35,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10
  },
  icon2: {
    top: 8,
    left: 196,
    position: "absolute",
    color: "rgba(74,74,74,1)",
    fontSize: 28,
    opacity: 0.67,
    height: 31,
    width: 28
  },
  rect4Stack: {
    top: 14,
    left: 0,
    width: 224,
    height: 31,
    position: "absolute"
  },
  imeiStack: {
    width: 224,
    height: 45,
    marginTop: 24,
    marginLeft: 36,
  },
  customer: {
    top: 7,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect5: {
    top: 25,
    left: 0,
    width: 231,
    height: 35,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10
  },
  icon3: {
    top: 25,
    left: 196,
    position: "absolute",
    color: "rgba(74,74,74,1)",
    fontSize: 28,
    opacity: 0.67,
    height: 31,
    width: 28
  },
  customerStack: {
    width: 222,
    height: 44,
    marginTop: 6,
    marginLeft: 37
  },
  rtoDetails: {
    fontFamily: "roboto-500",
    color: "#4e2d87",
    fontSize: 16,
    textDecorationLine: "underline",
    marginTop: 35,
    marginLeft: 37,
    fontWeight: "bold"
  },
  state: {
    top: 0,
    left: -5,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect6: {
    top: 17,
    left: -1,
    width: 231,
    height: 35,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10
  },
  icon4: {
    top: 20,
    left: 196,
    position: "absolute",
    color: "rgba(74,74,74,1)",
    fontSize: 28,
    opacity: 0.67,
    height: 31,
    width: 28
  },
  stateStack: {
    width: 217,
    height: 44,
    marginTop: 11,
    marginLeft: 38
  },
  district: {
    top: 7,
    left: -3,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect7: {
    top: 26,
    left: -3,
    width: 231,
    height: 35,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10
  },
  icon5: {
    top: 28,
    left: 196,
    position: "absolute",
    color: "rgba(74,74,74,1)",
    fontSize: 28,
    opacity: 0.67,
    height: 31,
    width: 28
  },
  districtStack: {
    width: 213,
    height: 42,
    marginTop: 5,
    marginLeft: 40
  },
  rect8: {
    top: 35,
    left: -5,
    width: 231,
    height: 35,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10
  },
  icon6: {
    top: 38,
    left: 196,
    position: "absolute",
    color: "rgba(74,74,74,1)",
    fontSize: 28,
    opacity: 0.67,
    height: 31,
    width: 28
  },
  rtoDivision: {
    top: 16,
    left: -5,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect8Stack: {
    width: 213,
    height: 44,
    marginTop: 9,
    marginLeft: 42
  },
  addVehicleDetails: {
    fontWeight:"bold",
    fontFamily: "roboto-500",
    color: "#4e2d87",
    fontSize: 16,
    textDecorationLine: "underline",
    marginTop: 42,
    marginLeft: 37
  },
  vehicleBirth: {
    top: 0,
    left: 2,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect9: {
    top: 5,
    left: -4,
    width: 231,
    height: 35,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10
  },
  icon7: {
    top: 8,
    left: 196,
    position: "absolute",
    color: "rgba(74,74,74,1)",
    fontSize: 28,
    opacity: 0.67,
    height: 31,
    width: 28
  },
  rect9Stack: {
    top: 13,
    left: 6,
    width: 211,
    height: 31,
    position: "absolute"
  },
  vehicleBirthStack: {
    width: 217,
    height: 44,
    marginTop: 13,
    marginLeft: 35
  },
  vehicleType: {
    top: 8,
    left: 2,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect10: {
    top: 10,
    left: -5,
    width: 231,
    height: 35,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10
  },
  icon8: {
    top: 10,
    left: 196,
    position: "absolute",
    color: "rgba(74,74,74,1)",
    fontSize: 28,
    opacity: 0.67,
    height: 31,
    width: 28
  },
  rect10Stack: {
    top: 15,
    left: 7,
    width: 211,
    height: 31,
    position: "absolute"
  },
  vehicleTypeStack: {
    width: 218,
    height: 46,
    marginTop: 5,
    marginLeft: 35
  },
  vehicleModel: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 18,
    marginLeft: 36,
    marginBottom:-6
  },
  rect12: {
    width: 231,
    height: 35,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 37
  },
  engineNumber: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14,
    marginTop: 7,
    marginLeft: 35
  },
  rect11: {
    width: 231,
    height: 35,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    marginTop: 1,
    marginLeft: 37
  },
  rect13: {
    top: 19,
    left: 2,
    width: 231,
    height: 35,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10
  },
  icon9: {
    top: 18,
    left: 196,
    position: "absolute",
    color: "rgba(74,74,74,1)",
    fontSize: 28,
    opacity: 0.67,
    height: 31,
    width: 28
  },
  loremIpsum: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect13Stack: {
    width: 217,
    height: 45,
    marginTop: 9,
    marginLeft: 35
  },
  vehicleNo: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 18,
    marginLeft: 35,
    
  },
  rect14: {
    width: 231,
    height: 35,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    marginTop: 1,
    marginLeft: 39
  },
  vehicleMake: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 7,
    marginLeft: 35
  },
  rect15: {
    width: 231,
    height: 35,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    marginTop: 1,
    marginLeft: 39
  },
  uploadDocuments: {
    fontWeight:"bold",
    fontFamily: "roboto-500",
    color: "#4e2d87",
    fontSize: 16,
    textDecorationLine: "underline",
    marginTop: 12,
    marginLeft: 33
  },
  vehicleImage: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 14,
    marginLeft: 33
  },
  rect16: {
    width: 100,
    height: 25,
    backgroundColor: "rgba(68,189,68,1)",
    flexDirection: "row"
  },
  icon10: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    height: 19,
    width: 18
  },
  browse: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 5,
    marginTop: 2
  },
  icon10Row: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 16,
    marginLeft: 15,
    marginTop: 2
  },
  rect17: {
    width: 100,
    height: 25,
    backgroundColor: "rgba(200,37,37,1)",
    flexDirection: "row",
    marginLeft: 7
  },
  icon11: {
    color: "rgba(255,255,255,1)",
    fontSize: 21,
    height: 23,
    width: 21
  },
  clear: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 4,
    marginTop: 1
  },
  icon11Row: {
    height: 23,
    flexDirection: "row",
    flex: 1,
    marginRight: 23,
    marginLeft: 20,
    marginTop: 2
  },
  rect16Row: {
    height: 25,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 40,
    marginRight: 64
  },
  vehicleRc: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 12,
    marginLeft: 34
  },
  rect18: {
    width: 100,
    height: 25,
    backgroundColor: "rgba(68,189,68,1)",
    flexDirection: "row"
  },
  icon12: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    height: 19,
    width: 18
  },
  browse1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 7,
    marginTop: 1
  },
  icon12Row: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 14,
    marginTop: 2
  },
  rect19: {
    width: 100,
    height: 25,
    backgroundColor: "rgba(200,37,37,1)",
    flexDirection: "row",
    marginLeft: 7
  },
  icon13: {
    color: "rgba(255,255,255,1)",
    fontSize: 21,
    height: 23,
    width: 21
  },
  clear1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 3,
    marginTop: 4
  },
  icon13Row: {
    height: 23,
    flexDirection: "row",
    flex: 1,
    marginRight: 23,
    marginLeft: 21,
    marginTop: 1
  },
  rect18Row: {
    height: 25,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 40,
    marginRight: 64
  },
  button: {
    width: 105,
    height: 37,
    backgroundColor: "rgba(68,189,68,1)",
    borderRadius: 5,
    marginTop: 42,
    marginLeft: 109
  },
  submit: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    marginTop: 8,
    marginLeft: 30,
    fontWeight:"bold"
  }
});

export default InstallationForm;
