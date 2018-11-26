import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

class Explore extends React.Component {

  static navigationOptions = {
    header: null ,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
        <View style={{height:250,width:180,marginRight:10}}>
                    
            <ImageBackground style={{width:'100%',height:250}} imageStyle={{ borderRadius:10 }} source={this.props.imageUri}>
            <View style={{width:'100%',backgroundColor:this.props.color,height:30,borderTopLeftRadius:10,borderTopRightRadius:10}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:8,color:'#FFFFFF',textAlign:'center',marginTop:8}}>HAVE YOU READ THIS ARTICLE</Text>
                </View>
            </View>
            <View style={{height:30,bottom:0,position:'absolute',width:'100%'}}>
                <View style={{alignItems:'center',height:30,backgroundColor:this.props.color,borderBottomLeftRadius:10,borderBottomRightRadius:10,width:'100%'}}>
                    <Text style={{fontSize:8,color:'#FFFFFF',position:'absolute',top:0,marginTop:8}}>{this.props.name}</Text>
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

export default Explore;