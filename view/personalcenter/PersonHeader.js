/**
 * Created by lmy2534290808 on 2017/8/11.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {Header} from 'react-native-elements';
export default class PersonHeader extends Component {
    render() {
        return (<View style={{height:56}}><Header statusBarProps={{backgroundColor: "#FFCC03"}}
                              centerComponent={{text: '个人中心', style: {color: '#fff', fontSize: 20}}}
                              backgroundColor="#FFCC03"
                              outerContainerStyles={{height: 56}}/></View>)
    }
}