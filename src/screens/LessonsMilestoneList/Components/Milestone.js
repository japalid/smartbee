import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
class Milestone extends React.Component {

  static navigationOptions = {
    header: null ,
  };

  constructor(props) {
    super(props);
    this._detail = this._detail.bind(this);
  }

  componentDidMount() {
  }

  _detail() {
    this.props.navigation.navigate("LessonsMilestoneDetail")
  }

  render() {
    return (
        <View style={{height:250,width:180,marginRight:10}}
        >
            
            <ImageBackground style={{width:'100%',height:250}} imageStyle={{ borderRadius:10 }} source={this.props.imageUri}>
            <View style={{width:'100%',backgroundColor:'#FFBE69',height:30,borderTopLeftRadius:10,borderTopRightRadius:10}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:9,color:'#FFFFFF',textAlign:'center',marginTop:8}}>HAVE YOU REACHED THIS MILESTONE</Text>
                </View>
            </View>
            <View style={{height:60,bottom:0,position:'absolute',width:'100%',flex:1}}>
                <View style={{flexDirection:'row',position:'absolute',bottom:0}}>
                  <View
                      style={{width:'100%'}}
                      
                  >
                      <View style={{position:'absolute',bottom:0,flex:1,height:30,backgroundColor:'#FFBE69',borderBottomLeftRadius:10,borderBottomRightRadius:10,width:'100%'}}>
                          <Text style={{fontSize:9,color:'#FFFFFF',marginLeft:65,position:'absolute',top:0,marginTop:8}}>{this.props.name}</Text>
                      </View>
                      <TouchableOpacity onPress={()=>this._detail()}>

                      <Image style={{width:60,height:60}} source={this.props.imageStatus}/>
                      </TouchableOpacity>
                  </View>
                </View>
            </View>
            </ImageBackground>
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20
  }
});

export default Milestone;