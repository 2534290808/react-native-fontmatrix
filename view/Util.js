/**
 * Created by lmy2534290808 on 2017/7/26.
 */
import React from 'react';
import {PixelRatio, Dimensions} from 'react-native';
const Util = {
    ratio: PixelRatio.get(),
    pixel: 1 / PixelRatio.get(),
    size: {
        width: Dimensions.get('window').width,//得到屏幕的宽度
        height: Dimensions.get('window').height//得到屏幕的高度
    },
    post(url, data, onSuccess, onError){
        let fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch(url, fetchOptions).then((response) => response.json()).then(
            (responseJson) => {
                onSuccess(responseJson)
            }
        ).catch((e) => {
            onError(e)
        })
    },
    key: 'BDKHFSDKJFHSDKFHWEFH-REACT-NATIVE'
}
export default Util;