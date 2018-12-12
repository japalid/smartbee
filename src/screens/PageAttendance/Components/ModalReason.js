import React from "react";
import {
 AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
 Platform, TouchableHighlight, Dimensions, TextInput
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Modal from 'react-native-modalbox';

var screen = Dimensions.get('window');

export default class ModalReason extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    showModalReason = () => {
        this.refs.myModal.open();
    }

    render() {
        return (
            <Modal 
                ref={"myModal"}
                style={{
                    borderRadius: 15,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 'auto'
                }}
                position='center'
                backdrop={true}
                onClosed={()=>{
                    
                }}
            >
                    <View style={{backgroundColor:'#AB8CC8',borderTopLeftRadius:15,borderTopRightRadius:15,padding:20}}>
                        <Text style={{color:'#FFFFFF',fontSize:15}}>Select Reason</Text>
                    </View>
                    <View>
                        <CheckBox
                            containerStyle={{borderWidth:0,borderColor:'transparent',backgroundColor:'transparent'}}
                            title='Sick'
                            checked={this.state.checked}
                        />
                        <CheckBox
                            containerStyle={{borderWidth:0,borderColor:'transparent',backgroundColor:'transparent'}}
                            title='Doctor Appointment'
                            checked={this.state.checked}
                        />
                        <CheckBox
                            containerStyle={{borderWidth:0,borderColor:'transparent',backgroundColor:'transparent'}}
                            title='Vacation'
                            checked={this.state.checked}
                        />
                        <CheckBox
                            containerStyle={{borderWidth:0,borderColor:'transparent',backgroundColor:'transparent'}}
                            title='Parent Option'
                            checked={this.state.checked}
                        />
                        <CheckBox
                            containerStyle={{borderWidth:0,borderColor:'transparent',backgroundColor:'transparent'}}
                            title='Transportation Issue'
                            checked={this.state.checked}
                        />
                        <CheckBox
                            containerStyle={{borderWidth:0,borderColor:'transparent',backgroundColor:'transparent'}}
                            title='Other'
                            checked={this.state.checked}
                        />
                    </View>
            </Modal>
        );
    }
}