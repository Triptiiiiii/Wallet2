import { StyleSheet, Text, View, Image, onPress, Navigation, navigate } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WalletScreen from '../screen/WalletScreen';
import WalletSettings from '../screen/WalletSettings';
import AddAmount from '../screen/AddAmount';
import AssignCreditLimit from '../screen/AssignCreditLimit';
import Notifications2 from '../screen/Notifications2';
import SelfValidityRecharge from '../screen/SelfValidityRecharge';
import AssignCreditLimit2 from '../screen/AssignCreditLimits';
import EsimReport from '../screen/EsimReport';
import MyWallet from '../Distributor/MyWallet';
import Notifications1 from '../screen/Notifications1';
import Statement from '../Distributor/Statement';
import History from '../Distributor/History';
import RechargeList from '../Distributor/RechargeList';
import SpendsList from '../Distributor/SpendsList';
import AddAmount2 from '../screen/AddAmount2';
import CustomDrawerContent from './CustomDrawerContent';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import SelfValidityAllList from '../screen/SelfValidityAllList';
// Assuming you have imported the image correctly
import notificationImage from '../../assets/notification.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InstallationForm from '../screen/InstallationForm';
import ViewCertificate from '../screen/ViewCertificate';
import TranoAllLogin from '../screen/TranoAllLogin';
import Login from '../screen/Login'
import Technician from '../screen/Technician';
import MeetingDetails from '../screen/MeetingDetails';
import OrderForm from '../screen/OrderForm';


const Drawer = createDrawerNavigator();

//  const navigation = useNavigation();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4e2d87',
          height: 100
        },
        headerTintColor: 'white',
        headerTitleStyle: { color: 'white' },
      }}
      drawerContent={(props => <CustomDrawerContent {...props} />)}>
      <Drawer.Screen
        name="Wallet Screen"
        component={WalletScreen}
        options={({ navigation }) => ({
          headerShown:false
          // headerTitle: () => (
          //   <View style={styles.header}>
          //     <View style={styles.titleContainer}>
          //       <Text style={styles.anandKumarSeethala}>Anand Kumar Seethala</Text>
          //       <Text style={styles.managingDirector}>Managing Director</Text>
          //       <Text style={styles.id1234567}>ID - 00000</Text>
          //     </View>
          //     <View>
          //       <TouchableOpacity onPress={() => navigation.navigate('Root', { screen: 'Notifications' })}>
          //         <Ionicons style={{ marginLeft: 70 }} name="notifications" size={30} color="white" />
          //       </TouchableOpacity>
          //     </View>
          //   </View>
          // ),
        })}
      />
      <Drawer.Screen
        name="My Wallet"
        component={MyWallet}
        options={{
          headerTitle: () => (
            <View style={styles.header2}>
              <View style={styles.titleContainer2}>
                <Text style={styles.jtechnologies}>J Technologies</Text>
                <Text style={styles.distributor}>Distributor</Text>
                <Text style={styles.id1111111}>ID - 1234567</Text>
                <TouchableOpacity onPress={() => Navigation.navigate('Root')}>
                  <Ionicons style={{ marginLeft: 70, marginTop: -40 }} name="notifications" size={30} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          ),
        }}
      />
      <Drawer.Screen name="Wallet Settings" component={WalletSettings} />
      <Drawer.Screen name="AddAmount" component={AddAmount} />
      <Drawer.Screen name="Assign Credit Limit" component={AssignCreditLimit} />
      <Drawer.Screen name="Self Validity Recharge List" component={SelfValidityRecharge} />
      <Drawer.Screen name="Assign Credit Limits" component={AssignCreditLimit2} />
      <Drawer.Screen name="E-Sim Report" component={EsimReport} />
      {/* <Drawer.Screen name="History" component={History} /> */}
      {/* <Drawer.Screen name="Statement" component={Statement}/> */}
      {/* <Drawer.Screen name="Recharge List" component={RechargeList} /> */}
      {/* <Drawer.Screen name="Spends List" component={SpendsList} /> */}
      <Drawer.Screen name="Add Amounts" component={AddAmount2} />
      <Drawer.Screen name="Self Validity All List" component={SelfValidityAllList}/>
      <Drawer.Screen name="InstallationForm" component={InstallationForm}/>
      <Drawer.Screen name="TranoAllLogin" component={TranoAllLogin} options={({ navigation }) => ({
          headerShown:false})} />
      {/* <Drawer.Screen name="Login"component={Login}/> */}
      <Drawer.Screen name="Technician" component={Technician} options={{
          // headerTitle: ()=>(
          //   <View style={styles.technicianStackColumn}>
          //   <View style={styles.technicianStack}>
          //     <Text style={styles.technician}>Technician</Text>
          //     <Text style={styles.dharamendraKumar}>Dharamendra Kumar</Text>
          //   </View>
          //   <Text style={styles.id1234567}>ID - 1234567</Text>
          // </View>
          // ),
      }}/>
     </Drawer.Navigator>
  );
};


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Added to space components
    paddingRight: 15, // Adjust as needed
  },
  titleContainer: {
    // Adjust as needed
  },
  anandKumarSeethala: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
    // Add any other styles you need here
  },
  managingDirector: {
    color: 'white',
    fontSize: 14
    // Add any other styles you need here
  },
  id1234567: {
    color: 'white',
    fontSize: 12
    // Add any other styles you need here
  },
  notificationImage: {
    width: 30, // Adjust as needed
    height: 30, // Adjust as needed
    marginLeft: 80,
  },
  header2: {
    marginLeft: 150
  },
  titleContainer2: {

  },
  jtechnologies: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: -150
    // Add any other styles you need here
  },

  distributor: {
    color: 'white',
    fontSize: 14,
    marginLeft: -150
    // Add any other styles you need here
  },
  id1111111: {
    color: 'white',
    fontSize: 12,
    marginLeft: -150
    // Add any other styles you need here
  },
  technicianStackColumn: {
    width: 159,
    marginLeft: 24,
    marginBottom: 1
  },
  technicianStack: {
    width: 159,
    height: 31
  },
  technician: {
    top: 14,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    lineHeight:25
    },

  dharamendraKumar: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontWeight:"bold",
    fontSize:16
    
  },
  id1234567: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    lineHeight:20
  },

});
export default DrawerNavigation;
