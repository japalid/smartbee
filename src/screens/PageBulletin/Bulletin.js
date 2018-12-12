import React from "react";
import { View, StyleSheet, Text, Dimensions} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TabView,TabBar,SceneMap } from 'react-native-tab-view';
import Blog from './Blog';
import Event from './Event';
import News from './News';
import Saved from './Saved';
import Tips from './Tips';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
  };

class Bulletin extends React.Component {

  static navigationOptions = {
    title: "Bulletin",
    headerTintColor: '#FFFFFF',
    headerTitleStyle:{ color: '#FFFFFF',alignSelf: 'center'},
    headerStyle: {
        backgroundColor: '#AD90CA'
    },
  };

  constructor(props) {
    super(props);
    this.state = {
        index: this.props.navigation.getParam('tab',0),
        routes: [
            { key: 'news', title: 'News', navigation: this.props.navigation },
            { key: 'event', title: 'Event', navigation: this.props.navigation },
            { key: 'blog', title: 'Blog', navigation: this.props.navigation },
            { key: 'tips', title: 'Tips', navigation: this.props.navigation },
            { key: 'saved', title: 'Saved', navigation: this.props.navigation }
        ]
    }
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
    />
  );

  _renderScene = SceneMap({
    news: News,
    event: Event,
    blog: Blog,
    tips: Tips,
    saved: Saved
  });

  render() {
    return (
        <View style={styles.container}>
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
    backgroundColor: '#E7E7E7'
  },
  tabbar: {
    
    backgroundColor: '#AD90CA',
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

export default Bulletin;