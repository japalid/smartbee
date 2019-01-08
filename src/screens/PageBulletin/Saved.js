import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

class Saved extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        item1: [
        ],
        item2: [
        ]
    }
  }

  componentDidMount() {
  }

  _render = ({item,index}) => {
      return(
        <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:10,flex:1,
        width: '100%',
        height: 'auto'}}>
            <TouchableOpacity
            style={{borderRadius:15,width:'100%'}}
                onPress={()=>this._navigate(item.key)}
            >
                <View style={{borderRadius:15}}>
                    <Image source={item.image} style={{borderRadius:15,width:'100%'}}/>
                </View>
            </TouchableOpacity>
            <Text style={{fontSize:10,color:'#464646',marginLeft:5}}>{item.desc}</Text>
        </View>
      );
  }

  _navigate(key) {
    this.props.route.navigation.navigate("DetailBulletin");
    }

  render() {
      
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:"#FFFFFF"}}>
      <View style={{flexDirection:'row',paddingVertical: 10,
      paddingHorizontal: 5,flex:1}}>
        <FlatList
            style={{margin:3}}
            data={ this.state.item1 }
            renderItem={ this._render }
            keyExtractor={(item, index) => item.key+""}
            />
        <FlatList
            style={{margin:3}}
            data={ this.state.item2 }
            renderItem={ this._render }
            keyExtractor={(item, index) => item.key+""}
            />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
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

export default Saved;