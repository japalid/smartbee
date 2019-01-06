import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import PropTypes from 'prop-types'
import { FlatList } from 'react-native-gesture-handler';
import {scale, verticalScale, moderateScale, customScaleAndroid, customScale} from '../../../utils/Scale';
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
        <View>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:15,paddingBottom:10}}>
                <View style={{flexDirection:'column',alignItems:'center',marginLeft:15,justifyContent:'center',marginRight:15}}>
                    <View style={{alignItems:'center',marginBottom:10}}>
                        <Image source={{uri:item.foto}} style={{width:50,height:50,borderRadius:25,alignItems:'center'}}></Image>
                    </View>
                    <Text style={{color:"#2E313C",fontSize:13}}>{item.nama}</Text>
                </View>
                <View style={{flexDirection:'column',borderBottomColor:"rgba(112,112,112,0.7)",borderBottomWidth:0.2,paddingBottom:10,paddingRight:15}}>
                    <View style={{flexDirection:'row',marginLeft:25,}}>
                        <TouchableOpacity style={{width:moderateScale(87),backgroundColor:'#3A9EC2',borderColor:'#DBDBDB',borderWidth:1,borderRadius:10,paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,marginRight:10,}}>
                            <View style={{alignItems:'center'}}>
                                <Text style={{fontSize:15,color:'#fff'}}>YES</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => {
                            this.props.modalShow(true);
                          }}
                        style={{width:moderateScale(87),backgroundColor:'#FFFFFF',borderColor:'#DBDBDB',borderWidth:1,borderRadius:10,paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontSize:15,color:'#2E313C'}}>NO</Text>
                        </View>
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
        </View>
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
