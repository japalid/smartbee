import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
var srcBg = require("../../images/background.png");

class DraftActivity extends React.Component {


    static navigationOptions = {
        title: "Draft",
        headerTintColor: '#FFFFFF',
        headerTitleStyle:{ color: '#FFFFFF',alignSelf: 'center'},
        headerStyle: {
            backgroundColor: '#AD90CA'
        },
      };

  constructor(props) {
    super(props);
    this.state = {
        GridListItems: [
            { key:1, image: require("../../images/icon/pottyicon.png"), desc: 'Potty' },
            { key:2, image: require("../../images/icon/incidenticon.png"), desc: 'Incident' },
            { key:3, image: require("../../images/icon/milkicon.png"),  desc: 'Milk' },
            { key:3, image: require("../../images/icon/napicon.png"),  desc: 'Nap' },
            { key:3, image: require("../../images/icon/othericon.png"),  desc: 'Other' },
            { key:3, image: require("../../images/icon/drafticon.png"),  desc: 'Draft' },
        ]
    }
  }

  componentDidMount() {
  }

  GetGridViewItem(item) {
    Alert.alert(item);
  }

  _render = ({item,index}) => {
      return(
        <View>
            {item.empty?(
                <Text></Text>
            ):
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:10}}>
                    <View style={{marginLeft:15}}>
                        <Image source={item.image} style={{width:39,height:45}}/>
                    </View>
                    <View style={{marginLeft:20}}>
                        <Text>{item.desc}</Text>
                    </View>
                </TouchableOpacity>
            }
        </View>
      );
  }

  render() {
    
    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        <View style={styles.container}>
            <View></View>
            <View
                style={{flexDirection:'row',alignItems:'center'}}
            >
                <Text>Time</Text>
                <TouchableOpacity>
                    <Text style={{color:'#B28486'}}>Today : 08:31 am</Text>
                </TouchableOpacity>
            </View>
            <View></View>
            <View></View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  }
});

export default DraftActivity;