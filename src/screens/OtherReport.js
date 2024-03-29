import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Platform, LayoutAnimation, FlatList,Modal,Dimensions,StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from 'react-native-modal-datetime-picker';
import OtherReportItems from "./OtherReportList/Components/OtherReportItems";
import FAB from "../utils/FAB";
var srcBg = require("../images/background.png");
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class OtherReport extends React.Component {

  static navigationOptions = () => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
        popupMenu: false,
        isDateTimePickerVisible: false,
        data: [
            {
                id: 1,
                title: "Other",
                description: "Ate a lot",
                icon: "",
                image: "",
                date: "Mon, 01 Jan, 08.11 AM"
            },
            {
                id: 2,
                title: "Other",
                description: "Learn : Writing a poetry",
                icon: "",
                image: "",
                date: "Mon, 01 Jan, 08.11 AM"
            },
            {
                id: 3,
                title: "Other",
                description: "From : 09.25 am To : 09.57 am",
                icon: "",
                image: "",
                date: "Mon, 01 Jan, 08.11 AM"
            },
        ]
    };
  }

  componentDidMount() {
    
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {
    this._hideDateTimePicker();
  };
  
  openPopupMenu(visible) {
    this.setState({popupMenu: visible});
  }

  _renderItem = ({item}) => <OtherReportItems item={item} navigation={this.props.navigation} />

  render() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#AD90CA" />
            <View style={{flexDirection:'row',backgroundColor:'#AD90CA',height:70 }}>
                <View style={{marginTop: (Platform.OS) == 'ios' ? 30 : 0,alignItems:'center',justifyContent:'space-between',flexDirection:'row',width:width}}>
                    <View style={{marginLeft:15}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                        <Image source={require("../images/icon/backicon.png")} style={{width:10,height:20}} />
                    </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                    <View style={{margin:10}}>
                        <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Other</Text>
                    </View>
                    </View>
                    <View style={{marginRight:15}}>
                    </View>
                </View>
            </View>
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View>
                <ImageBackground style={styles.imageBackground} source={srcBg}>
                    
                    <View
                    style={{marginTop:20,justifyContent:'center',alignItems:'center',flexDirection:'row'}}
                    >
                        <Text>Date : </Text>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('OtherReportFilterDate')}
                        >
                            <Text style={{color:'#B08485'}}>Monday, 01 Jan 2018</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:20,marginLeft:25}}>
                        <FlatList
                            scrollEnabled={false}
                            data={this.state.data}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => item.id+""}
                        />    
                    </View>

                    <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
                        <TouchableOpacity
                            style={{borderRadius:15,paddingTop:10,paddingBottom:10,paddingLeft:15,paddingRight:15,borderColor:'#E2DEDF',borderWidth:2}}
                        >
                            <Text style={{color:'#0081D4',fontSize:14}}>Load More</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{height:80}}></View>
                </ImageBackground>
                <DateTimePicker
                    date={new Date()}
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
                
            </View>
        </ScrollView>
        <FAB navigation={this.props.navigation} />
        </View>
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
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default OtherReport;