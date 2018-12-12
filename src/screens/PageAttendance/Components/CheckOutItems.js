import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
import { FlatList } from 'react-native-gesture-handler';
import DateTimePicker from 'react-native-modal-datetime-picker';
var srcAvatar = require('../../../images/studentexample.png');

const propTypes = {
    item: PropTypes.array
}

class CheckOutItems extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isDateTimePickerVisibleFrom: false,
        }
    }

    _showDateTimePickerFrom = () => this.setState({ isDateTimePickerVisibleFrom: true });
 
    _hideDateTimePickerFrom = () => this.setState({ isDateTimePickerVisibleFrom: false });
   
    _handleDatePickedFrom = (date) => {
      this._hideDateTimePickerFrom();
    };

    _renderItem = ({item}) => (
        <TouchableOpacity>
            <View style={{flexDirection:'row',borderBottomColor:"#707070",borderBottomWidth:0.2,alignItems:'center',marginTop:15,paddingBottom:10}}>
                <View style={{flexDirection:'column',alignItems:'center',marginLeft:30}}>
                    <Image source={srcAvatar} style={{width:50,height:50}}></Image>
                    <Text numberOfLines={1} style={{color:"#2E313C",fontSize:13,width:60}}>{item.name}</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:25}}>
                    <Text
                    style={{marginRight:10}}>Time</Text>
                    <TouchableOpacity
                    onPress={this._showDateTimePickerFrom}
                    >
                        <Text style={{color:'#B88383'}}>Today 08.02 am</Text>
                    </TouchableOpacity>
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
                <DateTimePicker
                    is24Hour={false}
                    datePickerModeAndroid={"spinner"}
                    mode={"time"}
                    isVisible={this.state.isDateTimePickerVisibleFrom}
                    onConfirm={this._handleDatePickedFrom}
                    onCancel={this._hideDateTimePickerFrom}
                />
            </View>
        );
    }
}

CheckOutItems.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default CheckOutItems;
