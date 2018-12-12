import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Platform, LayoutAnimation, FlatList, Modal } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from 'react-native-modal-datetime-picker';
import { CheckBox } from 'react-native-elements';
import ModalReason from './Components/ModalReason';
import CheckIn from './Components/CheckIn';
var srcBg = require("../../images/background.png");

class AttendanceCheckIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
          {
            id: 1,
            title: "Kelas Badak", 
            data: [
                { avatar:'',name:'Lily Josh',id:1 },
                { avatar:'',name:'Cecilla Robbie',id:2 },
                { avatar:'',name:'Piere Paul',id:3 }
            ]
          },
          {
            id: 2,
            title: "Kelas Mawar", 
            data: [
                { avatar:'',name:'Robert Pattinson',id:4 }
            ]
          },
          {
            id: 3,
            title: "Kelas Melati", 
            data: [
                { avatar:'',name:'Carry Puth',id:5 }
            ]
          },
      ],
      popupMenu: false,
      isDateTimePickerVisibleFrom: false,
      checked: false
    };
    this.openPopupMenu = this.openPopupMenu.bind(this)
  }

  componentDidMount() {
    
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