import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Modal, Platform, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
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

  openPopupMenu(visible) {
    this.setState({popupMenu: visible});
  }

  render() {
    return (
        <View style={styles.container}>

            <Image source={srcImage} style={styles.imageBackground}>
            </Image>
           
                <ScrollView>

                  <View style={styles.viewHeader}>
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

                  <View style={styles.viewAvatar}>
                    <Image source={srcAvatar} style={styles.imageAvatar}></Image>
                  </View>

                  <View style={styles.viewPanel}>
                    <ImageBackground source={srcBg} style={styles.imagePanel}>

                        <View style={styles.viewNama}>
                          <Text style={styles.textNama}>Miss Elsya</Text>
                          <Text style={styles.textLevel}>Teacher</Text>
                        </View>

                        <View style={styles.viewWelcome}>
                          <ImageBackground source={srcWelcome} style={styles.imageWelcome}>
                            <View style={styles.viewInsideWelcome}>
                              <Text style={styles.textWelcome}>Hello, Miss Elysa</Text>
                              <Text style={styles.textWelcome}>How Would you like to start your class today</Text>
                            </View>
                          </ImageBackground>
                        </View>

                        <View style={styles.viewMenu}>
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

                        <View style={styles.viewMenu}>
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

                        <Modal
                          animationType="fade"
                          transparent={true}
                          visible={this.state.popupMenu}
                          onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                          }}>
                          <View style={{flex:1,backgroundColor:'rgba(255,255,255,0.85)',justifyContent:'center',alignItems:'center'}}>
                            
                              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <TouchableOpacity 
                                  onPress={()=>{this.openPopupMenu(!this.state.popupMenu);this.props.navigation.navigate('Medical')}}
                                style={{alignItems:'center',justifyContent:'center'}}>
                                  <Image source={srcMedical} style={{width:51.76,height:59.8,marginBottom:10}}></Image>
                                  <Text style={{color:'#576076',fontSize:11}}>Medical</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop: -20}}>
                                <TouchableOpacity 
                                  onPress={()=>{this.openPopupMenu(!this.state.popupMenu);this.props.navigation.navigate('AddActivity')}}
                                style={{marginRight:50,alignItems:'center',justifyContent:'center'}}>
                                  <Image source={srcActivity} style={{width:51.76,height:59.8,marginBottom:10}}></Image>
                                  <Text style={{color:'#576076',fontSize:11}}>Activity</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                  onPress={()=>{this.openPopupMenu(!this.state.popupMenu);this.props.navigation.navigate('Academic')}}
                                style={{marginLeft:50,alignItems:'center',justifyContent:'center'}}>
                                  <Image source={srcAcademic} style={{width:51.76,height:59.8,marginBottom:10}}></Image>
                                  <Text style={{color:'#576076',fontSize:11}}>Academic</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop: 15}}>
                                <TouchableOpacity 
                                  onPress={()=>{this.openPopupMenu(!this.state.popupMenu);this.props.navigation.navigate('Food')}}
                                style={{marginRight:15,alignItems:'center',justifyContent:'center'}}>
                                  <Image source={srcFood} style={{width:51.76,height:59.8,marginBottom:10}}></Image>
                                  <Text style={{color:'#576076',fontSize:11}}>Food</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                  onPress={()=>{this.openPopupMenu(!this.state.popupMenu);this.props.navigation.navigate('Other')}}
                                style={{marginLeft:15,alignItems:'center',justifyContent:'center'}}>
                                  <Image source={srcOther} style={{width:51.76,height:59.8,marginBottom:10}}></Image>
                                  <Text style={{color:'#576076',fontSize:11}}>Other</Text>
                                </TouchableOpacity>
                              </View>


                              <View style={{opacity:1.0,bottom:60,alignItems:'center',justifyContent:'center',position:'absolute'}}>
                                <TouchableOpacity onPress={() => {
                                    this.openPopupMenu(!this.state.popupMenu);
                                  }}>
                                  <Image style={{width:34,height:38.86}} source={srcCancel}></Image>
                                </TouchableOpacity>
                              </View>
                            
                          </View>
                        </Modal>

                        <View style={styles.viewAdd}>
                          <TouchableOpacity onPress={() => {
                              this.openPopupMenu(true);
                            }}>
                            <Image source={srcAdd}></Image>
                          </TouchableOpacity>
                        </View>

                    </ImageBackground>
                  </View>

                </ScrollView>
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
    width: 266,
    height: 173,
    bottom: 0,
    position: 'absolute',
  }, 
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    marginTop: (Platform.OS) == 'ios' ? 20 : 0
  },
  viewAvatar: {
    marginTop: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageAvatar: {
    width: 96,
    height: 98,
    borderRadius: 50
  },
  viewPanel: {
    marginTop: -40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagePanel: {
    width: 335,
    height: 504
  },
  viewNama: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textNama: {
    fontSize: 25,
    color: '#576076'
  },
  textLevel: {
    fontSize: 16,
    color: '#576076'
  },
  viewWelcome: {
    marginTop: 25,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: 'center'
  },
  imageWelcome: {
    width: 295,
    height: 45
  },
  viewInsideWelcome: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textWelcome: {
    color: '#ffffff',
    fontSize: 11
  },
  viewMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  btnMenu: {
    backgroundColor: "#E5E5E5",
    width: 96,
    height: 96,
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10
  },
  viewInsideMenu: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textMenu: {
    marginTop: 10,
    color: '#B08485',
    fontSize: 12,
    bottom: 0
  },
  viewAdd: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Home;