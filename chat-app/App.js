import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FriendsScreen from './screens/FriendsScreen';
import AppNavigatior from './navigation/AppNavigatior';



export default function App() {


  return (
    <View style={styles.container}>
      <AppNavigatior />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : 50
  },
});
