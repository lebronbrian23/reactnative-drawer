import React from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';

import MenuButton from "../components/MenuButton";
import Header from "../navigation/Header";

export default class SettingsScreen extends React.Component {

  render() {
    return (
    <View>
        <Header name='Settings'/>
        <MenuButton navigation={this.props.navigation}/>
        <View style={styles.container}><Text style={styles.text}>Settings</Text></View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    fontSize: 35
  }
});
