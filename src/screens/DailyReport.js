import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Platform, LayoutAnimation, FlatList,Modal,StatusBar, Dimensions, AsyncStorage , ActivityIndicator} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from 'react-native-modal-datetime-picker';
import DailyReportItems from "./DailyReportList/Components/DailyReportItems";
import FAB from "../utils/FAB";
import * as request from "../networks/request";
import constants from "../networks/constants";
var srcBg = require("../images/background.png");
var srcLeft = require("../images/icon/dailyreportleftarrow.png");
var srcRight = require("../images/icon/dailyreportrightarrow.png");
var srcAvatar = require("../images/studentexample.png");

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
class DailyReport extends React.Component {

  static navigationOptions = () => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
        popupMenu: false,
        isDateTimePickerVisible: false,
        loading: true,
        date: new Date(),
        data1: [],
        data: [
            {
                id: 1,
                title: "Breakfast",
                description: "Ate a lot",
                icon: "",
                image: "",
                date: "Mon, 01 Jan, 08.11 AM"
            },
            {
                id: 2,
                title: "Activity",
                description: "Learn : Writing a poetry",
                icon: "",
                image: "",
                date: "Mon, 01 Jan, 08.11 AM"
            },
            {
                id: 3,
                title: "Nap",
                description: "From : 09.25 am To : 09.57 am",
                icon: "",
                image: "",
                date: "Mon, 01 Jan, 08.11 AM"
            },
        ]
    };
    this._getDaily();
  }

  componentDidMount() {
  }

  _addOneDay() {
    this.setState({loading:true});
    var _date = this.state.date;
    var newdate = new Date(_date);
    newdate.setDate(newdate.getDate() + 1);
    this.setState({date:newdate})
    this._getDaily();
  }

  _minOneDay() {
    this.setState({loading:true});
    var _date = this.state.date;
    var newdate = new Date(_date);
    newdate.setDate(newdate.getDate() - 1);
    this.setState({date:newdate})
    this._getDaily();
  }

  _getDaily() {
    AsyncStorage.getItem("auth-key")
    .then(async (res) => {
        if (res !== null) {

            var _date = this.state.date;
            var year = _date.getFullYear();
            var month = _date.getMonth()+1;
            var day = _date.getDate();

            if(day<10) {
                day = "0" + day;
            }
            if(month<10) {
                month = "0" + month;
            }

        let resp = await request.activity_daily(res,this.props.navigation.getParam("id"),year+"-"+day+"-"+month,"id");
        let respy = JSON.parse(resp._bodyText);
        this.setState({data1:respy,loading:false})
        }
    })
    .catch(err => this.setState({data1:arr_data_1,data2:arr_data_2,loading:false}))
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {
    this.setState({date:date,loading:true})
    this._hideDateTimePicker();
    this._getDaily();
  };
  
  openPopupMenu(visible) {
    this.setState({popupMenu: visible});
  }

  _navigateFood() {
    
  }

  _retDayName() {
    var day = this.state.date.getDay();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
  }

  _retMonthName(month) {
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dev'];
      return months[month];
  }

  _renderItem = ({item}) => <DailyReportItems item={item} navigation={this.props.navigation} />

  render() {
    if(this.state.loading) {
        return( <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <ActivityIndicator size="large" color={constants.color.purple} />
                </View>
            )
        }else {
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
                    <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Daily Report</Text>
                </View>
                </View>
                <View style={{marginRight:15}}>
                
                </View>
            </View>
        </View>

        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View>
                <View style={{height:46,backgroundColor:'#8865A9',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <TouchableOpacity
                        onPress={()=>this._minOneDay()}>
                        <Image source={srcLeft} style={{marginLeft:10}} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this._showDateTimePicker}
                    ><Text style={{fontSize:13,color:'#FFFFFF'}}>{this._retDayName()}, {(this.state.date.getDate()>9)?this.state.date.getDate():"0"+this.state.date.getDate()}  {this._retMonthName(this.state.date.getMonth())} {this.state.date.getFullYear()}</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>this._addOneDay()}>
                        <Image source={srcRight} style={{marginRight:10}} />
                    </TouchableOpacity>
                </View>
                <ImageBackground style={styles.imageBackground} source={srcBg}>
                    <View style={{alignItems:'center',flexDirection:'row',marginTop:20}}>
                        <View style={{width:61,height:61,borderRadius:30,borderColor:'#707070',borderWidth:1,marginLeft:20,alignItems:'center'}}>
                            <Image source={{uri:this.state.data1.foto}} style={{width:60,height:60,borderRadius:30}} />
                        </View>
                        <Text style={{fontSize:17,color:'#B08485',marginLeft:15}}>{this.state.data1.nama}</Text>
                    </View>
                    <View style={{marginTop:20,marginLeft:25}}>
                        <FlatList
                            scrollEnabled={false}
                            data={this.state.data}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => item.id+""}
                        />    
                    </View>
                    <View style={{height:80}}></View>
                </ImageBackground>
                <DateTimePicker
                    date={new Date()}
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
                
            </View>
        </ScrollView>
        <FAB navigation={this.props.navigation} />
        </View>
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
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default DailyReport;