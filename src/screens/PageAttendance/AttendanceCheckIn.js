import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Platform, LayoutAnimation, FlatList, Modal, ActivityIndicator, AsyncStorage } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from 'react-native-modal-datetime-picker';
import { CheckBox } from 'react-native-elements';
import ModalReason from './Components/ModalReason';
import CheckIn from './Components/CheckIn';
import * as request from "../../networks/request";
import constants from '../../networks/constants';
var srcBg = require("../../images/background.png");

class AttendanceCheckIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      popupMenu: false,
      isDateTimePickerVisibleFrom: false,
      checked: false
    };
    this.openPopupMenu = this.openPopupMenu.bind(this)
    this.getCheckIn();
  }

  componentDidMount() {
    
  }

  getCheckIn() {
    var response = [];
    AsyncStorage.getItem("auth-key")
        .then(async (res) => {
          if (res !== null) {
            let resp = await request.attendanceCheckIn(res);
            let respy = JSON.parse(resp._bodyText);
            respy.map((item)=>{
              response.push(item);
            })
            this.setState({data:response,loading:false})
          }
        })
        .catch(err => this.setState({data:response,loading:false}))
  }

  _showDateTimePickerFrom = () => this.setState({ isDateTimePickerVisibleFrom: true });
 
  _hideDateTimePickerFrom = () => this.setState({ isDateTimePickerVisibleFrom: false });
 
  _handleDatePickedFrom = (date) => {
    this._hideDateTimePickerFrom();
  };

  openPopupMenu(visible) {
    this.refs.modalReason.showModalReason();
  }

  _renderItem = ({item}) => <CheckIn item={item} navigation={this.props.navigation} modalShow={this.openPopupMenu.bind(this)} />

  render() {
    if(this.state.loading) {
      return( <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <ActivityIndicator size="large" color={constants.color.purple} />
            </View>
        )
    }else {
      return (
        <ScrollView contentContainerStyle={{flex: 1}} showsVerticalScrollIndicator={false}>
              <DateTimePicker
                  is24Hour={false}
                  datePickerModeAndroid={"spinner"}
                  mode={"time"}
                  isVisible={this.state.isDateTimePickerVisibleFrom}
                  onConfirm={this._handleDatePickedFrom}
                  onCancel={this._hideDateTimePickerFrom}
              />
          <View style={styles.container}>
              <ImageBackground style={styles.imageBackground} source={srcBg}>
                  <FlatList
                      data={this.state.data}
                      renderItem={this._renderItem}
                      keyExtractor={(item, index) => item.id+""}
                  />
                  <ModalReason ref={'modalReason'} parentFlatList={this} ></ModalReason>
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

export default AttendanceCheckIn;