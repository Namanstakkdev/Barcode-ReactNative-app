import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import barcodeScanner from "./src/screens/BarcodeComponentScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Barcode: barcodeScanner,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
