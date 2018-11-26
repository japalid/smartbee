import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Platform, LayoutAnimation, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Student from './StudentList/Components/Student';
var srcBg = require("../images/background.png");

class Students extends React.Component {

  static navigationOptions = () => ({
    title: "Students",
    headerTintColor: '#FFFFFF',
    headerTitleStyle:{ color: '#FFFFFF',alignSelf: 'center'},
    headerStyle: {
        backgroundColor: '#AD90CA'
    },
  });

  constructor(props) {
    super(props);
    this.state = {
      data: [
          {
            id: 1,
            title: "Kelas Badak", 
            student: [
                { avatar:'',name:'Lily Josh',id:1 },
                { avatar:'',name:'Cecilla Robbie',id:2 },
                { avatar:'',name:'Piere Paul',id:3 }
            ]
          },
          {
            id: 2,
            title: "Kelas Mawar", 
            student: [
                { avatar:'',name:'Robert Pattinson',id:4 }
            ]
          },
          {
            id: 3,
            title: "Kelas Melati", 
            student: [
                { avatar:'',name:'Carry Puth',id:5 }
            ]
          },
      ]
    };
  }

  componentDidMount() {
    
  }

  _renderItem = ({item}) => <Student item={item} navigation={this.props.navigation} />

  render() {
    return (
      <ScrollView contentContainerStyle={{flex: 1}} showsVerticalScrollIndicator={false}>
           
            <View style={styles.container}>
                <ImageBackground style={styles.imageBackground} source={srcBg}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => item.id+""}
                    />
                </ImageBackground>
            </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  }
});

export default Students;