import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity , AsyncStorage, ActivityIndicator, Dimensions} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Milestone from "./Components/Milestone";
import Explore from "./Components/Explore";
var srcBackground = require("../../images/background.png");
var srcExampleImage = require("../../images/milestoneimage.png");
var srcExampleImageExplore = require("../../images/exampleimageexplore.png");
var srcExampleImageExplore2 = require("../../images/exampleimageexplore2.png");
var srcCheck = require("../../images/icon/milestonecheckicon.png");
var srcUnCheck = require("../../images/icon/milestoneuncheckicon.png");
import { CheckBox } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import * as request from "../../networks/request";
import constants from "../../networks/constants";
import HTML from 'react-native-render-html';

var screen = Dimensions.get('window');

class LessonPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      srcBanner: require('../../images/bannerexamplemilestone.png'),
      dataClass: [],
      dataCategory: [],
      dataLesson: [],
      loading: true,
      selectedClass: 'Class',
      selectedIdClass: '',
      page: 1
    }
    this.getKelas();
    this._categoryLessonDescription();
    this._lessonList();
  }

  getKelas() {
    var response = [];
    AsyncStorage.getItem("auth-key")
        .then(async (res) => {
          if (res !== null) {
            let resp = await request.allKelas(res);
            let respy = JSON.parse(resp._bodyText);
            respy.map((item)=>{
              response.push(item);
            })
            this.setState({dataClass:response,loading:false})
          }
        })
        .catch(err => this.setState({data:response,loading:false}))
  }

  _categoryLessonDescription() {
    var response = [];
    AsyncStorage.getItem("auth-key")
        .then(async (res) => {
          if (res !== null) {
            let resp = await request.lesson_by_id(res,this.props.data.id,"id");
            let respy = JSON.parse(resp._bodyText);
            respy.map((item)=>{
              response.push(item);
            })
            this.setState({dataCategory:response,loading:false})
          }
        })
        .catch(err => this.setState({dataCategory:response,loading:false}))
  }

  _lessonList() {
    this.state.loading = true
    var response = [];
    AsyncStorage.getItem("auth-key")
        .then(async (res) => {
          if (res !== null) {
            let resp = await request.lesson_list(res,this.props.data.id,this.state.page,this.state.selectedIdClass,"id");
            let respy = JSON.parse(resp._bodyText);
            respy.data.map((item)=>{
              response.push(item);
            })
            this.setState({dataLesson:response,loading:false})
          }
        })
        .catch(err => this.setState({dataLesson:response,loading:false}))
  }

  openPopupMenu() {
    this.refs.modalReason.open();
  }

  closePopUp(id,kelas) {
    this.setState({selectedClass:kelas,selectedIdClass:id})
    this._lessonList();
    this.refs.modalReason.close();
  }

  _renderClass() {
    return(
        this.state.dataClass.map((data) => {
            return(
                <CheckBox
                        key={data.id}
                        containerStyle={{borderWidth:0,borderColor:'transparent',backgroundColor:'transparent'}}
                        title={data.kelas}
                        checked={this.state.checked}
                        onPress={()=>this.closePopUp(data.id,data.kelas)}
                    />
            )
        }
        )
    )
  }

  _renderMilestone() {
    {this.state.dataLesson.map(item=>
        (
            <Text>{item.title}</Text>
        )
    )}
  }

  componentDidMount() {
  }

  render() {
    if(this.state.loading) {
      return( <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <ActivityIndicator size="large" color={constants.color.purple} />
            </View>
        )
    }else {
  
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
      
            <Modal 
                ref={"modalReason"}
                style={{
                    borderRadius: 15,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 'auto'
                }}
                position='top'
                backdrop={true}
                onClosed={()=>{
                    
                }}
            >
                    <View style={{backgroundColor:'#AB8CC8',borderTopLeftRadius:15,borderTopRightRadius:15,padding:20}}>
                        <Text style={{color:'#FFFFFF',fontSize:15}}>Select Class</Text>
                    </View>
                    <View>
                        {this._renderClass()}
                    </View>
            </Modal>
        <Image source={this.state.srcBanner} style={{width: '100%',height:360}} />
        <ImageBackground source={srcBackground} style={{width:'100%',height:'100%'}}>
          <View style={{padding: 20}}>
            <Text style={{color: '#8865A9'}}>About this milestone</Text>
            <Text style={{marginTop: 5}}>Keluarga adalah lingkungan yang sangat penting bagi perkembangan dan pertumbuhan seorang anak. karena keluarga adalah guru pertama dan panutan bagi mereka.</Text>

            <TouchableOpacity
              onPress={()=>this.openPopupMenu()}
              style={{marginTop:20,width:'100%',backgroundColor:'#F8F8F9',borderRadius:6,alignItems:'center',borderColor:'#E2DEDF',padding:6,borderWidth:2}}
            >
            <Text style={{color:'#2E313C'}}>{this.state.selectedClass}</Text>
            </TouchableOpacity>

            <Text style={{color:'#878787',marginTop:15,marginBottom:10}}>MILESTONE</Text>
            <ScrollView scrollEventThrottle={16}>
              <View style={{height:250}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                    {this.state.dataLesson.map(item=>
                        (
                            <Milestone key={item.id} id={item.id} navigation={this.props.navigation} imageUri={item.image}  imageStatus={ item.isteached == 0 ? srcUnCheck : srcCheck} name={item.title} />
                        )
                    )}
                </ScrollView>
              </View>
              
            </ScrollView>

            {/* <Text style={{color:'#878787',marginTop:15,marginBottom:10}}>EXPLORE</Text>
            <ScrollView scrollEventThrottle={16}>
              <View style={{height:250}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >

                  <Explore color="#C2ABD7" imageUri={srcExampleImageExplore} name="Marshmallow test" />
                  <Explore color="#628ABB" imageUri={srcExampleImageExplore2} name="How to make kids feels free" />

                </ScrollView>
              </View>
              
            </ScrollView> */}
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default LessonPage;