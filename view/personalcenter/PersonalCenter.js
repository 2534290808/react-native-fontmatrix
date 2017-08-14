/**
 * Created by lmy2534290808 on 2017/8/11.
 * 个人中心页面
 */
import React,{Component} from 'react';
import {StyleSheet,View,Text,StatusBar,ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import PersonHeader from './PersonHeader';
import PersonImage from './PersonImage';
import PersonCircleButtons from './PersonCircleButtons';
import PersonList from './PersonList';
export default class PersonalCenter extends Component{
  render(){
      return(<View>
          <StatusBar backgroundColor="#FFCC03"/>
          <PersonImage/>
          <PersonCircleButtons/>
          <PersonList/>
          </View>
      )
  }
}