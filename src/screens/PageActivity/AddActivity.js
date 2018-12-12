import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
var srcBg = require("../../images/background.png");

class AddActivity extends React.Component {


    static navigationOptions = {
        title: "Add Activity",
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
            { key:1, image: require("../../images/icon/pottyicon.png"), desc: 'Potty', nav: 'PottyActivity' },
            { key:2, image: require("../../images/icon/incidenticon.png"), desc: 'Incident', nav: 'IncidentActivity' },
            { key:3, image: require("../../images/icon/milkicon.png"),  desc: 'Milk', nav: 'MilkActivity' },
            { key:3, image: require("../../images/icon/napicon.png"),  desc: 'Nap', nav: 'NapActivity' },
            { key:3, image: require("../../images/icon/othericon.png"),  desc: 'Other', nav: 'OtherActivity' },
            { key:3, image: require("../../images/icon/drafticon.png"),  desc: 'Draft', nav: '' },
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
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:10}} onPress={()=>this.props.navigation.navigate(item.nav)}>
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
        <ImageBackground style={styles.imageBackground} source={srcBg}>
            <FlatList
                data={ this.state.GridListItems }
                renderItem={ this._render }
                keyExtractor={(item, index) => item.key+""}
                />
        </ImageBackground>
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

export default AddActivity;