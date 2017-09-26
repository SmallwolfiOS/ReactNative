/**
 * Created by mahaiping on 2016/10/21.
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


import Location from './location';


import Picker from 'react-native-picker';

class Helloworld extends Component{

    componentDidMount() {
        // alert(Location.shi(Location.sheng(0)));
        // alert(Location.shengArray(0));
    }
    _showPicker() {
        let data =  Location.shengArray(0);
        Picker.init({
            pickerData: data,
            selectedValue: ['北京市'],
            onPickerConfirm: data => {
                console.log('确认'+ data);
            },
            onPickerCancel: data => {
                console.log('取消'+ data);
            },
            onPickerSelect: data => {
                console.log('选择'+ data);
            }
        });
        Picker.show();
    }


    render(){
        return(
            <View style={styles.container}>
                <Text style={{marginTop:100,marginLeft:100}} onPress={this._showPicker.bind(this)}>显示Picker</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
    }
})

AppRegistry.registerComponent('Helloworld',()=>Helloworld);
