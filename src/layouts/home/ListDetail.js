/**
 *    ListView的Item的详情界面
 *
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
class ListDetail extends Component{



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
          title = {this.props.title}
          leftOnPress = {()=>this.leftOnPress()}
          leftImageSource = {true}
        />
        <View style={styles.contextStyle}>
          <Text>我的{this.props.title}</Text>
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


export default ListDetail;


