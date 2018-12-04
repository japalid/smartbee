import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Platform, LayoutAnimation, FlatList,Modal } from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
var srcAppointment = require("../images/icon/appointmenticon.png");
import DateTimePicker from 'react-native-modal-datetime-picker';

class IncidentReportFilterDate extends React.Component {

  static navigationOptions = () => ({
    title: "Incident",
    headerTintColor: '#FFFFFF',
    headerTitleStyle:{ color: '#FFFFFF',alignSelf: 'center'},
    headerStyle: {
        backgroundColor: '#AD90CA'
    },
  });

  constructor(props) {
    super(props);
    this.state = {
        popupMenu: false,
        isDateTimePickerVisibleFrom: false,
        isDateTimePickerVisibleTo: false,
    }
  }

  componentDidMount() {
    
  }

  _showDateTimePickerFrom = () => this.setState({ isDateTimePickerVisibleFrom: true });
 
  _hideDateTimePickerFrom = () => this.setState({ isDateTimePickerVisibleFrom: false });
 
  _handleDatePickedFrom = (date) => {
    this._hideDateTimePickerFrom();
  };
 
  _showDateTimePickerTo = () => this.setState({ isDateTimePickerVisibleTo: true });
 
  _hideDateTimePickerTo = () => this.setState({ isDateTimePickerVisibleTo: false });
 
  _handleDatePickedTo = (date) => {
    this._hideDateTimePickerTo();
  };
 
  
  openPopupMenu(visible) {
    this.setState({popupMenu: visible});
  }

  _renderItem = ({item}) => <DailyReportItems item={item} navigation={this.props.navigation} />

  render() {
    return (
        <ScrollView
        contentContainerStyle={{flex:1}}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                
                <View style={{flexDirection:'column',justifyContent:'center',margin:15}}>
                    <Text style={styles.textLabel}>From</Text>
                    <TouchableOpacity
                         onPress={this._showDateTimePickerFrom}
                        style={styles.inputStyle}
                    >
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={srcAppointment} style={{width:30,height:30,marginRight:10}} />
                            <Text>Monday, 01 Jan 2018</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.textLabel}>To</Text>
                    <TouchableOpacity
                         onPress={this._showDateTimePickerTo}
                        style={styles.inputStyle}
                    >
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={srcAppointment} style={{width:30,height:30,marginRight:10}} />
                            <Text>Monday, 08 Jan 2018</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("IncidentReportFilterResult")} style={{justifyContent: 'flex-end',backgroundColor:'#0576DC',height:30,alignItems:'center'}} >
                    <Text style={{color:'#FFFFFF',fontSize:16,fontWeight:'bold',alignItems:'center',justifyContent:'center'}}>NEXT</Text>
                </TouchableOpacity>


                <DateTimePicker
                    date={new Date()}
                    isVisible={this.state.isDateTimePickerVisibleFrom}
                    onConfirm={this._handleDatePickedFrom}
                    onCancel={this._hideDateTimePickerFrom}
                />
                <DateTimePicker
                    date={new Date()}
                    isVisible={this.state.isDateTimePickerVisibleTo}
                    onConfirm={this._handleDatePickedTo}
                    onCancel={this._hideDateTimePickerTo}
                />
            </View>
                    
            
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  textLabel: {
    color: '#8B8C92',
    fontSize: 13,
    marginTop: 10
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  inputStyle: {
      borderBottomColor: '#707070',
      borderBottomWidth: 1,
      paddingBottom: 10,
      paddingTop: 10
  }
});

export default IncidentReportFilterDate;