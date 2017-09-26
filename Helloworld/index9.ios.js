/**
 * Created by mahaiping on 16/8/3.
 */
import React ,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    Image,
    ListView,
}from 'react-native';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class Helloworld extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            a:1,
        };
        ds = ds.cloneWithRows(['row 1', 'row 2']);
      }

    action(){
        console.log(1)
        ds = ds.cloneWithRows([123,213,12,321,321,31,23,21,321,3213])
        this.setState({

        });
    }
    render(){

        return(
            <View style={styles.container}>
                <TouchableOpacity style = {styles.buttonStyle} onPress={this.action.bind(this)}></TouchableOpacity>
                <ListView contentContainerStyle={styles.row}
                    dataSource={ds}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'red',
        alignItems:'center',
    },
    buttonStyle:{
        backgroundColor:'green',
        borderRadius:20,
        width:80,
        height:40,
        marginTop:100,

    },
    avatar:{
        flex:1,
        width:375,
    },
    row:{
        marginTop:5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
})





AppRegistry.registerComponent('Helloworld',()=>Helloworld);
