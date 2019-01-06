import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, FlatList, StatusBar, Platform, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
var srcBg = require("../../images/background.png");

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
class AddActivity extends React.Component {


    static navigationOptions = {
        header: null
      };

  constructor(props) {
    super(props);
    this.state = {
        GridListItems: [
            { key:1, image: require("../../images/icon/pottyicon.png"), desc: 'Potty', nav: 'PottyActivity' },
            { key:2, image: require("../../images/icon/incidenticon.png"), desc: 'Incident', nav: 'IncidentActivity' },
            { key:4, image: require("../../images/icon/milkicon.png"),  desc: 'Milk', nav: 'MilkActivity' },
            { key:5, image: require("../../images/icon/napicon.png"),  desc: 'Nap', nav: 'NapActivity' },
            { key:6, image: require("../../images/icon/othericon.png"),  desc: 'Other', nav: 'OtherActivity' },
            { key:7, image: require("../../images/icon/drafticon.png"),  desc: 'Draft', nav: '' },
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
    <View style={{flex:1}}>
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
                        <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Add Activity</Text>
                    </View>
                    </View>
                    <View style={{marginRight:15}}>
                    
                    </View>
                </View>
            </View>
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
    </View>
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