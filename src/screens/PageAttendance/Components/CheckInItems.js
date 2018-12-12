import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import PropTypes from 'prop-types'
import { FlatList } from 'react-native-gesture-handler';
var srcAvatar = require('../../../images/studentexample.png');

const propTypes = {
    item: PropTypes.array
}

class CheckInItems extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }


  shouldComponentUpdate() {
    return false
  }

    _renderItem = ({item}) => (
        <TouchableOpacity>
            <View style={{flexDirection:'row',borderBottomColor:"#707070",borderBottomWidth:0.2,alignItems:'center',marginTop:15,paddingBottom:10}}>
                <View style={{flexDirection:'column',alignItems:'center',marginLeft:30}}>
                    <Image source={srcAvatar} style={{width:50,height:50}}></Image>
                    <Text numberOfLines={1} style={{color:"#2E313C",fontSize:13,width:60}}>{item.name}</Text>
                </View>
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row',marginLeft:25}}>
                        <TouchableOpacity style={{backgroundColor:'#3A9EC2',borderColor:'#DBDBDB',borderWidth:1,borderRadius:10,paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,marginRight:10}}>
                            <Text style={{fontSize:15}}>YES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => {
                            this.props.modalShow(true);
                          }}
                        style={{backgroundColor:'#FFFFFF',borderColor:'#DBDBDB',borderWidth:1,borderRadius:10,paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10}}>
                            <Text style={{fontSize:15}}>NO</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',marginLeft:25,marginTop:5}}>
                        <Text
                        style={{marginRight:10}}>Time</Text>
                        <TouchableOpacity
                        onPress={this._showDateTimePickerFrom}
                        >
                            <Text style={{color:'#B88383'}}>Today 08.02 am</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback>
                    <View style={{justifyContent:'center'}}>
                        <FlatList
                            data={this.props.item}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => item.id+""}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

CheckInItems.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default CheckInItems;
