/**
 * Created by lmy2534290808 on 2017/8/12.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback} from 'react-native';
import PropTypes from 'prop-types';
import {Icon} from 'react-native-elements';
import Util from '../Util';
export default class ProductButton extends Component {
    static propTypes = {
        name: PropTypes.string,
        type: PropTypes.string
    }

    render() {
        return (<TouchableNativeFeedback><View style={styles.productButton}><Icon name={this.props.name}
                                                                                  type={this.props.type}
                                                                                  color="#ffcc03" size={40}/>
            <Text style={styles.productButtonText}>风扇</Text></View></TouchableNativeFeedback>)
    }
}
const styles = StyleSheet.create({
    productButton: {
        height: Util.size.width / 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'#cccccc',
        borderWidth:Util.pixel
    },
    productButtonText:{
        marginTop:5
    }
})