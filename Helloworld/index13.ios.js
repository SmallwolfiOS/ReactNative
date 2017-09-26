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
} from  'react-native';



var section ={};

var dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});

class Helloworld extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: dataSource,
            isRefreshing: false,
        };
      }

    componentDidMount() {
    }
    getLocalData(){
        for (var i = 0; i < 2 ;i++){
            var row = [];
            for (var j= 0; j<5; j++){
                row.push(j);
            }
            section['section' + i] = row;
            // console.log(section[i]);
        }
        // section = {a:['q','w'],b:['q','w'],c:['q','w'],d:['q','w']};
        // delete section.section1;


        // var nn = {a:'name',b:'bbb'};
        // delete nn.a;
        // var {x:y = 3} = {};
        // var {x:y = 3} = {x: 5};


        // this.setState({
        //     dataSource: dataSource.cloneWithRowsAndSections(section),
        // });
        return section;

    }
    renderRow  (sectionID,rowData,rowID) {
        return (
            <Text>{'   ' + rowData    + rowID + '   ' +  sectionID }</Text>
        )
    }
    renderSectionHeader (sectionData,sectionID){
        return (
            <View style={{borderColor:'red',borderWidth:1}}>
                <Text style={{fontWeight: "700",fontSize:20}}>{sectionID  }</Text>
            </View>
        )
    }
    _onRefresh(){
        alert("111");
        // this.setState({isRefreshing: true});

    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}
                                  onPress={this.getLocalData.bind(this)}
                >
                    <Text>获取数据源</Text>
                </TouchableOpacity>

                <ListView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            tintColor="#ff0000"
                            title="Loading..."
                            titleColor="#00ff00"
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"
                        />
                    }
                    dataSource={this.state.dataSource.cloneWithRowsAndSections(this.getLocalData())}
                    renderRow={(sectionID,rowData,rowID) => this.renderRow(sectionID,rowData,rowID)}
                    renderSectionHeader={(sectionData,sectionID) => this.renderSectionHeader(sectionData,sectionID)}

                />

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
    button :{
        marginTop:40,
        height:40,
        width:80,
        backgroundColor:'red',
    },
})

AppRegistry.registerComponent('Helloworld',()=>Helloworld);
