/**
 * Created by lmy2534290808 on 2017/8/12.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import IconTabBar from '../public/IconTabBar';
import ProductControl from "../productcontrol/ProductControl";
import ProductList from "../productslist/ProductList";
import PersonalCenter from "../personalcenter/PersonalCenter";
export default class MainScreen extends Component {
    constructor() {
        super();
        this.state = {
            tabNames: ['控制中心', '产品中心', '个人中心'],
            tabIconNames: ['ios-home-outline', 'ios-basket-outline', 'ios-person-outline'],
            activeTabIconNames: ['ios-home', 'ios-basket', 'ios-person'],
            showEntrance: true
        };
    }

    render() {
        return (
            <ScrollableTabView renderTabBar={() => <IconTabBar activeTabColor='#FFCC03' tabNames={this.state.tabNames}
                                                               tabIconNames={this.state.tabIconNames}
                                                               activeTabIconNames={this.state.activeTabIconNames}/>}
                               tabBarPosition="bottom">
                <ProductControl tabLabel="ee0"/>
                <ProductList tabLabel="ee1"/>
                <PersonalCenter tabLabel="ee2"/>
            </ScrollableTabView>)
    }
}