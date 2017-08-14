/**
 * Created by lmy2534290808 on 2017/8/12.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import Util from '../Util';
import {Icon, Avatar} from 'react-native-elements';
export default class ProductControlList extends Component {
    render() {
        let controlList = null;
        return (<View style={styles.controlList}>{!controlList ?
            <View style={styles.controlList}><Icon name="ios-game-controller-a-outline" type="ionicon" color="#ffcc03"
                                                   size={70}/><Avatar containerStyle={{marginTop:50}} onPress={()=>{}} large
                                                                      icon={{name: 'ios-add-outline', type: 'ionicon'}}
                                                                      rounded={true}
                                                                      overlayContainerStyle={{backgroundColor: '#ffcc03'}}/><Text>添加控制器</Text></View> : null}</View>)
    }
}
const styles = StyleSheet.create({
    controlList: {
        justifyContent: 'center',
        alignItems: 'center',
        height:Util.size.height-112,
        backgroundColor:'#fff'
    }
})