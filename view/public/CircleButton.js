/**
 * Created by lmy2534290808 on 2017/8/11.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback} from 'react-native';
import PropTypes from 'prop-types';
import {Avatar, Icon} from 'react-native-elements';
export default class CircleButton extends Component {
    static propTypes={
        icon:PropTypes.object,
        text:PropTypes.string,
        onPress:PropTypes.func
    }
    render() {
        return (<TouchableNativeFeedback onPress={() => {this.props.onPress()
        }}><View style={styles.circleButton}><Avatar
            small
            rounded
            icon={this.props.icon}
            onPress={() =>{this.props.onPress()}}
            activeOpacity={0.7}
            overlayContainerStyle={{backgroundColor:'#FFCC03'}}
        /><Text style={styles.circleButtonText}>{this.props.text}</Text></View></TouchableNativeFeedback>)
    }
}
const styles = StyleSheet.create({
    circleButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height:70,
        width:70
    },
    circleButtonText: {
        marginTop: 5
    }
})