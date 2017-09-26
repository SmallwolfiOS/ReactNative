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
}from 'react-native';

import ImagePicker from 'react-native-image-picker';

var options = {
    title: 'Select Avatar',
    /*customButtons: {
        'Choose Photo from Facebook': 'fb',
    },*/
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};


class Helloworld extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            avatarSource: null,
        };
      }

    imagePicker (){
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                // You can display the image using either data...
                const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

                // or a reference to the platform specific asset location
                if (Platform.OS === 'ios') {
                    const source = {uri: response.uri.replace('file://', ''), isStatic: true};
                } else {
                    const source = {uri: response.uri, isStatic: true};
                }

                this.setState({
                    avatarSource: source
                });
            }
        });
    }
    render(){

        return(
            <View style={styles.container}>
                <TouchableOpacity style = {styles.buttonStyle} onPress={this.imagePicker.bind(this)}></TouchableOpacity>
                { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
                    <Image style={styles.avatar} source={this.state.avatarSource} />
                }
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
})





AppRegistry.registerComponent('Helloworld',()=>Helloworld);
