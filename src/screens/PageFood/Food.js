import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, FlatList, Dimensions, TextInput, Platform, StatusBar, AsyncStorage, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImagePicker from 'react-native-image-picker';
var srcBg = require("../../images/background.png");
var srcStudent = require("../../images/studentexample.png");
import RadioButton from "./Components/RadioButton";
import RadioButtonJenis from "./Components/RadioButtonJenis";
import * as request from "../../networks/request";
import constants from "../../networks/constants";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
class Food extends React.Component {
    static navigationOptions = {
        header: null
      };

  constructor(props) {
    super(props);
    this.state = { 
        radioItems: 
        [
            {
                label: 'Meal',
                selected: true
            }, 
 
            {
                label: 'Snack',
                selected: false,
            }
        ],
        radioItemsSnack: [], 
        radioItemsMeal: [],
        selectedItem: '',
        selectedItemMeal: '',
        selectedItemSnack: '',
        selectedId: 0,
        dataCategory: [],
        dataFood:[],
        studentList: [],
        avatarSource: [],
        loading:true }
  }

  _getCategoryActivityId() {
      // 1 -> id Food
    AsyncStorage.getItem("auth-key")
    .then(async (res) => {
        if (res !== null) {
            var data_snack = [];
            var data_meal = [];
            let resp = await request.activity_category_id(res,1);
            let respy = JSON.parse(resp._bodyText);

            respy.Detail.map((item)=>{
                if(item.detail=="Snack") {
                    data_snack.push({
                        id:item.id,
                        label:item.detail_status,
                        selected:false
                    });
                }
                if(item.detail=="Meal") {
                    data_meal.push({
                        id:item.id,
                        label:item.detail_status,
                        selected:false
                    })
                }
            })
            
            this.setState({dataCategory:respy.Detail,loading:false,radioItemsSnack:data_snack,radioItemsMeal:data_meal})
        }
    })
    .catch(err => this.setState({loading:false}))
  }

  _getListFood() {
    AsyncStorage.getItem("auth-key")
    .then(async (res) => {
        if (res !== null) {
            let resp = await request.activity_category_id(res,1);
            let respy = JSON.parse(resp._bodyText);
            this.setState({dataFood:respy})
        }
    })
    .catch(err => this.setState({loading:false}))
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

  componentDidMount() {
    this.state.radioItems.map(( item ) =>
    {
        if( item.selected == true )
        {
            this.setState({ selectedItem: item.label });
        }
    });
    this._getCategoryActivityId();
    this._getListFood();
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

    changeActiveRadioButtonMeal(index)
    {
        this.state.radioItemsMeal.map(( item ) =>
        {
            item.selected = false;
        });
 
        this.state.radioItemsMeal[index].selected = true;
 
        this.setState({ radioItemsMeal: this.state.radioItemsMeal }, () =>
        {
            this.setState({ selectedItemMeal: this.state.radioItemsMeal[index].label, selectedId:this.state.radioItemsMeal[index].id });
        });
    }

    changeActiveRadioButtonSnack(index)
    {
        this.state.radioItemsSnack.map(( item ) =>
        {
            item.selected = false;
        });
 
        this.state.radioItemsSnack[index].selected = true;
 
        this.setState({ radioItemsSnack: this.state.radioItemsSnack }, () =>
        {
            this.setState({ selectedItemSnack: this.state.radioItemsSnack[index].label, selectedId:this.state.radioItemsSnack[index].id });
        });
    }

    _renderItemRadioButton() {
        if(this.state.selectedItem=="Meal") {
            return(
                <View style={{flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#E2DEDF',borderRadius:20,backgroundColor:'#F8F8FA', marginTop:10}}>
                {this.state.radioItemsMeal.map(( item, key ) =>
                    (
                        <RadioButtonJenis key = { key } button = { item } onClickItem = { this.changeActiveRadioButtonMeal.bind( this, key ) }/>
                    ))
                }
                </View>
            );
        }else if(this.state.selectedItem=="Snack") {
            return(
                <View style={{flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#E2DEDF',borderRadius:20,backgroundColor:'#F8F8FA', marginTop:10}}>
                {this.state.radioItemsMeal.map(( item, key ) =>
                    (
                        <RadioButtonJenis key = { key } button = { item } onClickItem = { this.changeActiveRadioButtonSnack.bind( this, key ) }/>
                    ))
                }
                </View>
            );
        }
    }

  render() {
    let Arr = this.state.avatarSource.map((item, key) => {
        return (<View style={{marginRight:15}} key={key}>
            <Image source={item.source} style={{borderRadius:15,width:97,height:97}} />
        </View>)
    }) 
    return (
        <View style={styles.container}>

            <StatusBar backgroundColor="#F56483" />
            <View style={{flexDirection:'row',backgroundColor:'#F56483',height:70 }}>
                <View style={{marginTop: (Platform.OS) == 'ios' ? 30 : 0,alignItems:'center',justifyContent:'space-between',flexDirection:'row',width:width}}>
                    <View style={{marginLeft:15}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                        <Image source={require("../../images/icon/backicon.png")} style={{width:10,height:20}} />
                    </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                    <View style={{margin:10}}>
                        <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Food</Text>
                    </View>
                    </View>
                    <View style={{marginRight:15}}>
                    
                    </View>
                </View>
            </View>



        <ScrollView showsVerticalScrollIndicator={false}>

        {
                (this.state.loading)?
                <View style={{flex:1,justifyContent:'center',alignItems:'center',height:height}}>
                  <ActivityIndicator size="large" color={constants.color.purple} />
                </View>:
                <View>

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
          <View style={{marginTop:10,borderBottomColor:'#707070',borderBottomWidth:0.3,marginBottom:10,paddingBottom:10,marginLeft:15,marginRight:15}}>

            <View style={{flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#E2DEDF',borderRadius:20,backgroundColor:'#F8F8FA'}}>
            
                {
                    this.state.radioItems.map(( item, key ) =>
                    (
                        <RadioButton key = { key } button = { item } onClick = { this.changeActiveRadioButton.bind( this, key ) }/>
                    ))
                }
            </View>

            
                {this._renderItemRadioButton()}


            <View style={{flexDirection:'row',marginTop:10,marginBottom:15,justifyContent:'space-between'}}>
                <View style={{flex:1,alignItems:'center'}}>
                    <TextInput 
                    style={{
                        borderColor:'#E0DEDE',
                        borderWidth:1,
                        textAlign:'center',
                        backgroundColor: '#F8F8FA',
                        padding: 10,
                        color: '#878787',borderRadius:15,fontSize:13,width:width/2,marginLeft:15}}
                    placeholder={"Food"}/>
                </View>
                <View style={{flex:1,alignItems:'center',flexDirection:'row'}}>
                    <TextInput 
                    style={{
                        textAlign:'center',
                        flex:1,
                        borderColor:'#E0DEDE',
                        borderWidth:1,
                        backgroundColor: '#F8F8FA',
                        padding: 10,
                        color: '#878787',borderRadius:15,fontSize:13,width:width/4,marginLeft:90}}
                    placeholder={"g"}
                    />
                </View>
            </View>

            <View style={{flexDirection:'column',alignItems:'center',borderRadius:15, marginTop:10,justifyContent:'center',marginLeft:15,marginRight:15}}>
                <TouchableOpacity style={{backgroundColor:'#F56483',padding:10,alignItems:'center',width:width - 30,borderRadius:15}}>
                    <Text style={{alignItems:'center',color:'#fff'}}>Add</Text>
                </TouchableOpacity>
            </View>

          </View>

          <View style={{flexDirection:'column',marginTop:10,borderBottomColor:'#707070',borderBottomWidth:0.3,marginBottom:10,paddingBottom:10,marginLeft:15,marginRight:15}}>
                <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{marginBottom:15}}
                      >
                      {Arr}
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
          </View>
        }
        </ScrollView>
          <View style={{flexDirection:'row',position:'absolute',bottom:0,height:40,alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity
                  style={{width:width/2,backgroundColor:'#F56483',height:60,alignItems:'center',justifyContent:'center'}}
              >
                  <Text style={{color:'#ffffff',alignItems:'center',fontSize:18}}>SAVE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={{width:width/2,backgroundColor:'#E74668',height:60,alignItems:'center',justifyContent:'center'}}
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

export default Food;