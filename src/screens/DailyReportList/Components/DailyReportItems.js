import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
import {scale, verticalScale, moderateScale, customScaleAndroid, customScale} from '../../../utils/Scale'
var srcIconFood = require('../../../images/icon/foodicon.png');
var srcExample = require('../../../images/dailyreportexample.png');

const propTypes = {
    item: PropTypes.object
}

class DailyReportItems extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <Image source={srcIconFood} style={{width:moderateScale(19),height:moderateScale(19)}} />
                    <View style={{marginLeft:25}}>
                        <Text style={{color:'#3D4356',fontSize:15,marginBottom:10}}>{this.props.item.title}</Text>

                            <ImageBackground source={srcExample} style={{width:moderateScale(151),height:moderateScale(151),alignItems:'center'}}>
                                <TouchableOpacity style={{position:'absolute',bottom:0}}>
                                    <View style={{flexDirection:'row',backgroundColor:'#AC8DC9',paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,alignItems:'center',justifyContent:'center',borderTopRightRadius:10,borderTopLeftRadius:10}}>
                                        <Text style={{color:'#fff',marginRight:moderateScale(2),fontSize:13}}>Chat</Text>
                                        <Image style={{marginLeft:moderateScale(2)}} source={require("../../../images/icon/reply.png")} />
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        <Text style={{color:"#3D4356",fontSize:15,marginBottom:10}}>{this.props.item.description}</Text>
                        <Text style={{color:'#3D4356',fontSize:11}}>{this.props.item.date}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

DailyReportItems.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    }
});

export default DailyReportItems;
