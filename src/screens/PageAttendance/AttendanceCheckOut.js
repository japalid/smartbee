import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Platform, LayoutAnimation, FlatList, ActivityIndicator, AsyncStorage } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CheckOut from './Components/CheckOut';
var srcBg = require("../../images/background.png");
import api from "../../networks/api";
import constants from '../../networks/constants';

class AttendanceCheckOut extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
    this.getCheckOut();
  }

  getCheckOut() {
    var response = [];
    AsyncStorage.getItem("auth-key")
        .then(async (res) => {
          if (res !== null) {
            let resp = await request.attendanceCheckOut(res);
            let respy = JSON.parse(resp._bodyText);
            respy.map((item)=>{
              response.push(item);
            })
            this.setState({data:response,loading:false})
          }
        })
        .catch(err => this.setState({data:response,loading:false}))
  }

  componentDidMount() {
    
  }

  _renderItem = ({item}) => <CheckOut item={item} navigation={this.props.navigation} />

  render() {
    if(this.state.loading) {
      return( <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <ActivityIndicator size="large" color={constants.color.purple} />
            </View>
        )
    }else {
      return (
        <ScrollView contentContainerStyle={{flex: 1}} showsVerticalScrollIndicator={false}>
            
              <View style={styles.container}>
                  <ImageBackground style={styles.imageBackground} source={srcBg}>
                      <FlatList
                          data={this.state.data}
                          renderItem={this._renderItem}
                          keyExtractor={(item, index) => item.id+""}
                      />
                  </ImageBackground>
              </View>
        </ScrollView>
      );
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  }
});

export default AttendanceCheckOut;