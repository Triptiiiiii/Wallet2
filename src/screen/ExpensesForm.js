import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  img
} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { KeyboardAvoidingView } from "react-native"; 
import { Platform } from "react-native";
import { Modal } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function ExpensesForm(props)  {
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };
  const navigation= useNavigation();
  return (
    <ScrollView Vertical={true} style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.VerticleContent}>
      
        <View style={styles.rect}>
            <View style={{marginTop:50, marginLeft:15 }}>
            <Text style={{fontSize:16, color:'#4e2d87', fontWeight:"bold"}}>Marketing Executive Expenses - LIST(EXECUTIVE LOGIN)</Text>
            </View>
            <Text style={styles.creditLimit}>Marketing Executive Name </Text>
        <View style={styles.rect4}>
          <Text style={styles.loremIpsum}>Autopopulate from Login</Text>
        </View>
        <Text style={styles.creditLimit}>State </Text>
        <View style={styles.rect4}>
          <Text style={styles.loremIpsum}>Autopopulate from Login</Text>
        </View>
        
     <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : ""}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
        }}
      >

        <View style={{ flex: 1, alignItems: "center" }}>
       <View >
       <View>
        <View style={styles.dateA}>
        <Text style={{ fontSize: 14, marginLeft:10, marginTop:50, fontWeight:"bold", color:"#4e2d87" }}>Date of Expense</Text>
        </View>
      <TouchableOpacity
          style={styles.inputBtn}
          onPress={handleOnPressStartDate}
      >
       <FontAwesome name="calendar" size={15} color="black" style={styles.icon0}   />
      <Text>{selectedStartDate}
      {''}
      </Text>
      </TouchableOpacity>
      </View>
      </View>
      {/* Create modal for date picker */}
      <Modal
            animationType="slide"
            transparent={true}
            visible={openStartDatePicker}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  mode="calendar"
                  minimumDate={startDate}
                  selected={startedDate}
                  onDateChanged={handleChangeStartDate}
                  onSelectedChange={(date) => setSelectedStartDate(date)}
                  options={{
                    backgroundColor: "#080516",
                    textHeaderColor: "#469ab6",
                    textDefaultColor: "#FFFFFF",
                    selectedTextColor: "#FFF",
                    mainColor: "#469ab6",
                    textSecondaryColor: "#FFFFFF",
                    borderColor: "rgba(122, 146, 165, 0.1)",
                  }}
                />
              <TouchableOpacity onPress={handleOnPressStartDate}>
                  <Text style={{ color: "white" }}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
   
    <Text style={styles.selectName}>Expense Head</Text>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}></View>
          <EntypoIcon name="chevron-down" style={styles.icon}></EntypoIcon>
        </View>
        <Text style={styles.selectName}>Amount (Rs.)</Text>
        <View style={styles.rect4}>
          <Text style={styles.loremIpsum}>Autopopulate from Login</Text>
        </View>
       
        <TouchableOpacity onPress={() => navigation.navigate('Assign Credit Limits')}>
        <View style={styles.rect5}>
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
        backgroundColor: "#4e2d87"
      },
      rect: {
        width: 334,
        height: 650,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 21,
        marginTop: 30,
        marginLeft: 14
      },
      loremIpsum: {
        color: "#121212",
        marginTop: 28,
        marginLeft: 32
      },
      rect2: {
        width: 296,
        height: 44,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "rgba(0,0,0,1)",
        borderRadius: 15,
        marginTop: 1,
        marginLeft: 10
      },
      image: {
        top: -40,
        left: 240,
        width: 37,
        height: 40,
        position: "absolute"
      },
      placeholder: {
        top: 0,
        left: 10,
        position: "absolute",
        color: "#121212",
        height: 44,
        width: 237
      },
      rect2Stack: {
        width: 267,
        height: 44,
        marginLeft: 20
      },
      loremIpsum2: {
        color: "rgba(0,0,0,1)",
        marginTop: -20,
        marginLeft: 30
      },
      rect3: {
        width: 296,
        height: 44,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "rgba(0,0,0,1)",
        borderRadius: 15,
        marginTop: 100,
        marginLeft: 10
      },
      placeholder2: {
        top: 0,
        left: -5,
        position: "absolute",
        color: "#121212",
        height: 44,
        width: 237
      },
      image2: {
        width: 31,
        height: 29,
        marginLeft: 230,
        top:10,
      },
      placeholder2Row: {
        height: 30,
        flexDirection: "row",
        flex: 1,
        marginRight: 8,
        marginLeft: 15,
        marginTop:-100,
      },
    

      rect4: {
        width: 296,
        height: 44,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "rgba(0,0,0,1)",
        borderRadius: 15,
        marginTop: 1,
        marginLeft: 5
      },

      image3: {
        width: 31,
        height: 29,
        marginTop: 5,
        marginLeft: 245
      },

      placeholder3: {
        top: 0,
        left: 15,
        position: "absolute",
        color: "#121212",
        height: 44,
        width: 237
      },

      rect4Stack: {
        width: 294,
        height: 40,
        marginLeft: 16
      },

      creditLimit: {
      color: "#121212",
        marginTop: 20,
        marginLeft: 30
      },

      loremIpsum3: {
        top: 2,
        left: 9,
        position: "absolute",
        color: "#121212"
      },

      rect5: {
        width: 296,
        height: 44,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "rgba(0,0,0,1)",
        borderRadius: 15,
        marginTop: 1,
        marginLeft: 3
      },

      placeholder4: {
        top: 0,
        left: 15,
        position: "absolute",
        color: "#121212",
        height: 44,
        width: 237
      },

      loremIpsum3Stack: {
        width: 294,
        height: 31,
        marginLeft: 18
      },

      button: {
        width: 125,
        height: 39,
        backgroundColor: "rgba(68,189,68,1)",
        borderRadius: 15,
        marginTop: 65,
        marginLeft: 95
      },


      textHeader: {
        fontSize: 36,
        marginVertical: 60,
        color: "#111",
      },

      textSubHeader: {
        fontSize: 25,
        color: "#111",
      },

      inputBtn: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#000",
        width:290,
        height: 45,
        paddingLeft: 15,
        paddingBottom:10,
        fontSize: 18,
        justifyContent: "center",
        marginTop: 4,
        
},

      submitBtn: {
        backgroundColor: "#342342",
        paddingVertical: 22,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        paddingVertical: 12,
        marginVertical: 16,
      },

      centeredView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      
      modalView: {
        margin: 20,
        backgroundColor: "#080516",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        padding: 35,
        width: "90%",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      rect2: {
      top: 0,
      left: 0,
      width: 292,
      height: 43,
      position: "absolute",
      backgroundColor: "rgba(255,255,255,1)",
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "#000000"
    },
    icon0: {
      top: 5,
      left: 244,
      position: "absolute",
      color: "rgba(128,128,128,1)",
      fontSize: 30,
      height: 44,
      width: 30
    },
    icon: {
      top: 2,
      left: 240,
      position: "absolute",
      color: "rgba(128,128,128,1)",
      fontSize: 40,
      height: 54,
      width: 40,
      
    },
    rect2Stack: {
      width: 292,
      height: 44,
      marginTop: 5,
      marginLeft: 21
    },
    selectName: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 30,
      marginLeft: 35,
      fontWeight:"bold",
       color:"#4e2d87"
    },
    rect3: {
      top: 0,
      left: 0,
      width: 292,
      height: 43,
      position: "absolute",
      backgroundColor: "rgba(255,255,255,1)",
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "#000000",
      
    },
    icon1: {
      top: 0,
      left: 244,
      position: "absolute",
      color: "rgba(128,128,128,1)",
      fontSize: 40,
      height: 40,
      width: 40
    },
    rect3Stack: {
      width: 292,
      height: 44,
      marginTop: 3,
      marginLeft: 21
    },
    creditLimit: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 35,
      marginLeft: 35,
      fontWeight:"bold", color:"#4e2d87"
    },
    rect4: {
      width: 292,
      height: 43,
      backgroundColor: "rgba(255,255,255,1)",
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 2,
      marginLeft: 23
    },
    loremIpsum: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 15,
      marginLeft: 22
    },
    rect5: {
      width: 134,
      height: 39,
      backgroundColor: "rgba(68,189,68,1)",
      borderRadius: 15,
      marginTop: 44,
      marginLeft: 103, 
      marginBottom:15,
    },
    submit: {
      fontFamily: "roboto-regular",
      color: "rgba(255,255,255,1)",
      marginTop: 8,
      marginLeft: 43,
      fontWeight:"bold",
    },
    assignCreditLimit: {
      fontFamily: "roboto-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 18,
      marginTop: -659,
      marginLeft: 38
    },
    text1 :{
      marginLeft: 0,
      
    },
    dateA:{
      marginTop:-50,
    },
    rect6: {
      top: -30,
      left: 0,
      width: 240,
      height: 155,
      position: "absolute",
      backgroundColor: "rgba(78,45,135,1)",
      borderRadius: 15,
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 30,
      shadowOpacity: 0.5,
      shadowRadius: 10
    },
    image4: {
      top: -40,
      width: 220,
      height: 169,
      position: "absolute",
      left: 12
    },
    rectStack: {
      width: 262,
      height: 185,
      marginTop: 54,
      marginLeft: 48
    }
})
export default ExpensesForm;







