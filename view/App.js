/**
 * Created by lmy2534290808 on 2017/8/11.
 */
import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import PersonalCenter from './personalcenter/PersonalCenter';
import ProductList from './productslist/ProductList';
import ProductControl from "./productcontrol/ProductControl";
import MainScreen from './public/MainScreen';
export default class App extends Component{
  render(){
  return(<MainScreen/>)
  }
}