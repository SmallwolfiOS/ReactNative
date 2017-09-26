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
    ListView,
    TouchableOpacity,
    PixelRatio,
} from 'react-native';

import RefreshableListView from 'react-native-refreshable-listview';
var ArticleStore = require('../stores/ArticleStore')
var StoreWatchMixin = require('./StoreWatchMixin')
var ArticleView = require('./ArticleView')

class Helloworld extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2',]),
        };
    }

    render (){
        return (
        <RefreshableListView
            renderRow={(rowData) => <Text style={ {height :40}}>{rowData}</Text>}
            refreshDescription="Refreshing articles"
        />

        );
    }
}


const styles = StyleSheet.create({
    flex:{
        flex:1
    },

});

AppRegistry.registerComponent('Helloworld', () => Helloworld);