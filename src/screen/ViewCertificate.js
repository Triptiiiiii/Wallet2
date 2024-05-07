import React, { Component, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image
} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Icon from "react-native-vector-icons/EvilIcons";
// import Icon from "react-native-vector-icons/Entypo";
// import { DropDownPicker } from 'react-native-dropdown-select-list';


// export function (props) {
   


    const ViewCertificate = () => {
        const navigation = useNavigation();
        const [selectedPage, setSelectedPage] = useState('');
      
        const pages = [
          { label: '   5', value: '5' },
          { label: '   10', value: '2' },
          { label: '   25', value: '3' },
          { label: '   50', value: '50' },
          { label: '   100', value: '100' },
          // Add more pages as needed
        ];
      
        const handlePageChange = (page) => {
          setSelectedPage(page);
          // You can add logic here to navigate to the selected page
        };




    return (
        <ScrollView horizontal={true} style={styles.outerScrollView}>
            <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <TextInput placeholder="Search" style={styles.search}></TextInput>
        </View>
        <TouchableOpacity>
        <Icon name="search" style={styles.icon}></Icon>
        </TouchableOpacity>
      </View>
       <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.select}>Select :</Text>
            <Picker
              selectedValue={selectedPage}
              style={styles.picker}
              onValueChange={(itemValue) => handlePageChange(itemValue)}
            >
              {pages.map((page, index) => (
                <Picker.Item key={index} label={page.label} value={page.value} />
              ))}
            </Picker>
            <Text style={styles.entries}>entries</Text>
          </View>
          <Text style={styles.loremIpsum}>
            A Showing 1 to 1 of 1 entries (filtered from 6,530 total entries)
          </Text>
          {/* Rest of your code */}
          <View style={styles.rect2}>
        <View style={styles.snoRow}>
          <Text style={styles.sno}>Sno.</Text>
          <Text style={styles.dateOfInstallation}>
            Date of{"\n"}Installation
          </Text>
          <Text style={styles.vehicleNumber}>Vehicle{"\n"}Number</Text>
          <Text style={styles.vehicleMakeModel}>
            Vehicle{"\n"}Make &amp;Model
          </Text>
          <Text style={styles.deviceImei}>Device IMEI</Text>
          <Text style={styles.customerName}>Customer{"\n"}Name</Text>
          <Text style={styles.dealerName}>Dealer{"\n"}Name</Text>
          <Text style={styles.loremIpsum2}>
            Fitment{"\n"}Certificate{"\n"}No.
          </Text>
          <Text style={styles.downloadCertificate}>
            Download{"\n"}Certificate
          </Text>
        </View>
      </View>
      <View style={styles.rect3}>
        <View style={styles.loremIpsum3Row}>
          <Text style={styles.loremIpsum3}>1.</Text>
          <Text style={styles.loremIpsum4}>2024-03-01</Text>
          <Text style={styles.mh15Gv63}>MH15GV63</Text>
          <Text style={styles.marutiSuzuki}>Maruti Suzuki</Text>
          <Text style={styles.loremIpsum5}>860560066189</Text>
          <Text style={styles.shaikhAsid}>Shaikh Asid</Text>
          <Text style={styles.rajServices}>Raj Services</Text>
          <Text style={styles.ctvltd022412}>CTVLTD022412</Text>
          <TouchableOpacity>
          <View style={styles.rect4}>
            <Text style={styles.downloadCopy}>Download{"\n"} Copy</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.rect5}>
            <Text style={styles.customerCopy}>Customer{"\n"} Copy</Text>
          </View>
          </TouchableOpacity>
         </View>
      </View>
      <View style={styles.rect6Row}>
        <TouchableOpacity>
        <View style={styles.rect6}>
          <Text style={styles.previous}>Previous</Text>
        </View>
        </TouchableOpacity>
       <View style={styles.rect7}>
          <Text style={styles.loremIpsum6}>1</Text>
        </View>
        <TouchableOpacity>
        <View style={styles.rect8}>
          <Text style={styles.next}>Next</Text>
        </View>
        </TouchableOpacity>
       </View>
        </View>
    </ScrollView>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    outerScrollView: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
    },
    container: {
        flex: 1
      },
      rect: {
        top: 3,
        left: 0,
        width: 257,
        height: 40,
        position: "absolute",
        backgroundColor: "rgba(231,223,244,1)",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "rgba(78,45,135,1)"
      },
      search: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 40,
        width: 192,
        marginLeft: 20
      },
      icon: {
        top: 5,
        left: 210,
        position: "absolute",
        color: "rgba(128,128,128,1)",
        fontSize: 40
      },
      rectStack: {
        width: 257,
        height: 44,
        marginTop: 23,
        marginLeft: 40
      },
      select5Entries: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 29,
        marginLeft: 44
      },
      loremIpsum: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 23,
        marginLeft: 41
      },
      rect2: {
        width: 937,
        height: 65,
        backgroundColor: "rgba(78,45,135,1)",
        flexDirection: "row",
        marginTop: 17,
        marginLeft: 41
      },
      sno: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        marginTop: 17
      },
      dateOfInstallation: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        marginLeft: 24,
        marginTop: 8
      },
      vehicleNumber: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        marginLeft: 28,
        marginTop: 7
      },
      vehicleMakeModel: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        marginLeft: 30,
        marginTop: 8
      },
      deviceImei: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        marginLeft: 26,
        marginTop: 16
      },
      customerName: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        marginLeft: 27,
        marginTop: 7
      },
      dealerName: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 14,
        marginLeft: 33,
        marginTop: 9
      },
      loremIpsum2: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        marginLeft: 50
      },
      downloadCertificate: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        marginLeft: 86,
        marginTop: 9
      },
      snoRow: {
        height: 50,
        flexDirection: "row",
        flex: 1,
        marginRight: 88,
        marginLeft: 11,
        marginTop: 9
      },
      rect3: {
        width: 937,
        height: 46,
        backgroundColor: "rgba(231,223,244,1)",
        flexDirection: "row",
        marginTop: 2,
        marginLeft: 41
      },
      loremIpsum3: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 12
      },
      loremIpsum4: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 31,
        marginTop: 12
      },
      mh15Gv63: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 21,
        marginTop: 11
      },
      marutiSuzuki: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 17,
        marginTop: 10
      },
      loremIpsum5: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 15,
        marginTop: 11
      },
      shaikhAsid: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 15,
        marginTop: 10
      },
      rajServices: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 14,
        marginTop: 10
      },
      ctvltd022412: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 12,
        marginTop: 10
      },
      rect4: {
        width: 90,
        height: 38,
        backgroundColor: "rgba(126,211,33,1)",
        borderRadius: 5,
        marginLeft: 15
      },
      downloadCopy: {
        fontFamily: "roboto-regular",
        color: "rgba(144,19,254,1)",
        marginTop: 2,
        marginLeft: 18,
        fontSize:12,
        fontWeight:"bold"
      },
      rect5: {
        width: 90,
        height: 38,
        backgroundColor: "rgba(126,211,33,1)",
        borderRadius: 5,
        marginLeft: 5
      },
      customerCopy: {
        fontFamily: "roboto-regular",
        color: "rgba(144,19,254,1)",
        marginTop: 2,
        marginLeft: 17,
        fontSize:12,
        fontWeight:"bold"
      },
      loremIpsum3Row: {
        height: 38,
        flexDirection: "row",
        flex: 1,
        marginRight: 15,
        marginLeft: 17,
        marginTop: 1
      },
      rect6: {
        width: 112,
        height: 41,
        backgroundColor: "#E6E6E6",
        borderWidth: 1,
        borderColor: "#000000"
      },
      previous: {
        fontFamily: "roboto-500",
        color: "#121212",
        fontSize: 18,
        marginTop: 11,
        marginLeft: 22
      },
      rect7: {
        width: 79,
        height: 41,
        backgroundColor: "rgba(126,211,33,1)",
        borderWidth: 1,
        borderColor: "#000000"
      },
      loremIpsum6: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 18,
        marginTop: 11,
        marginLeft: 33
      },
      rect8: {
        width: 112,
        height: 41,
        backgroundColor: "#E6E6E6",
        borderWidth: 1,
        borderColor: "#000000",
        marginLeft: 0
      },
      next: {
        fontFamily: "roboto-500",
        color: "#121212",
        fontSize: 18,
        marginTop: 11,
        marginLeft: 32
      },
      rect6Row: {
        height: 41,
        flexDirection: "row",
        marginTop: 27,
        marginLeft: 44,
        marginRight: 670
      },
      entries:{
        marginLeft:0,
        marginTop:0
      },
      picker: {
        height: 50,
        width: 120,
        marginLeft: 10,
      },
      select:{
        marginLeft:40
      }
    
});

export default ViewCertificate;