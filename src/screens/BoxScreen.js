import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.boxStyleOne}></View>
      <View style={styles.boxStyleTwo}></View>
      <View style={styles.boxStyleThree}></View>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
  },

  boxStyleOne: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  boxStyleTwo: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    alignSelf: "flex-end",
  },
  boxStyleThree: {
    height: 50,
    width: 50,
    backgroundColor: "blue",
  },
});
