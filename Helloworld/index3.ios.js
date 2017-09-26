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
    TextInput,
    ScrollView,
} from 'react-native';

var onePT=1/PixelRatio.get();
class Helloworld extends Component {

    render() {
        return (
            <View style={[styles.flex ,styles.topStatus]}>
                <Search></Search>
            </View>
        );
    }
}
class Search extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            show:false,
            value:null,
        };
      }
      hide(val) {
          this.setState({
              show: false,
              value: val,
          });
      }
      getValue(text){
          this.setState({
              show:true,
              value:text,
          });
      }


    render() {
        return (
            <View style={[styles.flex,]}>
                <View style={styles.flexDirection}>
                    <View style={[styles.flex,styles.input]}>
                        <TextInput keyboardType="web-search"
                                   placeholder="请输入关键词"
                                   style={{backgroundColor:'green',flex:1}}
                                   value={this.state.value}
                                   onChangeText={this.getValue.bind(this)} />
                    </View>

                    <View style={styles.btn}>
                        <Text style={styles.search}
                        onPress={this.hide.bind(this,this.state.value)}
                        >搜索</Text>
                    </View>
                </View>
                {this.state.show?
                <View style={styles.resault}>
                    <Text onPress={this.hide.bind(this,this.state.value + '加我的QQ')}
                          style={styles.item} numberOfLines={1}> {this.state.value}加我的QQ</Text>
                    <Text onPress={this.hide.bind(this,this.state.value + '真的假的')}
                          style={styles.item} numberOfLines={1}> {this.state.value}真的假的</Text>
                    <Text onPress={this.hide.bind(this,this.state.value + '我擦擦擦擦')}
                          style={styles.item} numberOfLines={1}> {this.state.value}我擦擦擦擦</Text>
                    <Text onPress={this.hide.bind(this,this.state.value + '哈哈哈哈哈')}
                          style={styles.item} numberOfLines={1}> {this.state.value}哈哈哈哈哈</Text>
                    <Text onPress={this.hide.bind(this,this.state.value + '这你都信,真是')}
                          style={styles.item} numberOfLines={1}> {this.state.value}这你都信</Text>
                    <Text onPress={this.hide.bind(this,this.state.value + '你才对了这是真的')}
                          style={styles.item} numberOfLines={1}> {this.state.value}你才对了这是真的</Text>
                    <Text onPress={this.hide.bind(this,this.state.value + '终于写到这里了')}
                          style={styles.item} numberOfLines={1}> {this.state.value}终于写到这里了</Text>
                </View>
                    :null
                }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    topStatus:{
        marginTop:25,
    },
    flexDirection:{
        flexDirection:'row',
    },
    input:{
        height:45,
        borderColor:'red',
        borderWidth:0.5,
        marginLeft:10,
        borderRadius:5,
        paddingLeft:10,

    },
    btn:{
        width:45,
        height:45,
        marginLeft:-5,
        marginRight:5,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        borderBottomRightRadius:5,
        borderTopRightRadius:5,

    },
    search:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
    },
    resault:{
        marginTop:onePT,
        marginLeft:18,
        marginRight:5,
        height:200,
    },
    item:{
        fontSize:16,
        paddingTop:5,
        paddingBottom:10,
    },
});

AppRegistry.registerComponent('Helloworld', () => Helloworld);
