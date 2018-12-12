import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
import * as emoticons from 'react-native-emoticons';
var srcIcon = require('../../../images/icon/notificationlisticon.png');

const propTypes = {
    item: PropTypes.object
}

class NotificationItems extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row',backgroundColor:'#fff',borderRadius:15,padding:15,margin:5,alignItems:'center'}}>
                    <Image source={srcIcon} style={{width:28,height:28}} />
                    <View style={{marginLeft:10,flexDirection:'column',flex:1}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{fontSize:16,color:'#ACACAC'}}>{this.props.item.title}</Text>
                            <Text style={{color:'#181743'}}>{this.props.item.date}</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View>
                                <Text style={{color:'#535353'}}>{(this.props.item.subtitle.length > 30)?this.props.item.subtitle.substr(0,20)+"...":emoticons.stringify(this.props.item.subtitle)}</Text>
                            </View>
                            <View>
                                <Text style={{color:'#181743'}}>{this.props.item.time}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

NotificationItems.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default NotificationItems;
