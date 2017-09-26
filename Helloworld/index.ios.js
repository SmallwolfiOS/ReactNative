/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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
  customHandle =() =>{
      alert('你按下了按钮,当前的状态是' + this.state.status);
  };
  customPressHandle () {
    alert(222)
  }
  render() {
    return (
    <View style={styles.flex}>
      <View style={styles.container}>
        <View style={[styles.item,styles.center]}>
            <Text style={styles.font}>酒店</Text>
        </View>

        <View style={[styles.item,styles.lineLeftRight]}>
            <View style={[styles.flex,styles.center,styles.lineCenter,]}>
                <Text style={styles.font}>海外酒店</Text>
            </View>
            <View style={[styles.flex,styles.center]}>
                <Text style={styles.font}>特惠酒店</Text>
            </View>
        </View>

        <View style={[styles.item]}>
            <View style={[styles.flex,styles.center,styles.lineCenter]}>
                <Text style={styles.font}>团购</Text>
            </View>
            <View style={[styles.flex,styles.center]}>
                <Text style={styles.font}>客栈,公寓</Text>
            </View>
        </View>
        {/*<TouchableHighlight
            style={styles.buttonStyle}
            onPress={
              //()=> {{alert(1)}}
              this.customHandle
            }>
          <Text style={styles.textStyle}>按钮</Text>
        </TouchableHighlight>*/}
      </View>
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
    center: {
        justifyContent:'center',
        alignItems:'center',
    },
    flex:{
        flex:1,
    },
    font:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
    },
    lineLeftRight:{
        borderRightWidth:1/PixelRatio.get(),
        borderLeftWidth:1/PixelRatio.get(),
        borderColor:'#fff',
    },
    lineCenter:{
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:'#fff',
    },
});

AppRegistry.registerComponent('Helloworld', () => Helloworld);










































