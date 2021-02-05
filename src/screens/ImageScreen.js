import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text>Image Screen</Text>

      <ImageDetail
        title="beach"
        image={require("../../assets/beach.jpg")}
        score={9}
      />
      <ImageDetail
        title="forest"
        image={require("../../assets/forest.jpg")}
        score={10}
      />
      <ImageDetail
        title="mountain"
        image={require("../../assets/mountain.jpg")}
        score={8}
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
