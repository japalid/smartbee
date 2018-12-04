import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types'
var srcIcon = require('../../../images/icon/pottyiconlist.png');
var srcExample = require('../../../images/dailyreportexample.png');

const propTypes = {
    item: PropTypes.object
}

class PottyReportItems extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: true
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <Image source={srcIcon} style={{width:19,height:19}} />
                    <View style={{marginLeft:25}}>
                        <Text style={{color:'#3D4356',fontSize:15,marginBottom:10}}>{this.props.item.title}</Text>
                        <CheckBox
                            containerStyle={{borderWidth:0,borderColor:'transparent',backgroundColor:'transparent'}}
                            title='Diapers'
                            checked={this.state.checked}
                        />
                        <CheckBox
                            containerStyle={{borderWidth:0,borderColor:'transparent',backgroundColor:'transparent'}}
                            title='Wipers'
                            checked={this.state.checked}
                        />
                        <Text style={{color:'#3D4356',fontSize:11}}>{this.props.item.date}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

PottyReportItems.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    }
});

export default PottyReportItems;
