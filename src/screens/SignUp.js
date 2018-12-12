import React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
var srcImage = require("../images/background.png");

class SignUp extends React.Component {

  static navigationOptions = {
    header: null ,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  signIn() {
    this.props.navigation.pop();
  }

  render() {
    return (
      <ScrollView>
        <ImageBackground source={srcImage} style={styles.imageBackground}>
        
                <View style={styles.container}>

                  <View style={{width:'100%'}}>
                    <FormLabel style={styles.textLabel}>Username</FormLabel>
                    <FormInput containerStyle={{ width: "85%" }} inputStyle={{width:'100%'}} underlineColorAndroid="#707070" placeholder="Enter your username" />
                    <FormLabel style={styles.textLabel}>Password</FormLabel>
                    <FormInput containerStyle={{ width: "85%" }} inputStyle={{width:'100%'}} underlineColorAndroid="#707070" secureTextEntry placeholder="Enter your password" />
                    <FormLabel style={styles.textLabel}>Nama Guru</FormLabel>
                    <FormInput containerStyle={{ width: "85%" }} inputStyle={{width:'100%'}} underlineColorAndroid="#707070" placeholder="Enter your password" />
                    <FormLabel style={styles.textLabel}>No Telp</FormLabel>
                    <FormInput containerStyle={{ width: "85%" }} inputStyle={{width:'100%'}} underlineColorAndroid="#707070" placeholder="Enter your password" />
                    <FormLabel style={styles.textLabel}>Sekolah</FormLabel>
                    <FormInput containerStyle={{ width: "85%" }} inputStyle={{width:'100%'}} underlineColorAndroid="#707070" placeholder="Enter your password" />
                    <FormLabel style={styles.textLabel}>Gender</FormLabel>
                    <FormInput containerStyle={{ width: "85%" }} inputStyle={{width:'100%'}} underlineColorAndroid="#707070" placeholder="Enter your password" />
                    
                  </View>

                  <Button
                  style={{marginTop:10}}
                    title="Continue"
                    buttonStyle={styles.btnDefault}
                    titleStyle={styles.textButton}
                    onPress={() => {
                      onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
                    }}
                  />
                  
                  <View style={styles.viewAccount}>
                    <Text style={styles.labelDontHave}>You have an account?</Text>
                    <Text onPress={() => {this.signIn()}} style={styles.labelSignUp}>sign in</Text>
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

export default SignUp;