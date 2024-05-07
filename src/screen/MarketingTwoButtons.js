import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MarketingTwoButtons() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.rect3}>
        <TouchableOpacity onPress={() => navigation.navigate('MarketingHeadExpenses')}>
          <View style={styles.rect}>
            <Text style={styles.managingDirector}>Marketing Head Expenses</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SalesOrder')}>
          <View style={styles.rect1}>
            <Text style={styles.loremIpsum}>Sales Order</Text>
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
    height: 200,
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
    marginLeft: 75,
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
    marginLeft: 112,
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
});

export default MarketingTwoButtons;
