import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Modal, Platform, Dimensions, StatusBar } from "react-native";
import { ScrollView, TextInput, FlatList } from "react-native-gesture-handler";
import NotificationItems from './Components/NotificationItems';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class Notification extends React.Component {

    static navigationOptions = {
        header: null
      };

  constructor(props) {
    super(props);
    this.state = {
        popupMenu: false,
        data: [
            {key:1,title:'Robert Pattinson',subtitle:'memakan semua makanan yang dihidangkan',date:'6 Jan',time:'10:20'},
            {key:2,title:'Cecillia Robbie',subtitle:'hari ini banyak belajar 🤩',date:'6 Jan',time:'11:35'},
            {key:3,title:'Carry Puth',subtitle:'hari ini banyak bermain 🤠',date:'7 Jan',time:'09:20'}
        ]
    };
  }

  componentDidMount() {
  }

  _renderItem = ({item}) => <NotificationItems item={item} navigation={this.props.navigation} />

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
                        <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Notification</Text>
                    </View>
                    </View>
                    <View style={{marginRight:15}}>
                        <TouchableOpacity style={{marginRight:10}}>
                            <Image source={require('../../images/icon/searchicon.png')} style={{width:16,height:16}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
           
           <FlatList
                style={{margin:10}}
                scrollEnabled={true}
                data={this.state.data}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => item.key+""}
            /> 
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EFF5'
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

export default Notification;