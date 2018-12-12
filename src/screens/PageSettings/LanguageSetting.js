import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Modal, Platform, Dimensions } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
var srcCheck = require("../../images/icon/checkedlanguage.png")

class LanguageSetting extends React.Component {

    static navigationOptions = {
        title: "Change Language",
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
                    <TouchableOpacity style={{borderBottomColor:'#707070',borderBottomWidth:1,paddingBottom:10,marginBottom:15}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={srcCheck} style={{width:16,height:13}}/>
                        <Text style={{marginLeft:15}}>English (EN)</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderBottomColor:'#707070',borderBottomWidth:1,paddingBottom:10,marginBottom:15}}>
                    <View style={{flexDirection:'row'}}>
                        <Image style={{width:16,height:13}}/>
                        <Text style={{marginLeft:15}}>Indonesia (ID)</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                

            </ScrollView>
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

export default LanguageSetting;