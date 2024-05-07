 import React, { useState } from "react";
 import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  img
} from "react-native";

 import { Picker } from '@react-native-picker/picker';
 import {useNavigation} from '@react-navigation/native';
 import EntypoIcon from "react-native-vector-icons/Entypo";
 import Icon from "react-native-vector-icons/EvilIcons";

 function MeetingDetails(props) {
    const navigation = useNavigation();

    const [text, setText] = useState('');

    
    const [selectedPage, setSelectedPage] = useState('');
        const pages = [
            { label: 'AIS-140 ', value: 'AIS-140' },
            { label: 'e-Sim', value: 'e-Sim' },
          // Add more pages as needed
        ];
        const [selectedPage2, setSelectedPage2] = useState('');
        const pages2 = [
          { label: 'Bike ',    value: 'Bike'   },
          { label: 'Car',      value: 'Car'    },
          { label: 'Taxi ',    value: 'Taxi'   },
          { label: 'Bus',      value: 'Bus'    },
          { label: 'Train',    value:  'Train'  },
          { label: 'Flight',   value: 'Flight' },
        // Add more pages as needed
      ];
      const [selectedPage3, setSelectedPage3] = useState('');
        const pages3 = [
          { label: 'Excellent ',    value: 'Excellent'      },
          { label: 'Interested',    value: 'Interested'     },
          { label: 'Not Interested',value: 'Not Interested' },
          { label: 'Follow-Up',     value: 'Follow-Up'      },
          { label: 'Excellent',     value: 'Excellent'      },
          { label: 'Interested',    value: 'Interested'     },
         ];
      const [selectedPage4, setSelectedPage4] = useState('');
      const pages4 =[
        { label: 'New Visit',   value:'New Visit'    }, 
        { label: 'Re-Visit',    value:'Re-Visit'       } 
      ]
        const handlePageChange = (page) => {
          setSelectedPage(page);
          // You can add logic here to navigate to the selected page
        };
        const handlePageChange2 = (pages2) => {
          setSelectedPage2(pages2);
          // You can add logic here to navigate to the selected page
        };
        const handlePageChange3 = (pages3) => {
          setSelectedPage3(pages3);
        }
        const handlePageChange4 = (pages4) =>{
          setSelectedPage4(pages4);
        }

  return (
    <ScrollView Vertical={true} style={styles.scrollView}>
    <View style={styles.container}>
    <View style={styles.VerticalContent}>
    <View style={styles.loremIpsum2Row}>
    <Text style={styles.loremIpsum2}></Text>
    <View style={styles.rect}>
    <Text style={styles.loremIpsum1}>Marketing Person Name</Text>
    <TouchableOpacity style={styles.button1}>
        <Text style={styles.loremIpsumm}>Auto populate from Login</Text>
    </TouchableOpacity>
    <Text style={styles.meetingDetails}>Meeting Details</Text>
    <View style={styles.rect2}>
    <View style={styles.forProductRow}>
    <Text style={styles.forProduct}>For Product :</Text>
    <View style={styles.rect3Stack}>
    <View style={styles.rect3}>
    <TextInput
        placeholder=""
        style={styles.textInput}
        ></TextInput>
        </View>
      <Picker
       selectedValue={selectedPage}
       style={styles.picker}
       onValueChange={(itemValue) => handlePageChange(itemValue)}
      >
      {pages.map((page, index) => (
      <Picker.Item key={index} label={page.label} value={page.value} />
       ))}
      </Picker>
      </View>
      </View>
      </View>
      <Text style={styles.loremIpsum}></Text>
      <Text style={styles.meetingWhom}>Meeting Whom :</Text>
      <View style={styles.rect4}>
      <View style={styles.businessNameRow}>
      <Text style={styles.businessName}>Business Name :</Text>
      <View style={styles.rect5}>
      <TextInput placeholder="" style={styles.textInput2}></TextInput>
      </View>
      </View>
      <View style={styles.clientNameRow}>
      <Text style={styles.clientName}>Client Name :</Text>
      <View style={styles.rect6}>
      <TextInput placeholder="" style={styles.textInput3}></TextInput>
      </View>
      </View>
        <View style={styles.designationRow}>
          <Text style={styles.designation}>Designation :</Text>
            <View style={styles.rect7}>
              <View style={styles.textInput4Stack}>
                  <TextInput
                    placeholder=""
                    style={styles.textInput4}
                  ></TextInput>
                  <TextInput
                    placeholder=""
                    style={styles.textInput5}
                  ></TextInput>
                </View>
              </View>
            </View>
            <View style={styles.phoneNumberRow}>
              <Text style={styles.phoneNumber}>Phone Number :</Text>
              <View style={styles.rect9}>
                <TextInput placeholder="" style={styles.textInput6}></TextInput>
              </View>
            </View>
            <View style={styles.whatsappNoRow}>
              <Text style={styles.whatsappNo}>Whatsapp No. :</Text>
              <View style={styles.rect10}>
                <TextInput placeholder="" style={styles.textInput7}></TextInput>
              </View>
            </View>
            <View style={styles.emailIdRow}>
              <Text style={styles.emailId}>Email ID :</Text>
              <View style={styles.rect11}>
                <TextInput placeholder="" style={styles.textInput8}></TextInput>
              </View>
            </View>
          </View>
          <Text style={styles.addressDetails}>Address Details :</Text>
          <View style={styles.rect12}>
            <View style={styles.stateRow}>
              <Text style={styles.state}>State :</Text>
              <View style={styles.rect13}>
                <TextInput placeholder="" style={styles.textInput9}></TextInput>
              </View>
            </View>
            <View style={styles.districtRow}>
              <Text style={styles.district}>District :</Text>
              <View style={styles.rect14}>
                <TextInput
                  placeholder=""
                  style={styles.textInput10}
                ></TextInput>
              </View>
            </View>
            <View style={styles.cityRow}>
              <Text style={styles.city}>City :</Text>
              <View style={styles.rect15}>
                <TextInput
                  placeholder=""
                  style={styles.textInput11}
                ></TextInput>
              </View>
            </View>
            <View style={styles.localityRow}>
              <Text style={styles.locality}>Locality :</Text>
              <View style={styles.rect16}>
                <TextInput
                  placeholder=""
                  style={styles.textInput12}
                ></TextInput>
              </View>
            </View>
            <View style={styles.pincodeRow}>
              <Text style={styles.pincode}>Pincode :</Text>
              <View style={styles.rect17}>
                <TextInput
                  placeholder=""
                  style={styles.textInput13}
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.loremIpsum3Row}>
            <Text style={styles.loremIpsum3}>
              Capture from Date &amp; Time :
            </Text>
            <TouchableOpacity style={styles.button5}>
              <Text style={styles.capture}>Capture</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loremIpsum4Row}>
            <Text style={styles.loremIpsum4}>Capture from Location :</Text>
            <TouchableOpacity style={styles.button6}>
              <Text style={styles.capture1}>Capture</Text>
            </TouchableOpacity>
            
           
          </View>
          <View style={styles.loremIpsum5Stack}>
            <Text style={styles.loremIpsum5}></Text>
            <View style={styles.rect20}>
              <View style={styles.fromLatitudeRow}>
                <Text style={styles.fromLatitude}>From Latitude :</Text>
                <View style={styles.rect21}>
                  <TextInput
                    placeholder=""
                    style={styles.textInput14}
                  ></TextInput>
                </View>
              </View>
              <View style={styles.fromLongitudeRow}>
                <Text style={styles.fromLongitude}>From Longitude :</Text>
                <View style={styles.rect22}>
                  <TextInput
                    placeholder=""
                    style={styles.textInput15}
                  ></TextInput>
                </View>
              </View>
              <View style={styles.fromGpsLocationRow}>
                <Text style={styles.fromGpsLocation}>
                  From GPS{"\n"}Location :
                </Text>
                <View style={styles.rect23}>
                  <TextInput
                    placeholder=""
                    style={styles.textInput16}
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.modeOfTravelRow}>
            <Text style={styles.modeOfTravel}>Mode of Travel :</Text>
            <View style={styles.rect25Stack}>
              <View style={styles.rect25}>
                <TextInput
                  placeholder=""
                  style={styles.textInput17}
                ></TextInput>
              </View>
      <Picker
       selectedValue2={selectedPage2}
       style={styles.picker2}
       onValueChange={(itemValue2) => handlePageChange2(itemValue2)}
      >
      {pages2.map((page, index) => (
      <Picker.Item key={index} label={page.label} value={page.value}/>
       ))}
      </Picker>
            </View>
          </View>
          <View style={styles.rect24}>
            <View style={styles.enterVehicleNoRow}>
              <Text style={styles.enterVehicleNo}>Enter Vehicle No. :</Text>
              <View style={styles.rect26}>
                <TextInput
                  placeholder=""
                  style={styles.textInput18}
                ></TextInput>
              </View>
            </View>
            <View style={styles.fromKmsRow}>
              <Text style={styles.fromKms}>From Kms :</Text>
              <View style={styles.rect27}>
                <TextInput
                  placeholder=""
                  style={styles.textInput19}
                ></TextInput>
              </View>
            </View>
            <View style={styles.toKmsRow}>
              <Text style={styles.toKms}>To Kms :</Text>
              <View style={styles.rect28}>
                <TextInput
                  placeholder=""
                  style={styles.textInput20}
                ></TextInput>
              </View>
            </View>
            <View style={styles.fareRow}>
              <Text style={styles.fare}>Fare :</Text>
              <View style={styles.rect29}>
                <TextInput
                  placeholder=""
                  style={styles.textInput21}
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.loremIpsum6Row}>
            <Text style={styles.loremIpsum6}>Capture to Date &amp; Time</Text>
            <TouchableOpacity style={styles.button3}>
              <Text style={styles.capture2}>Capture</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.captureToLocationRow}>
            <Text style={styles.captureToLocation}>Capture to Location</Text>
            <TouchableOpacity style={styles.button4}>
              <Text style={styles.capture3}>Capture</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rect32}>
          <View style={styles.toLatitudeRow}>
              <Text style={styles.toLatitude}>To Latitide :</Text>
              <View style={styles.rect34}>
                <TextInput
                  placeholder=""
                  style={styles.textInput23}
                ></TextInput>
              </View>
            </View>
            <View style={styles.toLongitudeRow}>
              <Text style={styles.toLongitude}>To Longitude :</Text>
              <View style={styles.rect33}>
                <TextInput
                  placeholder=""
                  style={styles.textInput22}
                ></TextInput>
              </View>
            </View>
           
            <View style={styles.toGpsLocationRow}>
              <Text style={styles.toGpsLocation}>To GPS Location :</Text>
              <View style={styles.rect35}>
                <TextInput
                  placeholder=""
                  style={styles.textInput24}
                ></TextInput>
              </View>
            </View>
          </View>
          <Text style={styles.loremIpsum7}>Capture Office Photo :</Text>
          <View style={styles.rect36}>
            <View style={styles.chooseImageRow}>
              <Text style={styles.chooseImage}>Choose Image :</Text>
              <TouchableOpacity style={styles.button2}>
                <Text style={styles.capture4}>Capture</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ratingsRow}>
              <Text style={styles.ratings}>Ratings :</Text>
              <View style={styles.rect38Stack}>
                <View style={styles.rect38}>
                  <TextInput
                    placeholder=""
                    style={styles.textInput26}
                  ></TextInput>
                </View>
                <Picker
                selectedValue3={selectedPage3}
                style={styles.picker3}
                onValueChange={(itemValue3) => handlePageChange3(itemValue3)}
                >
              {pages3.map((page, index) => (
              <Picker.Item key={index} label={page.label} value={page.value}/>
                ))}
              </Picker>
              </View>
            </View>
            <View style={styles.visitTypeRow}>
              <Text style={styles.visitType}>Visit Type :</Text>
              <View style={styles.rect39Stack}>
                <View style={styles.rect39}>
                  <TextInput
                    placeholder=""
                    style={styles.textInput27}
                  ></TextInput>
                </View>
                <Picker
                selectedValue4={selectedPage4}
                style={styles.picker4}
                onValueChange={(itemValue4) => handlePageChange4(itemValue4)}
                >
              {pages4.map((page, index) => (
              <Picker.Item key={index} label={page.label} value={page.value}/>
                ))}
              </Picker>
              </View>
            </View>
            <View style={styles.notesRow}>
              <Text style={styles.notes}>Notes :</Text>
              <View style={styles.rect40}>
                <TextInput
                  style={styles.textInput28}
                  multiline={true}
                  numberOfLines={3} // You can adjust the number of lines you want to display
                  onChangeText={setText}
                  value={text}
                  placeholder="Type your text here..."
                ></TextInput>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.submit}>Submit</Text>
          </TouchableOpacity>
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
      VerticalContent: {
        flexDirection: "column",
      },
      container: {
        flex: 1,
        backgroundColor: "#4e2d87",
        flexDirection: "row",
        height:1730
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 1
  },
  rect: {
    width: 323,
    height: 1700,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginLeft: 121,
    marginTop:-30
  },
  meetingDetails: {
    fontWeight:"bold",
    fontSize:15,
    fontFamily: "roboto-700",
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 27,
    marginLeft: 15,
    },
  rect2: {
    width: 291,
    height: 43,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(78,45,135,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 15
  },
  forProduct: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 4
  },
  rect3: {
    top: 1,
    left: 0,
    width: 146,
    height: 24,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowColor: "rgba(78,45,135,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)"
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 120,
    marginTop: 4,
    marginLeft: 5
  },
  icon: {
    top: 0,
    left: 122,
    position: "absolute",
    color: "rgba(78,45,135,1)",
    fontSize: 24,
    height: 27,
    width: 24
  },
  rect3Stack: {
    width: 146,
    height: 27,
    marginLeft: 33
  },
  forProductRow: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 9
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 16,
    marginLeft: 14
  },
  meetingWhom: {
    fontWeight:"bold",
    fontSize:15,
    fontFamily: "roboto-700",
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 5,
    marginLeft: 16
  },
  rect4: {
    width: 289,
    height: 223,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(78,45,135,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 10,
    marginLeft: 16
  },
  businessName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 4
  },
  rect5: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 7
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 4,
    marginLeft: 5
  },
  businessNameRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 17
  },
  clientName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 4
  },
  rect6: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 27
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 3,
    marginLeft: 5
  },
  clientNameRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 15,
    marginRight: 17
  },
  designation: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 3
  },
  rect7: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 28
  },
  textInput4: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136
  },
  textInput5: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136
  },
  textInput4Stack: {
    width: 136,
    height: 17,
    marginTop: 4,
    marginLeft: 5
  },
  designationRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 17,
    marginRight: 17
  },
  phoneNumber: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6
  },
  rect9: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 10
  },
  textInput6: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 4,
    marginLeft: 5
  },
  phoneNumberRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 16,
    marginRight: 17
  },
  whatsappNo: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 4
  },
  rect10: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 14
  },
  textInput7: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 4,
    marginLeft: 5
  },
  whatsappNoRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 17,
    marginRight: 17
  },
  emailId: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 4
  },
  rect11: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 50
  },
  textInput8: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 4,
    marginLeft: 5
  },
  emailIdRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 18,
    marginRight: 17
  },
  addressDetails: {
    fontWeight:"bold",
    fontSize:15,
    fontFamily: "roboto-700",
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 20,
    marginLeft: 18
  },
  rect12: {
    width: 289,
    height: 190,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(78,45,135,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 10,
    marginLeft: 16
  },
  state: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 4
  },
  rect13: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 68
  },
  textInput9: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 4,
    marginLeft: 5
  },
  stateRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 19,
    marginRight: 17
  },
  district: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 4
  },
  rect14: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 56
  },
  textInput10: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 3,
    marginLeft: 5
  },
  districtRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 19,
    marginRight: 17
  },
  city: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 3
  },
  rect15: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 75
  },
  textInput11: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 4,
    marginLeft: 5
  },
  cityRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 20,
    marginRight: 17
  },
  locality: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 1
  },
  rect16: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 50
  },
  textInput12: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 3,
    marginLeft: 5
  },
  localityRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 20,
    marginRight: 17
  },
  pincode: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 2
  },
  rect17: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 48
  },
  textInput13: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 4,
    marginLeft: 5
  },
  pincodeRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 20,
    marginRight: 17
  },
  loremIpsum3: {
    fontWeight:"bold",
    fontSize:14,
    fontFamily: "roboto-700",
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 9
  },
  button5: {
    width: 110,
    height: 30,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 5
  },
  button6:{
    width: 110,
    height: 30,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 27
  },
  capture: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 5,
    marginLeft: 33
  },
  loremIpsum3Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 19,
    marginRight: 18
  },
  loremIpsum4: {
    fontWeight:"bold",
    fontSize:14,
    fontFamily: "roboto-700",
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 8
  },
  scrollArea: {
    width: 110,
    height: 30,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 29
  },
  scrollArea_contentContainerStyle: {
    height: 30,
    width: 110
  },
  capture1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 5,
    marginLeft: 33
  },
  loremIpsum4Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 18,
    marginRight: 18
  },
  loremIpsum5: {
    top: 0,
    left: 15,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect20: {
    top: 0,
    left: 0,
    width: 291,
    height: 129,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(78,45,135,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  fromLatitude: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 5
  },
  rect21: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 19
  },
  textInput14: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 4,
    marginLeft: 5
  },
  fromLatitudeRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 19,
    marginRight: 14
  },
  fromLongitude: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 2
  },
  rect22: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 8
  },
  textInput15: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 3,
    marginLeft: 4
  },
  fromLongitudeRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 19,
    marginRight: 13
  },
  fromGpsLocation: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect23: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 51,
    marginTop: 6
  },
  textInput16: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 4,
    marginLeft: 5
  },
  fromGpsLocationRow: {
    height: 33,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 18,
    marginRight: 14
  },
  loremIpsum5Stack: {
    width: 291,
    height: 129,
    marginTop: 10,
    marginLeft: 14
  },
  modeOfTravel: {
    fontWeight:"bold",
    fontSize:15,
    fontFamily: "roboto-700",
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 7
  },
  rect25: {
    top: 1,
    left: 0,
    width: 146,
    height: 24,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4e2d87"
  },
  textInput17: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 121,
    marginTop: 4,
    marginLeft: 4
  },
  icon2: {
    top: 0,
    left: 122,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 24,
    height: 27,
    width: 24
  },
  rect25Stack: {
    width: 146,
    height: 27,
    marginLeft: 25
  },
  modeOfTravelRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 20,
    marginRight: 31
  },
  rect24: {
    width: 291,
    height: 153,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(78,45,135,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 9,
    marginLeft: 14
  },
  enterVehicleNo: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6
  },
  rect26: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4e2d87",
    marginLeft: 5
  },
  textInput18: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 4,
    marginLeft: 4
  },
  enterVehicleNoRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 14,
    marginRight: 13
  },
  fromKms: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6
  },
  rect27: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4e2d87",
    marginLeft: 46
  },
  textInput19: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 4,
    marginLeft: 4
  },
  fromKmsRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 15,
    marginRight: 13
  },
  toKms: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6
  },
  rect28: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4e2d87",
    marginLeft: 63
  },
  textInput20: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 5,
    marginLeft: 4
  },
  toKmsRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 15,
    marginRight: 13
  },
  fare: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 3
  },
  rect29: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4e2d87",
    marginLeft: 82
  },
  textInput21: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 4,
    marginLeft: 4
  },
  fareRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 16,
    marginRight: 13
  },
  loremIpsum6: {
    fontWeight:"bold",
    fontSize:15,
    fontFamily: "roboto-700",
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 9
  },
  button3: {
    width: 110,
    height: 30,
    backgroundColor: "rgba(78,45,135,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 24
  },
  capture2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 5,
    marginLeft: 30
  },
  loremIpsum6Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 16,
    marginRight: 27
  },
  captureToLocation: {
    fontWeight:"bold",
    fontSize:15,
    fontFamily: "roboto-700",
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 8
  },
  button4: {
    width: 110,
    height: 30,
    backgroundColor: "rgba(78,45,135,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 49
  },
  capture3: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 5,
    marginLeft: 30
  },
  captureToLocationRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 15,
    marginRight: 27
  },
  rect32: {
    width: 291,
    height: 120,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(78,45,135,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 15,
    marginLeft: 14
  },
  toLongitude: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6,
    marginLeft: 0
  },
  rect33: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 28
  },
  textInput22: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 4,
    marginLeft: 4
  },
  toLongitudeRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 16,
    marginRight: 13
  },
  toLatitude: {
    height:30,
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 15,
    marginLeft:0,
  },

  rect34: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 43,
    marginTop:10
  },
  textInput23: {
    fontFamily: "roboto-regular",
    color: "#121212",
   
    height: 17,
    width: 136,
    marginTop: 4,
    marginLeft: 4
  },
  toLatitudeRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 17,
    marginRight: 13
  },
  toGpsLocation: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 4
  },
  rect35: {
    width: 146,
    height: 24,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 5
  },
  textInput24: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 136,
    marginTop: 4,
    marginLeft: 4
  },
  toGpsLocationRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 17,
    marginRight: 13
  },
  loremIpsum7: {
    fontWeight:"bold",
    fontSize:15,
    fontFamily: "roboto-700",
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 24,
    marginLeft: 17
  },
  rect36: {
    width: 291,
    height: 200,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(78,45,135,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 5,
    marginLeft: 15
  },
  chooseImage: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 7
  },
  button2: {
    width: 110,
    height: 30,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 56
  },
  capture4: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 6,
    marginLeft: 32
  },
  chooseImageRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 16,
    marginRight: 12
  },
  ratings: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 3
  },
  rect38: {
    top: 1,
    left: 0,
    width: 146,
    height: 24,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5
  },
  textInput26: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 120,
    fontSize: 14,
    marginTop: 4,
    marginLeft: 5
  },
  icon3: {
    top: 0,
    left: 122,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 24,
    height: 27,
    width: 24
  },
  rect38Stack: {
    width: 146,
    height: 27,
    marginLeft: 61
  },
  ratingsRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 17,
    marginRight: 13
  },
  visitType: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6
  },
  rect39: {
    top: 1,
    left: 0,
    width: 146,
    height: 24,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5
  },
  textInput27: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 120,
    fontSize: 14,
    marginTop: 4,
    marginLeft: 5
  },
  icon4: {
    top: 0,
    left: 122,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 24,
    height: 27,
    width: 24
  },
  rect39Stack: {
    width: 146,
    height: 27,
    marginLeft: 48
  },
  visitTypeRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 17,
    marginRight: 13
  },
  notes: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 7
  },
  rect40: {
    width: 146,
    height: 64,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 5,
    marginLeft: 69
  },
  textInput28: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 150,
    width: 135,
    fontSize: 14,
    marginTop: -5,
    marginLeft: 6,
    textAlignVertical: 'top',
    padding: 10,
    width: '100%',
  },
  notesRow: {
    height: 64,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 19,
    marginRight: 13
  },
  button: {
    width: 268,
    height: 38,
    backgroundColor: "rgba(78,45,135,1)", 
    borderRadius: 6,
    marginTop: 37,
    marginLeft: 28
  },
  submit: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 10,
    marginLeft: 110
  },
  loremIpsum2Row: {
    height: 1600,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: -103,
    marginTop: 56
  },
  picker: {
    height: 50,
    width: 150,
    marginLeft: 5,
    marginTop:-13
  },
  picker2: {
    height: 50,
    width: 150,
    marginLeft: 5,
    marginTop:-13
  },
  picker3:{
    height: 50,
    width: 150,
    marginLeft:5,
    marginTop:-13
  },
  picker4:{
    height:50,
    width:150,
    marginLeft:5,
    marginTop:-13
  },
  loremIpsum1:{
      fontFamily: "roboto-700",
      color: "#121212",
      marginTop: 28,
      marginLeft: 80,
      fontWeight:"bold"
      
  },
  button1: {
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
    marginLeft: 65
  },
  loremIpsumm: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 24
  }
});

export default MeetingDetails;
