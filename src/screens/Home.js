import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Platform, Dimensions, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Avatar } from 'react-native-elements';
import {scale, verticalScale, moderateScale, customScaleAndroid, customScale} from '../utils/Scale'
import Modal from 'react-native-modalbox';
var srcImage = require("../images/bgdashboard.png");
var srcLogo = require("../images/logodashboard.png");
var srcChat = require("../images/icon/chaticon.png");
var srcNotif = require("../images/icon/notificon.png");
var srcBg = require("../images/paneldashboard.png");
var srcAvatar = require("../images/avatar.png");
var srcWelcome = require("../images/panelwelcome.png");
var srcLesson = require("../images/icon/lessonicon.png");
var srcStudent = require("../images/icon/studenticon.png");
var srcSchedules = require("../images/icon/schedulesicon.png");
var srcAttendent = require("../images/icon/attendenticon.png");
var srcBulletin = require("../images/icon/bulletinicon.png");
var srcSetting = require("../images/icon/settingicon.png");
var srcAdd = require("../images/icon/addicon.png");
var srcCancel = require("../images/icon/cancelicon.png");
var srcMedical = require("../images/icon/medicicon.png");
var srcActivity = require("../images/icon/activityicon.png");
var srcFood = require("../images/icon/foodicon.png");
var srcOther = require("../images/icon/othericon.png");
var srcAcademic = require("../images/icon/academicicon.png");

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Home extends React.Component {

  static navigationOptions = {
    header: null
  };

  state = {
    popupMenu: false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  openPopupMenu() {
    this.refs.myModal.open();
  }

  closePopupMenu() {
    this.refs.myModal.close();
  }

  render() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#F5EBE9"/>
            <Modal 
                      ref={"myModal"}
                      style={{
                          width: width,
                          height: height,
                          backgroundColor: 'rgba(255,255,255,0.85)'
                      }}
                      position='center'
                      backdrop={true}
                      onClosed={()=>{
                      }}
                  >
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                  
                                  <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <TouchableOpacity 
                                      onPress={()=>{this.openPopupMenu(!this.state.popupMenu);this.props.navigation.navigate('Medical')}}
                                    style={{alignItems:'center',justifyContent:'center'}}>
                                      <Image source={srcMedical} style={{width:moderateScale(51.76),height:moderateScale(59.8),marginBottom:moderateScale(10)}}></Image>
                                      <Text style={{color:'#576076',fontSize:11}}>Medical</Text>
                                    </TouchableOpacity>
                                  </View>
          
                                  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop: -20}}>
                                    <TouchableOpacity 
                                      onPress={()=>{this.openPopupMenu(!this.state.popupMenu);this.props.navigation.navigate('AddActivity')}}
                                    style={{marginRight:moderateScale(50),alignItems:'center',justifyContent:'center'}}>
                                      <Image source={srcActivity} style={{width:moderateScale(51.76),height:moderateScale(59.8),marginBottom:moderateScale(10)}}></Image>
                                      <Text style={{color:'#576076',fontSize:11}}>Activity</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                      onPress={()=>{this.openPopupMenu(!this.state.popupMenu);this.props.navigation.navigate('Academic')}}
                                    style={{marginLeft:moderateScale(50),alignItems:'center',justifyContent:'center'}}>
                                      <Image source={srcAcademic} style={{width:moderateScale(51.76),height:moderateScale(59.8),marginBottom:moderateScale(10)}}></Image>
                                      <Text style={{color:'#576076',fontSize:11}}>Academic</Text>
                                    </TouchableOpacity>
                                  </View>
          
                                  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop: moderateScale(15)}}>
                                    <TouchableOpacity 
                                      onPress={()=>{this.openPopupMenu(!this.state.popupMenu);this.props.navigation.navigate('Food')}}
                                    style={{marginRight:moderateScale(15),alignItems:'center',justifyContent:'center'}}>
                                      <Image source={srcFood} style={{width:moderateScale(51.76),height:moderateScale(59.8)}}></Image>
                                      <Text style={{color:'#576076',fontSize:11}}>Food</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                      onPress={()=>{this.openPopupMenu(!this.state.popupMenu);this.props.navigation.navigate('Other')}}
                                    style={{marginLeft:moderateScale(15),alignItems:'center',justifyContent:'center'}}>
                                      <Image source={srcOther} style={{width:moderateScale(51.76),height:moderateScale(59.8)}}></Image>
                                      <Text style={{color:'#576076',fontSize:11}}>Other</Text>
                                    </TouchableOpacity>
                                  </View>
          
          
                                  <View style={{opacity:1.0,alignItems:'center',justifyContent:'center',width:width,position:'absolute',height:moderateScale(38.86),bottom:moderateScale(hp('10%'))}}>
                                    <TouchableOpacity onPress={() => {
                                        this.closePopupMenu();
                                      }}>
                                      <Image style={{width:moderateScale(34),height:moderateScale(38.86)}} source={srcCancel}></Image>
                                    </TouchableOpacity>
                                  </View>
                                
                              </View>
                  </Modal>

            <Image source={srcImage} style={styles.imageBackground}/>

            <View style={{height:hp('10%'),flexDirection:'row', justifyContent:'space-between',padding:10,
    marginTop: (Platform.OS) == 'ios' ? 30 : 0}}>
              <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Notification')}
              >
                <Image source={srcNotif}></Image>
              </TouchableOpacity>
              <Image source={srcLogo}></Image>
              <TouchableOpacity>
                <Image source={srcChat}></Image>
              </TouchableOpacity>
            </View>
              <View style={{height:hp('4%')}}></View>
              <View style={{height:hp('78%'),width:wp('100%'),alignItems:'center'}}>
                <View style={{height:hp('78%'),width:width - moderateScale(20),backgroundColor:'rgba(255,255,255,0.6)'}}>
                    <View style={{alignItems:'center'}}>
                      <View
                        style={{width:moderateScale(105),height:moderateScale(105),backgroundColor:'#F5EBE9',alignItems:'center',borderRadius:moderateScale(105)/2,marginTop: - moderateScale(80)/2}}
                      >
                        <View style={{alignItems:'center',justifyContent:'center',height:moderateScale(105)}}>
                          <View style={{alignItems:'center',height:moderateScale(95)}}>
                            <Avatar
                                width={moderateScale(95)}
                                height={moderateScale(95)}
                                rounded
                                source={srcAvatar}
                                overlayContainerStyle={{backgroundColor: 'white'}}
                                onPress={() => console.log("Works!")}
                                // activeOpacity={0.8}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={{justifyContent: 'center',alignItems: 'center',marginBottom:moderateScale(5)}}>
                      <Text style={{fontSize: 22,color: '#576076'}}>Miss Elsya</Text>
                      <Text style={{fontSize: 12,color: '#576076'}}>Teacher</Text>
                    </View>

                    <View style={{justifyContent: "center",alignItems: 'center'}}>

                    <ImageBackground source={srcWelcome} style={{width: moderateScale(295),height: moderateScale(45),alignItems:'center',justifyContent:'center',marginBottom:moderateScale(10)}}>
                        <View style={{justifyContent: 'center',alignItems: 'center'}}>
                          <Text style={styles.textWelcome}>Hello, Miss Elysa</Text>
                          <Text style={styles.textWelcome}>How Would you like to start your class today</Text>
                        </View>
                      </ImageBackground>
                      <View>
                      <View style={{flexDirection: 'row',justifyContent: 'space-between',width:moderateScale(295),alignItems:"center",marginBottom:moderateScale(10)}}>
                          <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate("Lessons")}
                          style={styles.btnMenu}>
                            <View style={styles.viewInsideMenu}>
                              <Image source={srcLesson}></Image>
                              <Text style={styles.textMenu}>Lessons</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate("Students")}
                          style={styles.btnMenu}>
                            <View style={styles.viewInsideMenu}>
                              <Image source={srcStudent}></Image>
                              <Text style={styles.textMenu}>Students</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate("Schedule")}
                          style={styles.btnMenu}>
                            <View style={styles.viewInsideMenu}>
                              <Image source={srcSchedules}></Image>
                              <Text style={styles.textMenu}>Schedules</Text>
                            </View>
                          </TouchableOpacity>
                      </View>

                      <View style={{flexDirection: 'row',justifyContent: 'space-between',width:moderateScale(295)}}>
                          <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate("Attendance")}
                          style={styles.btnMenu}>
                            <View style={styles.viewInsideMenu}>
                              <Image source={srcAttendent}></Image>
                              <Text style={styles.textMenu}>Attendance</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate("Bulletin")}
                          style={styles.btnMenu}>
                            <View style={styles.viewInsideMenu}>
                              <Image source={srcBulletin}></Image>
                              <Text style={styles.textMenu}>Bulletin</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate("Settings")}
                          style={styles.btnMenu}>
                            <View style={styles.viewInsideMenu}>
                              <Image source={srcSetting}></Image>
                              <Text style={styles.textMenu}>Settings</Text>
                            </View>
                          </TouchableOpacity>
                      </View>
                      
                    </View>
        </View>

                    <View style={styles.viewAdd}>
                      <TouchableOpacity onPress={() => {
                          this.openPopupMenu();
                        }}>
                        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                          <Image source={srcAdd} style={{width:moderateScale(34),height:moderateScale(39),alignItems:'center'}}></Image>
                        </View>
                      </TouchableOpacity>
                    </View>
                    
                </View>
              </View>
              </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EBE9'
  },
  imageBackground: {
    width: moderateScale(266),
    height: moderateScale(173),
    bottom: 0,
    position: 'absolute',
  },
  textWelcome: {
    color: '#ffffff',
    fontSize: 11,
    textAlignVertical:'center'
  }, 
  btnMenu: {
    backgroundColor: "#E5E5E5",
    width: moderateScale(90),
    height: moderateScale(90),
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  viewInsideMenu: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewAdd: {
    width: width - moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    marginBottom: 10,
    position: 'absolute'
  },
  textMenu: {
    marginTop: 10,
    color: '#B08485',
    fontSize: 12,
    bottom: 0
  },
});

export default Home;