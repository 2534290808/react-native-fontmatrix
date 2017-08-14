/**
 * Created by lmy2534290808 on 2017/8/11.
 * 个人中心的圆形按钮
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {Avatar} from 'react-native-elements';
import {Grid, Col} from 'react-native-easy-grid';
import Util from '../Util';
import CircleButton from '../public/CircleButton';
export default class PersonCircleButtons extends Component {
    render() {
        return (<View style={styles.circleButtons}><Grid>
            <Grid>
                <Col/>
                <Col><View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><CircleButton
                    icon={{name: 'email'}} text='消息' onPress={()=>{alert("dd")}}/></View></Col>
                <Col><View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><CircleButton
                    icon={{name: 'md-text', type: 'ionicon'}} text='反馈'/></View></Col>
                <Col/>
            </Grid>
        </Grid></View>)
    }
}
const styles=StyleSheet.create({
    circleButtons:{
        height:80,
        backgroundColor:'#ffffff',
        borderWidth:Util.pixel,
        borderColor:'#cccccc'
    }
})