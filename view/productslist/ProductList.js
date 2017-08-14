/**
 * Created by lmy2534290808 on 2017/8/12.
 */
import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import ProductButtons from './ProductButtons';
import ProductHeader from "./ProductHeader";
export default class ProductList extends Component{
  render(){
      return(<View><ProductHeader/><ProductButtons/></View>)
  }
}