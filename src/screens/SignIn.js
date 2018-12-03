import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, Platform } from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { onSignIn } from "../auth";
var srcImage = require("../images/background.png");
var srcLogo = require("../images/smartbee.png");

class SignIn extends React.Component {

  static navigationOptions = {
    header: null ,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  signUp() {
    this.props.navigation.push('SignUp');
  }

  render() {
    return (
      <ScrollView>
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
                    <FormInput containerStyle={{ width: "85%" }} inputStyle={{width:'100%'}} underlineColorAndroid="#707070" placeholder="Enter your username" />
                    <FormLabel style={styles.textLabel}>Password</FormLabel>
                    <FormInput containerStyle={{ width: "85%" }} inputStyle={{width:'100%'}} underlineColorAndroid="#707070" secureTextEntry placeholder="Enter your password" />
                    <Text style={styles.textForgot}>Forgot Password?</Text>
                  </View>

                  <Button
                    title="Login"
                    buttonStyle={styles.btnDefault}
                    titleStyle={styles.textButton}
                    onPress={() => {
                      onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
                    }}
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