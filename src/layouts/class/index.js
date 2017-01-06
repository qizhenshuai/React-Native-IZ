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


const Data =
{
  "error_code": 1,
  "message": "查询成功！",
  "data": {
  "list": [
    {
      "id": 53,
      "catid": 3,
      "title": "政策洞察第33期——2016互联网女皇报告",
      "thumb": "http://pic18.nipic.com/20111215/9070056_163321623327_2.jpg",
      "describe": "",
      "url": "",
      "tags": "",
      "type_id": 0,
      "hits": 562,
      "islink": 0,
      "linkurl": null,
      "inputtime": "1465703514.6971",
      "listorder": 0,
      "updated_at": "2016-08-11 11:25:28",
      "catename": "政府政策",
      "typename": "",
      "isnew": 0
    },
    {
      "id": 124,
      "catid": 25,
      "title": "test1",
      "thumb": "http://img1.3lian.com/2015/w20/55/d/103.jpg",
      "describe": "",
      "url": "",
      "tags": "",
      "type_id": 0,
      "hits": 24,
      "islink": 0,
      "linkurl": null,
      "inputtime": "1469091008.7191",
      "listorder": 0,
      "updated_at": "2016-08-11 11:25:36",
      "catename": "媒体传播",
      "typename": "",
      "isnew": 0
    },
    {
      "id": 21,
      "catid": 6,
      "title": "\"互联网+\"让智慧城市触手可及  加摘要",
      "thumb": "http://pic39.nipic.com/20140323/10520402_235816607144_2.jpg",
      "describe": "",
      "url": "http://news.xinhuanet.com/info/2015-07/30/c_134461363.htm",
      "tags": "",
      "type_id": 0,
      "hits": 404,
      "islink": 0,
      "linkurl": null,
      "inputtime": "1463194980.877",
      "listorder": 3,
      "updated_at": "2016-08-11 11:25:45",
      "catename": "企业友商",
      "typename": "",
      "isnew": 0
    }
  ],
    "isLastPage": 0
}

}


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
const {width, height} = Dimensions.get('window')
import NavigatorView from '../../component/NavigatorBar';
import Detail from './Detail';
class Index extends Component {

  static defaultProps = {}
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      isLoading: false,
      listData:'',
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
      listData:Data.data.list
    })
  }

  goPostDetail = (id) =>{
    const {navigator} = this.props;
    InteractionManager.runAfterInteractions(()=>{
      if(navigator){
        navigator.push({
          component:Detail,
          passProps:{
            id:id
          }
        })
      }
    })


  }


  itemView = (item,index) =>{
    console.log('.....',item)
    return(
      <TouchableOpacity activeOpacity={1} onPress={()=>this.goPostDetail(item.id)} key={index} style={{width:width,height:200}}>
        <Image source={{uri:item.thumb}} style={{width:width,height:198}}>
          <View style={{position:'absolute',bottom:0}}>
            <Text style={{color:'#ffffff'}}>{item.title}</Text>
          </View>

        </Image>
      </TouchableOpacity>
    )
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.allViewStyle}>
          {/*导航条*/}
          <NavigatorView
            title = '宣传口径'

          />
          <ScrollView showsVerticalScrollIndicator={false}>

          {
            this.state.listData.map((item,index)=>this.itemView(item,index))
          }
          </ScrollView>
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
})

export default Index;
