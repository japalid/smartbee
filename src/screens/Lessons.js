import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Platform, LayoutAnimation, UIManager } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
var srcImage = require("../images/bannerlessons.png");
var srcWelcome = require("../images/panelwelcomelessons.png");
var srcOpenResult = require("../images/icon/openresulticonlessons.png");
var srcCloseResult = require("../images/icon/closeresulticonlessons.png");
var srcBg = require("../images/bgdashboard.png");
var srcKindness = require("../images/icon/kindnessiconlessons.png");
var srcSelf = require("../images/icon/selfconfidenceiconlessons.png");
var srcGrit = require("../images/icon/griticonlessons.png");
var srcProblem = require("../images/icon/problemsolvingiconlessons.png");
var srcCreativity = require("../images/icon/creativityiconlessons.png");
var srcDiscipline = require("../images/icon/disciplineiconlessons.png");
var srcRightBlue = require("../images/icon/rightblueforcircleicon.png");
var srcRightGreen = require("../images/icon/rightgreenforcircleicon.png");
var srcRightRed = require("../images/icon/rightredforcircleicon.png");
var srcRightYellow = require("../images/icon/rightyellowforcircleicon.png");

class Lessons extends React.Component {

  static navigationOptions = () => ({
    title: "Lessons",
    headerTintColor: '#FFFFFF',
    headerTitleStyle:{ color: '#FFFFFF',alignSelf: 'center'},
    headerStyle: {
        backgroundColor: '#AD90CA'
    },
  });

  constructor(props) {
    super(props);
    if( Platform.OS === 'android' )
    {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      popupMenu: false,
      textLayoutHeight: 0,
      updatedHeight: 0, 
      expand: false,
      buttonText : true,
      showMainMenu : true,
      percentage: 66
    };
  }

  async componentDidMount() {
    
  }

  expand_collapse_Function =()=>
  {
      LayoutAnimation.configureNext( LayoutAnimation.Presets.linear );

      if( this.state.expand == false )
      {
          this.setState({ 
            updatedHeight: this.state.textLayoutHeight, 
            expand: true, 
            buttonText: false,
            showMainMenu: false
          }); 
      }
      else
      {
          this.setState({ 
            updatedHeight: 0, 
            expand: false, 
            buttonText: true,
            showMainMenu: true
          });
      }
  }

  getHeight(height)
  {
      this.setState({ textLayoutHeight: height });
  }

  render() {
    const percentage = 66;
    return (
      <ScrollView contentContainerStyle={{
        flexGrow: 1
    }}>
           
                <View style={styles.container}>
                <Image source={srcBg} style={styles.imageBottom}>
                </Image>
                <ImageBackground source={srcImage} style={styles.imageBackground}>
                    <ImageBackground style={styles.imageWelcome} source={srcWelcome}>
                        <View style={{justifyContent:'center',alignItems:'center',marginTop:7}}>
                            <Text style={styles.textWelcome}>What should we learn today?</Text>
                        </View>
                    </ImageBackground>
                </ImageBackground>
                <View style = { styles.viewCollapse }>
                  <View style = { styles.viewChildCollapse }>
                  { this.state.buttonText ? (
                    <TouchableOpacity activeOpacity = { 0.7 } 
                                      onPress = { this.expand_collapse_Function } 
                                      style = { styles.touchableOpacityStyle }>
                        
                            <View style={styles.viewTextResult}>
                              <Text style={styles.textResult}>See the result</Text>
                              <Image source={srcOpenResult}></Image>
                            </View>
                    </TouchableOpacity> 
                  ) : null}
                    <View style = {{ height: this.state.updatedHeight, overflow: 'hidden' }}>
                        
                        <View style={styles.viewResult} 
                              onLayout = {( value ) => this.getHeight( '100%' )}>
                          
                          <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10,marginTop:5}}>  
                          <TouchableOpacity
                              onPress={()=>this.props.navigation.navigate("LessonsResultDetail")}
                              style={styles.touchableCircle}>
                              <Image source={srcRightBlue} style={{position:"absolute",right:0,margin:10}}></Image>
                              <View style={{padding:10}}>
                              <AnimatedCircularProgress
                              size={100}
                              width={15}
                              fill={50}
                              tintColor="#33A2CF"
                              onAnimationComplete={() => console.log('onAnimationComplete')}
                              backgroundColor="rgb(224,226,226)">
                                {
                                  (fill) => (
                                    <Text style={{color:'#33A2CF'}}>
                                      50%
                                    </Text>
                                  )
                                }
                              </AnimatedCircularProgress>
                              </View>
                              <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:"#33A2CF"}}>Creativity</Text>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchableCircle}>
                              <Image source={srcRightRed} style={{position:"absolute",right:0,margin:10}}></Image>
                              <View style={{padding:10}}>
                              <AnimatedCircularProgress
                              size={100}
                              width={15}
                              fill={25}
                              tintColor="#EC4C4C"
                              onAnimationComplete={() => console.log('onAnimationComplete')}
                              backgroundColor="rgb(224,226,226)">
                                {
                                  (fill) => (
                                    <Text style={{color:'#EC4C4C'}}>
                                      25%
                                    </Text>
                                  )
                                }
                              </AnimatedCircularProgress>
                              </View>
                              <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:"#EC4C4C"}}>Health</Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                          <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10,marginTop:5}}>
                            <TouchableOpacity style={styles.touchableCircle}>
                              <Image source={srcRightRed} style={{position:"absolute",right:0,margin:10}}></Image>
                              <View style={{padding:10}}>
                              <AnimatedCircularProgress
                              size={100}
                              width={15}
                              fill={75}
                              tintColor="#F49C1D"
                              onAnimationComplete={() => console.log('onAnimationComplete')}
                              backgroundColor="rgb(224,226,226)">
                                {
                                  (fill) => (
                                    <Text style={{color:'#F49C1D'}}>
                                      75%
                                    </Text>
                                  )
                                }
                              </AnimatedCircularProgress>
                              </View>
                              <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:"#EC4C4C"}}>Social & Emotional</Text>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchableCircle}>
                              <Image source={srcRightGreen} style={{position:"absolute",right:0,margin:10}}></Image>
                              <View style={{padding:10}}>
                              <AnimatedCircularProgress
                              size={100}
                              width={15}
                              fill={50}
                              tintColor="#14AE94"
                              onAnimationComplete={() => console.log('onAnimationComplete')}
                              backgroundColor="rgb(224,226,226)">
                                {
                                  (fill) => (
                                    <Text style={{color:'#14AE94'}}>
                                      50%
                                    </Text>
                                  )
                                }
                              </AnimatedCircularProgress>
                              </View>
                              <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:"#14AE94"}}>Physical</Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                        
                        <View style={styles.viewClose}>
                          <TouchableOpacity onPress = { this.expand_collapse_Function } style={styles.touchableClose}>
                              <Image source={srcCloseResult}></Image>
                          </TouchableOpacity>
                        </View>
                    </View>
                  </View>
                </View>
                { this.state.showMainMenu ? (
                <View style={styles.viewMenu}>
                  <ScrollView contentContainerStyle={{
      flexGrow: 1,
      justifyContent: 'space-between'
  }}>
                  <View style={styles.viewSubMenu}>
                    <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate("LessonsMilestone",{tab: 0})}
                    style={styles.btnMenu}>
                      <View style={styles.viewInsideMenu}>
                        <Image source={srcKindness}></Image>
                        <Text style={styles.textMenu}>Kindness</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={()=>this.props.navigation.navigate("LessonsMilestone",{tab: 1})}
                    style={styles.btnMenu}>
                      <View style={styles.viewInsideMenu}>
                        <Image source={srcSelf}></Image>
                        <View style={styles.viewTextMenu}>
                          <Text style={styles.textMenu}>Self</Text>
                          <Text style={styles.textMenu}>Confidence</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.viewSubMenu}>
                    <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate("LessonsMilestone",{tab: 2})}
                    style={styles.btnMenu}>
                      <View style={styles.viewInsideMenu}>
                        <Image source={srcGrit}></Image>
                        <Text style={styles.textMenu}>Grit</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={()=>this.props.navigation.navigate("LessonsMilestone",{tab: 3})}
                    style={styles.btnMenu}>
                      <View style={styles.viewInsideMenu}>
                        <Image source={srcProblem}></Image>
                        <View style={styles.viewTextMenu}>
                          <Text style={styles.textMenu}>Problem</Text>
                          <Text style={styles.textMenu}>Solving</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.viewSubMenu}>
                    <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate("LessonsMilestone",{tab: 4})}
                    style={styles.btnMenu}>
                      <View style={styles.viewInsideMenu}>
                        <Image source={srcCreativity}></Image>
                        <Text style={styles.textMenu}>Creativity</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={()=>this.props.navigation.navigate("LessonsMilestone",{tab: 5})}
                    style={styles.btnMenu}>
                      <View style={styles.viewInsideMenu}>
                        <Image source={srcDiscipline}></Image>
                        <View style={styles.viewTextMenu}>
                          <Text style={styles.textMenu}>Discipline</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  </ScrollView>
                </View>
                                
              ) : null }
            </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF5F5'
  },
  imageBottom: {
    width: 266,
    height: 173,
    bottom: 0,
    position: 'absolute',
  }, 
  imageBackground: {
    width: '100%',
    height: 162
  }, 
  imageWelcome: {
    width: 144,
    height: 27,
    marginTop: 20,
    position: 'absolute',
    right: 30
  },
  textWelcome: {
      fontSize: 8,
      color: '#ffffff'
  },
  viewCollapse: {
    flex:1
  },
  viewChildCollapse: {
      backgroundColor: '#AD90CA'
  },
  touchableOpacityStyle: {
      padding: 10,
      backgroundColor: '#8865A9'
  },
  viewTextResult: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#fff',
      fontSize: 20
  },
  viewResult: {
      fontSize: 16,
      color: '#000'
  },
  textResult: {
    color: '#FFFFFF',
    marginRight: 10,
    fontSize: 13
  },
  viewTextCloseResult: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewClose: {
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  touchableClose: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 33,
    backgroundColor: '#8865A9'
  },
  viewMenu: {
    top:0,
    bottom:0,
    width: '100%',
    position: 'absolute',
    marginTop: 200
  },
  viewScrollMenu: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSubMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnMenu: {
    backgroundColor: "#E5E5E5",
    width: 120,
    height: 120,
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 5
  },
  viewInsideMenu: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  viewTextMenu: {
    marginTop: 10,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textMenu: {
    color: '#B08485',
    fontSize: 12
  },
  touchableCircle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    margin: 10
  }
});

export default Lessons;