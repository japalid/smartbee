import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Platform, LayoutAnimation, FlatList,Modal } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from 'react-native-modal-datetime-picker';
import DailyReportItems from "./DailyReportList/Components/DailyReportItems";
var srcBg = require("../images/background.png");
var srcAvatar = require("../images/studentexample.png");
var srcFAB = require("../images/icon/fabdailyreporticon.png");
var srcFood = require("../images/icon/foodicon.png");
var srcActivity = require("../images/icon/activityicon.png");
var srcMedic = require("../images/icon/medicicon.png");
var srcAcademic = require("../images/icon/academicicon.png");
var srcPotty = require("../images/icon/pottyicon.png");
var srcIncident = require("../images/icon/incidenticon.png");
var srcMilk = require("../images/icon/milkicon.png");
var srcNap = require("../images/icon/napicon.png");
var srcOther = require("../images/icon/drothericon.png");
var srcFood = require("../images/icon/foodicon.png");
var srcBorder = require("../images/borderfoodimage.png");
var srcFoodExample = require("../images/examplefood.png");

class FoodReportFilterResult extends React.Component {

  static navigationOptions = () => ({
    title: "Food",
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
        ]
    };
  }

  componentDidMount() {
    
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {
    this._hideDateTimePicker();
  };
  
  openPopupMenu(visible) {
    this.setState({popupMenu: visible});
  }

  _renderItem = ({item}) => <DailyReportItems item={item} navigation={this.props.navigation} />

  render() {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <ImageBackground style={styles.imageBackground} source={srcBg}>
                    <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                        <ImageBackground source={srcBorder} style={{width:166,height:162}}>
                            <View style={{width:166,height:162,borderRadius:80,alignItems:'center',justifyContent:'center'}}>
                                <Image source={srcFoodExample} style={{width:143,height:142}} />
                            </View>
                        </ImageBackground>
                    </View>
                    <View
                    style={{marginTop:20,justifyContent:'center',alignItems:'center',flexDirection:'row'}}
                    >
                        <Text>From : </Text>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('FoodReportFilterResultFilterDate')}
                        >
                            <Text style={{color:'#B08485'}}>Monday,01 Jan 2018</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                    style={{marginTop:10,justifyContent:'center',alignItems:'center',flexDirection:'row'}}
                    >
                        <Text>To : </Text>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('FoodReportFilterResultFilterDate')}
                        >
                            <Text style={{color:'#B08485'}}>Monday,08 Jan 2018</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:20,marginLeft:25}}>
                        <FlatList
                            scrollEnabled={false}
                            data={this.state.data}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => item.id+""}
                        />    
                    </View>

                    <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
                        <TouchableOpacity
                            style={{borderRadius:15,paddingTop:10,paddingBottom:10,paddingLeft:15,paddingRight:15,borderColor:'#E2DEDF',borderWidth:2}}
                        >
                            <Text style={{color:'#0081D4',fontSize:14}}>Load More</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{justifyContent:'center',alignItems:'center',borderRadius:10,flexDirection:'column',marginTop:20,alignSelf:'stretch',marginLeft:15,marginRight:15,shadowColor:'#000',shadowOffset:{width:1, height:1}, shadowRadius:2,elevation:1,backgroundColor:'#FFFFFF',shadowOpacity:0.5}}>
                        <View style={{backgroundColor:'#ACD6CA',borderTopLeftRadius:10,borderTopRightRadius:10,padding:10,justifyContent:'center',alignSelf:'stretch'}}>
                            <Text style={{color:'#FFFFFF',fontSize:20,marginLeft:5}}>Result</Text>
                        </View>
                        <Text style={{fontSize:15,color:'#3D4356',marginTop:5,marginLeft:5,marginBottom:5,padding:10,justifyContent:'center'}}>60% anak anda makan cukup untuk sarapan</Text>
                    </View>

                    <View style={{justifyContent:'center',alignItems:'center',borderRadius:10,flexDirection:'column',marginTop:20,alignSelf:'stretch',marginLeft:15,marginRight:15,shadowColor:'#000',shadowOffset:{width:1, height:1}, shadowRadius:2,elevation:1,backgroundColor:'#FFFFFF',shadowOpacity:0.5}}>
                        <View style={{backgroundColor:'#CAD5DB',borderTopLeftRadius:10,borderTopRightRadius:10,padding:10,justifyContent:'center',alignSelf:'stretch'}}>
                            <Text style={{color:'#FFFFFF',fontSize:20,marginLeft:5}}>Tips</Text>
                        </View>
                        <Text style={{fontSize:15,color:'#3D4356',marginTop:5,marginLeft:5,marginBottom:5,padding:10,justifyContent:'center'}}>Sajikan makanan anak anda dengan porsi sedang namun sering</Text>
                    </View>

                    <View style={{height:80}}></View>
                </ImageBackground>
                
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.popupMenu}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{flex:1,backgroundColor:'rgba(255,255,255,0.85)',justifyContent:'center',alignItems:'center'}}>
                        
                        <View style={{bottom:0,right:0,position:'absolute',marginBottom:68,marginRight:25}}>
                            <View style={{flexDirection:'column',paddingTop:15}}>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Food</Text>
                                    </View>
                                    <TouchableOpacity>
                                    <Image source={srcFood} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Activity</Text>
                                    </View>
                                    <TouchableOpacity>
                                    <Image source={srcActivity} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Medical</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Image source={srcMedic} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Academic</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Image source={srcAcademic} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Potty</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Image source={srcPotty} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Incident</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Image source={srcIncident} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Milk</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Image source={srcMilk} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Nap</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Image source={srcNap} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Other</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Image source={srcOther} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        
                        <View style={{bottom:0,right:0,position:'absolute',marginBottom:8}}>
                            <View style={{alignItems:'center',marginRight:15}}>
                                <TouchableOpacity  onPress={() => {
                                        this.openPopupMenu(!this.state.popupMenu);
                                    }}>
                                    <Image source={srcFAB} style={{width:58,height:58}} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={{bottom:0,right:0,position:'absolute',marginBottom:8}}>
                    <View style={{alignItems:'center',marginRight:15}}>
                        <TouchableOpacity onPress={() => {
                              this.openPopupMenu(true);
                            }}>
                            <Image source={srcFAB} style={{width:58,height:58}} />
                        </TouchableOpacity>
                    </View>
                </View>
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
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default FoodReportFilterResult;