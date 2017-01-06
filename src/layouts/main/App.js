//根据页面
'use strict';

import React from 'react';
import {
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  View,
  Platform
} from 'react-native';

import Splash from './Splash';
import { NaviGoBack } from '../../component/GoBack';

export const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : 25)
let _navigator;
class App extends React.Component {
  constructor(props) {
    super(props);
    BackAndroid.addEventListener('hardwareBackPress', this.goBack);

  }

  goBack = () => {
    return NaviGoBack(_navigator);
  }

  renderScene = (route, navigator) => {
    let Component = route.component;
    _navigator = navigator;
    return (
      <Component {...route.passProps} navigator={navigator} route={route} />
    );
  }

  configureScene = (route, routeStack) => {
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle='default'
          backgroundColor='transparent'
          style={{height: STATUS_BAR_HEIGHT}}
        />
        <Navigator
          ref='navigator'
          style={styles.navigator}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
          initialRoute={{
                        component: Splash,
                        name: 'Splash'
                    }}
        />
      </View>
    );
  }
}
let styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

export default App;

