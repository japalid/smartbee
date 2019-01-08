import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, FlatList, ActivityIndicator, Dimensions, AsyncStorage } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import api from "../../networks/api";
import * as request from "../../networks/request";
import constants from '../../networks/constants';
import AutoHeightImage from 'react-native-auto-height-image';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class News extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        data1: [],
        data2: [],
        loading: true
    }
    this._getNews();
  }

  _getNews() {
    var arr_data_1 = [];
    var arr_data_2 = [];
    AsyncStorage.getItem("auth-key")
        .then(async (res) => {
          if (res !== null) {
            let resp = await request.bulletinNews(res);
            let respy = JSON.parse(resp._bodyText);
            var numbers = 1;
            respy.data.map((item)=>{
                if(numbers%2!=0) {
                    arr_data_1.push(item);
                }else {
                    arr_data_2.push(item);
                }
                numbers++;
            })
            this.setState({data1:arr_data_1,data2:arr_data_2,loading:false})
          }
        })
        .catch(err => this.setState({data1:arr_data_1,data2:arr_data_2,loading:false}))
  }

  componentDidMount() {
  }

  _render = ({item,index}) => {
      return(
        <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:15,flex:1,
        width: '100%',
        height: 'auto'}}>
            <TouchableOpacity
            style={{borderRadius:15,width:'100%',height:210}}
                onPress={()=>this._navigate(item.id)}
            >
                <View style={{borderRadius:15,width:'100%',height:200}}>
                    <Image source={{uri:item.image}} style={{borderRadius:15,width:'100%',height:'100%',resizeMode:'cover'}} />
                </View>
            </TouchableOpacity>
            <Text style={{fontSize:10,color:'#464646',marginLeft:5}}>{item.title}</Text>
        </View>
      );
  }

  _navigate(key) {
    this.props.route.navigation.navigate("DetailNews",{id:key});
    }

  render() {
    if(this.state.loading) {
        return( <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <ActivityIndicator size="large" color={constants.color.purple} />
                </View>
            )
      }else {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:"#FFFFFF"}}>
                <View style={{flexDirection:'row',paddingVertical: 10,
                paddingHorizontal: 5,flex:1,alignItems:'center',justifyContent:'center'}}>
        
                    <FlatList
                        style={{margin:3}}
                        data={ this.state.data1 }
                        renderItem={ this._render }
                        keyExtractor={(item, index) => item.id+""}
                        />
                        
                    <FlatList
                        style={{margin:3}}
                        data={ this.state.data2 }
                        renderItem={ this._render }
                        keyExtractor={(item, index) => item.id+""}
                        />
        
                </View>
            </ScrollView>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
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

export default News;