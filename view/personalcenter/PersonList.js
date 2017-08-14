/**
 * Created by lmy2534290808 on 2017/8/11.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback} from 'react-native';
import PropTypes from 'prop-types';
import {List, ListItem} from 'react-native-elements';
import Util from '../Util';
export default class PersonList extends Component {
    render() {
        const list = [
            {
                title: 'Appointments',
                icon: 'av-timer'
            },
            {
                title: 'Trips',
                icon: 'flight-takeoff'
            }
        ]
        return (<List containerStyle={styles.list}>
            <ListItem title="个人资料" leftIcon={{name: 'ios-person', type: 'ionicon',color:'#ffcc03'}} containerStyle={styles.listItem}
                      underlayColor="#cccccc" onPress={() => {
            }}/>
            <ListItem title="使用帮助" leftIcon={{name: 'ios-help-circle', type: 'ionicon',color:'#ffcc03'}} containerStyle={styles.listItem}
                      underlayColor="#cccccc" onPress={() => {
            }}/>
            <ListItem title="设置" leftIcon={{name: 'ios-settings', type: 'ionicon',color:'#ffcc03'}} containerStyle={styles.listItem}
                      underlayColor="#cccccc" onPress={() => {
            }}/>
        </List>)
    }
}
const styles = StyleSheet.create({
    list: {
        marginTop: 10,
        borderTopWidth:Util.pixel ,
        borderBottomWidth: Util.pixel,
        borderBottomColor: '#cccccc'
    },
    listItem:{
        borderBottomWidth: Util.pixel,
        borderBottomColor: '#cccccc'
    }
})