import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
import { FlatList } from 'react-native-gesture-handler';
var srcAvatar = require('../../../images/studentexample.png');

const propTypes = {
    item: PropTypes.array
}

class StudentItems extends React.Component {

    constructor(props) {
        super(props)
    }

    _renderItem = ({item}) => (
        <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate("DailyReport")}
        >
            <View style={{flexDirection:'row',borderBottomColor:"#707070",borderBottomWidth:0.2,alignItems:'center',marginTop:15,paddingBottom:10}}>
                <Image source={srcAvatar} style={{width:50,height:50,marginLeft:30}}></Image>
                <Text style={{color:"#2E313C",fontSize:13,marginLeft:10}}>{item.name}</Text>
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

StudentItems.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default StudentItems;
