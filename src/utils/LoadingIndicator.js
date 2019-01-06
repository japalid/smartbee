import React, { Component } from 'react'
import { View, Text, NetInfo, Alert, Modal } from 'react-native'
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

import constants from "../networks/constants";

export default class LoadingIndicator extends Component{
	constructor(props){
        super(props);
        this.state = {
            isVisible: false
        }
    }

    render(){
        if(this.state.isVisible){
            return(
                this.renderLoading()
            )
        }else{
            return null;
        }
    }

    renderLoading(){
        let ket = (this.props.infoLoading == undefined ? "" : this.props.infoLoading)
        return(
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Modal
                    animationType={"fade"}
                    visible={this.state.isVisible}
                    transparent={true}
                    onRequestClose={() => {}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.15)'}}>
                        <UIActivityIndicator 
                          color={constants.color.purple} 
                          ket={ket}
                        />
                    </View>
                </Modal>
            </View>

        );
    }

    _show(){
        this.setState({isVisible: true});
    }

    _hide(){
        this.setState({isVisible: false});
    }
}