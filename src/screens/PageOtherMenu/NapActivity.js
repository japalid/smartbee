import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, FlatList, Dimensions, TextInput, StatusBar, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
var srcBg = require("../../images/background.png");
var srcStudent = require("../../images/studentexample.png");

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class NapActivity extends React.Component {


    static navigationOptions = {
        header: null
      };

  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  componentDidMount() {
  }

  render() {
    return (
        <View style={styles.container}>

            <StatusBar backgroundColor="#FF94F2" />
            <View style={{flexDirection:'row',backgroundColor:'#FF94F2',height:70 }}>
                <View style={{marginTop: (Platform.OS) == 'ios' ? 30 : 0,alignItems:'center',justifyContent:'space-between',flexDirection:'row',width:width}}>
                    <View style={{marginLeft:15}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                        <Image source={require("../../images/icon/backicon.png")} style={{width:10,height:20}} />
                    </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                    <View style={{margin:10}}>
                        <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Nap</Text>
                    </View>
                    </View>
                    <View style={{marginRight:15}}>
                    
                    </View>
                </View>
            </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flexDirection:'row',alignItems:'center',height:60,marginTop:20,borderBottomColor:'#707070',borderBottomWidth:0.3,marginBottom:15,marginLeft:15,marginRight:15}}>
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
          <View style={{flexDirection:'column',marginTop:10,borderBottomColor:'#707070',borderBottomWidth:0.3,marginBottom:10,paddingBottom:10,marginLeft:15,marginRight:15}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{marginRight:15,color:'#AEAEAE',width:50}}>From</Text>
                <TouchableOpacity>
                    <Text style={{color:'#B28486',width:width/2}}>Today : 08:31 am</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={{marginRight:15,color:'#AEAEAE',width:50}}>To</Text>
                <TouchableOpacity>
                    <Text style={{color:'#B28486',width:width/2}}>Today : 08:31 am</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View style={{flexDirection:'column',marginTop:10,borderBottomColor:'#707070',borderBottomWidth:0.3,marginBottom:10,paddingBottom:10,marginLeft:15,marginRight:15}}>
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
                      color: '#BEBEBE',borderRadius:15,textAlignVertical:'top',height:98}}
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
                  style={{width:width/2,backgroundColor:'#FF94F2',height:60,alignItems:'center',justifyContent:'center'}}
              >
                  <Text style={{color:'#ffffff',alignItems:'center',fontSize:18}}>SAVE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={{width:width/2,backgroundColor:'#F772E7',height:60,alignItems:'center',justifyContent:'center'}}
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

export default NapActivity;