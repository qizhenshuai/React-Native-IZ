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
  Platform,
  ListView,
} from 'react-native';
const {width, height} = Dimensions.get('window')
import Swiper from 'react-native-swiper'
const BANNER_IMGS = [
  {uri:'http://pic39.nipic.com/20140323/10520402_235816607144_2.jpg'},
  {uri:'http://img1.3lian.com/2015/w20/55/d/103.jpg'},
  {uri:'http://pic18.nipic.com/20111215/9070056_163321623327_2.jpg'},
];
const STORE_DATA={
  "api":"GetStoreList",
  "v":"1.0",
  "code":"0",
  "msg":"success",
  "data":[{
    "id":1,
    "name":"市场洞察",
    "star":4,
    "comment":'2017/01/06',
    "tag":"中国餐馆,四川菜,重辣",
    "location":"6.6km",
    "remark":"每日有优惠"
  },{
    "id":2,
    "name":"市场营销",
    "star":4,
    "comment":'2017/01/06',
    "tag":"中国餐馆,四川菜,重辣",
    "location":"6.6km",
    "remark":"每日有优惠"
  },{
    "id":3,
    "name":"业务信息",
    "star":4,
    "comment":'2017/01/06',
    "tag":"中国餐馆,四川菜,重辣",
    "location":"6.6km",
    "remark":"每日有优惠"
  },{
    "id":4,
    "name":"舆情动向",
    "star":4,
    "comment":'2017/01/06',
    "tag":"中国餐馆,四川菜,重辣",
    "location":"6.6km",
    "remark":"每日有优惠"
  },{
    "id":5,
    "name":"生态资源",
    "star":4,
    "comment":'2017/01/06',
    "tag":"中国餐馆,四川菜,重辣",
    "location":"6.6km",
    "remark":"每日有优惠"
  },{
    "id":6,
    "name":"联合智库",
    "star":4,
    "comment":'2017/01/06',
    "tag":"中国餐馆,四川菜,重辣",
    "location":"6.6km",
    "remark":"每日有优惠"
  },{
    "id":7,
    "name":"展厅内容",
    "star":4,
    "comment":'2017/01/06',
    "tag":"中国餐馆,四川菜,重辣",
    "location":"6.6km",
    "remark":"每日有优惠"
  },{
    "id":8,
    "name":"热点专题",
    "star":4,
    "comment":'2017/01/06',
    "tag":"中国餐馆,四川菜,重辣",
    "location":"6.6km",
    "remark":"每日有优惠"
  }
  ]
};
import Project from './Project';
import ListDetail from './ListDetail';

const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!==r2});
class Index extends Component {

  static defaultProps = {}
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      isLoading: false,
      bannerData:'',
      itemData:'',
      listData:'',
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
      bannerData:BANNER_IMGS,
      itemData:STORE_DATA.data,
      listData:STORE_DATA.data,
    })
  }
  renderImg = (item,i) =>{

    return(
      <TouchableOpacity activeOpacity={0.5} onPress={()=>alert(i)} style={{flex:1}} key={i}>
        <Image key={i} source={item} style={{flex:1}}/>
      </TouchableOpacity>

    )
  };
  goPoshProject = (item) =>{
    const {navigator} = this.props;
    InteractionManager.runAfterInteractions(()=>{
      navigator.push({
        component:Project,
        passProps:{
          title:item.name,
        }
      })
    })
  }
  renderItem = (item,i) =>{
    return(
      <TouchableOpacity activeOpacity={0.5} onPress={()=>this.goPoshProject(item)} style={{width:width/4,height:100,justifyContent:'center',alignItems:'center'}} key={i}>
        <Image key={i} source={require('../../images/ic_welcome.jpeg')} style={{width:40,height:40,borderRadius:20,}}/>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  pushToListDetail = (rowData) =>{
    const {navigator} = this.props;
    InteractionManager.runAfterInteractions(()=>{
        if(navigator){
          navigator.push({
            component:ListDetail,
            passProps:{
              title:rowData.tag
            }
          })
        }
    });
  }
  renderListView = (rowData) =>{
      return(
        <TouchableOpacity activeOpacity={1} onPress={()=>this.pushToListDetail(rowData)} style={{width:width,
        height:100,flexDirection:'row',alignItems:'center',borderTopWidth:1}}>
          <Image style={{width:80,height:80,marginLeft:10,}} source={require('../../images/ic_welcome.jpeg')}/>
          <View style={{height:80,marginTop:10,marginBottom:10,alignItems:'flex-start',justifyContent:'space-between'}}>
                <Text>{rowData.tag}</Text>
              <View style={{flex:1,width:width-100,marginRight:10,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                <Text>{rowData.remark}</Text>
                <Text>{rowData.comment}</Text>
              </View>
          </View>
        </TouchableOpacity>
      )
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.homeViewStyle}>
          <View style={{width:width*0.9,height:30,marginLeft:width*0.05,borderWidth:1,borderRadius:6,
                      justifyContent:'center',alignItems:'center',marginTop:Platform.OS==='android' ? 0 : 22,marginBottom:10}}>
            <Text>搜索</Text>
          </View>
          <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
            <Swiper
              height={200}
              loop={true}
              autoplay={true}
              dot={<View style={styles.customDot} />}
              activeDot={<View style={styles.customActiveDot} />}
              paginationStyle={{
                    bottom: 10
                }}
            >
              {
                this.state.bannerData.map((item,i)=>this.renderImg(item,i))
              }
            </Swiper>
            <View style={{width:width,height:200,flexDirection:'row',flexWrap:'wrap',alignItems:'flex-start'}}>
              {
                this.state.itemData.map((item,i)=>this.renderItem(item,i))
              }
            </View>
            <ListView
              dataSource={ds.cloneWithRows(this.state.listData)}
              renderRow={(rowData) => this.renderListView(rowData)}
              //contentContainerStyle={styles.listViewStyle}
              showsVerticalScrollIndicator={false}
              enableEmptySections = {true}
              //*style={OrderStyle.listViewStyle}*/}
            />

          </ScrollView>

        </View>
      )
    } else {
      return (
        <View style={styles.homeViewStyle}>
          <Text>正在加载中......</Text>
        </View>
      )
    }

  }


}

const styles = StyleSheet.create({
  homeViewStyle: {
    flex: 1,
  },
})

export default Index;
