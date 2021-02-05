import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to the demo app</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => props.navigation.navigate("Components")}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
