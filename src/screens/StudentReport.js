import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Platform, AsyncStorage, Dimensions,StatusBar, ActivityIndicator, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from 'react-native-modal-datetime-picker';
import DailyReportItems from "./DailyReportList/Components/DailyReportItems";
import FAB from "../utils/FAB";
import * as request from "../networks/request";
import constants from "../networks/constants";
var srcBg = require("../images/background.png");
var srcBorder = require("../images/borderfoodimage.png");
var srcFoodExample = require("../images/examplefood.png");

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
 
class StudentReport extends React.Component {

  static navigationOptions = () => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
        popupMenu: false,
        isDateTimePickerVisible: false,
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
        ],
        loading: false,
        dataActivity: [],
        dataStudent: [],
        dataCategory: [],
        dataActivityDetail: [],
        activity: []
    };
    
  }

  componentDidMount() {
    this._getCategoryActivity();
    this._renderDetail();
    this._getActivityDetail();
  }

  _renderDetail() {
        this.setState({dataStudent:this.props.navigation.getParam("id"),dataCategory:this.props.navigation.getParam("report")})
  }

  _getCategoryActivity() {
    AsyncStorage.getItem("auth-key")
    .then(async (res) => {
        if (res !== null) {
            let resp = await request.activity_category(res);
            let respy = JSON.parse(resp._bodyText);
            this.setState({dataActivity:respy,loading:false})
        }
    })
    .catch(err => this.setState({loading:false}))
  }

  _getActivityDetail() {
    AsyncStorage.getItem("auth-key")
    .then(async (res) => {
        if (res !== null) {
            let resp = await request.activity_report(res,this.state.dataStudent.id,this.state.dataCategory.id,"2018-05-27","id");
            let respy = JSON.parse(resp._bodyText);
            console.warn(respy)
            const re = [];
            re.push(respy.activity);
            this.setState({dataActivityDetail:respy,activity:re,loading:false})
        }
    })
    .catch(err => this.setState({loading:false}))
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {
    this._hideDateTimePicker();
  };
  
  _retDayName() {
    var day = this.state.date.getDay();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
  }

  _retMonthName(month) {
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dev'];
      return months[month];
  }

  openPopupMenu(visible) {
    this.setState({popupMenu: visible});
  }

  _renderItem = ({item}) => <DailyReportItems item={item} navigation={this.props.navigation} />

  render() {
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
                        <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>{this.state.dataCategory.data}</Text>
                    </View>
                    </View>
                    <View style={{marginRight:15}}>
                    </View>
                </View>
            </View>
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
        {
                (this.state.loading)?
                <View style={{flex:1,justifyContent:'center',alignItems:'center',height:height}}>
                  <ActivityIndicator size="large" color={constants.color.purple} />
                </View>:
            <View>
                <ImageBackground style={styles.imageBackground} source={srcBg}>
                    <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                        <ImageBackground source={srcBorder} style={{width:166,height:162}}>
                            <View style={{width:166,height:162,borderRadius:80,alignItems:'center',justifyContent:'center'}}>
                                <Image source={{uri:this.state.dataActivityDetail.foto}} style={{width:143,height:142,borderRadius:71}} />
                            </View>
                        </ImageBackground>
                    </View>
                    <View
                    style={{marginTop:20,justifyContent:'center',alignItems:'center',flexDirection:'row'}}
                    >
                        <Text>Date : </Text>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('FoodReportFilterDate')}
                        >
                            <Text style={{color:'#B08485'}}>{this._retDayName()}, {(this.state.date.getDate()>9)?this.state.date.getDate():"0"+this.state.date.getDate()}  {this._retMonthName(this.state.date.getMonth())} {this.state.date.getFullYear()}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:20,marginLeft:25}}>
                        <FlatList
                            scrollEnabled={false}
                            data={this.state.activity}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => item.id+""}
                        />
                    </View>

                    {/* <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
                        <TouchableOpacity
                            style={{borderRadius:15,paddingTop:10,paddingBottom:10,paddingLeft:15,paddingRight:15,borderColor:'#E2DEDF',borderWidth:2}}
                        >
                            <Text style={{color:'#0081D4',fontSize:14}}>Load More</Text>
                        </TouchableOpacity>
                    </View> */}

                    <View style={{justifyContent:'center',alignItems:'center',borderRadius:10,flexDirection:'column',marginTop:20,alignSelf:'stretch',marginLeft:15,marginRight:15,shadowColor:'#000',shadowOffset:{width:1, height:1}, shadowRadius:2,elevation:1,backgroundColor:'#FFFFFF',shadowOpacity:0.5}}>
                        <View style={{backgroundColor:'#ACD6CA',borderTopLeftRadius:10,borderTopRightRadius:10,padding:10,justifyContent:'center',alignSelf:'stretch'}}>
                            <Text style={{color:'#FFFFFF',fontSize:20,marginLeft:5}}>Result</Text>
                        </View>
                        <Text style={{fontSize:15,color:'#3D4356',marginTop:5,marginLeft:5,marginBottom:5,padding:10,justifyContent:'center'}}>{this.state.dataActivityDetail.result}</Text>
                    </View>

                    <View style={{justifyContent:'center',alignItems:'center',borderRadius:10,flexDirection:'column',marginTop:20,alignSelf:'stretch',marginLeft:15,marginRight:15,shadowColor:'#000',shadowOffset:{width:1, height:1}, shadowRadius:2,elevation:1,backgroundColor:'#FFFFFF',shadowOpacity:0.5}}>
                        <View style={{backgroundColor:'#CAD5DB',borderTopLeftRadius:10,borderTopRightRadius:10,padding:10,justifyContent:'center',alignSelf:'stretch'}}>
                            <Text style={{color:'#FFFFFF',fontSize:20,marginLeft:5}}>Tips</Text>
                        </View>
                        <Text style={{fontSize:15,color:'#3D4356',marginTop:5,marginLeft:5,marginBottom:5,padding:10,justifyContent:'center'}}>{this.state.dataActivityDetail.tips}</Text>
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
        }
        </ScrollView>
        <FAB navigation={this.props.navigation} item={this.state.dataActivity} id={this.props.navigation.getParam("id")} />
        </View>
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
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default StudentReport;