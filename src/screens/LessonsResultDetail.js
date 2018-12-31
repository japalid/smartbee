import React from "react";
import { View, StyleSheet, Text, Platform, Dimensions, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class LessonsResultDetail extends React.Component {

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
  }

  componentDidMount() {
    
  }

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
                          <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Lessons</Text>
                      </View>
                      </View>
                      <View style={{marginRight:15}}>
                      
                      </View>
                  </View>
              </View>
            <ScrollView contentContainerStyle={{marginTop:10}}>
                <View style={styles.viewRow}>
                    <AnimatedCircularProgress
                    size={80}
                    width={10}
                    fill={40}
                    tintColor="#33A2CF"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="rgb(224,226,226)">
                    {
                        (fill) => (
                        <Text style={{color:"#33A2CF"}}>
                            40%
                        </Text>
                        )
                    }
                    </AnimatedCircularProgress>
                    <Text style={{color: "#33A2CF", marginLeft: 15, fontSize: 18}}> Drawing </Text>
                </View>
                <View style={styles.viewRow}>
                    <AnimatedCircularProgress
                    size={80}
                    width={10}
                    fill={30}
                    tintColor="#33A2CF"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="rgb(224,226,226)">
                    {
                        (fill) => (
                        <Text style={{color:"#33A2CF"}}>
                            30%
                        </Text>
                        )
                    }
                    </AnimatedCircularProgress>
                    <Text style={{color: "#33A2CF", marginLeft: 15, fontSize: 18}}> Writing </Text>
                </View>
                <View style={styles.viewRow}>
                    <AnimatedCircularProgress
                    size={80}
                    width={10}
                    fill={40}
                    tintColor="#33A2CF"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="rgb(224,226,226)">
                    {
                        (fill) => (
                        <Text style={{color:"#33A2CF"}}>
                            40%
                        </Text>
                        )
                    }
                    </AnimatedCircularProgress>
                    <Text style={{color: "#33A2CF", marginLeft: 15, fontSize: 18}}> Reading </Text>
                </View>
                <View style={styles.viewRow}>
                    <AnimatedCircularProgress
                    size={80}
                    width={10}
                    fill={30}
                    tintColor="#33A2CF"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="rgb(224,226,226)">
                    {
                        (fill) => (
                        <Text style={{color:"#33A2CF"}}>
                            30%
                        </Text>
                        )
                    }
                    </AnimatedCircularProgress>
                    <Text style={{color: "#33A2CF", marginLeft: 15, fontSize: 18}}> Handcrafting </Text>
                </View>
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
  }
});

export default LessonsResultDetail;