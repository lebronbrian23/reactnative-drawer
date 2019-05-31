import React from 'react';
import { StyleSheet, Text, View ,Dimensions , Image , TouchableOpacity  , ScrollView} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class MenuDrawer extends React.Component{
    navLink(nav , text){
        return(
            <TouchableOpacity style={{ height:50 }} onPress={()=> this.props.navigation.navigate(nav) }>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        return(
            <View style={styles.container}>
                    <View style={styles.topLinks}>
                        <View style={styles.profile}>
                            <View style={styles.imgView}>
                                <Image style={styles.img} source={ require('../assets/profile.jpeg')}/>
                            </View>
                            <View style={styles.profileText}>
                                <Text style={styles.name}>Lebron Brian</Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView>
                        <View  style={styles.bottomLinks}>
                            {this.navLink('Home' , 'Home')}
                            {this.navLink('Links' , 'Links')}
                            {this.navLink('Settings' ,'Settings')}
                        </View>
                    </ScrollView>

                    <View style={styles.footer}>
                        <Text style={styles.help}>Help</Text>
                        <Text style={styles.logout}>Logout</Text>
                    </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'lightgray'
    },
    imgView:{
        flex: 3,
        paddingRight: 20,
        paddingLeft: 20
    },
    img:{
        height: 100,
        width: 100,
        borderRadius: 50
    },
    profile:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#777777'
    },
    profileText:{
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    name:{
      fontSize: 20,
      paddingBottom: 5,
      color: '#ffffff',
      textAlign: 'left'
    },
    topLinks:{
        height: 160,
        backgroundColor: '#6b52ae'
    },
    bottomLinks:{
        flex:1,
        backgroundColor: '#ffffff',
        paddingTop: 5,
        paddingBottom: 450
    },
    link:{
        flex: 1,
        fontSize: 14,
        padding: 6,
        paddingLeft: 14,
        margin: 6,
        textAlign: 'left'
    },
    footer:{
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: 'lightgrey',
    },
    logout:{
        flex:1,
        textAlign: 'right',
        marginLeft: 20,
        color:'grey',
        paddingRight: 14,
    },
    help:{
        flex:1,
        marginRight: 20,
        fontSize: 16,
        paddingLeft: 14,
    }

});
