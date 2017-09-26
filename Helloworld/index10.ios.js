/**
 * Created by mahaiping on 16/8/4.
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
import { NativeModules } from 'react-native';
var CalendarManager = NativeModules.CalendarManager;


class CustomButton extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}
class Helloworld extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            events:'',
        };
      }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    封装iOS原生模块实例
                </Text>
                <CustomButton text="点击调用原生模块addEvent方法"
                              onPress={()=>
                                  CalendarManager.addEvent('生日聚会', '江苏南通 中天路')}
                />
                <CustomButton text="点击调用原生模块addEventMoreDate方法"
                              onPress={()=>CalendarManager.addEventMoreDate('生日聚会', '江苏南通 中天路',1463987752)}
                />
                <CustomButton text="调用原生模块addEventMoreDetails方法-传入字段格式"
                              onPress={()=>CalendarManager.addEventMoreDetails('生日聚会', {
                                  location:'江苏 南通市 中天路',
                                  time:1463987752,
                                  description:'请一定准时来哦~'
                              })}
                />
                <Text>
                    'Callback的返回数据为:'+{this.state.events}
                </Text>
                <CustomButton text="点击调用原生模块findEvents方法-Callback"
                              onPress={()=>CalendarManager.findEvents((error,events)=>{
                                      if(error){
                                          console.error(error);
                                      }else{
                                          this.setState({events:events,});
                                      }
                                  }
                              )}
                />
                <CustomButton text="点击调用原生模块findEventsPromise方法-Promise"
                              onPress={()=>CalendarManager.findEvents((error,events)=>{
                                      if(error){
                                          console.error(error);
                                      }else{
                                          this.setState({events:events,});
                                      }
                                  }
                              )}
                />
                <Text style={{marginLeft:5}}>
                    '静态数据为:'+{CalendarManager.firstDayOfTheWeek}
                    '静态数据为2:'+{CalendarManager.secondDayOfTheWeek}
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:40,
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
    },
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 10,
        borderWidth:1,
        borderColor: '#cdcdcd',
    },
})


AppRegistry.registerComponent('Helloworld',()=>Helloworld);