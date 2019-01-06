import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
 
class RadioButton extends React.Component
{
    constructor()
    {
        super();
    }
 
    render()
    {
        return(
            <TouchableOpacity onPress = { this.props.onClick } activeOpacity = { 0.8 } style = { [
                    styles.radioButton,
                    (this.props.button.selected)?{backgroundColor:'#FEC77D'} : {backgroundColor:"#F8F8FA"}
                ] }>
                <View>
                    <Text style = {[styles.label,(!this.props.button.selected)?{color:'#878787'}:{color:'#FFFFFF'}]}>{ this.props.button.label }</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 25
        },
     
        radioButton:
        {
            alignItems: 'center',
            justifyContent: 'center',
            flex:1,
            borderRadius: 20,
            margin: 0,
            padding:10
        },
     
        radioButtonHolder:
        {
            borderRadius: 50,
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center'
        },
     
        radioIcon:
        {
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center'
        },
     
        label:
        {
            fontSize: 15,
            alignItems:'center',
        },
     
        selectedTextHolder:
        {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            padding: 15,
            backgroundColor: 'rgba(0,0,0,0.6)',
            justifyContent: 'center',
            alignItems: 'center'
        },
     
        selectedText:
        {
            fontSize: 18,
            color: 'white'
        }
    });

export default RadioButton;