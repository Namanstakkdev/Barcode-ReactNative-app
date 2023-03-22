import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  const name = "Developer";
  const greetings = `Hi There! ${name}`;

  return (
    <View>
      <Text style={styles.textStyle}>{greetings}</Text>
      <Text style={styles.subHeaderStyle}>Home Page.</Text>

      <Button
        onPress={() => props.navigation.navigate("Barcode")}
        title="Go To Barcode Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  subHeaderStyle: {
    fontSize: 25,
  },
});

export default HomeScreen;
