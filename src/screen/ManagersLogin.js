import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import MarketingTwoButtons from './MarketingTwoButtons';
function ManagersLogin() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.rect3}>
        <TouchableOpacity onPress={() => navigation.navigate('EmployeeLogin')}>
          <View style={styles.rect}>
            <Text style={styles.managingDirector}>Managing Director</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AuthenticationLogin')}>
          <View style={styles.rect1}>
            <Text style={styles.loremIpsum}>Authentication Manager</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FinanceLogin')}>
          <View style={styles.rect2}>
            <Text style={styles.financeManager}>Finance Manager</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MarketingTwoButtons')}>
          <View style={styles.rect2}>
            <Text style={styles.financeManager2}>Marketing Head</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MarketingThreeButtons')}>
          <View style={styles.rect2}>
            <Text style={styles.financeManager3}>Marketing Executive</Text>
          </View>
        </TouchableOpacity>
        {/* Add more TouchableOpacity as needed */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  rect3: {
    width: 344,
    height: 371,
    backgroundColor: 'rgba(224, 211, 242, 1)',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderRadius: 15,
    marginTop: 50,
    marginLeft: 8,
  },
  rect: {
    width: 325,
    height: 53,
    backgroundColor: 'rgba(78, 45, 135, 1)',
    borderRadius: 15,
    marginTop: 42,
    marginLeft: 8,
  },
  managingDirector: {
    fontFamily: 'roboto-700',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    marginTop: 18,
    marginLeft: 95,
  },
  rect1: {
    width: 325,
    height: 53,
    backgroundColor: 'rgba(78, 45, 135, 1)',
    borderRadius: 15,
    marginTop: 11,
    marginLeft: 8,
  },
  loremIpsum: {
    fontFamily: 'roboto-700',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    marginTop: 18,
    marginLeft: 76,
  },
  rect2: {
    width: 325,
    height: 53,
    backgroundColor: 'rgba(78, 45, 135, 1)',
    borderRadius: 15,
    marginTop: 11,
    marginLeft: 8,
  },
  financeManager: {
    fontFamily: 'roboto-700',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    marginTop: 18,
    marginLeft: 96,
  },
  financeManager2: {
    fontFamily: 'roboto-700',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    marginTop: 18,
    marginLeft: 98,
  },
  financeManager3: {
    fontFamily: 'roboto-700',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    marginTop: 18,
    marginLeft: 90,
  },
});

export default ManagersLogin;
