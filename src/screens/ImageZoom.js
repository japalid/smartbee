import React from "react";
import { View, Image, StyleSheet } from "react-native";
var srcImage = require("../images/background.png");

class ImageZoom extends React.Component {

  static navigationOptions = {
    header: null ,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={srcImage} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  image: {
      flex: 1
  }
});

export default ImageZoom;