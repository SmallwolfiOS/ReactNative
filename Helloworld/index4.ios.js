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
    TouchableOpacity,
    PixelRatio,
    Navigator,
} from 'react-native';

class Helloworld extends Component {

    render() {
        let defaultName = 'FirstPage';
        let defaultComponent = FirstPage;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }} />
        );
    }
}
class FirstPage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            author:'mahaiping',
        };
      }
    _pressButton() {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPage',
                component: SecondPage,
                params:{
                    author:this.state.author,
                }
            })
        }
    }
    render() {
        return (
            <View style={[styles.flex,styles.container]}>
                <TouchableOpacity style={[styles.container,styles.button]}
                                    onPress={this._pressButton.bind(this)}>
                    <Text style={styles.textStyle}
                        numberOfLines={1}
                    >点击我跳转下一页</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
class SecondPage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    componentDidMount() {
        this.setState({
            author:this.props.author,
        });
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
            <View style={[styles.flex,styles.container]}>
                <TouchableOpacity style={[styles.container,styles.button]}
                                  onPress={this._pressButton.bind(this)}>
                    <Text style={styles.textStyle}
                          numberOfLines={1}
                    >{this.state.author} </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
        backgroundColor:'green',
    },
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
    textStyle:{
        fontSize:17,
        fontWeight:'bold',
        color:'white',
    },
    button:{
        backgroundColor:'red',
        borderRadius:20,
        width:150,
        height:40,
    },
});

AppRegistry.registerComponent('Helloworld', () => Helloworld);
