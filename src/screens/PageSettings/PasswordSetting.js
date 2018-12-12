import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Modal, Platform, Dimensions } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

class PasswordSetting extends React.Component {

    static navigationOptions = {
        title: "Change Password",
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

                    <View style={{marginTop:25,marginLeft:20,marginRight:20,flexDirection:'column'}}>
                        <TextInput style={{borderBottomColor:'#707070',borderBottomWidth:1,paddingBottom:10,marginBottom:15}} placeholder={"Your Old Password"}/>
                        <TextInput style={{borderBottomColor:'#707070',borderBottomWidth:1,paddingBottom:10,marginBottom:15}} placeholder={"Your New Password"}/>
                        <TextInput style={{borderBottomColor:'#707070',borderBottomWidth:1,paddingBottom:10,marginBottom:15}} placeholder={"Confirmation Password"}/>
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

export default PasswordSetting;