import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  img
} from "react-native";
import {useNavigation} from '@react-navigation/native';

function RechargeList(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.rect2}>
          <View style={styles.searchRow}>
            <TextInput placeholder="Search" style={styles.search}></TextInput>
            {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
            <Image
              source={require("../../assets/search.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
        </View>
        <View style={styles.buttonStack}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.filter}>Filter</Text>
          </TouchableOpacity>
          {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
          <Image
            source={require("../../assets/filter.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
        <Text style={styles.rechargesList}>Recharges List</Text>
        <View style={styles.rect3}>
          <View style={styles.sNoRow}>
            <Text style={styles.sNo}>S.no.</Text>
            <Text style={styles.dateOfRecharges}>Date of {"\n"}Recharges</Text>
            <Text style={styles.amountRs}>Amount{"\n"}(Rs.)</Text>
            <Text style={styles.transactionId}>Transaction ID</Text>
          </View>
        </View>
        <View style={styles.rect4}>
          <View style={styles.textRow}>
            <Text style={styles.text}>1.</Text>
            <Text style={styles.loremIpsum}>24-01-24</Text>
            <Text style={styles.loremIpsum2}>20,000</Text>
            <Text style={styles.text2}>3492178</Text>
          </View>
        </View>
        <View style={styles.rect5}>
          <View style={styles.text3Row}>
            <Text style={styles.text3}>2.</Text>
            <Text style={styles.text4}>25-01-24</Text>
            <Text style={styles.text5}>40,000</Text>
            <Text style={styles.text6}>4556778</Text>
          </View>
        </View>
        <View style={styles.rect6}>
          <View style={styles.text7Row}>
            <Text style={styles.text7}>3.</Text>
            <Text style={styles.text8}>26-01-24</Text>
            <Text style={styles.loremIpsum3}>60,000</Text>
            <Text style={styles.text9}>8973850</Text>
          </View>
        </View>
        <View style={styles.rect7}>
        <View style={styles.text7Row}>
            <Text style={styles.text7}>4.</Text>
            <Text style={styles.text8}>26-01-24</Text>
            <Text style={styles.loremIpsum3}>60,000</Text>
            <Text style={styles.text9}>8973850</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(78,45,135,1)"
  },
  rect: {
    width: 360,
    height: 670,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 10,
    borderRadius:25
  },
  rect2: {
    width: 325,
    height: 34,
    backgroundColor: "rgba(233,233,233,1)",
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 17
  },
  search: {
   
    color: "#121212",
    height: 34,
    width: 246
  },
  image: {
    width: 29,
    height: 29,
    marginTop: 2
  },
  searchRow: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 16
  },
  button: {
    top: 1,
    left: 20,
    width: 78,
    height: 25,
    position: "absolute",
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 15
  },
  filter: {
  
    color: "rgba(255,255,255,1)",
    marginTop: 4,
    marginLeft: 12
  },
  image2: {
    top: 2,
    left: 70,
    width: 18,
    height: 21,
    position: "absolute"
  },
  buttonStack: {
    width: 78,
    height: 31,
    marginTop: 14,
    marginLeft: 235
  },
  rechargesList: {
   
    color: "rgba(78,45,135,1)",
    fontSize: 16,
    marginTop: 11,
    marginLeft: 16,
    fontWeight:"bold"
  },
  rect3: {
    width: 340,
    height: 55,
    backgroundColor: "rgba(78,45,135,1)",
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 9
  },
  sNo: {
   
    color: "rgba(255,255,255,1)",
    marginTop: 8
  },
  dateOfRecharges: {
  
    color: "rgba(255,255,255,1)",
    marginLeft: 13
  },
  amountRs: {
    
    color: "rgba(255,255,255,1)",
    marginLeft: 31
  },
  transactionId: {
  
    color: "rgba(255,255,255,1)",
    marginLeft: 21,
    marginTop: 7
  },
  sNoRow: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 5,
    marginTop: 9
  },
  rect4: {
    width: 340,
    height: 40,
    backgroundColor: "rgba(233,233,233,1)",
    
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 9
  },
  text: {
   
    color: "#121212",
    marginTop: 1
  },
  loremIpsum: {
   
    color: "#121212",
    marginLeft: 22,
    marginTop: 2
  },
  loremIpsum2: {
   
    color: "#121212",
    marginLeft: 43,
    marginTop: 1
  },
  text2: {
   
    color: "rgba(74,144,226,1)",
    marginLeft: 51
  },
  textRow: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 29,
    marginLeft: 12,
    marginTop: 11
  },
  rect5: {
    width: 340,
    height: 40,
    backgroundColor: "rgba(226,213,249,1)",
    
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 9
  },
  text3: {
   
    color: "#121212"
  },
  text4: {
   
    color: "#121212",
    marginLeft: 21
  },
  text5: {
   
    color: "#121212",
    marginLeft: 42
  },
  text6: {
  
    color: "rgba(74,144,226,1)",
    marginLeft: 51
  },
  text3Row: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 29,
    marginLeft: 14,
    marginTop: 11
  },
  rect6: {
    width: 340,
    height: 40,
    backgroundColor: "rgba(233,233,233,1)",
    
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 10
  },
  text7: {
  
    color: "#121212",
    marginTop: 1
  },
  text8: {
  
    color: "#121212",
    marginLeft: 22
  },
  loremIpsum3: {
    
    color: "#121212",
    marginLeft: 42
  },
  text9: {
    
    color: "rgba(74,144,226,1)",
    marginLeft: 51,
    marginTop: 1
  },
  text7Row: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: 29,
    marginLeft: 13,
    marginTop: 11
  },
  rect7: {
    width: 340,
    height: 40,
    backgroundColor: "rgba(226,213,249,1)",

    marginTop: 5,
    marginLeft: 10
  }
});

export default RechargeList;



