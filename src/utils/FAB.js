import React from "react";
import { View, TouchableOpacity, Modal, Image, Text } from "react-native";
import { moderateScale } from './Scale';
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

class FAB extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
        popupMenu: false,
    }
  }

  openPopupMenu(visible) {
    this.setState({popupMenu: visible});
  }

  render() {
    return (
      <View>
          <View style={{bottom:0,right:0,position:'absolute',marginBottom:moderateScale(8)}}>
            <View style={{alignItems:'center',marginRight:15}}>
                <TouchableOpacity onPress={() => {
                    this.openPopupMenu(true);
                    }}>
                    <Image source={srcFAB} style={{width:moderateScale(58),height:moderateScale(58)}} />
                </TouchableOpacity>
            </View>
        </View>

        <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.popupMenu}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{flex:1,backgroundColor:'rgba(255,255,255,0.85)',justifyContent:'center',alignItems:'center'}}>
                        
                        <View style={{bottom:0,right:0,position:'absolute',marginBottom:moderateScale(68),marginRight:moderateScale(25)}}>
                            <View style={{flexDirection:'column',paddingTop:moderateScale(15)}}>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:moderateScale(5)}}>
                                    <View style={{justifyContent:'center',width:moderateScale(110),height:moderateScale(35),backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',shadowColor:'#000',shadowOffset:{  width: 2,  height: 4,  }, elevation:8,shadowOpacity: 1,shadowRadius:10}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Food</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("FoodReport"); }}>
                                    <Image source={srcFood} style={{width:moderateScale(39),height:moderateScale(45),marginLeft:moderateScale(10)}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:moderateScale(5)}}>
                                    <View style={{justifyContent:'center',width:moderateScale(110),height:moderateScale(35),backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',shadowColor:'#000',shadowOffset:{  width: 1,  height: 4,   }, elevation:8,shadowOpacity: 1,shadowRadius:10}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Activity</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("ActivityReport"); }}>
                                    <Image source={srcActivity} style={{width:moderateScale(39),height:moderateScale(45),marginLeft:moderateScale(10)}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:moderateScale(5)}}>
                                    <View style={{justifyContent:'center',width:moderateScale(110),height:moderateScale(35),backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',shadowColor:'#000',shadowOffset:{  width: 1,  height: 4,   }, elevation:8,shadowOpacity: 1,shadowRadius:10}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Medical</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("MedicalReport"); }}>
                                        <Image source={srcMedic} style={{width:moderateScale(39),height:moderateScale(45),marginLeft:moderateScale(10)}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:moderateScale(5)}}>
                                    <View style={{justifyContent:'center',width:moderateScale(110),height:moderateScale(35),backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',shadowColor:'#000',shadowOffset:{  width: 1,  height: 4,   }, elevation:8,shadowOpacity: 1,shadowRadius:10}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Academic</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("AcademicReportGraph"); }}>
                                        <Image source={srcAcademic} style={{width:moderateScale(39),height:moderateScale(45),marginLeft:moderateScale(10)}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:moderateScale(5)}}>
                                    <View style={{justifyContent:'center',width:moderateScale(110),height:moderateScale(35),backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',shadowColor:'#000',shadowOffset:{  width: 1,  height: 4,   }, elevation:8,shadowOpacity: 1,shadowRadius:10}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Potty</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("PottyReport"); }}>
                                        <Image source={srcPotty} style={{width:moderateScale(39),height:moderateScale(45),marginLeft:moderateScale(10)}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:moderateScale(5)}}>
                                    <View style={{justifyContent:'center',width:moderateScale(110),height:moderateScale(35),backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',shadowColor:'#000',shadowOffset:{  width: 1,  height: 4,   }, elevation:8,shadowOpacity: 1,shadowRadius:10}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Incident</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("IncidentReport"); }}>
                                        <Image source={srcIncident} style={{width:moderateScale(39),height:moderateScale(45),marginLeft:moderateScale(10)}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:moderateScale(5)}}>
                                    <View style={{justifyContent:'center',width:moderateScale(110),height:moderateScale(35),backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',shadowColor:'#000',shadowOffset:{  width: 1,  height: 4,   }, elevation:8,shadowOpacity: 1,shadowRadius:10}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Milk</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("MilkReport"); }}>
                                        <Image source={srcMilk} style={{width:moderateScale(39),height:moderateScale(45),marginLeft:moderateScale(10)}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:moderateScale(5)}}>
                                    <View style={{justifyContent:'center',width:moderateScale(110),height:moderateScale(35),backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',shadowColor:'#000',shadowOffset:{  width: 1,  height: 4,   }, elevation:8,shadowOpacity: 1,shadowRadius:10}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Nap</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("NapReport"); }}>
                                        <Image source={srcNap} style={{width:moderateScale(39),height:moderateScale(45),marginLeft:moderateScale(10)}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:moderateScale(5)}}>
                                    <View style={{justifyContent:'center',width:moderateScale(110),height:moderateScale(35),backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',shadowColor:'#000',shadowOffset:{  width: 1,  height: 4,   }, elevation:8,shadowOpacity: 1,shadowRadius:10}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Other</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("OtherReport"); }}>
                                        <Image source={srcOther} style={{width:moderateScale(39),height:moderateScale(45),marginLeft:moderateScale(10)}} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        
                        <View style={{bottom:0,right:0,position:'absolute',marginBottom:moderateScale(8)}}>
                            <View style={{alignItems:'center',marginRight:moderateScale(15)}}>
                                <TouchableOpacity  onPress={() => {
                                        this.openPopupMenu(!this.state.popupMenu);
                                    }}>
                                    <Image source={srcFAB} style={{width:moderateScale(58),height:moderateScale(58)}} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
      </View>
    );
  }
}

export default FAB;