import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, FlatList, Dimensions, TextInput, Platform, StatusBar, AsyncStorage, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Modal from 'react-native-modalbox';
import ImagePicker from 'react-native-image-picker';
var srcBg = require("../../images/background.png");
var srcStudent = require("../../images/studentexample.png");
import RadioButton from "./Components/RadioButton";
import * as request from "../../networks/request";
import constants from "../../networks/constants";
import { CheckBox } from 'react-native-elements';

var screen = Dimensions.get('window');
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
class Academic extends React.Component {
    static navigationOptions = {
        header: null
      };

  constructor(props) {
    super(props);
    this.state = { 
        radioItems: [], 
        selectedItem: '',
        selectedId: '',
        loading: true,
        selectedIdSubject: '',
        selectedSubject: 'Subject',
        subjectList: [],
        percentageInput: '',
        studentList: [],
        avatarSource: []
     }
  }

  componentDidMount() {
    this.state.radioItems.map(( item ) =>
    {
        if( item.selected == true )
        {
            this.setState({ selectedItem: item.label });
        }
    });
    this._getCategoryActivityId();
    this._getListSubject();
  }

  _getCategoryActivityId() {
    // 10 -> id Academic
  AsyncStorage.getItem("auth-key")
  .then(async (res) => {
      if (res !== null) {
          var data = [];
          let resp = await request.activity_category_id(res,10);
          let respy = JSON.parse(resp._bodyText);
          respy.Detail.map((item)=>{
              data.push({
                  id:item.id,
                  label:item.detail_status,
                  selected:false
              })
          })
          this.setState({loading:false,radioItems:data})
      }
  })
  .catch(err => this.setState({loading:false}))
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
            this.setState({ selectedItem: this.state.radioItems[index].label, selectedId: this.state.radioItems[index].id });
        });
    }

    _getListSubject() {
        AsyncStorage.getItem("auth-key")
        .then(async (res) => {
            if (res !== null) {
                let resp = await request.activity_subject_list(res);
                let respy = JSON.parse(resp._bodyText);
                this.setState({subjectList:respy,loading:false})
            }
        })
        .catch(err => this.setState({loading:false}))
    }


    openPopupMenu() {
        this.refs.modalReason.open();
    }

    closePopUp(id,kelas) {
        this.setState({selectedSubject:kelas,selectedIdSubject:id})
        this.refs.modalReason.close();
    }

    _renderSubject() {
        return(
            this.state.subjectList.map((data) => {
                return(
                    <CheckBox
                            key={data.id}
                            containerStyle={{borderWidth:0,borderColor:'transparent',backgroundColor:'transparent'}}
                            title={data.mapel}
                            checked={this.state.checked}
                            onPress={()=>this.closePopUp(data.id,data.mapel)}
                        />
                )
            }
            )
        )
      }
      
    _imageGet() {
        ImagePicker.showImagePicker(options, (response) => {
            // console.warn('Response = ', response);
          
            if (response.didCancel) {
              console.warn('User cancelled image picker');
            } else if (response.error) {
              console.warn('ImagePicker Error: ', response.error);
            } else {
              const source = { uri: response.uri };
              // You can also display the image using data:
            //   const source = { uri: 'data:image/jpeg;base64,' + response.data };
              this.state.avatarSource.push({
                  source
              });
              this.setState({
                  avatarSource: this.state.avatarSource
              })
            }
          });
    }

  render() {
    let Arr = this.state.avatarSource.map((item, key) => {
        return (<View style={{marginRight:15}} key={key}>
            <Image source={item.source} style={{borderRadius:15,width:97,height:97}} />
        </View>)
    }) 
    return (
        <View style={styles.container}>

            <StatusBar backgroundColor="#90C8BB" />
            <View style={{flexDirection:'row',backgroundColor:'#90C8BB',height:70 }}>
                <View style={{marginTop: (Platform.OS) == 'ios' ? 30 : 0,alignItems:'center',justifyContent:'space-between',flexDirection:'row',width:width}}>
                    <View style={{marginLeft:15}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                        <Image source={require("../../images/icon/backicon.png")} style={{width:10,height:20}} />
                    </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                    <View style={{margin:10}}>
                        <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Academic</Text>
                    </View>
                    </View>
                    <View style={{marginRight:15}}>
                    
                    </View>
                </View>
            </View>

            <Modal 
                ref={"modalReason"}
                style={{
                    borderRadius: 15,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 'auto'
                }}
                position='center'
                backdrop={true}
                onClosed={()=>{
                    
                }}
            >
                    <View style={{backgroundColor:'#AB8CC8',borderTopLeftRadius:15,borderTopRightRadius:15,padding:20}}>
                        <Text style={{color:'#FFFFFF',fontSize:15}}>Select Class</Text>
                    </View>
                    <View>
                        {this._renderSubject()}
                    </View>
            </Modal>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flexDirection:'row',alignItems:'center',height:60,marginTop:20,borderBottomColor:'#707070',borderBottomWidth:0.3,marginBottom:15,marginLeft:15,marginRight:15}}>
              <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{marginBottom:15}}
                      >

                    {
                        this.props.navigation.getParam("siswa").map(( item, key )=>(
                            <View key={key} style={{width:50,height:50,borderRadius:25,alignItems:'center',borderWidth:2,borderColor:'#B69CCF',marginRight:15}}>
                                <Image source={{uri:item.foto}} style={{width:45,height:45,borderRadius:22.5}} />
                            </View>
                        ))
                    }
                        

              </ScrollView>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',marginTop:10,borderBottomColor:'#707070',borderBottomWidth:0.3,marginBottom:10,paddingBottom:10,marginLeft:15,marginRight:15}}>
              <Text style={{marginRight:15,color:'#AEAEAE'}}>Time</Text>
              <TouchableOpacity>
                  <Text style={{color:'#B28486'}}>Today : 08:31 am</Text>
              </TouchableOpacity>
          </View>        
          <View style={{justifyContent:'center',alignItems:'center',marginTop:10,borderBottomColor:'#707070',borderBottomWidth:0.3,marginBottom:10,paddingBottom:10,marginLeft:15,marginRight:15}}>
            <View style={{alignItems:'center',marginBottom:10,flex:1,justifyContent:'center',marginLeft:15,marginRight:15,flexDirection:'column'}}>
                <TouchableOpacity
                onPress={()=>this.openPopupMenu()}
                    style={{width:width-30,borderWidth:1,borderColor:'#E2DEDF',borderRadius:20,backgroundColor:'#F8F8FA',padding:10}}
                >
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontSize:15,color:'#878787'}}>{this.state.selectedSubject}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#E2DEDF',borderRadius:20,backgroundColor:'#F8F8FA'}}>
                {
                    this.state.radioItems.map(( item, key ) =>
                    (
                        <RadioButton key = { key } button = { item } onClick = { this.changeActiveRadioButton.bind( this, key ) }/>
                    ))
                }
            </View>

            <View style={{flex:1,flexDirection:'row',backgroundColor:'#F8F8FA',marginTop:10,borderRadius:20,marginBottom:15}}>
              <TextInput
                    onChangeText={(val) => this.setState({percentageInput:val})}
                    value={this.state.percentageInput}
                    keyboardType={"number-pad"}
                    style={{flex: 1,
                      padding: 10,
                      backgroundColor: '#F8F8FA',
                      color: '#878787',borderRadius:20,fontSize:15,}}
                  placeholder="Percentage"
                  multiline={false}
                  underlineColorAndroid="transparent"
              />
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity
                    onPress={()=>this.setState({percentageInput:""})}
                    style={{marginRight:15}}>
                        <Image source={require("../../images/icon/removeinput.png")} style={{width:13,height:15}}/>
                    </TouchableOpacity>
                </View>
            </View>
          </View>
          <View style={{flexDirection:'column',marginTop:10,borderBottomColor:'#707070',borderBottomWidth:0.3,marginBottom:10,paddingBottom:10,marginLeft:15,marginRight:15}}>
                <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{marginBottom:15}}
                      >
                      {Arr}
                      
                      <TouchableOpacity
                      onPress={()=>this._imageGet()}>
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
                  style={{width:width/2,backgroundColor:'#90C8BB',height:60,alignItems:'center',justifyContent:'center'}}
              >
                  <Text style={{color:'#ffffff',alignItems:'center',fontSize:18}}>SAVE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                    onPress={()=>console.warn(this.state.avatarSource)}
                  style={{width:width/2,backgroundColor:'#6EB5A5',height:60,alignItems:'center',justifyContent:'center'}}
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

export default Academic;