import React, { Component , useState} from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  img,
  SafeAreaView,
} from "react-native";
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-datepicker';

function Notifications1(props) {
  const navigation = useNavigation();
  const [date, setDate] = useState('09-10-2020');
    return (
      <View style={styles.container}>
        <View style={styles.rect}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.loremIpsum}>Credit Limit Approval</Text>
          </TouchableOpacity>
          <Text style={styles.oemDistributor}>OEM/Distributor</Text>
          <View style={styles.rect2}>
            <TextInput
              placeholder="Enter here..."
              style={styles.placeholder}
            ></TextInput>
          </View>
          <Text style={styles.name}>Name</Text>
          <View style={styles.rect3Stack}>
            <View style={styles.rect3}></View>
            <TextInput
              placeholder=" Enter here..."
              style={styles.placeholder2}
            ></TextInput>
          </View>
          <Text style={styles.creditLimit}>Credit Limit</Text>
          <View style={styles.rect4Stack}>
            <View style={styles.rect4}></View>
            <TextInput
              placeholder=" Enter here..."
              style={styles.placeholder3}
            ></TextInput>
          </View>
          <View style={styles.button2Row}>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.hold4}>Hold</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
              <Text style={styles.approve}>Approve</Text>
            </TouchableOpacity>
          </View>
        </View>
        <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          React Native Date Picker – 
          To Pick the Date using Native Calendar
        </Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
    </SafeAreaView>
        <TouchableOpacity>
          {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
        <Image
          source={require("../../assets/left-arrow.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        </TouchableOpacity>
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(78,45,135,1)"
      },
      rect: {
        width: 325,
        height: 656,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 15,
        marginTop: 10,
        marginLeft: 18
      },
      button: {
        width: 258,
        height: 41,
        backgroundColor: "rgba(78,45,135,1)",
        borderRadius: 15,
        marginTop: 50,
        marginLeft: 33
      },
      loremIpsum: {
       
        color: "rgba(255,255,255,1)",
        marginTop: 12,
        marginLeft: 65
      },
      oemDistributor: {
       
        color: "#121212",
        marginTop: 37,
        marginLeft: 21
      },
      rect2: {
        width: 285,
        height: 38,
        backgroundColor: "rgba(233,233,233,1)",
        borderRadius: 15,
        marginLeft: 21
      },
      placeholder: {
       
        color: "#121212",
        height: 38,
        width: 233,
        marginLeft: 20
      },
      name: {
      
        color: "#121212",
        marginTop: 24,
        marginLeft: 22
      },
      rect3: {
        top: 1,
        left: 0,
        width: 285,
        height: 38,
        position: "absolute",
        backgroundColor: "rgba(233,233,233,1)",
        borderRadius: 15
      },
      placeholder2: {
        top: 0,
        left: 13,
        position: "absolute",
      
        color: "#121212",
        height: 39,
        width: 241
      },
      rect3Stack: {
        width: 285,
        height: 39,
        marginLeft: 20
      },
      creditLimit: {
      
        color: "#121212",
        marginTop: 31,
        marginLeft: 23
      },
      rect4: {
        top: 1,
        left: 0,
        width: 285,
        height: 38,
        position: "absolute",
        backgroundColor: "rgba(233,233,233,1)",
        borderRadius: 15
      },
      placeholder3: {
        top: 0,
        left: 13,
        position: "absolute",
      
        color: "#121212",
        height: 39,
        width: 241
      },
      rect4Stack: {
        width: 285,
        height: 39,
        marginLeft: 20
      },
      button2: {
        width: 110,
        height: 35,
        backgroundColor:"red",
        borderRadius: 15
      },
      hold4: {
        fontWeight:"bold",
        color: "rgba(255,255,255,1)",
        marginTop: 8,
        marginLeft: 38
      },
      button3: {
        width: 110,
        height: 35,
        backgroundColor: "rgba(68,189,68,1)",
        borderRadius: 15,
        marginLeft: 21
      },
      approve: {
        fontWeight:"bold",
        color: "rgba(255,255,255,1)",
        marginTop: 8,
        marginLeft: 31
      },
      button2Row: {
        height: 35,
        flexDirection: "row",
        marginTop: 86,
        marginLeft: 40,
        marginRight: 44
      },
      image: {
        width: 36,
        height: 31,
        marginTop: -701,
        marginLeft: 15
      }
})
export default Notifications1;
