import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, Platform, NetInfo, Alert, AsyncStorage } from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { onSignIn } from "../auth";
var srcImage = require("../images/background.png");
var srcLogo = require("../images/smartbee.png");
import api from "../networks/api";
import * as request from "../networks/request";
import constants from '../networks/constants';
import LoadingIndicator from '../utils/LoadingIndicator';
import axios from 'axios';

class SignIn extends React.Component {

  static navigationOptions = {
    header: null ,
  };

  constructor(props) {
    super(props);
    this.state = {
			email: '',
			password: '',
			inValidPassword: false,
			inValidEmail: false
    }
    
    this.handleFirstConnectivityChange = this.handleFirstConnectivityChange.bind(this);
  }

  handleFirstConnectivityChange(isConnected) {
    if(isConnected){
        console.log('you are connected');
    }else{
        console.log('you are not connected');
    }
}

componentDidMount(){
    NetInfo.isConnected.addEventListener(
        'connectionChange',
        this.handleFirstConnectivityChange
    );
}

componentWillUnmount(){
NetInfo.isConnected.removeEventListener(
      'connectionChange',
    this.handleFirstConnectivityChange
  );
}

_login = async () =>{
  try{

    // NetInfo.isConnected.fetch().then(async (isConnected) => {
    //         if(isConnected){

        email = this.state.email;
        password = this.state.password;

        if(this._isEmailValid(email) && this._isPasswordValid(password)){
          
          this._loadingIndicator._show();
          
          let loginResp = await request.login(email,password);
          if(loginResp.status==200) {
            var res = JSON.parse(loginResp._bodyText);
            let userDetail = await request.userDetail(res.token);
            if(userDetail.status==200) {
              this._loadingIndicator._hide();
              var token = res.token;
              var user = JSON.parse(userDetail._bodyText);
              AsyncStorage.setItem("user-id",String(user.id));
              AsyncStorage.setItem("user-name",user.nama);
              AsyncStorage.setItem("user-foto",user.foto);
              AsyncStorage.setItem("user-jk",user.jenis_kelamin);
              onSignIn(token).then(()=>this.props.navigation.navigate('SignedIn'));
            }
          }else {
            this._loadingIndicator._hide();
            console.warn('gaggal');
          }


        }

          // let resp = await API._login(email, password);
          // console.log('resp: ',resp);
          // if(resp.success !== undefined){

          //   let token = resp.success.token;

          //   SInfo.setItem('isLogin', 'true', {}).then((value) => console.log('value: ',value));
          //   SInfo.setItem('email', email, {}).then((value) => console.log('value: ',value));
          //   SInfo.setItem('token', token, {}).then((value) => console.log('value: ',value));

          //   this._loadingIndicator._hide();

          //   setTimeout(() => {this._gotoDashboardScreen()}, 100)

          // }else{

          //   this._loadingIndicator._hide();

          //   setTimeout(() => {
          //     Alert.alert(	
          //               'Ops..',
          //               'email or password is incorrect',
          //               [
          //                   {text: 'OK', onPress: () => {this.setState({ inValidEmail: true })}},
          //               ],
          //               { cancelable: false }
          //           )
          //   }, 100)
          // }
        // }
        //     }else{
              
        //       this._loadingIndicator._hide();

        //       setTimeout(() => {
        //   Alert.alert(	
        //             'Internet Connection Info',
        //               'You are not connected to internet\nplease check your internet connection and try again ;)',
        //               [   
        //                   {text: 'Cancel', onPress: () => {}},
        //                   {text: 'Try again', onPress: () => this._login()}
        //               ],
        //               { cancelable: true }
        //         )
        // }, 100)
        //     }
        // });
  }catch(err){
    this._loadingIndicator._hide();
    Alert.alert(
              'Ops..',
              ''+err,
              [
                  {text: 'OK', onPress: () => {this.setState({ inValidEmail: true })}},
              ],
              { cancelable: false }
          )
  }
}

_isEmailValid(email){
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
  }
  else if(email.length == 0){
    Alert.alert(
          'Ops..',
          'email cannot be empty',
          [
              {text: 'OK', onPress: () => {this.setState({ inValidEmail: true })}},
          ],
          { cancelable: false }
      )

      return false;
  }
  else{
      Alert.alert(
          'Ops..',
          'invalid email address format',
          [
              {text: 'OK', onPress: () => {this.setState({ inValidEmail: true })}},
          ],
          { cancelable: false }
      )

      return false;
  }
}

_isPasswordValid(){
  if(this.state.password.length == 0){
      Alert.alert(
          'Ops..',
          'password cannot be empty',
          [
              {text: 'OK', onPress: () => {this.setState({inValidPassword: true})}},
          ],
          { cancelable: false }
      )

      return false;
  }else{
      return true;
  }
}

  render() {
    return (
      <ScrollView>
        <LoadingIndicator 
              ref={(ref) => this._loadingIndicator = ref} />

        <ImageBackground source={srcImage} style={styles.imageBackground} imageStyle={{resizeMode:'cover'}}>
        
                <View style={styles.container}>

                  <View style={styles.viewLogo}>
                    <Image source={srcLogo} style={styles.imageLogo} />
                    <View style={{marginBottom:70}}>
                      <Text style={styles.textTitle}>Smartbee</Text>
                      <Text style={styles.textSubTitle}>Inside Every Child is Rainbow Waiting to Shine</Text>
                    </View>
                  </View>

                  <View style={{width:'100%'}}>
                    <FormLabel style={styles.textLabel}>Username</FormLabel>
                    <FormInput containerStyle={{ width: "85%" }} inputStyle={{width:'100%'}} underlineColorAndroid="#707070" placeholder="Enter your username" onChangeText={(email) => this.setState({email, inValidEmail: false})}
				            value={this.state.email} keyboardType={'email-address'} autoCapitalize={'none'} />
                    <FormLabel style={styles.textLabel}>Password</FormLabel>
                    <FormInput containerStyle={{ width: "85%" }} inputStyle={{width:'100%'}} underlineColorAndroid="#707070" secureTextEntry placeholder="Enter your password" onChangeText={(password) => this.setState({password, inValidPassword: false})}
                    value={this.state.password} autoCapitalize={'none'} />
                    <Text style={styles.textForgot}>Forgot Password?</Text>
                  </View>

                  <Button
                    title="Login"
                    buttonStyle={styles.btnDefault}
                    titleStyle={styles.textButton}
                    onPress={() => this._login()}
                  />
                  
                  <View style={styles.viewAccount}>
                    <Text style={styles.labelDontHave}>You don't have an account?</Text>
                    <Text onPress={() => {this.signUp()}} style={styles.labelSignUp}>sign up</Text>
                  </View>

                </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

//onSignIn().then(() => this.props.navigation.navigate("SignedIn"))

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20
  },
  viewLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (Platform.OS) == 'ios' ? 40 : 0
  },
  imageLogo: {
    width: 77,
    height: 75,
    marginBottom: 10
  },
  textTitle: {
    fontSize: 36
  },
  textSubTitle: {
    color: '#707070',
    fontSize: 8
  },
  textLabel: {
    color: '#8B8C92',
    fontSize: 13
  },
  textInput: {
    fontSize: 18,
    color: '#2E313C',
    borderBottomColor: '#707070',
    borderWidth: 2,
  },
  btnDefault: {
    backgroundColor: '#B988E6',
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 20
  },
  textButton: {
    color: '#ffffff',
    fontSize: 16
  },
  textForgot: {
    textAlign: 'right', 
    color: '#C9C9CC',
    fontSize: 13,
    marginTop: 10,
    marginRight: 38,
    marginBottom: 30,
    textDecorationLine: 'underline'
  },
  viewAccount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30
  },
  labelDontHave: {
    fontSize: 13,
    color: '#C9C9CC',
  },
  labelSignUp: {
    color: '#AB8CC8',
    fontSize: 13,
  }
});

export default SignIn;