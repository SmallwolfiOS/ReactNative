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
    Navigator,
    TouchableOpacity,
} from 'react-native';

const Header= require('./header');

class Helloworld extends Component {
    render() {
        let defaultName = 'firstPage';
        let defaultComponent = firstPage;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }} />
        );
    }
}
class firstPage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    _pressButton() {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'secondPage',
                component: secondPage,
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header></Header>
                <List title="大家阿莱克斯大连市看得见啦"></List>
                <List title="大家阿莱克斯大连市看得见啦"></List>
                <List title="大家阿莱克斯大连市看得见啦"></List>
                <List title="大家阿莱克斯大连市看得见啦"></List>
                <Text style={{fontSize:20, color:'red'}}
                      onPress={this._pressButton.bind(this)}
                >点我Push</Text>
            </View>
        );
    }
}
class secondPage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header></Header>
                <List title="大家阿莱克斯大连市看得见啦"></List>
                <Text style={{fontSize:20, color:'red',}}
                      onPress={this._pressButton.bind(this)}
                >点我Pop</Text>
            </View>
        );
    }
}
class List extends Component {
    render() {
        return (
            <View style={styles.list_style}>
                <Text style={styles.fontSize}>{this.props.title}</Text>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
    },
    list_style:{
        height:40,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        justifyContent:'center',
    },
    fontSize:{
        fontSize:16,
    },


});

AppRegistry.registerComponent('Helloworld', () => Helloworld);
