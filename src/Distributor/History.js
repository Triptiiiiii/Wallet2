import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  img,
  TouchableOpacity,
  Text
} from "react-native";
import {useNavigation} from '@react-navigation/native';

function History(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.rect2}>
          <View style={styles.searchRow}>
            <TextInput placeholder="Search" style={styles.search}></TextInput>
            <TouchableOpacity>
            {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
            <Image
              source={require("../../assets/search.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <View style={styles.filterStack}>
            <Text style={styles.filter}>Filter</Text>
            {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
            <Image
              source={require("../../assets/filter.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </View>
        </TouchableOpacity>
        <Text style={styles.history}>History</Text>
        <View style={styles.rect5}>
          <View style={styles.button3Row}>
            <TouchableOpacity style={styles.button3}>
              <Text style={styles.debit}>Debit</Text>
            </TouchableOpacity>
            <Text style={styles.rs23400}>Rs. 23,400</Text>
          </View>
          <View style={styles.transactionIdRow}>
            <Text style={styles.transactionId}>Transaction ID:</Text>
            <Text style={styles.loremIpsum}>3459867</Text>
          </View>
          <Text style={styles.loremIpsum2}>23-01-24</Text>
        </View>
        <View style={styles.rect6}>
          <View style={styles.button2Row}>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.credit}>Credit</Text>
            </TouchableOpacity>
            <Text style={styles.rs40000}>Rs. 40,000</Text>
          </View>
          <View style={styles.transactionId1Row}>
            <Text style={styles.transactionId1}>Transaction ID:</Text>
            <Text style={styles.loremIpsum3}>3459867</Text>
          </View>
          <Text style={styles.loremIpsum4}>23-01-24</Text>
        </View>
        <View style={styles.rect7}></View>
        
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
    marginTop: 20,
    borderRadius:25
  },
  rect2: {
    width: 320,
    height: 38,
    backgroundColor: "rgba(233,233,233,1)",
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 20
  },
  search: {
  
    color: "#121212",
    height: 36,
    width: 257
  },
  image: {
    width: 36,
    height: 36
  },
  searchRow: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 16
  },
  button: {
    width: 78,
    height: 25,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 15,
    marginTop: 15,
    marginLeft: 239
  },
  filter: {
    top: 2,
    left: 0,
    position: "absolute",
   
    color: "rgba(255,255,255,1)"
  },
  image2: {
    top: 0,
    left: 29,
    width: 33,
    height: 20,
    position: "absolute"
  },
  filterStack: {
    width: 62,
    height: 20,
    marginTop: 2,
    marginLeft: 14
  },
  history: {
  
    color: "rgba(78,45,135,1)",
    fontSize: 18,
    marginTop: 15,
    marginLeft: 20,
    fontWeight:"bold"
  },
  rect5: {
    width: 320,
    height: 78,
    backgroundColor: "rgba(230,230,230,0.7)",
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 2,
    marginLeft: 20
  },
  button3: {
    width: 77,
    height: 22,
    backgroundColor: "rgba(231,21,21,1)",
    borderRadius: 15
  },
  debit: {
   
    color: "rgba(255,255,255,1)",
    marginTop: 2,
    marginLeft: 23
  },
  rs23400: {
   
    color: "#121212",
    fontSize: 14,
    marginLeft: 129,
    marginTop: 2
  },
  button3Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 6,
    marginRight: 19
  },
  transactionId: {
    
    color: "#121212",
    fontSize: 12
  },
  loremIpsum: {
   
    color: "#121212",
    fontSize: 12,
    marginLeft: 5
  },
  transactionIdRow: {
    height: 15,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 7,
    marginRight: 157
  },
  loremIpsum2: {
   
    color: "#121212",
    marginTop: 2,
    marginLeft: 10
  },
  rect6: {
    width: 320,
    height: 78,
    backgroundColor: "rgba(230,230,230,0.7)",
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 9,
    marginLeft: 20
  },
  button2: {
    width: 77,
    height: 22,
    backgroundColor: "rgba(68,189,68,1)",
    borderRadius: 15
  },
  credit: {
   
    color: "rgba(255,255,255,1)",
    marginTop: 2,
    marginLeft: 20
  },
  rs40000: {
   
    color: "#121212",
    marginLeft: 130,
    marginTop: 4
  },
  button2Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 6,
    marginRight: 18
  },
  transactionId1: {
   
    color: "#121212",
    fontSize: 12
  },
  loremIpsum3: {
  
    color: "#121212",
    fontSize: 12,
    marginLeft: 6
  },
  transactionId1Row: {
    height: 15,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 7,
    marginRight: 156
  },
  loremIpsum4: {
    
    color: "#121212",
    marginTop: 2,
    marginLeft: 8
  },
  rect7: {
    width: 320,
    height: 78,
    backgroundColor: "#E6E6E6",
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    opacity: 0.7,
    marginTop: 9,
    marginLeft: 23
  },
  rect8: {
    width: 296,
    height: 78,
    backgroundColor: "#E6E6E6",
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    opacity: 0.7,
    marginTop: 9,
    marginLeft: 24
  },
  rect9: {
    width: 296,
    height: 78,
    backgroundColor: "#E6E6E6",
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    opacity: 0.7,
    marginTop: 11,
    marginLeft: 24
  }
});

export default History;
