'use strict';

import React from 'react';
import {
  Dimensions,
  Image,
  InteractionManager,
  View,
  Text,
} from 'react-native';

import AppMain from './TabBarView';

const {height, width} = Dimensions.get('window');

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {navigator} = this.props;
    this.timer=setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        navigator.resetTo({
          component: AppMain,
          name: 'AppMain'
        });
      });
    }, 100);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Image
          style={{flex:1,width:width,height:height}}
          source={require("../../images/ic_welcome.jpeg")}
        />
      </View>
    );
  }
}
export default Splash;