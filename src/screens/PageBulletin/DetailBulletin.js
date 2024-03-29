import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground, Dimensions, ActivityIndicator, Platform, TouchableOpacity, StatusBar } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import HTML from 'react-native-render-html';
import api from "../../networks/api";
import constants from '../../networks/constants';
var srcBackground = require("../../images/background.png");

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class DetailBulletin extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
        data1: [],
        loading: true,
    }
    this._getBlog();
  }

  _getBlog() {
      var data = [];
    api({
      method: 'get',
      url: '/bulletin/blog/'+this.props.navigation.getParam("id")
    }).then((resp) => {
        data.push(resp)
        if(resp.length>0) {
            this.setState({data1:data,loading:false})
        }else {
            this.setState({loading:false});
            this.props.navigation.pop();
        }
    })
  }

  componentDidMount() {
    
  }

  render() {
    if(this.state.loading) {
        return( <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <ActivityIndicator size="large" color={constants.color.purple} />
                </View>
            )
      }else {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#AD90CA" />
            <View style={{flexDirection:'row',backgroundColor:'#AD90CA',height:70 }}>
                  <View style={{marginTop: (Platform.OS) == 'ios' ? 30 : 0,alignItems:'center',justifyContent:'space-between',flexDirection:'row',width:width}}>
                      <View style={{marginLeft:15}}>
                      <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                          <Image source={require("../../images/icon/backicon.png")} style={{width:10,height:20}} />
                      </TouchableOpacity>
                      </View>
                      <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                      <View style={{margin:10}}>
                          <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Blog</Text>
                      </View>
                      </View>
                      <View style={{marginRight:15}}>
                      
                      </View>
                  </View>
              </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <ImageBackground style={{width:'100%',height:'100%'}} source={srcBackground}>

                <View style={{flexDirection:'row',alignItems:'center',marginTop:15,marginLeft:15,marginRight:15,marginBottom:15}}>
                    <Image source={require("../../images/icon/smartbeeblog.png")} style={{width:53,height:53}} />
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:15,flex:1}}>
                        <View style={{flexDirection:'column'}}>
                            <View>
                                <Text style={{fontSize:15,color:'#2E313C'}}>{this.state.data1[0].author}</Text>
                            </View>
                            <View>
                                <Text style={{color:'#2E313C',fontSize:9}}>{this.state.data1[0].date_created}</Text>
                            </View>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Image source={require("../../images/icon/pinblog.png")} style={{width:21,height:21}} />
                        </View>
                    </View>
                </View>
                <Image source={{uri:this.state.data1[0].image}} style={{width:'100%',height:320}}></Image>
                
                    <View style={{padding:20,marginTop:10}}>
                        <Text style={{color:"#8865A9",fontSize:19}}>{this.state.data1[0].title}</Text>
                        <HTML html={this.state.data1[0].content} ignoredStyles={['display', 'width', 'height', 'font-family', 'padding', 'background-color']} imagesMaxWidth={Dimensions.get('window').width} />


                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    );
      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  viewRow: {
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      padding: 10,
      marginBottom: 2
  },
  GridViewContainer: {
    flex:1,
    width: 'auto',
    height: 'auto',
    marginTop: 10 
 },
 GridViewTextLayout: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    color: '#fff',
    padding: 10,
  }
});

export default DetailBulletin;