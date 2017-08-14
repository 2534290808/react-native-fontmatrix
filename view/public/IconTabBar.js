/**
 * Created by lmy2534290808 on 2017/8/1.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../Util';
export default class IconTabBar extends Component {
    static propTypes = {
        //--必须的属性
        goToPage: PropTypes.func,//跳转到对应的tab方法
        activeTab: PropTypes.number,//当前被选中的tab下标
        tabs: PropTypes.array,//所有的tab集合
        //--自定义属性
        tabNames: PropTypes.array,//保存的tab名称
        tabIconNames: PropTypes.array,//保存的tab图标
        activeTabIconNames: PropTypes.array,//选择的tab图标
        tabColor: PropTypes.string,//tab的颜色
        activeTabColor: PropTypes.string//选择的tab颜色
    }
    static defaultProps = {
        tabColor: '#5a5f6a',
        activeTabColor: '#ff9933'
    }

    setAnimationValue(value) {
    }

    componentDidMount() {
        // Animated.Value监听范围 [0, tab数量-1]
        this.props.scrollValue.addListener(this.setAnimationValue);
    }

    renderTabOption(tab, i) {
        let activeColor = this.props.activeTab === i ? this.props.activeTabColor : this.props.tabColor;// 判断i是否是当前选中的tab，设置不同的颜色
        return (<TouchableOpacity onPress={() => this.props.goToPage(i)} style={styles.tab} key={i}>
            <View style={styles.tabItem}>
                <Icon
                    name={this.props.activeTab === i && this.props.activeTabIconNames ? this.props.activeTabIconNames[i] : this.props.tabIconNames[i]}
                    size={25} style={{color: activeColor}}/>
                <Text style={{color: activeColor}}>{this.props.tabNames[i]}</Text>
            </View>
        </TouchableOpacity>)
    }

    render() {
        return (<View style={styles.tabs}>{this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}</View>)
    }
}
const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        borderTopWidth: Util.pixel,
        borderTopColor: '#CCCCCC',
        paddingTop: 5,
        paddingBottom: 2,
        backgroundColor:"#fff"
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabItem: {
        alignItems: 'center'
    }
})