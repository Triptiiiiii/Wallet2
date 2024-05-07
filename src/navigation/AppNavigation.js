import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';
import WalletSettings from '../screen/WalletSettings';
// import AssignCreditLimit from '../screen/AssignCreditLimit';
import EsimReport from '../screen/EsimReport';
import AssignCreditLimit from '../screen/AssignCreditLimit';          
// import AddAmounts from '../screen/AddAmounts';
import AddAmount2 from '../screen/AddAmount2';
import AddAmount from '../screen/AddAmount';
import AssignCreditLimits from '../screen/AssignCreditLimits';
import Notifications2 from '../screen/Notifications2';
import Notifications1 from '../screen/Notifications1';
import RechargeList from '../Distributor/RechargeList';
import SpendsList from '../Distributor/SpendsList';
import History from '../Distributor/History';
import Statement from '../Distributor/Statement';
import WalletScreen from '../screen/WalletScreen';
import InstallationForm from '../screen/InstallationForm';
import TranoAllLogin from '../screen/TranoAllLogin';
import Login from '../screen/Login';
import Technician from '../screen/Technician';
import EmployeeLogin from '../screen/EmployeeLogin';
import DistributorLogin from '../screen/DistributorLogin';
import MyWallet from '../Distributor/MyWallet';
import TechnicianLogin from '../screen/TechnicianLogin';
import {useNavigation} from '@react-navigation/native';
import OEMWallet from '../screen/OEMWallet';
import OEMLogin from '../screen/OEMLogin';
import DistributorWallet from '../screen/DistributorWallet';
import ManagersLogin from '../screen/ManagersLogin';
import EmployeeWalletScreen from '../screen/EmployeeWalletScreen';
import MDWallet from '../screen/MDWallet';
import AuthenticationLogin from '../screen/AuthenticationLogin';
import FinanceLogin from '../screen/FinanceLogin';
import AuthDashboard from '../screen/AuthDashboard';
import FinanceDashboard from '../screen/FinanceDashboard';
import MeetingDetails from '../screen/MeetingDetails';
import ViewCertificate from '../screen/ViewCertificate';
import OrderForm from '../screen/OrderForm';
import MarketingTwoButtons from '../screen/MarketingTwoButtons';
import MarketingHeadExpenses from '../screen/MarketingHeadExpenses';
import MarketingExecutiveExpenses from '../screen/MarketingExecutiveExpenses';
import SalesOrder from '../screen/SalesOrder';
import MarketingThreeButtons from '../screen/MarketingThreeButtons';
import ExpensesForm from '../screen/ExpensesForm';
// import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const navigation= useNavigation();
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name='Root'  component={DrawerNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Wallet" component={WalletSettings} options={{ headerShown: true, 
             headerStyle: {
                backgroundColor: '#4e2d87'
            }, headerTintColor: '#ffff'
        }} />
            <Stack.Screen name="EsimReport" component={EsimReport} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />  
            {/* <Stack.Screen name="EsimReport" component={EsimReport} /> */}
            <Stack.Screen name="Assign Credit Limit" component={AssignCreditLimit} options={{ headerShown: true, 
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="AddAmount2" component={AddAmount2} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="AddAmount" component={AddAmount} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="Assign Credit Limits" component={AssignCreditLimits} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="Notifications2" component={Notifications2} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="RechargeList" component={RechargeList} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
             <Stack.Screen name="ViewCertificate" component={ViewCertificate} options={{headerShown:true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="SpendsList" component={SpendsList} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="History" component={History} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="Statement" component={Statement} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="WalletScreen" component={WalletScreen} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
          
            <Stack.Screen name="AuthenticationLogin" component={AuthenticationLogin} options={{
                headerTitle:()=>(
                    <View> 
                    <Text></Text>
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="FinanceLogin" component={FinanceLogin} options={{
                headerTitle:()=>(
                  <View>
                    <Text></Text>
                  </View>
                ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
             <Stack.Screen name="AuthDashboard" component={AuthDashboard} options={{
                headerTitle:()=>(
                    <View style={styles.titleContainer}>
                    <Text style={styles.anandKumarSeethala}>Abc abc</Text>
                    <Text style={styles.managingDirector}>Authentication Manager</Text>
                    <Text style={styles.id1234567}>ID - 12345</Text>
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
             <Stack.Screen name="FinanceDashboard" component={FinanceDashboard} options={{
                headerTitle:()=>(
                    <View style={styles.titleContainer}>
                    <Text style={styles.anandKumarSeethala}>Abc abc</Text>
                    <Text style={styles.managingDirector}>Finance Manager</Text>
                    <Text style={styles.id1234567}>ID - 12345</Text>
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            
             <Stack.Screen name="EmployeeWalletScreen" component={EmployeeWalletScreen} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }}  />
             <Stack.Screen name="ManagersLogin" component={ManagersLogin} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }}  />
             <Stack.Screen name="MarketingTwoButtons" component={MarketingTwoButtons} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }}  />
              <Stack.Screen name="MarketingHeadExpenses" component={MarketingHeadExpenses} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }}  />
             <Stack.Screen name="MarketingThreeButtons" component={MarketingThreeButtons} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }}  />
            <Stack.Screen name="ExpensesForm" component={ExpensesForm} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }}  />
             <Stack.Screen name="SalesOrder" component={SalesOrder} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }}  />
              <Stack.Screen name="MarketingExecutiveExpenses" component={MarketingExecutiveExpenses} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }}  />
            <Stack.Screen name="InstallationForm" component={InstallationForm} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
              <Stack.Screen name="Notifications1" component={Notifications1} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="Technician" component={Technician} options={{
                headerTitle:()=>(
            <View style={styles.technicianStackColumn}>
            <View style={styles.technicianStack}>
              <Text style={styles.dharamendraKumar}>Dharamendra Kumar</Text>
              <Text style={styles.technician}>Technician</Text>
              <Text style={styles.techid}>ID - 1234567</Text>
            </View>
              
            </View>
                ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            
            <Stack.Screen name="Login" component={Login} options={{
               headerTitle:()=>(
                <View style={{height:5, }}>
                    <Text style={{color:'#4e2d87'}}>.</Text>
                </View>
               ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
             <Stack.Screen name="MeetingDetails" component={MeetingDetails} options={{
               headerTitle:()=>(
                <View>
                    <Text style={{color:'#ffffff' , fontSize:16}}>Meeting Details</Text>
                </View>
               ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
                <Stack.Screen name="OrderForm" component={OrderForm} options={{
               headerTitle:()=>(
                <View>
                    <Text style={{color:'#ffffff' , fontSize:16}}>Order Form</Text>
                </View>
               ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            
          
            <Stack.Screen name="DistributorLogin" component={DistributorLogin} options={{
                headerTitle:()=>(
                    <View>
                        <Text></Text>
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }}  initialParams={{ navigation: navigation }} />

            <Stack.Screen name="TechnicianLogin" component={TechnicianLogin} options={{
                headerTitle:()=>(
                    <View>
                        <Text></Text>
                    </View>
                ),  
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
             <Stack.Screen name="EmployeeLogin" component={EmployeeLogin} options={{
                headerTitle:()=>(
                    <View>
                        <Text></Text>
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
             <Stack.Screen name="MDWallet" component={MDWallet} options={{
                headerTitle:()=>(
                    <View style={styles.header}>
                    <View style={styles.titleContainer}>
                    <Text style={styles.anandKumarSeethala}>Anand Kumar Seethala</Text>
                    <Text style={styles.managingDirector}>Managing Director</Text>
                    <Text style={styles.id1234567}>ID - 12345</Text>
                    </View>
                    <View style={{marginTop:-17}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications2')}>
                    <Ionicons style={{ marginLeft: 220, marginTop: -30 }} name="notifications" size={30} color="white" />
                    </TouchableOpacity>
                    </View>
                    </View>
                        ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} initialParams={{ navigation: navigation }} />
             <Stack.Screen name="DistributorWallet" component={DistributorWallet} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} initialParams={{ navigation: navigation }} />
            <Stack.Screen name="OEMLogin" component={OEMLogin} options={{
                headerTitle:()=>(
                <View>
                    <Text></Text>
                </View>
                ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor : '#ffff'
            }} initialParams={{ navigation: navigation }} />
          
             <Stack.Screen name="OEMWallet" component={OEMWallet} options={{
            headerTitle:()=>(
            <View style={styles.header}>
            <View style={styles.titleContainer}>
            <Text style={styles.anandKumarSeethala}>Tripti Jha</Text>
            <Text style={styles.managingDirector}>OEM</Text>
            <Text style={styles.id1234567}>ID - 00000</Text>
            </View>
            <View style={{marginTop:-17}}>
            <TouchableOpacity >
            <Ionicons style={{ marginLeft: 220, marginTop: -30 }} name="notifications" size={30} color="white" />
            </TouchableOpacity>
            </View>
            </View>
                ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor : '#ffff'
            }} />
            <Stack.Screen name="MyWallet" component={MyWallet} options={{
            headerTitle:()=>(
            <View style={styles.header}>
            <View style={styles.titleContainer}>
            <Text style={styles.anandKumarSeethala}>J Technologies</Text>
            <Text style={styles.managingDirector}>Distributor / Dealer</Text>
            <Text style={styles.id1234567}>ID - 00000</Text>
            </View>
            <View style={{marginTop:-17}}>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications2')}>
            <Ionicons style={{ marginLeft: 220, marginTop: -30 }} name="notifications" size={30} color="white" />
            </TouchableOpacity>
            </View>
            </View>
                ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            </Stack.Navigator>
    )
}

export default AppNavigation

const styles = StyleSheet.create({
    
    titleContainer:{
        top:10,
        width:180,
        height:80
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
     
      notificationImage: {
        width: 30, // Adjust as needed
        height: 30, // Adjust as needed
        marginLeft: 80,
      },
      technicianStackColumn: {
        width: 159,
        marginLeft: 24,
        marginBottom: 1
      },
      technicianStack: {
        width: 159,
        height:70
      },
      technician: {
        top: 24,
        left: 0,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        lineHeight:25
        },
    
      dharamendraKumar: {
        top: 10,
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
        lineHeight:10,
        marginLeft:0,
        marginTop:4
      },
      AuthText:{
        fontSize:20,
        color:'#ffffff',
        fontWeight:"bold"
      },
      techid:{
        marginTop:44,
        fontSize:10,
        color:'#ffffff',
        marginLeft:1
      },
      image2: {
        width: 200,
        height: 35,
        marginTop: -590,
        marginLeft: -10
      },
      welcome: {
        fontWeight:"bold",
        fontFamily: "roboto-regular",
        color: "#4e2d87",
        fontSize: 25,
        marginTop: -100,
        marginLeft: 29
      },
      to: {
        fontFamily: "roboto-regular",
        color: "#4e2d87",
        fontSize: 20,
        marginLeft: 30
      },
      signInToContinue: {
        fontFamily: "roboto-500",
        color: "#4e2d87",
        fontSize: 18,
        marginTop: 100,
        marginLeft: 24
      }

})