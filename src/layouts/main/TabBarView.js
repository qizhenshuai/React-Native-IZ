/**
 *      @Ethan
 *
 *      底部TabBar界面
 *
 */
'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';


import Home from '../home';//首页
import Class from '../class';//宣传口径
import Mine from '../mine';//我的

class TabBarView extends Component {
  static defaultProps ={
    selected : '',
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:this.props.selected =='' ? 'home' : this.props.selected,
    };
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          title="首页"
          selected={this.state.selectedTab === 'home'}
          selectedTitleStyle={styles.selectedTextStyle}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image source={require("../../images/tabbar/ic_home.png")} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={require("../../images/tabbar/ic_home_selected.png")} style={styles.iconStyle}/>}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Home {...this.props}/>
        </TabNavigator.Item>

        <TabNavigator.Item
          title="宣传口径"
          selected={this.state.selectedTab === 'class'}
          selectedTitleStyle={styles.selectedTextStyle}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image source={require("../../images/tabbar/ic_class.png")} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={require("../../images/tabbar/ic_class_selected.png")} style={styles.iconStyle}/>}
          onPress={() => this.setState({ selectedTab: 'class' })}>
          <Class {...this.props}/>
        </TabNavigator.Item>

        <TabNavigator.Item
          title="个人中心"
          selected={this.state.selectedTab === 'mine'}
          selectedTitleStyle={styles.selectedTextStyle}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image source={require("../../images/tabbar/ic_me.png")} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={require("../../images/tabbar/ic_me_selected.png")} style={styles.iconStyle}/>}
          onPress={() => this.setState({ selectedTab: 'mine' })}>
          <Mine {...this.props}/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
const styles=StyleSheet.create({
  iconStyle:{
    width:30,
    height:30,
  },
  textStyle:{
    color:'#999',

  },
  selectedTextStyle:{
    color:'#868686',
    //fontSize:12,
  }
});
export default TabBarView;