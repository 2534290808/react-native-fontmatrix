/**
 * Created by lmy2534290808 on 2017/8/11.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text,TouchableNativeFeedback} from 'react-native';
import PropTypes from 'prop-types';
import {Avatar} from 'react-native-elements';
import Svg ,{Ellipse} from 'react-native-svg';
import Util from '../Util';
export default class PersonImage extends Component {
    render() {
        return (<View style={{justifyContent: 'center', alignItems: 'center',backgroundColor:'#FFCC03'}}><Avatar
            large
            rounded
            icon={{name: 'person'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            overlayContainerStyle={{backgroundColor: 'black'}}
            containerStyle={{marginTop: 30}}
        />
            <Text style={{marginTop: 5,marginBottom:15,color:'#ffffff'}}>用户名</Text>
            <Svg
                height="25"
                width={Util.size.width+""}
            >
                <Ellipse
                    cx={Util.size.width/2+""}
                    cy="55"
                    rx={Util.size.width/1.5+""}
                    ry="47"
                    stroke="none"
                    strokeWidth="0"
                    fill="white"
                />
            </Svg>
        </View>)
    }
}