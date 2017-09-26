/**
 * Created by mahaiping on 2016/11/29.
 */

import React, {Component} from  'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    RefreshControl,
    Dimensions,
    Image,
    WebView,
} from  'react-native';
import Htmltext from './HtmlText'

// <WebView
// style={styles.webView}
//
// source={{uri:'https://github.com/SFantasy'}}
// ></WebView>

// <HtmlText style={styles.webView} html={this.state.html}></HtmlText>
class Helloworld extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            html:'<p>&nbsp;&nbsp;吃吃吃哈哈哈乐乐乐去去去啪啪啪行行行啧啧啧</p><p>&nbsp;&nbsp;呜呜呜嗯嗯嗯<h1>日日日</h1></p><br/>啊啊大飞机楼上的房间了吉林省',
        };
    }

    componentDidMount() {
        alert('hahaha');

    }
    
    render(){
        return(
            <View style={styles.container}>
                <Image style={{height:100,width:100}}
                    source={{uri:'http://10.2.20.66:8080/testServer/LoadImageServlet'}}
                ></Image>
                 <WebView
                 style={styles.webView}

                 source={ {headers: 'sssss22222', body: this.state.html}, {html: this.state.html}}
                 ></WebView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
    },
    webView: {
        height: 500,
        width:200,
        backgroundColor: 'white',
    },

})

AppRegistry.registerComponent('Helloworld',()=>Helloworld);
