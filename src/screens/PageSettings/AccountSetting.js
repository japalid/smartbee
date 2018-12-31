import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Modal, Platform, Dimensions, StatusBar } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
const width = Dimensions.get('window').width;
const height = Dimensions.get("window").height;
class AccountSetting extends React.Component {

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
                          <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Your Account</Text>
                      </View>
                      </View>
                      <View style={{marginRight:15}}>
                      
                      </View>
                  </View>
              </View>
           
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{marginTop:25,marginLeft:20,marginRight:20,flexDirection:'column'}}>
                        <View style={{borderBottomColor:'#707070',borderBottomWidth:0.3,paddingBottom:10,marginBottom:15}}>
                            <TextInput style={{color:'#2E313C'}} placeholder={"Name"}/>
                        </View>
                        <View style={{borderBottomColor:'#707070',borderBottomWidth:0.3,paddingBottom:10,marginBottom:15}}>
                            <TextInput style={{textAlignVertical:"top",color:'#2E313C'}} multiline={true} numberOfLines={6} placeholder={"Bio"}/>
                        </View>
                        <View style={{borderBottomColor:'#707070',borderBottomWidth:0.3,paddingBottom:10,marginBottom:15}}>
                            <TextInput style={{color:'#2E313C'}} placeholder={"Phone Number"}/>
                        </View>
                    </View>
                    

                </ScrollView>

                <View style={{bottom:0,position: 'absolute',backgroundColor:'#4ECD8A',height:50,justifyContent:'center',alignItems:'center',flex:1,width:width}}>
                    <TouchableOpacity>
                        <Text style={{color:'#fff',fontSize:16}}>SAVE</Text>
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

export default AccountSetting;