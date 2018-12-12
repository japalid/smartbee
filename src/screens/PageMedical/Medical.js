import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, FlatList, Dimensions, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
var srcBg = require("../../images/background.png");
var srcStudent = require("../../images/studentexample.png");

class Medical extends React.Component {
    static navigationOptions = {
        title: "Medical",
        headerTintColor: '#FFFFFF',
        headerTitleStyle:{ color: '#FFFFFF',alignSelf: 'center'},
        headerStyle: {
            backgroundColor: '#6991F1'
        },
      };

  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  render() {
    const {width, height} = Dimensions.get('window')
    return (
        <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flexDirection:'row',alignItems:'center',height:60,marginTop:20,borderBottomColor:'#707070',borderBottomWidth:1,marginBottom:15,marginLeft:15,marginRight:15}}>
              <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{marginBottom:15}}
                      >
                      <View style={{width:50,height:50,borderRadius:25,alignItems:'center',borderWidth:2,borderColor:'#B69CCF',marginRight:15}}>
                          <Image source={srcStudent} style={{width:45,height:45,borderRadius:22.5}} />
                      </View>
                      <View style={{width:50,height:50,borderRadius:25,alignItems:'center',borderWidth:2,borderColor:'#B69CCF',marginRight:15}}>
                          <Image source={srcStudent} style={{width:45,height:45,borderRadius:22.5}} />
                      </View>
                      <View style={{width:50,height:50,borderRadius:25,alignItems:'center',borderWidth:2,borderColor:'#B69CCF',marginRight:15}}>
                          <Image source={srcStudent} style={{width:45,height:45,borderRadius:22.5}} />
                      </View>
              </ScrollView>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',marginTop:10,borderBottomColor:'#707070',borderBottomWidth:1,marginBottom:10,paddingBottom:10,marginLeft:15,marginRight:15}}>
              <Text style={{marginRight:15,color:'#AEAEAE'}}>Time</Text>
              <TouchableOpacity>
                  <Text style={{color:'#B28486'}}>Today : 08:31 am</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10,borderBottomColor:'#707070',borderBottomWidth:1,marginBottom:10,paddingBottom:10,marginLeft:15,marginRight:15}}>
              <View style={{flexDirection:'column',width:width/3 - 15,padding:20}}>
                <View style={{borderColor:'#F2AE7F',borderWidth:1,borderRadius:10}}>
                    <TextInput 
                        style={{textAlign:'center'}}
                    />
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{marginTop:5,color:'#2E313C'}}>Berat (kg)</Text>
                </View>
              </View>
              
              <View style={{flexDirection:'column',width:width/3 - 15,padding:20}}>
                <View style={{borderColor:'#83E1F5',borderWidth:1,borderRadius:10}}>
                    <TextInput
                        style={{textAlign:'center'}}
                    />
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{marginTop:5,alignItems:'center',color:'#2E313C'}}>Tinggi (cm)</Text>
                </View>
              </View>

              <View style={{flexDirection:'column',width:width/3 - 15,padding:20}}>
                <View style={{borderColor:'#A2D15A',borderWidth:1,borderRadius:10}}>
                    <TextInput 
                        style={{textAlign:'center'}}
                    />
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{marginTop:5,alignItems:'center',color:'#2E313C'}}>Suhu (c)</Text>
                </View>
              </View>
          </View>
          <View style={{flexDirection:'column',marginTop:10,borderBottomColor:'#707070',borderBottomWidth:1,marginBottom:10,paddingBottom:10,marginLeft:15,marginRight:15}}>
                <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{marginBottom:15}}
                      >
                      <View style={{marginRight:15}}>
                        <Image source={require('../../images/exampleincidentactivity.png')} style={{borderRadius:15,width:97,height:97}} />
                      </View>
                      <TouchableOpacity>
                        <Image source={require('../../images/icon/opencamera.png')} style={{height:97,width:97}}/>
                      </TouchableOpacity>
                </ScrollView>
          </View>
          <View style={{flex:1,flexDirection:'row',backgroundColor:'#F4F4F4',marginTop:10,marginLeft:15,marginRight:15,borderRadius:15,marginBottom:70}}>
              <TextInput
                  style={{flex: 1,
                      paddingRight: 10,
                      paddingLeft: 10,
                      backgroundColor: '#F4F4F4',
                      color: '#BEBEBE',borderRadius:15,textAlignVertical:'top'}}
                  placeholder="Note ..."
                  multiline={true}
                  numberOfLines={5}
                  onChangeText={(searchString) => {this.setState({searchString})}}
                  underlineColorAndroid="transparent"
              />
              <TouchableOpacity
              style={{marginTop:10,marginRight:10}}>
                  <Image source={require("../../images/icon/trashinput.png")} style={{width:13,height:15}}/>
              </TouchableOpacity>
          </View>
        </ScrollView>
          <View style={{flexDirection:'row',position:'absolute',bottom:0,height:40,alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity
                  style={{width:width/2,backgroundColor:'#6991F1',height:60,alignItems:'center',justifyContent:'center'}}
              >
                  <Text style={{color:'#ffffff',alignItems:'center',fontSize:18}}>SAVE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={{width:width/2,backgroundColor:'#4676E5',height:60,alignItems:'center',justifyContent:'center'}}
              >
                  <Text style={{color:'#ffffff',alignItems:'center',fontSize:18}}>SEND</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  }
});

export default Medical;