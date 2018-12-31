import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Platform, LayoutAnimation, FlatList,Modal,Dimensions,StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
  } from 'react-native-chart-kit'
import MedicalReportItems from "./MedicalReportList/Components/MedicalReportItems";
import FAB from "../utils/FAB";
var srcBg = require("../images/background.png");
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class MedicalReportFilterResultBerat extends React.Component {

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
                title: "Breakfast",
                description: "Ate a lot",
                icon: "",
                image: "",
                date: "Mon, 01 Jan, 08.11 AM"
            },
            {
                id: 2,
                title: "Activity",
                description: "Learn : Writing a poetry",
                icon: "",
                image: "",
                date: "Mon, 01 Jan, 08.11 AM"
            },
            {
                id: 3,
                title: "Nap",
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

  _renderItem = ({item}) => <MedicalReportItems item={item} navigation={this.props.navigation} />

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
                        <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Medical</Text>
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
                    
                <View style={{flexDirection:'row',alignItems:"center",justifyContent:'center',marginTop:15,marginBottom:15}}>
                    <TouchableOpacity
                    onPress={()=>{this.props.navigation.pop();this.props.navigation.navigate("MedicalReportFilterResultBerat")}}
                    style={{backgroundColor:'#F8F8F9',borderColor:'#E2DEDF',borderWidth:1,borderTopLeftRadius:10,borderBottomLeftRadius:10}}
                    >
                        <Text style={{color:'#2E313C',fontSize:15,paddingLeft:15,paddingRight:15,paddingTop:10,paddingBottom:10}}>Berat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>{this.props.navigation.pop();this.props.navigation.navigate("MedicalReportFilterResultTinggi")}}
                    style={{backgroundColor:'#6DDBF4',borderColor:'#E2DEDF',borderWidth:1}}
                    >
                        <Text style={{color:'#FFFFFF',fontSize:15,paddingLeft:15,paddingRight:15,paddingTop:10,paddingBottom:10}}>Tinggi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>{this.props.navigation.pop();this.props.navigation.navigate("MedicalReportFilterResultSuhu")}}
                    style={{backgroundColor:'#F8F8F9',borderColor:'#E2DEDF',borderWidth:1,borderTopRightRadius:10,borderBottomRightRadius:10}}
                    >
                        <Text style={{color:'#2E313C',fontSize:15,paddingLeft:15,paddingRight:15,paddingTop:10,paddingBottom:10}}>Suhu</Text>
                    </TouchableOpacity>
                </View>

                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <LineChart
                        data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        datasets: [{
                            data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                            ]
                        }]
                        }}
                        width={Dimensions.get('window').width - 30} // from react-native
                        height={220}
                        chartConfig={{
                        backgroundColor: '#6DDBF4',
                        backgroundGradientFrom: '#6DDBF4',
                        backgroundGradientTo: '#6DDBF4',
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 16
                        }}
                    />
                </View>

                    <View
                    style={{marginTop:20,justifyContent:'center',alignItems:'center',flexDirection:'row'}}
                    >
                        <Text>From : </Text>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('FoodReportFilterResultFilterDate')}
                        >
                            <Text style={{color:'#B08485'}}>Monday,01 Jan 2018</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                    style={{marginTop:10,justifyContent:'center',alignItems:'center',flexDirection:'row'}}
                    >
                        <Text>To : </Text>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('FoodReportFilterResultFilterDate')}
                        >
                            <Text style={{color:'#B08485'}}>Monday,08 Jan 2018</Text>
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

                    <View style={{justifyContent:'center',alignItems:'center',borderRadius:10,flexDirection:'column',marginTop:20,alignSelf:'stretch',marginLeft:15,marginRight:15,shadowColor:'#000',shadowOffset:{width:1, height:1}, shadowRadius:2,elevation:1,backgroundColor:'#FFFFFF',shadowOpacity:0.5}}>
                        <View style={{backgroundColor:'#ACD6CA',borderTopLeftRadius:10,borderTopRightRadius:10,padding:10,justifyContent:'center',alignSelf:'stretch'}}>
                            <Text style={{color:'#FFFFFF',fontSize:20,marginLeft:5}}>Result</Text>
                        </View>
                        <Text style={{fontSize:15,color:'#3D4356',marginTop:5,marginLeft:5,marginBottom:5,padding:10,justifyContent:'center'}}>50% anak anda belajar dengan keadaan senang</Text>
                    </View>

                    <View style={{justifyContent:'center',alignItems:'center',borderRadius:10,flexDirection:'column',marginTop:20,alignSelf:'stretch',marginLeft:15,marginRight:15,shadowColor:'#000',shadowOffset:{width:1, height:1}, shadowRadius:2,elevation:1,backgroundColor:'#FFFFFF',shadowOpacity:0.5}}>
                        <View style={{backgroundColor:'#CAD5DB',borderTopLeftRadius:10,borderTopRightRadius:10,padding:10,justifyContent:'center',alignSelf:'stretch'}}>
                            <Text style={{color:'#FFFFFF',fontSize:20,marginLeft:5}}>Tips</Text>
                        </View>
                        <Text style={{fontSize:15,color:'#3D4356',marginTop:5,marginLeft:5,marginBottom:5,padding:10,justifyContent:'center'}}>Berikan buku menggambar agar meningkatkan kreatifitas anak</Text>
                    </View>

                    <View style={{height:80}}></View>
                </ImageBackground>
                
                
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

export default MedicalReportFilterResultBerat;