/**
 * Created by mahaiping on 2016/10/31.
 */
import React, {Component} from  'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
} from  'react-native';
import GridView from './gridView'

var arr = [];
class Helloworld extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态

          for (let i = 0 ;i < 5; i ++){
              arr.push(require('./head.jpg'));
          }
          alert(arr);
        this.state = {};
      }

    render(){
        return(
            <View style={styles.container}>
                <GridView
                    picCount = {5}
                    //uriArray = {arr}
                    withoutDelete = {false}
                />w
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        // alignItems:'center',
        // justifyContent:'center',
        // marginTop:20,
        flex:1,

    },

})

AppRegistry.registerComponent('Helloworld',()=>Helloworld);
