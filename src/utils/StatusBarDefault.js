import React from "react";
import { View, StatusBar, Platform } from "react-native";

class StatusBarDefault extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
          <StatusBar backgroundColor="#AD90CA" barStyle="light-content" style={{flex: 1,}}/>
      </View>
    );
  }
}

export default StatusBarDefault;