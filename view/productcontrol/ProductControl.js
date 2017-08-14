/**
 * Created by lmy2534290808 on 2017/8/12.
 */
import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import ProductControlList from "./ProductControlList";
import ProductControlHeader from "./ProductControlHeader";
import Util from '../Util';
export default class ProductControl extends Component{
  render(){
  return(<View style={{height:Util.size.height-112}}><ProductControlHeader/><ProductControlList/></View>)
  }
}