/**
 *
 *      更多 -- 下面的item界面
 *
 * */
'use strict';
import React, { PropTypes } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
const {width} = Dimensions.get('window');
const propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
};

const MoreItem = ({ onPress,itemName,rightText}) => (

    <TouchableOpacity
        style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:50}}
        onPress={onPress}
    >
        <View>
            <Text style={{fontSize:16,marginLeft:10}}>{itemName}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:18}}>{rightText}</Text>
            <Image source={require('../../images/ic_next.png')} style={{width:30,height:30,marginRight:10}} />

        </View>


    </TouchableOpacity>


);


MoreItem.propTypes = propTypes;

MoreItem.defaultProps = {
    onPress() {},
    rightText : null
};

export default MoreItem;




