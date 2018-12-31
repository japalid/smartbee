import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, FlatList, ActivityIndicator, StatusBar, Platform, Dimensions, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Student from './StudentList/Components/Student';
var srcBg = require("../images/background.png");
import api from "../networks/api";
import constants from '../networks/constants';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class Students extends React.Component {

  static navigationOptions = () => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
    this.getKelas();
  }

  getKelas() {
    var response = [];
    api({
      method: 'get',
      url: '/kelas/siswa'
    }).then((resp) => {
        resp.map((item)=>{
          response.push(item);
        })
        this.setState({data:response,loading:false})
    })
  }

  componentDidMount() {
    
  }

  _renderItem = ({item}) => { return( <Student item={item} navigation={this.props.navigation} /> ); }

  render() {
    if(this.state.loading) {
      return( <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large" color={constants.color.purple} />
              </View>
          )
    }else {
      return (
        <View style={{flex:1}}>
            <StatusBar backgroundColor="#AD90CA" />

            <View style={{flexDirection:'row',backgroundColor:'#AD90CA',height:70 }}>
                <View style={{marginTop: (Platform.OS) == 'ios' ? 30 : 0,alignItems:'center',justifyContent:'space-between',flexDirection:'row',width:width}}>
                  <View style={{marginLeft:15}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                      <Image source={require("../images/icon/backicon.png")} style={{width:10,height:20}} />
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                    <View style={{margin:10}}>
                      <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Students</Text>
                    </View>
                  </View>
                  <View style={{marginRight:15}}>
                    
                  </View>
                </View>
              </View>

            <ScrollView contentContainerStyle={{flex: 1}} showsVerticalScrollIndicator={false}>
              
                <View style={styles.container}>
                    <ImageBackground style={styles.imageBackground} source={srcBg}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.data}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => item.id+""}
                        />
                    </ImageBackground>
                </View>
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  }
});

export default Students;