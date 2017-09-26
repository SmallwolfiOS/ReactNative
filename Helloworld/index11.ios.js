/**
 * Created by mahaiping on 2016/10/18.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    PixelRatio,
} from 'react-native';

class Helloworld extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            status:1,
        };
    }

    componentDidMount() {
        fetch('http://60.205.112.153:9805/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                "userName":"12121",
                "password":"12121",
                "phone":"212",
            })




        }).then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
            })
            .catch((error) => {
                console.log(error);
                callback(error);

            })
    }


    render() {
        return (
            <View style={styles.flex}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:200,
        marginLeft:5,
        marginRight:5,
        borderRadius:5,
        height:84,
        padding:2,
        flexDirection:'row',
        backgroundColor: '#FF0067',
    },
    item: {
        flex:1,
        height:80,
    },


});

AppRegistry.registerComponent('Helloworld', () => Helloworld);
