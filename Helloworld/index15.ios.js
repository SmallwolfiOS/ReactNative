/**
 * Created by mahaiping on 2016/10/26.
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
} from  'react-native';

import ImageZoom from 'react-native-image-pan-zoom';

class Helloworld extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }

    componentDidMount() {
    }

    render(){
        return(
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={200}
                       imageHeight={200}>
                <Image style={{width:200, height:200}}
                       source={{uri:'http://v1.qzone.cc/avatar/201407/07/00/24/53b9782c444ca987.jpg!200x200.jpg'}}/>
            </ImageZoom>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
    },

})

AppRegistry.registerComponent('Helloworld',()=>Helloworld);
