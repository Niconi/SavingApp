import React from 'react';
import { View, Text } from 'react-native';
import StyleSheet from './dashboardStyle';


function dashboard() {
  return (
    <View style={StyleSheet.container}>
        <View style={StyleSheet.block}>
          <Text style={StyleSheet.headerText}>Welcome!</Text>
        </View>
    </View>
  );
}

export default dashboard;