import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, Platform, TouchableOpacity, ActivityIndicator, Dimensions } from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { Calendar, CalendarList, Agenda } from "../../react-native-calendars";
import api from "../../networks/api";
import StatusBarDefault from "../../utils/StatusBarDefault";
import constants from '../../networks/constants';

import AgendaList from './Components/AgendaList';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const width = Dimensions.get("window").width;

class ScheduleDetail extends React.Component {

  static navigationOptions = {
    header: null ,
  };

  constructor(props) {
    super(props);
    this.state = {
      dateTrought: new Date(),
      monthTrought: monthNames[new Date().getMonth()] + " " + new Date().getFullYear(),
      data: [],
      loading: false,
      items: {}
      
    }
    this.nextMonth = this.nextMonth.bind(this)
    this.prevMonth = this.prevMonth.bind(this)
    
    // this._getSchedule();
  }

  _getSchedule() {
    var arr_data = [];
    api({
      method: 'get',
      url: '/jadwal/1'
    }).then((resp) => {
      arr_data.push(resp)
      this.setState({data:arr_data,loading:false})
    })
  }

  componentDidMount() {
  }

  _renderItem = ({item}) => <AgendaList item={item} navigation={this.props.navigation} />

  nextMonth(d) {
    var newa = new Date(d)
    var datna = d.setMonth(newa.getMonth()+1);
    var nextmon = new Date(datna)
    var nextname = monthNames[new Date(datna).getMonth()] + " " + new Date(datna).getFullYear()
    this.setState({dateTrought:nextmon,monthTrought:nextname})
  }

  prevMonth(d) {
    var newa = new Date(d)
    var datna = d.setMonth(newa.getMonth()-1);
    var nextmon = new Date(datna)
    var nextname = monthNames[new Date(datna).getMonth()] + " " + new Date(datna).getFullYear()
    this.setState({dateTrought:nextmon,monthTrought:nextname})
  }

  render() {

    if(this.state.loading) {
      return( <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large" color={constants.color.purple} />
              </View>
          )
    }else {
      return (
        <ScrollView 
        showsHorizontalScrollIndicator={false}
        style={{backgroundColor:'#F9F9FA'}}
        >
          <StatusBarDefault />
          <View style={styles.container}>
              <View style={{flexDirection:'row',backgroundColor:'#AD90CA',height:70}}>
                <View style={{marginTop: (Platform.OS) == 'ios' ? 30 : 0,alignItems:'center',justifyContent:'space-between',flexDirection:'row',width:width}}>
                  <View style={{marginLeft:15}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                      <Image source={require("../../images/icon/backicon.png")} style={{width:10,height:20}} />
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                    <TouchableOpacity 
                        onPress={()=>this.prevMonth(this.state.dateTrought)}>
                        <View style={{alignItems:'center'}}>
                          <Image source={require("../../images/icon/prevmonthicon.png")} style={{width:20,height:20,alignItems:'center'}} />
                        </View>
                    </TouchableOpacity>
                    <View style={{margin:10}}>
                      <Text style={{color:'#fff'}}>{this.state.monthTrought}</Text>
                    </View>
                    <TouchableOpacity 
                      onPress={()=>this.nextMonth(this.state.dateTrought)}>
                      <View style={{alignItems:'center'}}>
                        <Image source={require("../../images/icon/nextmonthicon.png")} style={{width:20,height:20,alignItems:'center'}} />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{marginRight:15}}>
                    <Image source={require("../../images/icon/iconpluscalendar.png")} style={{width:20,height:20}} />                
                  </View>
                </View>
              </View>
              <Calendar
                theme={{
                  calendarBackground: '#fff',
                  'stylesheet.calendar.header': {
                    header: {
                      height: 0
                    },
                  }
                }}
                  current={this.state.dateTrought}
                  onDayPress={(day) => {console.warn('selected day', day)}}
                  onDayLongPress={(day) => {console.warn('selected day', day)}}
                  onMonthChange={(month) => {console.warn('month changed', month)}}
                  hideArrows={true}
                  hideDayNames={false}
                  showWeekNumbers={false}
                  hideExtraDays={true}
                  weekDays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
                  />

                <View style={{marginTop:15}}>
                    <FlatList
                      scrollEnabled={false}
                          data={this.state.data}
                          renderItem={this._renderItem}
                          keyExtractor={(item, index) => item.id+""}
                      /> 
                </View>
          </View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#F9F9FA'
  }
});

export default ScheduleDetail;