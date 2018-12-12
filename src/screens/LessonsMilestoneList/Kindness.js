import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Milestone from "./Components/Milestone";
import Explore from "./Components/Explore";
var srcBackground = require("../../images/background.png");
var srcExampleImage = require("../../images/milestoneimage.png");
var srcExampleImageExplore = require("../../images/exampleimageexplore.png");
var srcExampleImageExplore2 = require("../../images/exampleimageexplore2.png");
var srcCheck = require("../../images/icon/milestonecheckicon.png");
var srcUnCheck = require("../../images/icon/milestoneuncheckicon.png");

class Kindness extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      srcBanner: require('../../images/bannerexamplemilestone.png')
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={this.state.srcBanner} style={{width: '100%',height:360}} />
        <ImageBackground source={srcBackground} style={{width:'100%',height:'100%'}}>
          <View style={{padding: 20}}>
            <Text style={{color: '#8865A9'}}>About this milestone</Text>
            <Text style={{marginTop: 5}}>Keluarga adalah lingkungan yang sangat penting bagi perkembangan dan pertumbuhan seorang anak. karena keluarga adalah guru pertama dan panutan bagi mereka.</Text>

            <TouchableOpacity
              style={{marginTop:20,width:'100%',backgroundColor:'#F8F8F9',borderRadius:6,alignItems:'center',borderColor:'#E2DEDF',padding:6,borderWidth:2}}
            >
            <Text style={{color:'#2E313C'}}>Class</Text>
            </TouchableOpacity>

            <Text style={{color:'#878787',marginTop:15,marginBottom:10}}>MILESTONE</Text>
            <ScrollView scrollEventThrottle={16}>
              <View style={{height:250}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  
                  <Milestone navigation={this.props.route.navigation} imageUri={srcExampleImage} imageStatus={srcCheck} name="Painting to build creativity" />
                  <Milestone navigation={this.props.route.navigation} imageUri={srcExampleImage} imageStatus={srcUnCheck} name="Painting to build creativity" />
                  <Milestone navigation={this.props.route.navigation} imageUri={srcExampleImage} imageStatus={srcUnCheck} name="Painting to build creativity" />
                  <Milestone navigation={this.props.route.navigation} imageUri={srcExampleImage} imageStatus={srcUnCheck} name="Painting to build creativity" />

                </ScrollView>
              </View>
              
            </ScrollView>

            <Text style={{color:'#878787',marginTop:15,marginBottom:10}}>EXPLORE</Text>
            <ScrollView scrollEventThrottle={16}>
              <View style={{height:250}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >

                  <Explore color="#C2ABD7" imageUri={srcExampleImageExplore} name="Marshmallow test" />
                  <Explore color="#628ABB" imageUri={srcExampleImageExplore2} name="How to make kids feels free" />

                </ScrollView>
              </View>
              
            </ScrollView>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default Kindness;