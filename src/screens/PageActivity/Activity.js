import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, FlatList, Dimensions, TextInput, Platform, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
var srcBg = require("../../images/background.png");
var srcStudent = require("../../images/studentexample.png");
import RadioButton from "./Components/RadioButton";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class Activity extends React.Component {
    static navigationOptions = {
        header: null
      };

  constructor(props) {
    super(props);
    this.state = { 
        radioItems: 
        [
            {
                label: 'Play',
                selected: false
            }, 
 
            {
                label: 'Learn',
                selected: true,
            }
        ], 
        radioItemsJenis: 
        [
            {
                label: 'Ate a lot',
                selected: false
            }, 
 
            {
                label: 'Ate enough',
                selected: true,
            },
 
            {
                label: 'Ate a little',
                selected: false
            },
            
            {
                label: 'None',
                selected: false
            },
            
        ], 
        selectedItem: '' }
  }

  componentDidMount() {
    this.state.radioItems.map(( item ) =>
    {
        if( item.selected == true )
        {
            this.setState({ selectedItem: item.label });
        }
    });
  }

  changeActiveRadioButton(index)
    {
        this.state.radioItems.map(( item ) =>
        {
            item.selected = false;
        });
 
        this.state.radioItems[index].selected = true;
 
        this.setState({ radioItems: this.state.radioItems }, () =>
        {
            this.setState({ selectedItem: this.state.radioItems[index].label });
        });
    }

    changeActiveRadioButtonJenis(index)
    {
        this.state.radioItemsJenis.map(( item ) =>
        {
            item.selected = false;
        });
 
        this.state.radioItemsJenis[index].selected = true;
 
        this.setState({ radioItemsJenis: this.state.radioItemsJenis }, () =>
        {
            this.setState({ selectedItem: this.state.radioItemsJenis[index].label });
        });
    }

  render() {
    return (
        <View style={styles.container}>

            <StatusBar backgroundColor="#FEC77D" />
            <View style={{flexDirection:'row',backgroundColor:'#FEC77D',height:70 }}>
                <View style={{marginTop: (Platform.OS) == 'ios' ? 30 : 0,alignItems:'center',justifyContent:'space-between',flexDirection:'row',width:width}}>
                    <View style={{marginLeft:15}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                        <Image source={require("../../images/icon/backicon.png")} style={{width:10,height:20}} />
                    </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                    <View style={{margin:10}}>
                        <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Activity</Text>
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
          <View style={{flexDirection:'row',alignItems:'center',marginTop:10,borderBottomColor:'#707070',borderBottomWidth:0.3,marginBottom:10,paddingBottom:10,marginLeft:15,marginRight:15}}>
              <Text style={{marginRight:15,color:'#AEAEAE'}}>Time</Text>
              <TouchableOpacity>
                  <Text style={{color:'#B28486'}}>Today : 08:31 am</Text>
              </TouchableOpacity>
          </View>        
          <View style={{marginTop:10,borderBottomColor:'#707070',borderBottomWidth:0.3,marginBottom:10,paddingBottom:10,marginLeft:15,marginRight:15}}>

            <View style={{flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#E2DEDF',borderRadius:20,backgroundColor:'#F8F8FA'}}>
                {
                    this.state.radioItems.map(( item, key ) =>
                    (
                        <RadioButton key = { key } button = { item } onClick = { this.changeActiveRadioButton.bind( this, key ) }/>
                    ))
                }
            </View>

            <View style={{flexDirection:'row',marginTop:10,marginBottom:15,justifyContent:'center'}}>
                <View style={{flex:1,alignItems:'center'}}>
                    <TextInput 
                    style={{
                        borderColor:'#E0DEDE',
                        borderWidth:1,
                        textAlign:'center',
                        backgroundColor: '#F8F8FA',
                        padding: 10,
                        color: '#878787',borderRadius:15,fontSize:13,marginLeft:15,marginRight:15,width:width-30}}
                    placeholder={"Mood"}/>
                </View>
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
                  style={{width:width/2,backgroundColor:'#FEC77D',height:60,alignItems:'center',justifyContent:'center'}}
              >
                  <Text style={{color:'#ffffff',alignItems:'center',fontSize:18}}>SAVE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={{width:width/2,backgroundColor:'#E9A750',height:60,alignItems:'center',justifyContent:'center'}}
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
    justifyContent: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  selectedTextHolder:
    {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 15,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    },
 
    selectedText:
    {
        fontSize: 18,
        color: 'white'
    }
});

export default Activity;