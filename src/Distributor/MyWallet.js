import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  img,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
//import Svg, { Ellipse } from "react-native-svg";
import {useNavigation} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 

function MyWallet(props) {
  const navigation = useNavigation();
  const [hidden, setHidden] = useState(false);
  const toggleVisibility = () => {
    setHidden(!hidden); 
  };
  return (
      <View style={styles.container}>
        <View style={styles.rect}>
          <View style={styles.rect2Stack}>
            
            <View style={styles.rect3}>
            <View>
            {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
              <Image
                source={require("../../assets/payment.png")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
            </View>
              <View style={styles.myWalletColumnRow}>
                <View style={styles.myWalletColumn}>
                  <Text style={styles.myWallet}>My Wallet</Text>
                  <Text style={styles.creditLimit}>Credit Limit</Text>
                </View>
                <View style={styles.ellipseStack}>
                  {/* <Svg viewBox="0 0 53.5 48.59" style={styles.ellipse}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="rgba(112,92,236,1)"
                      cx={27}
                      cy={24}
                      rx={27}
                      ry={24}
                    ></Ellipse>
                  </Svg> */}
                  <TouchableOpacity style={styles.button}onPress={toggleVisibility}>
                  <Ionicons name={hidden ?  'eye-outline' :'eye-off-outline' } size={24} color="white" />
                  </TouchableOpacity>
                  {!hidden && <Text style={styles.rs100000}>Rs. 1,00,000</Text>}
                </View>
              </View>
              <View style={styles.ellipse2StackRow}>
                <View style={styles.ellipse2Stack}>
                  {/* <Svg viewBox="0 0 58.28 58.99" style={styles.ellipse2}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="rgba(112,92,236,1)"
                      cx={29}
                      cy={29}
                      rx={29}
                      ry={29}
                    ></Ellipse>
                  </Svg>
                  <Svg viewBox="0 0 29.14 30.78" style={styles.ellipse3}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="rgba(112,92,236,1)"
                      cx={15}
                      cy={15}
                      rx={15}
                      ry={15}
                    ></Ellipse>
                  </Svg> */}
                </View>
                <View style={styles.balanceWalletRowColumn}>
                  <View style={styles.balanceWalletRow}>
                    <Text style={styles.balanceWallet}>Balance Wallet</Text>
                    <TouchableOpacity onPress={toggleVisibility}>
               
                  </TouchableOpacity>
                 
                    {!hidden && <Text style={styles.rs80000}>Rs.    80,000</Text>}
                  </View>
                  <View style={styles.rect4}>
                    <Text style={styles.rechargeWallet}>Recharge Wallet</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.button6StackRow}>
            <View style={styles.button6Stack}>
              
              <TouchableOpacity style={styles.button7 }onPress={() => navigation.navigate('Statement')} >
                <View style={styles.image5Row}>
                {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
                  <Image
                    source={require("../../assets/banking.png")}
                    resizeMode="contain"
                    style={styles.image5}
                  ></Image>
                  <Text style={styles.statement}>STATEMENT</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.button8Stack}>
             

              <TouchableOpacity style={styles.button3}onPress={() => navigation.navigate('RechargeList')}>
                <View style={styles.image4Row }>
                {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
                  <Image
                    source={require("../../assets/rechargeable-battery.png")}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                  <Text style={styles.recharges}>RECHARGES</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.button9StackRow}>
            <View style={styles.button9Stack}>
             
              <TouchableOpacity style={styles.button5}onPress={() => navigation.navigate('SpendsList')}>
                <View style={styles.image2Row}>
                {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
                  <Image
                    source={require("../../assets/assets.png")}
                    resizeMode="contain"
                    style={styles.image2}
                  ></Image>
                  <Text style={styles.spends}>SPENDS</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.button10Stack}>
              
              <TouchableOpacity style={styles.button4}onPress={() => navigation.navigate('History')}>
                <View style={styles.image6Row}>
                {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
                  <Image
                    source={require("../../assets/history.png")}
                    resizeMode="contain"
                    style={styles.image6}
                  ></Image>
                  <Text style={styles.history}>HISTORY</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.imageRow}>
        {img && <Image source={img} style={{ width: 50, height: 50 , position: 'absolute', top: 1,left: 10,padding:10,margin:10,}} resizeMode='cover' />}
          
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
        height: 655,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 25,
        marginTop: 20,
        marginLeft: 0
      },
      rect2: {
        top: 3,
        left: 13,
        width: 307,
        height: 173,
        position: "absolute",
        backgroundColor: "rgba(229,193,251,1)",
        borderRadius: 15
      },
      image3: {
        width: 83,
        height: 72,
        marginTop: 40,
        marginLeft: 6
      },
      rect3: {
        top: 8,
        width: 307,
        height: 173,
        position: "absolute",
        //backgroundColor: "rgba(102,81,230,1)",
        backgroundColor:'#4e2d87',
        borderRadius: 15,
        left: 17
      },
      myWallet: {
        
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        marginLeft: 25,
        marginTop:-85
      },
      creditLimit: {
       
        color: "rgba(255,255,255,1)",
        fontSize: 14,
        marginTop: 20,
        left:0,
      },
      myWalletColumn: {
        width: 100
      },
      ellipse: {
        top: 0,
        left: 27,
        width: 54,
        height: 54,
        position: "absolute"
      },
      button: {
        top: -87,
        left: 45,
        width: 25,
        height: 20,
        position: "absolute",
        borderRadius: 15,
      },
      hide: {
      
        color: "#121212",
        fontSize: 12,
        marginTop: 2,
        marginLeft: 24,
        fontWeight:"bold"
      },
      rs100000: {
        top: -43,
        left: -15,
        position: "absolute",
        
        color: "rgba(255,255,255,1)",
        fontSize: 14
      },
      ellipseStack: {
        width: 81,
        height: 58,
        marginLeft: 25
      },
      myWalletColumnRow: {
        height: 58,
        flexDirection: "row",
        marginTop: -15,
        marginLeft: 100,
        marginRight: 13
      },
      ellipse2: {
        top: 0,
        left: 0,
        width: 58,
        height: 59,
        position: "absolute"
      },
      ellipse3: {
        top: 43,
        left: 42,
        width: 29,
        height: 31,
        position: "absolute"
      },
      ellipse2Stack: {
        width: 71,
        height: 74
      },
      balanceWallet: {
       
        color: "rgba(255,255,255,1)",
        fontSize: 14,
        marginTop: -80
      },
      rs80000: {
        top:-80,
        right:-2,
        
        color: "rgba(255,255,255,1)",
        fontSize: 14,
        marginLeft: 16
      },
      balanceWalletRow: {
        height: 19,
        flexDirection: "row",
        marginRight: 9
      },
      rect4: {
        width: 117,
        height: 31,
        backgroundColor: "rgba(68,189,68,1)",
        borderRadius: 15,
        marginTop: -50,
        marginLeft: 70
      },
      rechargeWallet: {
        color: "rgba(255,255,255,1)",
        marginTop: 4,
        marginLeft: 8,
      },
      balanceWalletRowColumn: {
        width: 193,
        marginLeft: 5,
        marginTop: 3
      },
      ellipse2StackRow: {
        height: 74,
        flexDirection: "row",
        marginTop: 1,
        marginLeft: 25,
        marginRight: 13
      },
      rect2Stack: {
        width: 314,
        height: 181,
        marginTop: 51,
        marginLeft: 8
      },
      button6: {
        top: 0,
        left: 13,
        width: 144,
        height: 50,
        position: "absolute",
        backgroundColor: "rgba(229,193,251,1)",
        borderRadius: 15
      },
      button7: {
        top: 4,
        left: 16,
        width: 144,
        height: 50,
        position: "absolute",
        backgroundColor: "#4e2d87",
        borderRadius: 15,
        flexDirection: "row"
      },
      image5: {
        width: 30,
        height: 35
      },
      statement: {
       
        color: "rgba(255,255,255,1)",
        marginLeft: 7,
        marginTop: 10
      },
      image5Row: {
        height: 38,
        flexDirection: "row",
        flex: 1,
        marginRight: 12,
        marginLeft: 14,
        marginTop: 6
      },
      button6Stack: {
        width: 148,
        height: 54
      },
      button8: {
        top: 0,
        left: 13,
        width: 144,
        height: 50,
        position: "absolute",
        backgroundColor: "rgba(229,193,251,1)",
        borderRadius: 15
      },
      button3: {
        top: 4,
        left: 16,
        width: 144,
        height: 50,
        position: "absolute",
        backgroundColor: "#4e2d87",
        borderRadius: 15,
        flexDirection: "row"
      },
      image4: {
        width: 32,
        height: 34
      },
      recharges: {
        
        color: "rgba(255,255,255,1)",
        marginLeft: 2,
        marginTop: 9
      },
      image4Row: {
        height: 34,
        flexDirection: "row",
        flex: 1,
        marginRight: 19,
        marginLeft: 12,
        marginTop: 8
      },
      button8Stack: {
        width: 147,
        height: 54,
        marginLeft: 9
      },
      button6StackRow: {
        height: 54,
        flexDirection: "row",
        marginTop: 39,
        marginLeft: 13,
        marginRight: 13
      },
      button9: {
        top: 0,
        left: 13,
        width: 144,
        height: 50,
        position: "absolute",
        backgroundColor: "rgba(229,193,251,1)",
        borderRadius: 15
      },
      button5: {
        top: 5,
        left: 16,
        width: 144,
        height: 50,
        position: "absolute",
        backgroundColor: "#4e2d87",
        borderRadius: 15,
        flexDirection: "row"
      },
      image2: {
        width: 32,
        height: 37
      },
      spends: {
        
        color: "rgba(255,255,255,1)",
        fontSize: 14,
        marginLeft: 18,
        marginTop: 10
      },
      image2Row: {
        height: 37,
        flexDirection: "row",
        flex: 1,
        marginRight: 28,
        marginLeft: 13,
        marginTop: 8
      },
      button9Stack: {
        width: 147,
        height: 55
      },
      button10: {
        top: 0,
        left: 13,
        width: 144,
        height: 50,
        position: "absolute",
        backgroundColor: "rgba(229,193,251,1)",
        borderRadius: 15
      },
      button4: {
        top: 5,
        left: 16,
        width: 144,
        height: 50,
        position: "absolute",
        backgroundColor: '#4e2d87',
        borderRadius: 15,
        flexDirection: "row"
      },
      image6: {
        width: 42,
        height: 32
      },
      history: {
        
        color: "rgba(255,255,255,1)",
        marginLeft: 4,
        marginTop: 7
      },
      image6Row: {
        height: 39,
        flexDirection: "row",
        flex: 1,
        marginRight: 30,
        marginLeft: 11,
        marginTop: 10
      },
      button10Stack: {
        width: 147,
        height: 55,
        marginLeft: 9
      },
      button9StackRow: {
        height: 55,
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 14,
        marginRight: 13
      },
      image: {
        width: 32,
        height: 39,
        marginTop: 5
      },
      jTechnologies: {
    
        color: "rgba(255,255,255,1)",
        fontSize: 16
      },
      distributor: {
       
        color: "rgba(255,255,255,1)",
        marginLeft: 39
      },
      id1234567: {
        
        color: "rgba(255,255,255,1)",
        marginTop: 3,
        marginLeft: 32
      },
      jTechnologiesColumn: {
        width: 107,
        marginLeft: 168
      },
      imageRow: {
        height: 56,
        flexDirection: "row",
        marginTop: -667,
        marginLeft: 22,
        marginRight: 31
      }
})
export default MyWallet;