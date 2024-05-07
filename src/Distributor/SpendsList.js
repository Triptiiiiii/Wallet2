import React, { Component } from "react";
import { StyleSheet, View, TextInput, Image, img, Text, TouchableOpacity ,ScrollView } from "react-native";
// import {useNavigation} from '@react-navigation/native';

function SpendsList(props) {
  // const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
    <View style={styles.container}>
    <View style={styles.horizontalContent}>
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
        <View style={styles.rect3}>
          <View style={styles.filterStack}>
            <Text style={styles.filter}>Filter</Text>
            {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
            <Image
              source={require("../../assets/filter.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </View>
        </View>
        <Text style={styles.spendsList}>Spends List</Text>
        <View style={styles.rect4}>
          <View style={styles.sNoRow}>
            <Text style={styles.sNo}>S.no.</Text>
            <Text style={styles.dateOfSpend}>Date of{"\n"}Spend</Text>
            <Text style={styles.amountRs}>Amount{"\n"}(Rs.)</Text>
            <Text style={styles.transactionId}>Transaction ID</Text>
            <Text style={styles.loremIpsum}>
              View {"\n"}Transaction{"\n"}Sheet
            </Text>
          </View>
        </View>
        <View style={styles.rect5Stack}>
          <View style={styles.rect5}>
            <View style={styles.loremIpsum2Row}>
              <Text style={styles.loremIpsum2}>1.</Text>
              <Text style={styles.loremIpsum3}>28-01-24</Text>
              <Text style={styles.loremIpsum4}>20,000</Text>
              <Text style={styles.loremIpsum5}>827138723</Text>
            </View>
          </View>
          <TouchableOpacity>
          {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
          <Image
            source={require("../../assets/view.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.rect5Stack}>
          <View style={styles.rect5}>
            <View style={styles.loremIpsum2Row}>
            <Text style={styles.loremIpsum2}>2.</Text>
              <Text style={styles.loremIpsum3}>29-01-24</Text>
              <Text style={styles.loremIpsum4}>40,000</Text>
              <Text style={styles.loremIpsum5}>827098723</Text>
            </View>
          </View>
          <TouchableOpacity>
          {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
          <Image
            source={require("../../assets/view.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.rect5Stack}>
          <View style={styles.rect5}>
            <View style={styles.loremIpsum2Row}>
            <Text style={styles.loremIpsum2}>3.</Text>
              <Text style={styles.loremIpsum3}>30-01-24</Text>
              <Text style={styles.loremIpsum4}>60,000</Text>
              <Text style={styles.loremIpsum5}>789138723</Text>
            </View>
          </View>
          <TouchableOpacity>
          {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
          <Image
            source={require("../../assets/view.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.rect5Stack}>
          <View style={styles.rect5}>
            <View style={styles.loremIpsum2Row}>
            <Text style={styles.loremIpsum2}>4.</Text>
              <Text style={styles.loremIpsum3}>31-01-24</Text>
              <Text style={styles.loremIpsum4}>80,000</Text>
              <Text style={styles.loremIpsum5}>549138723</Text>
            </View>
          </View>
          <TouchableOpacity>
          {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
          <Image
            source={require("../../assets/view.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
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
      horizontalContent: {
        flexDirection: "row",
      },
  container: {
    flex: 1,
    backgroundColor: "rgba(78,45,135,1)",
   width:500,
   
  },
  rect: {
    width: 467,
    height: 600,
    backgroundColor: "rgba(255,255,255,1)",
    // borderTopRightRadius: 15,
    // borderBottomLeftRadius: 15,
    borderRadius:15,
    marginLeft: 10,
    alignSelf: "center",
    marginTop:20
  },
  rect2: {
    width: 368,
    height: 41,
    backgroundColor: "#E6E6E6",
   borderRadius:15,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 13
  },
  search: {
   
    color: "#121212",
    height: 41,
    width: 303
  },
  image: {
    width: 39,
    height: 31,
    marginTop: 5
  },
  searchRow: {
    height: 41,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 17
  },
  rect3: {
    width: 79,
    height: 27,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius:15,
    marginTop: 18,
    marginLeft: 302
  },
  filter: {
    top: 4,
    left: 0,
    position: "absolute",
  
    color: "rgba(255,255,255,1)"
  },
  image2: {
    top: 0,
    left: 28,
    width: 30,
    height: 23,
    position: "absolute"
  },
  filterStack: {
    width: 58,
    height: 23,
    marginTop: 2,
    marginLeft: 15,
    
  },
  spendsList: {
    
    color: "rgba(78,45,151,1)",
    fontSize: 16,
    marginTop: 17,
    marginLeft: 18,
    fontWeight:"bold",
  },
  rect4: {
    width: 430,
    height: 55,
    backgroundColor: "rgba(78,45,135,1)",
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 18
  },
  sNo: {
   
    color: "rgba(255,255,255,1)",
    marginTop: 17
  },
  dateOfSpend: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 25,
    marginTop: 8
  },
  amountRs: {
   
    color: "rgba(255,255,255,1)",
    marginLeft: 27,
    marginTop: 7
  },
  transactionId: {
    
    color: "rgba(255,255,255,1)",
    marginLeft: 20,
    marginTop: 16
  },
  loremIpsum: {
  
    color: "rgba(255,255,255,1)",
    marginLeft: 35
  },
  sNoRow: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: 28,
    marginLeft: 7,
    marginTop: 3
  },
  rect5: {
    top: 5,
    left: 0,
    width: 430,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(233,233,233,1)",
 
    flexDirection: "row"
  },
  loremIpsum2: {
   
    color: "#121212",
    marginTop: 1
  },
  loremIpsum3: {
   
    color: "#121212",
    marginLeft: 27,
    marginTop: 1
  },
  loremIpsum4: {
   
    color: "#121212",
    marginLeft: 23,
    marginTop: 2
  },
  loremIpsum5: {
   
    color: "rgba(74,144,226,1)",
    marginLeft: 36
  },
  loremIpsum2Row: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 148,
    marginLeft: 16,
    marginTop: 12
  },
  image4: {
    top: 16,
    left: 342,
    width: 25,
    height: 25,
    position: "absolute",
    transform: [
      {
        rotate: "1.00deg"
      }
    ]
  },
  rect5Stack: {
    width: 430,
    height: 53,
    marginLeft: 18
  },
  rect6: {
    width: 430,
    height: 44,
    backgroundColor: "rgba(226,213,249,1)",
    
    marginTop: 1,
    marginLeft: 19
  },
  rect7: {
    width: 430,
    height: 44,
    backgroundColor: "rgba(233,233,233,1)",
   
    marginTop: 5,
    marginLeft: 18
  },
  rect8: {
    width: 430,
    height: 44,
    backgroundColor: "rgba(226,213,249,1)",
    borderRadius: 15,
    marginTop: 6,
    marginLeft: 18
  }
});

export default SpendsList;
