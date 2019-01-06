import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Modal, Platform, Dimensions, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
var srcAvatar = require("../../images/avatar.png");
var srcCamera = require("../../images/icon/opencamerasettings.png")
const width = Dimensions.get('window').width;
const height = Dimensions.get("window").height;
import { onSignOut } from "../../auth";

class Settings extends React.Component {

    static navigationOptions = {
        header: null
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
                          <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Setting</Text>
                      </View>
                      </View>
                      <View style={{marginRight:15}}>
                      
                      </View>
                  </View>
              </View>
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
                        >
                            <View style={{borderBottomColor:'#707070',paddingBottom:10,marginBottom:15,borderBottomWidth:0.3}}>
                                <Text style={{color:'#2E313C'}}>Your Account</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate('PasswordSetting')}
                        >
                            <View style={{borderBottomColor:'#707070',paddingBottom:10,marginBottom:15,borderBottomWidth:0.3}}>
                                <Text style={{color:'#2E313C'}}>Change Password</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate('LanguageSetting')}
                        style={{borderBottomColor:'#707070',paddingBottom:10,marginBottom:15}}>
                            <View style={{borderBottomColor:'#707070',paddingBottom:10,marginBottom:15,borderBottomWidth:0.3}}>
                                <Text style={{color:'#2E313C'}}>Change Language</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop:25,marginLeft:20,marginRight:20,flexDirection:'column',marginBottom:60}}>
                        <Text style={{fontWeight:'bold',fontSize:16,color:'#373943',marginBottom:15}}>ABOUT</Text>
                        <TouchableOpacity>
                            <View style={{borderBottomColor:'#707070',paddingBottom:10,marginBottom:15,borderBottomWidth:0.3}}>
                                <Text style={{color:'#2E313C'}}>FAQ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{borderBottomColor:'#707070',paddingBottom:10,marginBottom:15,borderBottomWidth:0.3}}>
                                <Text style={{color:'#2E313C'}}>Bug Report</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderBottomColor:'#707070',paddingBottom:10,marginBottom:15}}>
                            <View style={{borderBottomColor:'#707070',paddingBottom:10,marginBottom:15,borderBottomWidth:0.3}}>
                                <Text style={{color:'#2E313C'}}>Write a Review</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

                <View style={{bottom:0,position: 'absolute',backgroundColor:'#EE534F',height:50,justifyContent:'center',alignItems:'center',flex:1,width:width}}>
                    <TouchableOpacity
                    onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
                    >
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