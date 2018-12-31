import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, Platform, TouchableOpacity, ActivityIndicator, Dimensions } from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";
import { ScrollView, FlatList, TextInput } from "react-native-gesture-handler";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import api from "../../networks/api";
import StatusBarDefault from "../../utils/StatusBarDefault";
import constants from '../../networks/constants';
var srcStudent = require("../../images/studentexample.png");

class ScheduleNew extends React.Component {

  static navigationOptions = {
    header: null ,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      items: {}
      
    }
  }

  componentDidMount() {
  }

  render() {
    const width = Dimensions.get("window").width
    if(this.state.loading) {
      return( <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large" color={constants.color.purple} />
              </View>
          )
    }else {
      return (
          <View style={styles.container}>
            <StatusBarDefault />
              <View style={{flexDirection:'row',backgroundColor:'#AD90CA',height:70}}>
                <View style={{marginTop: (Platform.OS) == 'ios' ? 30 : 0,alignItems:'center',justifyContent:'space-between',flexDirection:'row',width:width}}>                
                    <View style={{marginLeft:15}}>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.pop()}
                        >
                            <Image source={require("../../images/icon/backicon.png")} style={{width:10,height:20}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                    
                    <View style={{margin:10}}>
                        <Text style={{color:'#fff',fontSize:16}}>New Event</Text>
                    </View>
                    
                    </View>
                    <View style={{marginRight:15}}>
                    
                    </View>
                </View>
              </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              
              <View style={{marginLeft:15,marginRight:15}}>
                <View style={{borderBottomColor:'#707070',borderBottomWidth:0.4,paddingBottom:15,marginTop:20}}>
                    <TextInput 
                        placeholder={"Type your title ..."}
                    />
                </View>
                <View style={{borderBottomColor:'#707070',borderBottomWidth:0.4,paddingBottom:15,marginTop:10}}>
                    <TextInput 
                        placeholder={"Location"}
                    />
                </View>
                <View style={{borderBottomColor:'#707070',borderBottomWidth:0.4,marginBottom:15,paddingBottom:15,marginTop:10}}>
                    <TextInput 
                    multiline={true}
                    numberOfLines={4}
                        placeholder={"Notes ..."}
                    />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#707070',borderBottomWidth:0.4,marginBottom:15,paddingBottom:15}}>
                    <View style={{marginLeft:5}}>
                        <Text>Starts</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <TouchableOpacity>
                                <Text>Jan 07, 2018</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginLeft:20}}>
                            <TouchableOpacity>
                                <Text>6.00 am</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#707070',borderBottomWidth:0.4,marginBottom:15,paddingBottom:15}}>
                    <View style={{marginLeft:5}}>
                        <Text>Ends</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text>9.00 am</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#707070',borderBottomWidth:0.4,marginBottom:15,paddingBottom:15}}>
                    <View style={{marginLeft:5}}>
                        <Text>Invitees</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require("../../images/icon/nexticonschedule.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#707070',borderBottomWidth:0.4,marginBottom:15,paddingBottom:15}}>
                    <View style={{marginLeft:5}}>
                        <Text>Alert</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require("../../images/icon/nexticonschedule.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{borderBottomColor:'#707070',borderBottomWidth:0.4,marginBottom:15,marginTop: 10,paddingBottom:15}}>
                    <TextInput 
                        placeholder={"Price"}
                    />
                </View>
                <View style={{marginBottom:25}}>
                    <View style={{flexDirection:'row',alignItems:'center',height:100}}>
                        <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{marginBottom:15}}
                                >
                                <View style={{marginRight:15,alignItems:'center'}}>
                                    <View style={{width:50,height:50,borderRadius:25,alignItems:'center',borderWidth:2,borderColor:'#B69CCF'}}>
                                        <Image source={srcStudent} style={{width:45,height:45,borderRadius:22.5}} />
                                    </View>
                                    <Text>Rober Pattinson</Text>
                                </View>
                                <View style={{marginRight:15,alignItems:'center'}}>
                                    <View style={{width:50,height:50,borderRadius:25,alignItems:'center',borderWidth:2,borderColor:'#B69CCF'}}>
                                        <Image source={srcStudent} style={{width:45,height:45,borderRadius:22.5}} />
                                    </View>
                                    <Text>Rober Patt</Text>
                                </View>
                        </ScrollView>
                    </View>
                </View>
              </View>
              </ScrollView>
                <View style={{bottom:0,position:'absolute',alignItems:'center',backgroundColor:'#ECECEC',justifyContent:'center',flex:1,width:width,padding:10}}>
                    <TouchableOpacity style={{flex:1,width:width,alignItems:'center'}}>
                        <Text style={{color:'#B8898A',alignItems:'center',fontSize:15}}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9F9FA'
  }
});

export default ScheduleNew;