import { StyleSheet, Text, View,Pressable,TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {useNavigation} from '@react-navigation/native';

const CustomDrawerContent = (props) => {
    const [isIcon, setIsIcon] = useState(false);
    const [isIcons, setIsIcons] = useState(false);
  return (
    <DrawerContentScrollView {...props}>
    {/* <View
      style={{
        backgroundColor: "#4e2d87",
        padding: 30,
        margin: 0.1,
        borderRadius: 0.1,
      }}
    >
      <Text style={{ color: "white" }}>Name : Rohit Kumar Soni</Text>
      <Text style={{ color: "white" }}>Contact : 9142907408</Text>
    </View> */}
    <Pressable style={styles.drawerItem} onPress={() => setIsIcon(!isIcon)}>
      <View style={{ flexDirection: "row", marginLeft: 5 }}>
        <Icon
          name="home"
          size={20}
          color="#4e2d87"
          style={{ marginRight: 10 }}
        />
        <Text style={styles.drawerItemheading}>Home</Text>
      </View>
      {isIcon ? (
        // <Text style={{ textAlign: "left" }}></Text>
        <Icon
        name="angle-right"
        size={20}
        color="#4e2d87"
        style={{ marginRight: 10 }}
      />
      ) : (
        // <Text style={{ textAlign: "left" }}></Text>
        <Icon
        name="angle-down"
        size={20}
        color="#4e2d87"
        style={{ marginRight: 10 }}
      />
      )}
    </Pressable>
    {!isIcon && (
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Wallet Screen")}
        style={{ flexDirection: "row", marginLeft: 30 }}
      >
        <Icon name="credit-card" size={20} color="#4e2d87" style={{ marginRight: -21}} />
        <Text style={styles.drawerItemText}>Wallet screen </Text>
      </TouchableOpacity>
    )}

  

   {!isIcon && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Wallet Settings")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="cog" size={20} color="#4e2d87" style={{ marginRight: -17}} />
        <Text style={styles.drawerItemText}>Wallet Settings</Text> */}
      </TouchableOpacity>
    )}

   {!isIcon && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("AddAmount")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="rupee" size={20} color="#4e2d87" style={{ marginRight: -10}} />
        <Text style={styles.drawerItemText}>AddAmount</Text> */}
      </TouchableOpacity>
    )}
   {!isIcon && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Assign Credit Limit")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="minus-circle" size={20} color="#4e2d87" style={{ marginRight: -17}} />
        <Text style={styles.drawerItemText}>Assign Credit Limit</Text> */}
      </TouchableOpacity>
    )}
   {!isIcon && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Self Validity All List")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        <Icon name="check" size={20} color="#4e2d87" style={{ marginRight: -19}} />
        <Text style={styles.drawerItemText}>Self Validity All List</Text>
      </TouchableOpacity>
    )}
    {!isIcon && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("InstallationForm")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        <Icon name="check" size={20} color="#4e2d87" style={{ marginRight: -19}} />
        <Text style={styles.drawerItemText}>InstallationForm</Text>
      </TouchableOpacity>
    )}

      {!isIcon && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Technician")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        <Icon name="check" size={20} color="#4e2d87" style={{ marginRight: -19}} />
        <Text style={styles.drawerItemText}>Technician</Text>
      </TouchableOpacity>
    )}

    {!isIcon && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("TranoAllLogin")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        <Icon name="check" size={20} color="#4e2d87" style={{ marginRight: -19}} />
        <Text style={styles.drawerItemText}>TranoAllLogin</Text>
      </TouchableOpacity>
    )}
    {!isIcon && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("MeetingDetails")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        <Icon name="check" size={20} color="#4e2d87" style={{ marginRight: -19}} />
        <Text style={styles.drawerItemText}>MeetingDetails</Text>
      </TouchableOpacity>
    )}  
     {!isIcon && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("OrderForm")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        <Icon name="check" size={20} color="#4e2d87" style={{ marginRight: -19}} />
        <Text style={styles.drawerItemText}>OrderForm</Text>
      </TouchableOpacity>
    )}  
     {!isIcon && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Login")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        <Icon name="check" size={20} color="#4e2d87" style={{ marginRight: -19}} />
        <Text style={styles.drawerItemText}>Login</Text>
      </TouchableOpacity>
    )}
  {!isIcon && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Notifications2")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
    <Icon name="bell" size={20} color="#4e2d87" style={{ marginRight: -19}} />
      <Text style={styles.drawerItemText}>Notifications2</Text>
      </TouchableOpacity>
    )}
   
    {!isIcon && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Assign Credit Limits")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="history" size={20} color="#4e2d87" style={{ marginRight: 40}} /> */}
        {/* <Text style={styles.drawerItemText}>Assign Credit Limits</Text> */}
      </TouchableOpacity>
    )}
    {!isIcon && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("E-Sim Report")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="sim" size={20} color="#4e2d87" style={{ marginRight: 40}} /> */}
        {/* <Text style={styles.drawerItemText}>E-Sim Report</Text> */}
      </TouchableOpacity>
    )}
 
  
    {!isIcon && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Add Amounts")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="history" size={20} color="#4e2d87" style={{ marginRight: 40}} /> */}
        {/* <Text style={styles.drawerItemText}>Add Amounts</Text> */}
      </TouchableOpacity>
    )}
  
  
     {!isIcon && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Self Validity Recharges- All List")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="history" size={20} color="#4e2d87" style={{ marginRight: 40}} /> */}
        {/* <Text style={styles.drawerItemText}>Add Amounts</Text> */}
      </TouchableOpacity>
    )}
    
  

<Pressable style={styles.drawerItem} onPress={() => setIsIcons(!isIcons)}>
      <View style={{ flexDirection: "row", marginLeft: 5 }}>
        <Icon
          name="user"
          size={20}
          color="#4e2d87"
          style={{ marginRight: 10 }}
        />
        <Text style={styles.drawerItemheading}>My Wallet</Text>
      </View>
      {isIcon ? (
        // <Text style={{ textAlign: "left" }}></Text>
        <Icon
        name="angle-right"
        size={20}
        color="#4e2d87"
        style={{ marginRight: 10 }}
      />
      ) : (
        // <Text style={{ textAlign: "left" }}></Text>
        <Icon
        name="angle-down"
        size={20}
        color="#4e2d87"
        style={{ marginRight: 10 }}
      />
      )}
    </Pressable>



{!isIcons && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("My Wallet")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        <Icon name="money" size={20} color="#4e2d87" style={{ marginRight:-20}} /> 
      <Text style={styles.drawerItemText}>My Wallet</Text>
      </TouchableOpacity>
    )}

    

{!isIcons && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Statement")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="history" size={20} color="#4e2d87" style={{ marginRight: 40}} /> */}
        {/* <Text style={styles.drawerItemText}>Statement</Text> */}
      </TouchableOpacity>
    )}
{!isIcons && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("ViewCertificate")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="history" size={20} color="#4e2d87" style={{ marginRight: 40}} /> */}
        {/* <Text style={styles.drawerItemText}>Statement</Text> */}
      </TouchableOpacity>
    )}

{!isIcon && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Recharge List")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="history" size={20} color="#4e2d87" style={{ marginRight: 40}} /> */}
        {/* <Text style={styles.drawerItemText}>Recharge List</Text> */}
      </TouchableOpacity>
    )}

    
{!isIcons && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Spends List")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="history" size={20} color="#4e2d87" style={{ marginRight: 40}} /> */}
        {/* <Text style={styles.drawerItemText}>Spends List</Text> */}
      </TouchableOpacity>
    )}
    {!isIcons && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Notifications1")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="history" size={20} color="#4e2d87" style={{ marginRight: 40}} /> */}
        {/* <Text style={styles.drawerItemText}>Spends List</Text> */}
      </TouchableOpacity>
    )}
    {!isIcons && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Notifications2")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="history" size={20} color="#4e2d87" style={{ marginRight: 40}} /> */}
        {/* <Text style={styles.drawerItemText}>Spends List</Text> */}
      </TouchableOpacity>
    )}
  {!isIcons && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("History")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="history" size={20} color="#4e2d87" style={{ marginRight: -17}} /> */}
        {/* <Text style={styles.drawerItemText}>History</Text> */}
      </TouchableOpacity>
    )}

{!isIcons && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="history" size={20} color="#4e2d87" style={{ marginRight: 40}} /> */}
        {/* <Text style={styles.drawerItemText}>My shared Users</Text> */}
      </TouchableOpacity>
    )}
    
    {!isIcons && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="history" size={20} color="#4e2d87" style={{ marginRight: 40}} /> */}
        {/* <Text style={styles.drawerItemText}>My Drivers</Text> */}
      </TouchableOpacity>
    )}

  {!isIcons && (
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("")}
      style={{ flexDirection: "row", marginLeft: 30 }}>
        {/* <Icon name="history" size={20} color="#4e2d87" style={{ marginRight: 40}} /> */}
        {/* <Text style={styles.drawerItemText}>My Groups</Text> */}
      </TouchableOpacity>
    )}

    {/* <TouchableOpacity
      style={styles.drawerItem}
      onPress={() => props.navigation.navigate("report")}
    >
      <View
        style={{ flexDirection: "row", alignItems: "right", marginLeft: 5 }}
      >
        <Icon
          name="telegram"
          size={20}
          color="#4e2d87"
          style={{ marginRight: 10 }}
        />
        <Text style={styles.drawerItemheading}>My W</Text>
      </View>
    </TouchableOpacity> */}



    {/* <TouchableOpacity
      style={styles.drawerItem}
      onPress={() => props.navigation.navigate("Contact")}
    >
      <View
        style={{ flexDirection: "row", alignItems: "right", marginLeft: 5 }}
      >
        <Icon
          name="telegram"
          size={20}
          color="#4e2d87"
          style={{ marginRight: 10 }}
        />
        <Text style={styles.drawerItemheading}>Contact </Text>
      </View>
    </TouchableOpacity> */}

<TouchableOpacity
      style={styles.drawerItem}
      onPress={() => props.navigation.navigate("Dashboard")}
    >
      <View
        style={{ flexDirection: "row", alignItems: "right", marginLeft: 5 }}
      >
        <Icon name="sign-out" size={20} color="#4e2d87" style={{ marginRight: 9 }} />
        <Text style={styles.drawerItemheading}>Logout</Text>
      </View>
    </TouchableOpacity>
    {/* <DrawerItemList {...props} /> hide dashboard text */}
  </DrawerContentScrollView>
  )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    drawerItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      },
    
      drawerItemText: {
        fontSize: 11,
        margin: 5,
        marginLeft: 50,
        padding: 1,
      },
    
      drawerItemheading: {
        fontSize: 14,
        margin: 5,
        padding: 1,
    
        // backgroundColor:'#4e2d87',
        // color:'#fff',
      },
})