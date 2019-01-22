import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, FlatList, ActivityIndicator, StatusBar, Platform, Dimensions, TouchableOpacity, AsyncStorage, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import StudentsGet from './Components/StudentsGet';
var srcBg = require("../../images/background.png");
import * as request from "../../networks/request";
import constants from '../../networks/constants';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class StudentGet extends React.Component {

  static navigationOptions = () => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      selectedSiswa: []
    };
    this.getKelas();
    this.onClick = this.onClick.bind(this)
  }

  getKelas() {
    var response = [];
    AsyncStorage.getItem("auth-key")
        .then(async (res) => {
          if (res !== null) {
            let resp = await request.studentKelas(res);
            let respy = JSON.parse(resp._bodyText);
            respy.map((item)=>{
              response.push(item);
            })
            this.setState({data:response,loading:false})
          }
        })
        .catch(err => this.setState({data:response,loading:false}))
  }

  componentDidMount() {
    
  }

  onClick(){
    if(this.state.selectedSiswa.length == 0) {
      Alert.alert("Sorry, Please choose one or more students first")
    }else {
      var page = this.props.navigation.getParam("to");
      this.props.navigation.navigate(page,{siswa:this.state.selectedSiswa});
    }
  };

  _next(data,proc) {
    var dd = this.state.selectedSiswa;
    if(proc=="add") {
        dd.push(data)
    }else if(proc=="remove") {
        var dd2 = [];
        dd.map((item) => {
            if(item.id!=data.id) {
                dd2.push(item)
            }
        })
        dd = dd2;
    }
    this.setState({selectedSiswa:dd})
  }

  _clearSelectedSiswa() {
    this.setState({selectedSiswa:[]});
  }

  _renderItem = ({item}) => { return( <StudentsGet updateParent={this._next.bind(this)} onRef={ref => (this.child = ref)} item={item} navigation={this.props.navigation} /> ); }

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
                      <Image source={require("../../images/icon/backicon.png")} style={{width:10,height:20}} />
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

            <TouchableOpacity
                style={{backgroundColor:"#0576DC",height:50,width:width,position:'absolute',bottom:0,alignItems:'center',justifyContent:'center'}}
                onPress={()=>this.onClick()}
              >
              <View>
                  <Text style={{color:"#fff"}}>NEXT</Text>
              </View>
              </TouchableOpacity>
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

export default StudentGet;