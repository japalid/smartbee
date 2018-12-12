import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Modal, Platform, Dimensions } from "react-native";
import { ScrollView, TextInput, FlatList } from "react-native-gesture-handler";
import NotificationItems from './Components/NotificationItems';

class Notification extends React.Component {

    static navigationOptions = {
        title: "Notification",
        headerTintColor: '#FFFFFF',
        headerTitleStyle:{ color: '#FFFFFF',alignSelf: 'center'},
        headerStyle: {
            backgroundColor: '#AD90CA'
        },
        headerRight: (
            <TouchableOpacity style={{marginRight:10}}>
                <Image source={require('../../images/icon/searchicon.png')} style={{width:16,height:16}} />
            </TouchableOpacity>
        )
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
      const width = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
           
           <FlatList
                style={{margin:10}}
                scrollEnabled={true}
                data={this.state.data}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => item.id+""}
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