import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Text style={styles.text}>Welcome to the demo app</Text>

      <Button
        title="Go to Components Demo"
        onPress={() => navigate("Components")}
      />

      <Button title="Go to List Demo" onPress={() => navigate("List")} />

      <Button
        title="Go to Image Screen Demo"
        onPress={() => navigate("Image")}
      />

      <Button
        title="Go to Counter Screen Demo"
        onPress={() => navigate("Counter")}
      />

      <Button
        title="Go to Color Screen Demo"
        onPress={() => navigate("Color")}
      />

      <Button
        title="Go to Square Screen Demo"
        onPress={() => navigate("Square")}
      />
      <Button title="Go to Text Screen Demo" onPress={() => navigate("Text")} />
      <Button title="Go to Box Screen Demo" onPress={() => navigate("Box")} />

      {/* <TouchableOpacity onPress={() => navigation.navigate("List")}> */}
      {/* <Text>Go to list demo</Text> */}
      {/* </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
