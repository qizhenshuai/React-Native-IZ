/**
 *
 *      Created by ethan on 2017/1/6.
 *
 *      @首页
 *
 *
 *
 *
 */
'use strict';

import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  InteractionManager,
} from 'react-native'
import MoreItem from './MoreItem';
import NavigatorView from '../../component/NavigatorBar';
import Collection from './Collection';
import Feedback from './Feedback';
import Version from './Version';


const {width, height} = Dimensions.get('window')

class Index extends Component {

  static defaultProps = {}
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      isLoading: false,

    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true,

    })
  }

  pushToDetail = (value) =>{
    const {navigator} = this.props;
    if(value == '1'){
      InteractionManager.runAfterInteractions(()=>{
        if(navigator){
          navigator.push({
            component:Collection,
            title:'我的收藏'
          })
        }
      })
    }else if(value == '2'){
      InteractionManager.runAfterInteractions(()=>{
        if(navigator){
          navigator.push({
            component:Feedback,
            title:'意见反馈'
          })
        }
      })
    }else if(value == '3'){
      InteractionManager.runAfterInteractions(()=>{
        if(navigator){
          navigator.push({
            component:Version,
            title:'版本更新'
          })
        }
      })
    }else {
      InteractionManager.runAfterInteractions(()=>{

      })
    }
  };

  exitLogin = () =>{

    alert('我要退出登录。。。。')

  }


  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex:1}}>
          {/*导航条*/}
          <NavigatorView
            title = '我的'

          />
          <View style={{width:width,height:50,justifyContent:'center',alignItems:'flex-start',marginLeft:10}}>
            <Text>乔雪娇</Text>
          </View>
          <MoreItem  itemName="我的收藏" onPress={()=>this.pushToDetail(1)}/>
          <View style={styles.lineStyle}/>
          <MoreItem  itemName="意见反馈" onPress={()=>this.pushToDetail(2)}/>
          <View style={styles.lineStyle}/>
          <MoreItem  itemName="版本更新" onPress={()=>this.pushToDetail(3)}/>
          <View style={styles.lineStyle}/>
          <TouchableOpacity activeOpacity={1} onPress={()=>this.exitLogin()}>
            <View style={{width:width*0.9,height:50,marginLeft:width*0.05,justifyContent:'center',alignItems:'center',
            backgroundColor:'red',marginTop:10,borderRadius:5}}>
              <Text style={{color:'#ffffff'}}>退出登录</Text>
            </View>

          </TouchableOpacity>

        </View>
      )
    } else {
      return (
        <View style={styles.allViewStyle}>
          <Text>正在加载中......</Text>
        </View>
      )
    }

  }


}

const styles = StyleSheet.create({
  allViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lineStyle:{
    width:width,
    height:2,
    backgroundColor:'#e2e2e2'
  },
})

export default Index;
