/**
 * Created by mahaiping on 16/7/20.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    PixelRatio,
} from 'react-native';

var imgs = [
    'https://www.baidu.com/img/bd_logo1.png',
    'data:image/png;base64,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'
];
class Helloworld extends Component {
    render (){
        return (
            <View style={[styles.flex,{marginTop:45}]}>
                <MyImage imgs = {imgs}></MyImage>
            </View>
        );
    }
}
class MyImage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            count:0,
            imgs:this.props.imgs,
        };
      }
    render() {
        return (
            <View style={[styles.flex,{alignItems: 'center'}]}>
                <View style={styles.image}>
                    <Image style={styles.img}
                    resizeMode="contain"
                    source={{uri:this.state.imgs[this.state.count]}}/>
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={this.goPreView.bind(this)}>
                        <View style={styles.btn}>
                            <Text>上一张</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.goNext.bind(this)}>
                        <View style={styles.btn}>
                            <Text>下一张</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
    goPreView(){
        var count = this.state.count;
        count--;
            if(count >= 0){
                this.setState({
                count:count,
                });
            }
    }
    goNext(){
        var count = this.state.count;
        count ++;
        if (count < this.state.imgs.length){
            this.setState({
                count:count,
            });
        }
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    image:{
        borderWidth:0.5,
        borderColor:'gray',
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',

    },
    img:{
        width:200,
        height:150,
    },
    btns:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'center',
    },
    btn:{
        width:60,
        height:30,
        borderColor:'#0089ff',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3,
        marginRight:20,
    },
});

AppRegistry.registerComponent('Helloworld', () => Helloworld);
