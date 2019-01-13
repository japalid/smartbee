import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground, Dimensions, StatusBar, Platform, ActivityIndicator, AsyncStorage, TouchableOpacity } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import HTML from 'react-native-render-html';
var srcBackground = require("../../images/background.png");
var srcExampleImage = require("../../images/milestoneimage.png");
var srcExampleAvatar = require("../../images/avatarreadexample.png");
import * as request from "../../networks/request";
import constants from "../../networks/constants";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class LessonsMilestoneDetail extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
        article: `<p>Ini adalah gaya yang sangat ketat. Orang tua menetapkan aturan dengan harapan anak-anaknya dapat mengikuti aturan tersebut. Jika tidak mengikuti aturan, anak-anak biasanya akan mendapat hukuman. <br><br>Orang tua yang mengikuti gaya ini biasanya tidak berdebat atau membicarakannya terlebih dahulu dengan si kecil. Anak-anak akan ditarik dan mungkin tidak dapat berpikir untuk diri mereka sendiri. Ini karena mereka tidak pernah diberi kesempatan berbicara dan mengeluarkan pendapatnya.<br><br>Jika ini adalah gaya pola asuh Mam, coba ajak si kecil untuk dapat mengeluarkan ide-ide dan pendapat. Jika si kecil tidak memahami kenapa mereka harus disiplin, coba jelaskan apa alasan Mam menetapkan peraturan tersebut</p>`,
        GridListItems: [
            { key: "Piere Paul" },
            { key: "Carry Puth" },
            { key: "Chalista" },
            { key: "Rayhan H" },
            { key: "Robert Patt" }
        ],
        read: [],
        loading: true,
        dataLesson: []
    }
    this._lessonDetail(this.props.navigation.getParam("id"))
  }

  _lessonDetail(id) {
    var response = [];
    var siswa = [];
    AsyncStorage.getItem("auth-key")
        .then(async (res) => {
          if (res !== null) {
            let resp = await request.lesson_by_id(res,id,"id");
            let respy = JSON.parse(resp._bodyText);
            respy.isread.map((item)=>{
                item.siswa.map((item_s)=>{
                    siswa.push({
                        key: item_s.nama,
                        foto: item_s.foto
                    })
                })
            })
            this.setState({dataLesson:respy,loading:false,read:siswa})
          }
        })
        .catch(err => this.setState({dataLesson:response,loading:false}))
  }

  componentDidMount() {
    
  }

  GetGridViewItem(item) {
    Alert.alert(item);
  }

  _renderReadBy = ({item,index}) => {
      return(
        <View style={styles.GridViewContainer}>
            {item.empty?(
                <Text></Text>
            ):
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Image source={{uri:item.foto}} style={{width:34,height:34,borderRadius:17}}/>
                <Text style={{fontSize:8,color:'#464646',marginLeft:5}}>{item.key}</Text>
            </View>
            }
        </View>
      );
  }

  render() {

        const numColumns = 3;
        const formatData = (data,numColumns) => {
            const numberOfFullRows = Math.floor(data.length/numColumns);
            let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
            while(numberOfElementsLastRow !== numColumns) {
                data.push({key: `blank`, empty:true});
                numberOfElementsLastRow = numberOfElementsLastRow + 1;
            }
            return data;
        }
        
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
                                <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Lessons</Text>
                            </View>
                            </View>
                            <View style={{marginRight:15}}>
                            
                            </View>
                        </View>
                    </View>
                    {this.state.loading ?
                        ( <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <ActivityIndicator size="large" color={constants.color.purple} />
                            </View>
                        ):(
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <Image source={{uri:this.state.dataLesson.image}} style={{width:'100%',height:320}}></Image>
                        <ImageBackground style={{width:'100%',height:'100%'}} source={srcBackground}>
                            <View style={{padding:20,marginTop:10}}>
                                <Text style={{color:"#8865A9",fontSize:19}}>{this.state.dataLesson.title}</Text>
                                <HTML html={this.state.dataLesson.content} ignoredStyles={['display', 'width', 'height', 'font-family', 'padding', 'background-color']} imagesMaxWidth={Dimensions.get('window').width - 10} />

                                <View style={{marginTop:20}}>
                                    <View style={{borderBottomColor:'#707070',borderBottomWidth:1}}>
                                        <Text style={{color:'#B88383',paddingBottom:5}}>Read By</Text>
                                    </View>
                                    <View style={{marginTop:10}}>
                                    <FlatList
                                        data={ formatData(this.state.read,numColumns) }
                                        renderItem={ this._renderReadBy }
                                        numColumns={numColumns}
                                        />
                                    </View>
                                </View>

                            </View>
                        </ImageBackground>
                    </ScrollView>
                    )}
                </View>
            );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  viewRow: {
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      padding: 10,
      marginBottom: 2
  },
  GridViewContainer: {
    flex:1,
    width: 'auto',
    height: 'auto',
    marginTop: 10 
 },
 GridViewTextLayout: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    color: '#fff',
    padding: 10,
  }
});

export default LessonsMilestoneDetail;