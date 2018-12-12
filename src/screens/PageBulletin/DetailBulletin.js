import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground, Dimensions } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import HTML from 'react-native-render-html';
var srcBackground = require("../../images/background.png");
var srcExampleImage = require("../../images/milestoneimage.png");
var srcExampleAvatar = require("../../images/avatarreadexample.png");

class DetailBulletin extends React.Component {

  static navigationOptions = {
    title: "Bulletin",
    headerTintColor: '#FFFFFF',
    headerTitleStyle:{ color: '#FFFFFF',alignSelf: 'center'},
    headerStyle: {
        backgroundColor: '#AD90CA'
    },
  };

  constructor(props) {
    super(props);
    this.state = {
        article: `<p>Keluarga adalah lingkungan yang sangat penting bagi perkembangan dan pertumbuhan seorang anak. karena keluarga adalah guru pertama dan panutan bagi mereka. Perilaku dan kepribadian seorang anak tergantung dari pendidikan yang diajarkan orang tuanya sejak kecil. Mayoritas anak meniru apa yang telah diajarkan dan dilakukan oleh orang tuanya.

        Akan tetapi banyak orang tua yang tidak menyadari akan hal itu. Banyak diantara mereka mengajarkan pendidikan dengan perlakuan yang kurang menyenangkan, seperti bentakan, perkataan kasar dan pukulan. Walaupun terlihat enteng, tetapi hal ini berakibat fatal pada pertumbuhan seorang anak.
        
        Beberapa ilmuwan mengatakan bahwa setiap kepala seorang anak, terdapat 10 triliyun sel otak yang sudah siap tumbuh. Tetapi, karena satu bentakan atau perkataan yang kasar dapat membunuh lebih dari 1 milyar sel otak saat itu juga. Lise Gliot menyatakan bahwa bentakan atau perkataan kasar dapat mempengaruhi perkembangan sel otak anak. Akan sangat berbahaya jika hal itu sering dilakukan orang tua bahkan sampai tak terkendali, maka dapat berpotensi mengganggu struktur otak anak itu sendiri.
        
        Dampak dari kerusakan pada sel-sel otak karena bentakan lebih besar pengaruhnya tehadap anak-anak. Adapun hal ini bias terjadi pada remaja atau orang dewasa, tetapi efek yang ditimbulkan tidak sebesar dengan yang ditimbulkan pada anak-anak. Efek jangka panjangnya adalah ketika menginjak masa remaja, mereka akan menjadi pribadi yang pendiam, lebih banyak melamun, dan juga lambat dalam memahami sesuatu.
        
        Hal ini terjadi karena mereka kesulitan memahami pola-pola masalah yang mereka hadapi dikarenakan sedikitnya jumlah sel otak aktif dari yang seharusnya. Dan tidak hanya itu saja, bentakan dapat berakibat buruk pada organ-organ penting seperti jantung. Menurut penjelasan Dr. Godeliva Maria Silvia Merry, M.Si menjelaskan bahwa denyut nadi manusia berubah – ubah sesuai suara yang sedang mereka dengarkan.
        
        
        </p>`,
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <ImageBackground style={{width:'100%',height:'100%'}} source={srcBackground}>

                <View style={{flexDirection:'row',alignItems:'center',marginTop:15,marginLeft:15,marginRight:15,marginBottom:15}}>
                    <Image source={require("../../images/icon/smartbeeblog.png")} style={{width:53,height:53}} />
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:15,flex:1}}>
                        <View style={{flexDirection:'column'}}>
                            <View>
                                <Text style={{fontSize:15,color:'#2E313C'}}>Smartbee</Text>
                            </View>
                            <View>
                                <Text style={{color:'#2E313C',fontSize:9}}>Tuesday 02 Jan 2018</Text>
                            </View>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Image source={require("../../images/icon/pinblog.png")} style={{width:21,height:21}} />
                        </View>
                    </View>
                </View>
                <Image source={srcExampleImage} style={{width:'100%',height:320}}></Image>
                
                    <View style={{padding:20,marginTop:10}}>
                        <Text style={{color:"#8865A9",fontSize:19}}>This is the main title of lorem ipsum dolor sit amet</Text>
                        <HTML html={this.state.article} imagesMaxWidth={Dimensions.get('window').width} />


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

export default DetailBulletin;