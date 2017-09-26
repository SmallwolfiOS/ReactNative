/**
 * Created by mahaiping on 16/7/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    PixelRatio,
    Picker,
    ProgressViewIOS,
} from 'react-native';

class Helloworld extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            language:null,
            progress:0,
        };
      }
    getProgress(offset) {
        var progress = this.state.progress + offset;
        return offset % 100;
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Picker组件</Text>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={lang => this.setState({language:lang})}
                    mode="dialog"
                    style={{backgroundColor:'#f00'}}>
                    <Picker.Item label='Java' value='java'/>
                    <Picker.Item label='JavaScript' value='js'/>
                    <Picker.Item label='C语言' value='c'/>
                    <Picker.Item label='PHP开发' value='php'/>

                </Picker>
                <Text>{this.state.language}</Text>
                <ProgressViewIOS style={styles.progressView} progress={this.getProgress(0.5)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:45,
    },
})

AppRegistry.registerComponent('Helloworld', () => Helloworld);