import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import CheckOutItems from './CheckOutItems';
import PropTypes from 'prop-types'

const propTypes = {
    item: PropTypes.object
}

class CheckOut extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isSelected: false,
            navigation: this.props.navigation
        }
    }

    _renderCheckOuts = () => ( <CheckOutItems item={this.props.item.data} navigation={this.state.navigation} /> );

    _collapsibleProc = () => {
        this.setState((prevState,prevProps) => ({
            isSelected: !prevState.isSelected
        }))
    }

    render() {
        const {isSelected} = this.state
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._collapsibleProc}>
                    <View style={{justifyContent:'center'}}>
                        <View style={{borderBottomColor:'#707070',borderBottomWidth:0.8,marginLeft:20,marginRight:20,marginTop:30}}>
                            <Text style={{color:'#B08485',fontSize:10,marginBottom:5,marginLeft:15}}>{this.props.item.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {isSelected && this._renderCheckOuts()}
            </View>
        );
    }
}

CheckOut.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default CheckOut;
