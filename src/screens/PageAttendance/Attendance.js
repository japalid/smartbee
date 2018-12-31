import React from "react";
import { View, StyleSheet, Text, Dimensions, Platform, Image, TouchableOpacity, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TabView,TabBar,SceneMap } from 'react-native-tab-view';
import CheckIn from './AttendanceCheckIn';
import CheckOut from './AttendanceCheckOut';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
  };

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class Attendance extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
        index: this.props.navigation.getParam('tab',0),
        routes: [
            { key: 'checkin', title: 'Check In', navigation: this.props.navigation },
            { key: 'checkout', title: 'Check Out', navigation: this.props.navigation }
        ]
    }
  }

  _renderLabel = ({ route }) => (
    <Text style={styles.label}>{route.title}</Text>
  );

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

  _renderScene = SceneMap({
    checkin: CheckIn,
    checkout: CheckOut
  });

  render() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#AD90CA" />

            <View style={{flexDirection:'row',backgroundColor:'#AD90CA',height:70 }}>
                  <View style={{marginTop: (Platform.OS) == 'ios' ? 30 : 0,alignItems:'center',justifyContent:'space-between',flexDirection:'row',width:width}}>
                      <View style={{marginLeft:15}}>
                      <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                          <Image source={require("../../images/icon/backicon.png")} style={{width:10,height:20}} />
                      </TouchableOpacity>
                      </View>
                      <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                      <View style={{margin:10}}>
                          <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Attendance</Text>
                      </View>
                      </View>
                      <View style={{marginRight:15}}>
                      
                      </View>
                  </View>
              </View>

            <TabView
                style={[styles.container, this.props.style]}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderTabBar={this._renderTabBar}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
            />
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
    backgroundColor: '#FFF'
  },
  tabbar: {
    backgroundColor: '#8865A9',
  },
  tab: {
    width: 200,
  },
  indicator: {
    backgroundColor: '#68418D',
  },
  label: {
    color: '#fff',
    fontWeight: '400',
  },
});

export default Attendance;