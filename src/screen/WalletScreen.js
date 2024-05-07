import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from "react";
import { Image,TouchableOpacity,img } from "react-native";
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

function WalletScreen(props) {
    const navigation = useNavigation();
  return (
   <View>
      <View style={{backgroundColor:'#4e2d87', height:105, flexDirection:'row'}}>
      <TouchableOpacity style={{marginLeft:20, marginTop:40}} onPress={()=>navigation.openDrawer()}>
        <Icon name="bars" size={25} color="#fff"  />
        </TouchableOpacity>
        <View style={{marginTop:30}}>
        <Text style={{color:"#ffffff",marginLeft:40,fontSize:16}}>Anand Kumar Seethala</Text>
        <Text style={{color:"#ffffff",marginLeft:40,fontSize:12, marginTop:-3}}>Managing Director</Text>
        <Text style={{color:"#ffffff",marginLeft:40,fontSize:10}}>ID - 00000</Text>
        </View>
        <TouchableOpacity style={{marginLeft:50 , marginTop:40}} onPress={()=>navigation.navigate('Notifications1')}>
          <Icon name="bell" size={25} color="#ffff" />
        </TouchableOpacity>
      </View>
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.imageRow}>
        {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
          <TouchableOpacity>
        
          <Image
            // source={require("../../assets/more.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          </TouchableOpacity>
          {/* <View style={styles.anandKumarSeethalaColumn}>
            <Text style={styles.anandKumarSeethala}>Anand Kumar Seethala</Text>
            <Text style={styles.managingDirector}>Managing Director</Text>
            <Text style={styles.id1234567}>ID - 1234567</Text>
            {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 20,padding:10,margin:20,}} resizeMode='cover' />}
          </View> */}
         
        </View>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button }onPress={() => navigation.navigate('EsimReport')} >
          <Text style={styles.eSims}>e-Sims</Text>
          <View style={styles.rect2}>
            <Text style={styles.loremIpsum}>57,476</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.devices}>Devices</Text>
          <View style={styles.rect3}>
            <Text style={styles.loremIpsum1}>57,476</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
      <View style={styles.rect4}>
        <View style={styles.walletRow}>
          <Text style={styles.wallet}>Wallet</Text>
         
          {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 20,padding:10,margin:20,}} resizeMode='cover' />}
          <Image
            source={require("../../assets/left-arrow.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          
        </View>
      </View>
      </TouchableOpacity>
    </View>
    </View>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    marginTop:-25,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  rect: {
    width: 395,
    height: 30,
    backgroundColor: "rgba(78,45,135,1)",
    // marginTop: 20,
    paddingLeft:0,
  },
  image: {
    width: 31,
    height: 46,
    marginTop: 5,
    marginRight:5
  },
  anandKumarSeethalaColumn: {
    //width: 172,
    marginLeft: 28
  },
  image2: {
    width: 33,
    height: 34,
    marginLeft: 56,
    marginTop: 12
  },
  imageRow: {
    height: 57,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 22,
    marginRight: 18
  },
  button: {
    width: 147,
    height: 89,
    backgroundColor: "rgba(78,45,135,1)",
    shadowColor: "rgba(0,0,0,10)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderRadius: 15
  },
  eSims: {
    
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 17,
    marginLeft: 48
  },
  rect2: {
    width: 147,
    height: 44,
    backgroundColor: "rgba(175,132,248,1)",
    borderRadius: 15,
    marginTop: 8
  },
  loremIpsum: {
  
    color: "#ffffff",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 40
  },
  button1: {
    width: 147,
    height: 89,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 15,
    marginLeft: 19
  },
  devices: {
   
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 17,
    marginLeft: 45
  },
  rect3: {
    width: 147,
    height: 44,
    backgroundColor: "rgba(175,132,248,1)",
    borderRadius: 15,
    marginTop: 8
  },
  loremIpsum1: {
  
    color: "#ffffff",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 45
  },
  buttonRow: {
    height: 89,
    flexDirection: "row",
    marginTop: 48,
    marginLeft: 28,
    marginRight: 23
  },
  rect4: {
    width: 313,
    height: 43,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 44,
    marginLeft: 28
  },
  wallet: {
   
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 5
  },
  image3: {
    width: 22,
    height: 25,
    transform: [
      {
        rotate: "179.00deg"
      }
    ],
    marginLeft: 97
  },
  walletRow: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 17,
    marginLeft: 130,
    marginTop: 8
  }
})
export default WalletScreen;