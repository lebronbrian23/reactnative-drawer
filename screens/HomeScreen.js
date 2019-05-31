import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';

import MenuButton from '../components/MenuButton'
import Header from "../navigation/Header";

export default class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Header name='Home'/>
        <MenuButton  navigation={this.props.navigation}/>
        <Text style={styles.text}>Home
		</Text>
      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#6b52ae',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
    flex: 1,
    top: 40,
    fontSize: 25,
    color: 'white',
  },
  text:{
    fontSize: 35
  }
});
