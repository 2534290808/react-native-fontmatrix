/**
 * Created by lmy2534290808 on 2017/8/12.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text,ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {Grid, Col, Row} from 'react-native-easy-grid';
import ProductButton from './ProductButton';
import Util from '../Util';
import {} from 'react-native-elements';
export default class ProductButtons extends Component {
    render() {
        return (<ScrollView showsVerticalScrollIndicator={false}><View style={styles.gridStyle}><Grid><Row><Col><ProductButton name='rowing'/></Col><Col><ProductButton
            name='rowing'/></Col><Col><ProductButton name='rowing'/></Col></Row>
            <Row><Col><ProductButton name='rowing'/></Col><Col><ProductButton
                name='rowing'/></Col><Col><ProductButton name='rowing'/></Col></Row>
            <Row><Col><ProductButton name='rowing'/></Col><Col><ProductButton
                name='rowing'/></Col><Col><ProductButton name='rowing'/></Col></Row>
            <Row><Col><ProductButton name='rowing'/></Col><Col><ProductButton
                name='rowing'/></Col><Col><ProductButton name='rowing'/></Col></Row>
        </Grid></View></ScrollView>)
    }
}
const styles=StyleSheet.create({
    gridStyle:{
        height:Util.size.width/3*4,
        backgroundColor:'#fff'
    },
})