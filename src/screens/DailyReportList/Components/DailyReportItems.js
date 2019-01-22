import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import PropTypes from 'prop-types'
import {scale, verticalScale, moderateScale, customScaleAndroid, customScale} from '../../../utils/Scale'
var srcIconFood = require('../../../images/icon/foodicon.png');
var srcExample = require('../../../images/dailyreportexample.png');
import constants from "../../../networks/constants";

const propTypes = {
    item: PropTypes.object
}

class DailyReportItems extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading : false,
            data : []
        }
    }

    componentDidMount() {
        this._generateList(this.props.item);
    }

    _generateList(items) {
        const d = []
        Object.keys(items).map((key,index) => {
            if(items[key].length > 0) {
                items[key].map((val)=>{
                    d.push({
                        date: val.date,
                        detail: val.detail,
                        note: val.note,
                        foto: val.foto,
                        nap_start: val["nap-start"],
                        nap_end: val["nap-end"]
                    })
                })
                this.setState({loading:false,data:d})
            }
        })
    }

    render() {
        if(this.state.loading){
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator size="large" color={constants.color.purple} />
                </View>
            )
        }else {
            return (
                    this.state.data.map((item,index)=> (
                        
                        <View style={styles.container} key={index}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={srcIconFood} style={{width:moderateScale(19),height:moderateScale(19)}} />
                                <View style={{marginLeft:25}}>
                                    <Text style={{color:'#3D4356',fontSize:15,marginBottom:10}}>{item.detail}</Text>
                                    <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    >
                                        {
                                            item.foto!=null?
                                                item.foto.map(items=>(
                                                <View key={items.id} style={{marginRight:10}}>
                                                    <ImageBackground source={{uri:items.image}} style={{width:moderateScale(151),height:moderateScale(151),alignItems:'center'}} imageStyle={{borderRadius:10}}>
                                                        <TouchableOpacity style={{position:'absolute',bottom:0}}>
                                                            <View style={{flexDirection:'row',backgroundColor:'#AC8DC9',paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,alignItems:'center',justifyContent:'center',borderTopRightRadius:10,borderTopLeftRadius:10}}>
                                                                <Text style={{color:'#fff',marginRight:moderateScale(2),fontSize:13}}>Chat</Text>
                                                                <Image style={{marginLeft:moderateScale(2)}} source={require("../../../images/icon/reply.png")} />
                                                            </View>
                                                        </TouchableOpacity>
                                                    </ImageBackground>
                                                    
                                                </View>
                                            )):(
                                                <View>
                                                    <ImageBackground source={srcExample} style={{width:moderateScale(151),height:moderateScale(151),alignItems:'center'}}>
                                                        <TouchableOpacity style={{position:'absolute',bottom:0}}>
                                                            <View style={{flexDirection:'row',backgroundColor:'#AC8DC9',paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,alignItems:'center',justifyContent:'center',borderTopRightRadius:10,borderTopLeftRadius:10}}>
                                                                <Text style={{color:'#fff',marginRight:moderateScale(2),fontSize:13}}>Chat</Text>
                                                                <Image style={{marginLeft:moderateScale(2)}} source={require("../../../images/icon/reply.png")} />
                                                            </View>
                                                        </TouchableOpacity>
                                                    </ImageBackground>

                                                </View>
                                            )
                                            
                                        }
                                        </ScrollView>
                                        {
                                            item.nap_start ? (
                                                <View>
                                                    <Text style={{color:"#3D4356",fontSize:15,marginBottom:10}}>From : {item.nap_start}</Text>
                                                    <Text style={{color:"#3D4356",fontSize:15,marginBottom:10}}>To : {item.nap_end}</Text>
                                                </View>
                                            ):(
                                                <Text style={{color:"#3D4356",fontSize:15,marginBottom:10}}>{item.note}</Text>
                                            )
                                        }
                                        
                                        <Text style={{color:'#3D4356',fontSize:11}}>{item.date}</Text>
                                        
                                </View>
                            </View>
                        </View>
                    ))
            );
        }
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
