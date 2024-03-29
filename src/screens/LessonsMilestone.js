import React from "react";
import { View, StyleSheet, Text, Dimensions, StatusBar, Platform, TouchableOpacity, Image, AsyncStorage, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TabView,TabBar,SceneMap } from 'react-native-tab-view';
import * as request from "../networks/request";
import constants from "../networks/constants";
import Kindness from './LessonsMilestoneList/Kindness';
import LessonPage from './LessonsMilestoneList/LessonPage';
import SelfConfidence from './LessonsMilestoneList/SelfConfidence';
import Grit from './LessonsMilestoneList/Grit';
import ProblemSolving from './LessonsMilestoneList/ProblemSolving';
import Creativity from './LessonsMilestoneList/Creativity';
import Discipline from './LessonsMilestoneList/Discipline';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
  };

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class LessonsMilestone extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
        index: this.props.navigation.getParam('tab',0),
        // routes: [
        //     { key: 'kindness', title: 'Kindness', navigation: this.props.navigation },
        //     { key: 'selfconfidence', title: 'Self Confidence', navigation: this.props.navigation },
        //     { key: 'grit', title: 'Grit', navigation: this.props.navigation },
        //     { key: 'problemsolving', title: 'Problem Solving', navigation: this.props.navigation },
        //     { key: 'creativity', title: 'Creativity', navigation: this.props.navigation },
        //     { key: 'discipline', title: 'Discipline', navigation: this.props.navigation }
        // ],
        routes: [],
        loading: true,
        scenes: {}
    }
    this._getLessonCategory();
  }

  _getLessonCategory() {
    var response = [];
    AsyncStorage.getItem("auth-key")
    .then(async (res) => {
        if (res !== null) {
        let resp = await request.lesson_category(res);
        let respy = JSON.parse(resp._bodyText);
        const _routes = [];
        respy.map((item)=>{
          _routes.push({
            key: item.id+"",
            title: item.category,
          })
          response.push(item);
        })
        let scenes = {};
        respy.forEach(element => {
          const FR = () => (
            <LessonPage navigation={this.props.navigation} data={element} />
          )
            scenes[element.id] = FR
        });
        this.setState({loading:false,routes:_routes,scenes:scenes})
        }
    })
    .catch(err => this.setState({loading:false}))
  }

  componentDidMount() {
  }

  _handleIndexChange = index =>
    this.setState({
      index,
    });

  _renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
      renderLabel={this._renderLabel}
    />
  );

  _renderLabel = ({ route }) => (
    <Text style={styles.label}>{route.title}</Text>
  );

  _renderScene = SceneMap({
    kindness: Kindness,
    selfconfidence: SelfConfidence,
    grit: Grit,
    problemsolving: ProblemSolving,
    creativity: Creativity,
    discipline: Discipline
  });

  render() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#AD90CA" />
            <View style={{flexDirection:'row',backgroundColor:'#AD90CA',height:70 }}>
                  <View style={{marginTop: (Platform.OS) == 'ios' ? 30 : 0,alignItems:'center',justifyContent:'space-between',flexDirection:'row',width:width}}>
                      <View style={{marginLeft:15}}>
                      <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                          <Image source={require("../images/icon/backicon.png")} style={{width:10,height:20}} />
                      </TouchableOpacity>
                      </View>
                      <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                      <View style={{margin:10}}>
                          <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Lessons</Text>
                      </View>
                      </View>
                      <View style={{marginRight:15}}>
                      
                      </View>
                  </View>
              </View>

          {
            this.state.loading ? (
              <View style={{flex:1,alignItems:'center'}}>
                  <ActivityIndicator size="large" color={constants.color.purple} />
                </View>
            ):(
              <TabView
                style={[styles.container, this.props.style]}
                navigationState={this.state}
                renderScene={SceneMap(this.state.scenes)}
                renderTabBar={this._renderTabBar}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
              />
            )
          }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  tabbar: {
    backgroundColor: '#8865A9',
  },
  tab: {
    width: 200,
    height: 40
  },
  indicator: {
    backgroundColor: '#68418D',
  },
  label: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default LessonsMilestone;