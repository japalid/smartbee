import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Modal, Platform, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
var srcAvatar = require("../../images/avatar.png");
var srcCamera = require("../../images/icon/opencamerasettings.png")

class Settings extends React.Component {

    static navigationOptions = {
        title: "Setting",
        headerTintColor: '#FFFFFF',
        headerTitleStyle:{ color: '#FFFFFF',alignSelf: 'center'},
        headerStyle: {
            backgroundColor: '#AD90CA'
        },
      };

  state = {
    popupMenu: false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  openPopupMenu(visible) {
    this.setState({popupMenu: visible});
  }

  render() {
      const width = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <View style={styles.viewAvatar}>
                            <ImageBackground source={srcAvatar} style={styles.imageAvatar}>
                                <TouchableOpacity style={{bottom:0,position:'absolute',right:0}}>
                                    <Image source={srcCamera} style={styles.camerabutton}/>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    </View>

                    <View style={{marginTop:25,marginLeft:20,marginRight:20,flexDirection:'column'}}>
                        <Text style={{fontWeight:'bold',fontSize:16,color:'#373943',marginBottom:15}}>ACCOUNT</Text>
                        <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate('AccountSetting')}
                        style={{borderBottomColor:'#707070',borderBottomWidth:1,paddingBottom:10,marginBottom:15}}>
                            <Text style={{color:'#2E313C'}}>Your Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate('PasswordSetting')}
                        style={{borderBottomColor:'#707070',borderBottomWidth:1,paddingBottom:10,marginBottom:15}}>
                            <Text style={{color:'#2E313C'}}>Change Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate('LanguageSetting')}
                        style={{borderBottomColor:'#707070',borderBottomWidth:1,paddingBottom:10,marginBottom:15}}>
                            <Text style={{color:'#2E313C'}}>Change Language</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop:25,marginLeft:20,marginRight:20,flexDirection:'column',marginBottom:60}}>
                        <Text style={{fontWeight:'bold',fontSize:16,color:'#373943',marginBottom:15}}>ABOUT</Text>
                        <TouchableOpacity style={{borderBottomColor:'#707070',borderBottomWidth:1,paddingBottom:10,marginBottom:15}}>
                            <Text style={{color:'#2E313C'}}>FAQ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderBottomColor:'#707070',borderBottomWidth:1,paddingBottom:10,marginBottom:15}}>
                            <Text style={{color:'#2E313C'}}>Bug Report</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderBottomColor:'#707070',borderBottomWidth:1,paddingBottom:10,marginBottom:15}}>
                            <Text style={{color:'#2E313C'}}>Write a Review</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

                <View style={{bottom:0,position: 'absolute',backgroundColor:'#EE534F',height:50,justifyContent:'center',alignItems:'center',flex:1,width:width}}>
                    <TouchableOpacity>
                        <Text style={{color:'#fff',fontSize:16}}>Logout</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  viewAvatar: {
      flex: 1,
      width:120,
      height:120,
      borderRadius: 60,
      flexDirection: 'row',
  },
  imageAvatar: {
      flex: 1,
      width:110,
      height:110
  },
  camerabutton: {

  }
});

export default Settings;