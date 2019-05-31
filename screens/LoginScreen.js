import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../components/MenuButton'
import Header from "./HomeScreen";
export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header name='Login'/>
        <Text style={styles.text}>Login
		</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 35
  }
});
