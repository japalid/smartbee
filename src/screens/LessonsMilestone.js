import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TabView,TabBar,SceneMap } from 'react-native-tab-view';
import Kindness from './LessonsMilestoneList/Kindness';
import SelfConfidence from './LessonsMilestoneList/SelfConfidence';
import Grit from './LessonsMilestoneList/Grit';
import ProblemSolving from './LessonsMilestoneList/ProblemSolving';
import Creativity from './LessonsMilestoneList/Creativity';
import Discipline from './LessonsMilestoneList/Discipline';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
  };

class LessonsMilestone extends React.Component {

  static navigationOptions = {
    title: "Lessons",
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
            { key: 'kindness', title: 'Kindness', navigation: this.props.navigation },
            { key: 'selfconfidence', title: 'Self Confidence', navigation: this.props.navigation },
            { key: 'grit', title: 'Grit', navigation: this.props.navigation },
            { key: 'problemsolving', title: 'Problem Solving', navigation: this.props.navigation },
            { key: 'creativity', title: 'Creativity', navigation: this.props.navigation },
            { key: 'discipline', title: 'Discipline', navigation: this.props.navigation }
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

export default LessonsMilestone;