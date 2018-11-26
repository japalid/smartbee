import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground, Dimensions } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import HTML from 'react-native-render-html';
var srcBackground = require("../../images/background.png");
var srcExampleImage = require("../../images/milestoneimage.png");
var srcExampleAvatar = require("../../images/avatarreadexample.png");

class LessonsMilestoneDetail extends React.Component {

  static navigationOptions = {
    title: "Lessons",
    headerTintColor: '#FFFFFF',
    headerTitleStyle:{ color: '#FFFFFF',alignSelf: 'center'},
    headerStyle: {
        backgroundColor: '#AD90CA'
    },
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
          ]
    }
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
                <Image source={srcExampleAvatar} style={{width:34,height:34}}/>
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
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Image source={srcExampleImage} style={{width:'100%',height:320}}></Image>
                <ImageBackground style={{width:'100%',height:'100%'}} source={srcBackground}>
                    <View style={{padding:20,marginTop:10}}>
                        <Text style={{color:"#8865A9",fontSize:19}}>This is the main title of lorem ipsum dolor sit amet</Text>
                        <HTML html={this.state.article} imagesMaxWidth={Dimensions.get('window').width} />

                        <View style={{marginTop:20}}>
                            <View style={{borderBottomColor:'#707070',borderBottomWidth:1}}>
                                <Text style={{color:'#B88383',paddingBottom:5}}>Read By</Text>
                            </View>
                            <View style={{marginTop:10}}>
                            <FlatList
                                data={ formatData(this.state.GridListItems,numColumns) }
                                renderItem={ this._renderReadBy }
                                numColumns={numColumns}
                                />
                            </View>
                        </View>

                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E7E7E7'
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