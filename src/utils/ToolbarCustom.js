import React from "react";
import { View, StatusBar, Platform, Image, StatusBar, Dimensions, Text  } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class ToolbarCustom extends React.Component {

  constructor(props) {
    super(props);
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
                        <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Notification</Text>
                    </View>
                    </View>
                    <View style={{marginRight:15}}>
                        
                    </View>
                </View>
            </View>
      </View>
    );
  }
}

export default ToolbarCustom;