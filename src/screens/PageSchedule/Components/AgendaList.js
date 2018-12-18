import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'

const propTypes = {
    item: PropTypes.object
}

class AgendaList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('ScheduleEdit')}
                >
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{marginLeft:5}}>
                            <Text style={{color:'#2E313C',fontSize:15}}>{this.props.item.judul}</Text>
                            <Text style={{color:"#2E313C",fontSize:11,opacity:0.5}}>{this.props.item.note}</Text>
                        </View>
                        <View style={{marginRight:5}}>
                            <Text style={{color:'#F00A6B',fontSize:17,textAlign:'right'}}>{this.props.item.tanggal_mulai.substring(11,16)}</Text>
                            <Text style={{color:'#F00A6B',opacity:0.5,fontSize:11,textAlign:'right'}}>{this.props.item.tanggal_mulai.substring(0,9)}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

AgendaList.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft:15,
        marginRight: 15,
        flex: 1,
        borderRadius: 10,
        borderLeftColor: '#FFCD00',
        borderLeftWidth: 10,
        backgroundColor: '#ffffff',
        padding: 10,
    }
});

export default AgendaList;
