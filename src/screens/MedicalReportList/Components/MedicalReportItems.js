import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
var srcIcon = require('../../../images/icon/incidenticonlist.png');
var srcExample = require('../../../images/dailyreportexample.png');

const propTypes = {
    item: PropTypes.object
}

class MedicalReportItems extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <Image source={srcIcon} style={{width:19,height:19}} />
                    <View style={{marginLeft:25}}>
                        <Text style={{color:'#3D4356',fontSize:15,marginBottom:10}}>{this.props.item.title}</Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("ImageZoom")}>
                            <Image source={srcExample} style={{borderRadius:10,width:151,height:151,marginBottom:20}}/>
                        </TouchableOpacity>
                        <Text style={{color:"#3D4356",fontSize:15,marginBottom:10}}>{this.props.item.description}</Text>
                        <Text style={{color:'#3D4356',fontSize:11}}>{this.props.item.date}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

MedicalReportItems.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    }
});

export default MedicalReportItems;
