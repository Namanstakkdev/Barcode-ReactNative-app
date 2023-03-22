import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import config from "../../config/config.json";
import data from "../../config/data.json";

const BarcodeComponentScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not Yet Scanned");

  const postDataToServer = ({ type, data }) => {
    if (!{ type, data }) {
      console.log("Arguments are must for POST requests");
    } else {
      axios
        .post(config.URL_ADDRESS, {
          type: `${type}`,
          data: `${data}`,
        })
        .then((response) =>
          console.log(`Inserted ${JSON.stringify(response.data)}`)
        )
        .catch((err) => console.log(err));
    }
  };

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Type: " + type + "\nData: " + data);
    postDataToServer({ type, data });
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 600, width: 600 }}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && (
        <Button
          title={"Scan again?"}
          onPress={() => setScanned(false)}
          color="blue"
        />
      )}

      <Text>This is the Data in Database</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text> {item.id}</Text>
              <Text> {item.title}</Text>
              <Text> {item.data}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "Green",
  },
});

export default BarcodeComponentScreen;
