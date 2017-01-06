/**
 *
 *      封装的navigatorBar
 *
 *          参数说明:
 *          leftContext             --->            navigator左侧的文字
 *          leftImageSource         --->            navigator左侧的图片
 *          title                   --->            navigator的标题
 *          rightContext            --->            navigator右侧的文字
 *          rightImageSource        --->            navigator右侧的图片
 *          leftOnPress             --->            navigator左侧的点击事件
 *          rightOnPress            --->            navigator右侧的点击事件
 *
 * */
'use strict';
import React,{PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    InteractionManager,
    Platform,
} from 'react-native';
const {width, height} = Dimensions.get('window');
const propTypes = {
    leftContext: PropTypes.string,
    leftImageSource:PropTypes.number,
    title:PropTypes.string,
    rightContext: PropTypes.string,
    rightImageSource:PropTypes.number,
    leftOnPress:PropTypes.func,
    rightOnPress:PropTypes.func,
};
const NavigatorBar = ({leftContext,leftImageSource,title,rightContext,rightImageSource, leftOnPress,rightOnPress})=>(
    <View style={styles.navigatorStyle}>
        {/*状态栏*/}
        <View style={styles.statusBarStyle}/>
        {/*导航栏*/}
        <View style={styles.navigatorBarStyle}>
            {/*左侧按钮区域*/}
            <View style={styles.itemViewStyle}>
                <TouchableOpacity activeOpacity={0.5} onPress={leftOnPress} style={styles.leftItemViewStyle}>
                    {
                        leftImageSource ? <Image source={require('../images/ic_back.png')} style={styles.imgStyle}/> : null
                    }
                    {
                        leftContext !=='' ? <Text style={[styles.subTitleStyle,{marginLeft:0}]}>{leftContext}</Text> : null
                    }
                </TouchableOpacity>
            </View>
            {/*中间标题区域*/}
            <View style={[styles.itemViewStyle,styles.middleItemViewStyle]}>
                <Text style={styles.itemTitleTextStyle}>{title}</Text>
            </View>
            {/*右侧按钮区域*/}
            <View style={styles.itemViewStyle}>
                <TouchableOpacity activeOpacity={0.5} onPress={rightOnPress} style={styles.rightItemViewStyle}>
                    {
                        rightContext !=='' ? <Text style={[styles.subTitleStyle,{marginRight:0}]}>{rightContext}</Text> : null
                    }
                    {
                        rightImageSource !=='' ? <Image source={rightImageSource} style={styles.imgStyle}/> : null
                    }
                </TouchableOpacity>
            </View>
        </View>
    </View>
);


NavigatorBar.prototype = propTypes;
NavigatorBar.defaultProps = {
    leftOnPress(){},
    rightOnPress(){},
    leftImageSource:false,
};
const styles = StyleSheet.create({
    navigatorStyle:{
        width:width,
        height:Platform == 'ios'?64:66,
        backgroundColor:'#ffffff',

    },

    //状态栏
    statusBarStyle:{
        width:width,
        height:Platform == 'ios'?20:22,
    },
    //导航栏
    navigatorBarStyle:{
        width:width,
        height:Platform == 'ios'?44:46,
        flexDirection:'row',
        alignItems:'center',
    },

    //item公共样式
    itemViewStyle:{
        flex:1,
    },
    //左侧item样式
    leftItemViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:5,
    },
    //中间标题区域样式
    middleItemViewStyle:{
        justifyContent:'center',
        alignItems:'center',
    },
    //右侧item样式
    rightItemViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        paddingRight:15,
        justifyContent:'flex-end',
    },

    imgStyle:{
        width:22,
        height:22,

    },

    subTitleStyle:{
        fontSize:14,
        color:'#4d4d4d'
    },

    itemTitleTextStyle:{
        fontSize:18,
        color:'#333333'
    }

});

export default NavigatorBar;

