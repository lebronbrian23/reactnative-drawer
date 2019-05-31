import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from "../components/MenuButton";
import Header from "../navigation/Header";

export default class LinksScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header name='Links'/>
        <MenuButton navigation={this.props.navigation}/>
        <Text style={styles.text}>Links
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