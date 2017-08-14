/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,ToastAndroid
} from 'react-native';
import FontMatrix from './FontMatrix';
import {Button,Header} from 'react-native-elements';
import App from './view/App';
export default class fontmatrix extends Component {
  render() {
    return (
      <App/>
    );
  }
}
AppRegistry.registerComponent('fontmatrix', () => fontmatrix);
