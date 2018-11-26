import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

class Kindness extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Kindness</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

export default Kindness;