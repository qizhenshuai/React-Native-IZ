/*
 *
 *       我的收藏
 *
 * */
'use strict';
import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  InteractionManager,
} from 'react-native';
import NavigatorView from '../../component/NavigatorBar';
class Collection extends Component{



  leftOnPress = () =>{
    const {navigator} = this.props;
    InteractionManager.runAfterInteractions(()=>{
      if(navigator){
        navigator.pop()
      }
    })
  };

  render(){
    return(
      <View style={styles.allViewStyle}>
        <NavigatorView
          title = '我的收藏'
          leftOnPress = {()=>this.leftOnPress()}
          leftImageSource = {true}
        />
        <View style={styles.contextStyle}>
          <Text>我的收藏</Text>
        </View>
      </View>

    )
  }

};

const styles = StyleSheet.create({
  allViewStyle:{
    flex:1,

  },
  contextStyle:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
});


export default Collection;