import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{this.props.name}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header:{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#6b52ae',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        flex: 1,
        top: 40,
        fontSize: 20,
        color: 'white',
    }
});
