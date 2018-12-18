import React from "react";
import { View, StatusBar } from "react-native";

class StatusBarDefault extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
          <StatusBar backgroundColor="#AD90CA"/>
      </View>
    );
  }
}

export default StatusBarDefault;