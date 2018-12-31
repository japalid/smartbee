import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Platform, LayoutAnimation, FlatList,Modal,Dimensions,StatusBar } from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
var srcAppointment = require("../images/icon/appointmenticon.png");
import DateTimePicker from 'react-native-modal-datetime-picker';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class IncidentReportFilterDate extends React.Component {

  static navigationOptions = () => ({
    header:null
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
        <View style={{flex:1}}>
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
                        <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Incident</Text>
                    </View>
                    </View>
                    <View style={{marginRight:15}}>
                    </View>
                </View>
            </View>
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
        </View>
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